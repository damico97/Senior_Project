class West_Secaucus extends Interlocking {

    constructor() {
        super();
        this.Route_Lined = false;

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
        
        this.SW_1_image = document.getElementById("westSecaucus_SW_1_image");
		this.SW_3_image = document.getElementById("westSecaucus_SW_3_image");

		this.Sig_2W_image = document.getElementById("westSecaucus_2w_image");
		this.Sig_2E_image = document.getElementById("westSecaucus_2e_image");
		this.Sig_4W_image = document.getElementById("westSecaucus_4w_image");
		this.Sig_4E_image = document.getElementById("westSecaucus_4e_image");

        this.trk_bridge = document.getElementById("westSecaucus_bridge");
		this.trk_1_w = document.getElementById("westSecaucus_1_west");
		this.trk_1_e = document.getElementById("westSecaucus_1_east");
		this.trk_2_w = document.getElementById("westSecaucus_2_west");
		this.trk_2_e = document.getElementById("westSecaucus_2_east");
    }

    Click_SW_1() {
		if (!this.Route_Lined_Trk_1 && !this.Route_Lined_Trk_2) {
			if (this.sw_1) {
				this.SW_1_image.src = super.SW_2_S();
				this.sw_1 = false;
			}
			else {
				this.SW_1_image.src = super.SW_2_S_R();
				this.sw_1 = true;
			}
		}
		else {

		}
	}

	Click_SW_3() {
		if (!this.Route_Lined_Trk_1 && !this.Route_Lined_Trk_2) {
			if (this.sw_3) {
				this.SW_3_image.src = super.SW_S_2();
				this.sw_3 = false;
			}
			else {
				this.SW_3_image.src = super.SW_S_2_R();
				this.sw_3 = true;
			}
		}
		else {

		}
	}
}