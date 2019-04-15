class Suscon extends Interlocking_2_Trk_2_CX {

	constructor() {
		super();
		this.Route_Lined_Trk_1 = false;
		this.Route_Lined_Trk_2 = false;
		this.Route_CrossOver = false;

		this.Route_sig_2w = null;
		this.Route_sig_2e = null;
		this.Route_sig_4w = null;
		this.Route_sig_4e = null;

		this.sig_2w = false;
		this.sig_2e = false;
		this.sig_4w = false;
		this.sig_4e = false;

		this.sw_1 = false;
		this.sw_3 = false;

		// Switch #1 - Switch #2 - Sig 2W - Sig 2E - Sig 4W - Sig 4E - Tail 1 West - Tail 1 East - Tail 2 West - Tail 2 East
		super.set_members("suscon_SW_1_image", "suscon_SW_3_image", "suscon_2w_image", "suscon_2e_image", "suscon_4w_image", "suscon_4e_image", "suscon_1_west", "suscon_1_east", "suscon_2_west", "suscon_2_east");
	}

	check_route(Sig_Num) {
		if (Sig_Num === "2w") {
			if (this.sw_1 === false) {
				if (this.sw_3 === false) {
					return true;
				}
				else {
					return true;
				}
			} 
			else {
				return false;
			}
		}
		else if (Sig_Num === "4w") {
			if (this.sw_3 === false) {
				if (this.sw_1 === false) {
					return true;
				}
				else {
					return true;
				}
			} 
			else {
				return false;
			}
		}
		if (Sig_Num === "2e") {
			if (this.sw_3 === false) {
				if (this.sw_1 === false) {
					return true;
				}
				else {
					return true;
				}
			} 
			else {
				return false;
			}
		}
		if (Sig_Num === "4e") {
			if (this.sw_1 === false) {
				if (this.sw_3 == false) {
					return true;
				}
				else {
					return true;
				}
			}
			else {
				return false;
			}
		}
	}

	Click_SW_1() {
		if (!this.Route_Lined_Trk_1 && !this.Route_Lined_Trk_2) {
			if (this.sw_1) {
				this.SW_1_image.src = super.CX_135();
				this.sw_1 = false;
			}
			else {
				this.SW_1_image.src = super.CX_135_R();
				this.sw_1 = true;
			}
		}
		else {

		}
	}

	Click_SW_3() {
		if (!this.Route_Lined_Trk_1 && !this.Route_Lined_Trk_2) {
			if (this.sw_3) {
				this.SW_3_image.src = super.CX_225();
				this.sw_3 = false;
			}
			else {
				this.SW_3_image.src = super.CX_225_R();
				this.sw_3 = true;
			}
		}
		else {

		}
	}

	Click_sig_2w() {
		if (this.sig_2w) {
			this.undo_Route(this.Route_sig_2w);
			this.sig_2w = false;
		}
		else {
			if (this.check_route("2w")) {
				if (this.sw_1 === false) {
					if (this.sw_3 === false) {
						super.line_1_Norm("West", "m_ridgewood_suscon_1", "m_suscon_mill_1");
						this.Route_sig_2w = new Route();
						this.Route_sig_2w.new_Route("West", "Mill", "Suscon", 1, 1, "m_ridgewood_suscon_1");
					}
					else {
						super.line_SW_3_R("West", "m_ridgewood_suscon_2", "m_suscon_mill_1");
						this.Route_sig_2w = new Route();
						this.Route_sig_2w.new_Route("West", "Mill", "Suscon", 1, 2, "m_ridgewood_suscon_2");
					}
				}
			}
		}
	}
}