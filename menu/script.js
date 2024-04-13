let production = true
let body = document.body;

if (production) {
	//document.querySelector('.devicejs').src = '/drinkmenu/device/rotation.js';
	//document.querySelector('.navbarjs').src = '/drinkmenu/navbar/nav.js';
		document.querySelector('.globe_vector').src = '/drinkmenu/image_data/star_vector.png';
		document.querySelector('.phone_vector').src = '/drinkmenu/image_data/phone_vector.png';
	body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)), url('/drinkmenu/media/Mad-Jack-s-Interior-with-TVs_6B4AD80B-5056-A36F-233C860925E98C0C-6b4ad7745056a36_6b4ad86d-5056-a36f-23078ba42eb6533e-min.png')`;
} else {
	//document.querySelector('.devicejs').src = '/device/rotation.js';
	//document.querySelector('.navbarjs').src = '/navbar/nav.js';
		document.querySelector('.globe_vector').src = '/image_data/star_vector.png';
		document.querySelector('.phone_vector').src = '/image_data/phone_vector.png';
	body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)), url('/media/Mad-Jack-s-Interior-with-TVs_6B4AD80B-5056-A36F-233C860925E98C0C-6b4ad7745056a36_6b4ad86d-5056-a36f-23078ba42eb6533e-min.png')`;
}

let module = {};
let container = document.querySelector('.container');
let list = performance.navigation.type == performance.navigation.TYPE_RELOAD || !sessionStorage.getItem('__list.name') ? localStorage.getItem('__list.refresh_name') : sessionStorage.getItem('__list.name');
localStorage.setItem('__list.refresh_name', list);
sessionStorage.setItem('__list.name', '__home');

function Module(Name, Function) {
	module[Name] = Function;

	return module[Name];
}

let GetParams = Module('__get_params', function(URL) {
	const Params = {};
	URL.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(M, Key, Value) {
		Params[Key] = decodeURIComponent(Value);
	});

	return Params;
});

let New = Module('new', function(Name) {
	let clone = document.querySelector('.button').cloneNode(true);
	let arrow = document.querySelector('.arrow-icon').cloneNode(true);

	clone.addEventListener('click', function() {
		sessionStorage.setItem('__list.name', Name);
		localStorage.setItem('__list.refresh_name', Name)
		if (production) {
			window.location.href = '/drinkmenu/menu/list';
		} else {
			window.location.href = '/menu/list';
		}
	})

	clone.style.display = 'block';
	clone.textContent = Name;
	clone.appendChild(arrow);
	container.appendChild(clone);
})

let touchstartX = 0
let touchendX = 0
let touchstartY = 0
let touchendY = 0

function checkDirection() {
	let deltaX = Math.abs(touchendX - touchstartX);
	let deltaY = Math.abs(touchendY - touchstartY);

	if (deltaX < deltaY && deltaY > 5 && deltaX * 0.2 < (deltaY * 2)) return -1; // Vertical swipe
	if (touchendX < touchstartX && deltaX > 5) return 1; // Left swipe
	if (touchendX > touchstartX && deltaX > 5) return 0; // Right swipe

	return -2; // No significant swipe
}

function start() {
	startTime = new Date();
};

function end() {
	endTime = new Date();
	var timeDiff = endTime - startTime; //in ms
	// strip the ms
	timeDiff /= 1000;

	// get seconds 
	var seconds = timeDiff;
	return seconds;
}

document.addEventListener('touchstart', e => {
	start();
	touchstartX = e.changedTouches[0].screenX;
	touchstartY = e.changedTouches[0].screenY;
})

document.addEventListener('touchend', e => {
	let e_t = end()
	touchendX = e.changedTouches[0].screenX;
	touchendY = e.changedTouches[0].screenY;

	let deltaX = Math.abs(touchendX - touchstartX);
	let deltaY = Math.abs(touchendY - touchstartY);
	
	if (e_t >= 0.05 && deltaX < deltaY * 3 && checkDirection() > 0) return;
	if (checkDirection() == 0) {
		// tring to go backward
		// on the selection menu, can't do anything to go back.
		return;
	} else if (checkDirection() > 0) {
		// trying to go forward
		if (list == '__home') return;
		if (GetParams(window.location.href).rf && GetParams(window.location.href).rf !== undefined && GetParams(window.location.href).rf !== 'undefined') {
			sessionStorage.setItem('__list.name', list);
			if (production) {
				window.location.href = window.location.href = '/drinkmenu/menu/list/?rf=' + GetParams(window.location.href).rf;
			} else {
				window.location.href = window.location.href = '/menu/list/?rf=' + GetParams(window.location.href).rf;
			}
		} else if (list) {
			sessionStorage.setItem('__list.name', list);
			if (production) {
				window.location.href = window.location.href = '/drinkmenu/menu/list/';
			} else {
				window.location.href = window.location.href = '/menu/list/';
			}
		}
	}
});

New('Beers');
New('Tap Beers');
New('Seltzers');
New('Shots');
New('Cocktails');
New('Martinis');
New('Wines');
New('Liquors');
New('Non-Alcoholic');
