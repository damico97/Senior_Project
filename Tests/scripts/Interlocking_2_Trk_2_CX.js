class Interlocking_2_Trk_2_CX extends Interlocking {

	constructor() {
		super();
		this.SW_1_image = null;
		this.SW_3_image = null;

		this.Sig_2W_image = null;
		this.Sig_2E_image = null;
		this.Sig_4W_image = null;
		this.Sig_4E_image = null;

		this.trk_1_w = null;
		this.trk_1_e = null;
		this.trk_2_w = null;
		this.trk_2_e = null;
	}

	set_members(sw1, sw3, sig_2w, sig_2e, sig_4w, sig_4e, trk1_w, trk1_e, trk2_w, trk2_e) {
		this.SW_1_image = document.getElementById(sw1);
		this.SW_3_image = document.getElementById(sw3);

		this.Sig_2W_image = document.getElementById(sig_2w);
		this.Sig_2E_image = document.getElementById(sig_2e);
		this.Sig_4W_image = document.getElementById(sig_4w);
		this.Sig_4E_image = document.getElementById(sig_4e);

		this.trk_1_w = document.getElementById(trk1_w);
		this.trk_1_e = document.getElementById(trk1_e);
		this.trk_2_w = document.getElementById(trk2_w);
		this.trk_2_e = document.getElementById(trk2_e);
	}

	line_1_Norm(direction, next_block_west, next_block_east) {
		// Set Switches Images
		if (!this.Route_Lined_Trk_2) {
			this.SW_1_image.src = super.CX_135_Lined_Top();
			this.SW_3_image.src = super.CX_225_Lined_Top();
		}
		else {
			this.SW_1_image.src = super.CX_135_Lined_Both();
			this.SW_3_image.src = super.CX_225_Lined_Both();
		}

		// Set Tail Track Colors
		this.trk_1_w.style.backgroundColor = super.Color_Route();
		this.trk_1_e.style.backgroundColor = super.Color_Route();

		// Set Signal Colors
		if (direction === "West") {
			this.Sig_2W_image.src = super.Signal_W_Lined();
			this.Sig_2E_image.src = super.Signal_E_Stop();

			// Set Next Track Section
			document.getElementById(next_block_west).style.backgroundColor = super.Color_Route();

			this.sig_2w = true;
		}
		else if (direction === "East") {
			this.Sig_2W_image.src = super.Signal_W_Stop();
			this.Sig_2E_image.src = super.Signal_E_Lined();

			// Set Next Track Section
			document.getElementById(next_block_east).style.backgroundColor = super.Color_Route();

			this.sig_2e = true;
		}
		
		this.Route_Lined_Trk_1 = true;
	}

	line_SW_3_R(direction, next_block_west, next_block_east) {
		// Set Switches Images
		this.SW_1_image.src = super.CX_135_Lined_Bottom();
		this.SW_3_image.src = super.CX_225_R_Lined();

		// Set Tail Track Colors
		this.trk_1_w.style.backgroundColor = super.Color_Route();
		this.trk_2_e.style.backgroundColor = super.Color_Route();

		if (direction === "West") {
			// Set Signal Colors
			this.Sig_2W_image.src = super.Signal_W_Lined();
			this.Sig_2E_image.src = super.Signal_E_Stop();
			this.Sig_4E_image.src = super.Signal_E_Stop();

			// Set Next Track Section
			document.getElementById(next_block_west).style.backgroundColor = super.Color_Route();

			this.sig_2w = true;
		}
		else {
			// Set Signal Colors
			this.Sig_4E_image.src = super.Signal_E_Lined();
			this.Sig_2W_image.src = super.Signal_W_Stop();
			this.Sig_4W_image.src = super.Signal_W_Stop();

			// Set Next Track Section
			document.getElementById(next_block_east).style.backgroundColor = super.Color_Route();

			this.sig_4e = true;
		}

		this.Route_Lined_Trk_1 = true;
		this.Route_Lined_Trk_2 = true;
		this.Route_CrossOver = true;
	}

	line_2_Norm(direction, next_block_west, next_block_east) {
		// Set Switches Images
		if (!this.Route_Lined_Trk_1) {
			this.SW_1_image.src = super.CX_135_Lined_Bottom();
			this.SW_3_image.src = super.CX_225_Lined_Bottom();
		}
		else {
			this.SW_1_image.src = super.CX_135_Lined_Both();
			this.SW_3_image.src = super.CX_225_Lined_Both();
		}

		// Set Tail Track Colors
		this.trk_2_w.style.backgroundColor = super.Color_Route();
		this.trk_2_e.style.backgroundColor = super.Color_Route();

		if (direction === "West") {
			// Set Signal Colors
			this.Sig_4W_image.src = super.Signal_W_Lined();
			this.Sig_4E_image.src = super.Signal_E_Stop();

			// Set Next Track Section
			document.getElementById(next_block_west).style.backgroundColor = super.Color_Route();

			this.sig_4w = true;
		}
		else {
			// Set Signal Colors
			this.Sig_4W_image.src = super.Signal_W_Stop();
			this.Sig_4E_image.src = super.Signal_E_Lined();

			// Set Next Track Section
			document.getElementById(next_block_east).style.backgroundColor = super.Color_Route();

			this.sig_4e = true;
		}

		this.Route_Lined_Trk_2 = true;
	}

	line_SW_1_R(direction, next_block_west, next_block_east) {
		// Set Switches Images
		this.SW_1_image.src = "images/CX_135_R_Lined.png";
		this.SW_3_image.src = "images/CX_225_Lined_Bottom.png";

		// Set Tail Track Colors
		this.trk_2_w.style.backgroundColor = super.Color_Route();
		this.trk_1_e.style.backgroundColor = super.Color_Route();

		if (direction === "West") {
			// Set Signal Colors
			this.Sig_4W_image.src = super.Signal_W_Lined();
			this.Sig_2E_image.src = super.Signal_E_Stop();
			this.Sig_4E_image.src = super.Signal_E_Stop();

			// Set Next Track Section
			document.getElementById(next_block_west).style.backgroundColor = super.Color_Route();

			this.sig_4w = true;
		}
		else {
			// Set Signal Colors
			this.Sig_2E_image.src = super.Signal_E_Lined();
			this.Sig_2W_image.src = super.Signal_W_Stop();
			this.Sig_4E_image.src = super.Signal_E_Stop();
			this.Sig_4W_image.src = super.Signal_W_Stop();

			// Set Next Track Section
			document.getElementById(next_block_east).style.backgroundColor = super.Color_Route();

			this.sig_2e = true;
		}

		this.Route_Lined_Trk_1 = true;
		this.Route_Lined_Trk_2 = true;
		this.Route_CrossOver = true;
	}


	undo_Route(Route) {
		document.getElementById(Route.get_Next_Block()).style.backgroundColor = super.Color_Blank();
		if (Route.get_Interlocking_In() === 1 && Route.get_Interlocking_Out() === 1 || Route.get_Interlocking_In() === 2 && Route.get_Interlocking_Out() === 2) {

			if (Route.get_Interlocking_In() === 1) {
				this.Sig_2W_image.src = super.Signal_W_Dark();
				this.Sig_2E_image.src = super.Signal_E_Dark();

				this.Route_Lined_Trk_1 = false;
			}
			else {
				this.Sig_4W_image.src = super.Signal_W_Dark();
				this.Sig_4E_image.src = super.Signal_E_Dark();

				this.Route_Lined_Trk_2 = false;
			}

			if (this.Route_Lined_Trk_1) {
				this.SW_1_image.src = super.CX_135_Lined_Top();
				this.SW_3_image.src = super.CX_225_Lined_Top();
			}
			else if (this.Route_Lined_Trk_2) {
				this.SW_1_image.src = super.CX_135_Lined_Bottom();
				this.SW_3_image.src = super.CX_225_Lined_Bottom();
			}
			else {
				this.SW_1_image.src = super.CX_135();
				this.SW_3_image.src = super.CX_225();
			}

			// Set Tail Track Colors
			if (Route.get_Interlocking_In() === 1) {
				this.trk_1_w.style.backgroundColor = super.Color_Blank();
				this.trk_1_e.style.backgroundColor = super.Color_Blank();
			}
			else {
				this.trk_2_w.style.backgroundColor = super.Color_Blank();
				this.trk_2_e.style.backgroundColor = super.Color_Blank();
			}
		}
		else if (Route.get_Interlocking_In() === 1 && Route.get_Interlocking_Out() === 2) {

			this.Sig_2W_image.src = super.Signal_W_Dark();
			this.Sig_4W_image.src = super.Signal_W_Dark();
			this.Sig_2E_image.src = super.Signal_E_Dark();
			this.Sig_4E_image.src = super.Signal_E_Dark();

			this.SW_1_image.src = super.CX_135();
			this.SW_3_image.src = super.CX_225_R();

			// Set Tail Track Colors
			this.trk_1_w.style.backgroundColor = super.Color_Blank();
			this.trk_2_e.style.backgroundColor = super.Color_Blank();

			this.Route_Lined_Trk_1 = false;
			this.Route_Lined_Trk_2 = false;
			this.Route_CrossOver = false;
		}
		else if (Route.get_Interlocking_In() === 2 && Route.get_Interlocking_Out() === 1) {

			this.Sig_2W_image.src = super.Signal_W_Dark();
			this.Sig_4W_image.src = super.Signal_W_Dark();
			this.Sig_2E_image.src = super.Signal_E_Dark();
			this.Sig_4E_image.src = super.Signal_E_Dark();

			this.SW_1_image.src = super.CX_135_R();
			this.SW_3_image.src = super.CX_225();

			// Set Tail Track Colors
			this.trk_2_w.style.backgroundColor = super.Color_Blank();
			this.trk_1_e.style.backgroundColor = super.Color_Blank();

			this.Route_Lined_Trk_1 = false;
			this.Route_Lined_Trk_2 = false;
			this.Route_CrossOver = false;
		}
	}
}