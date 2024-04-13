let _production = true;
let notification = document.querySelector('.turnDeviceNotification');

if (_production) {
	notification.style.backgroundImage = "url('/drinkmenu/media/sValK.png')";
} else {
	notification.style.backgroundImage = "url('/media/sValK.png')";
}

function init() {
	switch (window.orientation) {
		case 0:
		case 180:
			document.querySelector('.website_link').classList.remove('website_link-rotate');
			document.querySelector('.phone_number').classList.remove('phone_number-rotate');
			document.querySelector('.globe_vector').classList.remove('globe_vector-rotate');
			document.querySelector('.phone_vector').classList.remove('phone_vector-rotate');
			document.querySelector('.break').classList.remove('break-rotate');
			document.querySelector('.container').classList.remove('container-rotate');
			document.querySelector('.title').classList.remove('title-rotate');
			document.querySelector('.subtitle').classList.remove('subtitle-rotate');
			break;

		case 90:
		case -90:		
			document.querySelector('.website_link').classList.add('website_link-rotate');
			document.querySelector('.phone_number').classList.add('phone_number-rotate');
			document.querySelector('.globe_vector').classList.add('globe_vector-rotate');
			document.querySelector('.phone_vector').classList.add('phone_vector-rotate');
			document.querySelector('.break').classList.add('break-rotate');
			document.querySelector('.container').classList.add('container-rotate');
			document.querySelector('.subtitle').classList.add('subtitle-rotate');
			document.querySelector('.title').classList.add('title-rotate');
			break;
	}
}

window.addEventListener('orientationchange', function(e) {
	init();
});

init();