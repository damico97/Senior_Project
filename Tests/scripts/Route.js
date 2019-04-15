class Route {

	constructor() {
		this.m_Route_Direction = null;
		this.m_Start_Point = null;
		this.m_End_Point = null;
		this.m_Interlocking_Enter = null;
		this.m_Interlocking_Out = null;
		this.m_Next_Block = null;
	}

	new_Route(Route_Direction, Start_Point, End_Point, Interlocking_In, Interlocking_Out, Next_Block) {
		this.m_Route_Direction = Route_Direction;
		this.m_Start_Point = Start_Point;
		this.m_End_Point = End_Point;
		this.m_Interlocking_Enter = Interlocking_In;
		this.m_Interlocking_Out = Interlocking_Out;
		this.m_Next_Block = Next_Block;
	}

	set_Route_Direction(direction) {
		this.m_Route_Direction = direction;
	}

	get_Route_Direction() {
		return this.m_Route_Direction;
	}


	set_Start_Point(location) {
		this.m_Start_Point = location;
	}

	get_Start_Point() {
		return this.m_Start_Point;
	}


	set_End_Point(location) {
		this.m_End_Point = location;
	}

	get_End_Point() {
		return this.m_End_Point;
	}


	set_Interlocking_Enter(track_num) {
		this.m_Interlocking_Enter = track_num;
	}

	get_Interlocking_In() {
		return this.m_Interlocking_Enter;
	}


	set_Interlocking_Out(track_num) {
		this.m_Interlocking_Out = track_num;
	}

	get_Interlocking_Out() {
		return this.m_Interlocking_Out;
	}

	get_Next_Block() {
		return this.m_Next_Block;
	}
}