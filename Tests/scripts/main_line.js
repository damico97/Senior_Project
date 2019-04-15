


let Mill_Int = new Mill();
let Suscon_Int = new Suscon();

/* Main Line */

/* SUSCON Interlocking */
document.getElementById("suscon_SW_1").addEventListener('click', function() {
	Suscon_Int.Click_SW_1();
});

document.getElementById("suscon_SW_3").addEventListener('click', function() {
	Suscon_Int.Click_SW_3();
});

document.getElementById("suscon_2w").addEventListener('click', function() {
	Suscon_Int.Click_sig_2w();
});

document.getElementById("suscon_2e").addEventListener('click', function() {
	Suscon_Int.Click_sig_2e();
});

document.getElementById("suscon_4w").addEventListener('click', function() {
	Suscon_Int.Click_sig_4w();
});

document.getElementById("suscon_4e").addEventListener('click', function() {
	Suscon_Int.Click_sig_4e();
});
/* END SUSCON Interlocking */

/* MILL Interlocking */
// Mill Switch 1 Event Listener
document.getElementById("mill_SW_1").addEventListener('click', function() {
	Mill_Int.Click_SW_1();
});

// Mill Switch 3 Event Listener
document.getElementById("mill_SW_3").addEventListener('click', function() {
	Mill_Int.Click_SW_3();
});

// Mill Signal 2W Event Listener
document.getElementById("mill_2w").addEventListener('click', function() {
	Mill_Int.Click_sig_2w();
});

// Mill Signal 2E Event Listener
document.getElementById("mill_2e").addEventListener('click', function() {
	Mill_Int.Click_sig_2e();
});

// Mill Signal 4W Event Listener
document.getElementById("mill_4w").addEventListener('click', function() {
	Mill_Int.Click_sig_4w();
});

// Mill Signal 4E Event Listener
document.getElementById("mill_4e").addEventListener('click', function() {
	Mill_Int.Click_sig_4e();
});
/* END MILL Interlocking */
