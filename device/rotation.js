window.addEventListener('orientationchange', function(e) {
	switch (window.orientation) {
		case 0:
		case 180:
document.querySelector('.turnDeviceNotification').style.display = 'none';
			break;

		case 90:
		case -90:			document.querySelector('.turnDeviceNotification').style.display = 'block';
			break;
	}
});

window.o = function() {
	console.log('test')
}