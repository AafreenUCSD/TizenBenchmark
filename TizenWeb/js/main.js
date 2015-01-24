var startTime;
var checkTime;

//Initialize function
var init = function () {
	// TODO:: Do your initialization job
	console.log("init() called");

	// add eventListener for tizenhwkey
	document.addEventListener('tizenhwkey', function(e) {
		if(e.keyName == "back") {
			try {
				tizen.application.getCurrentApplication().exit();
			} catch (error) {
				console.error("getCurrentApplication(): " + error.message);
			}
		}
	});
};
// window.onload can work without <body onload="">
window.onload = init;

function getMeasurementOverhead() {
	var i;
	var count = 100;
	var t = [];
	var delta = [];
	var avgOverhead=0.0;
	
	for(i=0;i<=count;i++){
		t[i] = new Date().getTime();
	}
	
	for(i=1;i<=count;i++){
		delta[i] = t[i] - t[i-1];
	}
	
	for(i=1;i<=count;i++){
		avgOverhead = avgOverhead + delta[i];
	}
	
	avgOverhead = avgOverhead/count;
	
	document.getElementById('divbutton1').innerHTML = "Reading overhead: " + avgOverhead;
}

function getLoopOverhead() {
	var i;
	var count = 1000;
	var startTime;
	var stopTime;
	
	startTime = new Date().getTime();
	for(i=0;i<=count;i++){
	}
	stopTime = new Date().getTime();
	
	avgOverhead = (stopTime-startTime)/count;
	
	document.getElementById('divbutton2').innerHTML = "Loop overhead: " + avgOverhead;
}

function checkTime(i) {
	if (i < 10) {
		i="0" + i;
	}
	return i;
}
