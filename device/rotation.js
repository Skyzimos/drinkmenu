let _production = false;
let notification = document.querySelector('.turnDeviceNotification');

if (_production) {
	notification.style.backgroundImage = "url('/drinkmenu/media/sValK.png')";
} else {
	notification.style.backgroundImage = "url('/media/sValK.png')";
}

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

window.BeforeUnloadEvent = function() {
	console.log('test')
}