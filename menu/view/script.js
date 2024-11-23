document.addEventListener('__share_data', (__shared_data) => {
	let production = __shared_data.detail._production;
	let list_data = __shared_data.detail._shared_data;

	let module = {};
	let list = !sessionStorage.getItem('__list.name') ? localStorage.getItem('__list.refresh_name') : sessionStorage.getItem('__list.name');

	let subtitle = document.querySelector('.subtitle');
	let image = document.querySelector('.product-image');
	let container = document.querySelector('.container');
	let description = document.querySelector('.product-description');
	let category = !sessionStorage.getItem('__list.name') ? localStorage.getItem('__list.refresh_name') : sessionStorage.getItem('__list.name');
	let body = document.body;

	if (production) {
		//document.querySelector('.devicejs').src = '/drinkmenu/device/rotation.js';
		//document.querySelector('.navbarjs').src = '/drinkmenu/navbar/nav.js';
		body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)), url('/drinkmenu/media/Mad-Jack-s-Interior-with-TVs_6B4AD80B-5056-A36F-233C860925E98C0C-6b4ad7745056a36_6b4ad86d-5056-a36f-23078ba42eb6533e-min.png')`;
	} else {
		//document.querySelector('.devicejs').src = '/device/rotation.js';
		//document.querySelector('.navbarjs').src = '/navbar/nav.js';
		body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)), url('/media/Mad-Jack-s-Interior-with-TVs_6B4AD80B-5056-A36F-233C860925E98C0C-6b4ad7745056a36_6b4ad86d-5056-a36f-23078ba42eb6533e-min.png')`;
	}

	function Module(Name, Function) {
		module[Name] = Function;
		return module[Name];
	}

	let GetParams = Module('__get_params', function (URL) {
		const Params = {};
		URL.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (M, Key, Value) {
			Params[Key] = decodeURIComponent(Value);
		});

		return Params;
	});

	let Decrypt = Module('__decrypt', function (_param) {
		try {
			return atob(_param);
		} catch (_err) {
			if (production) {
				window.location.href = '/drinkmenu/menu/';
			} else {
				window.location.href = '/menu/';
			}
			return console.error(err);
		}
	});

	let Load = Module('_load', function (Name) {
		let list = Decrypt(GetParams(window.location.href).d);
		let list_src = list !== 'Cabernet Sauvignon (Sycamore Lane)' ? list.replace(/\s+/g, '').replace(/[^a-zA-Z0-9 ]/g, '') : 'Cabernet Sauvignon‎ ‎ ‎ ‎(Sycamore Lane)'.replace(/\s+/g, '').replace(/[^a-zA-Z0-9 ]/g, '');

		if (list == undefined || list == null || list == '') {
			if (production) {
				window.location.href = '/drinkmenu/menu/?rf=';
			} else {
				window.location.href = '/menu/';
			}
			return;
		}

		if (list_data[category].extra_data) {
			document.querySelector('.view-liquors').style.display = 'block';

			if (production) {
				document.querySelector('.link').onclick = function () {
					location.href = '/drinkmenu/menu/list/';
					sessionStorage.setItem('__list.name', 'Liquors');
					localStorage.setItem('__list.name', 'Liquors');
				}
			} else {
				document.querySelector('.link').onclick = function () {
					location.href = '/menu/list/';
					sessionStorage.setItem('__list.name', 'Liquors');
					localStorage.setItem('__list.name', 'Liquors');
				}
			}
		}

		if (!Array.isArray(list_data[category].drinks)) {
			description.textContent = list_data[category].drinks[list].description;
			container.style.transform = 'translate(-50%, -55%)';
		} else {
			container.style.transform = 'translate(-50%, -45%)';
		}

		if (category !== 'Tap Beers' && category !== 'Shots' && category !== 'Liquors') {
			function checkImage(url) {
				return new Promise((resolve, reject) => {
					const img = new Image();

					img.onload = () => resolve({ status: 'success', url });
					img.onerror = () => reject({ status: 'error', url });

					img.src = url;
				});
			}

			const imageUrl = production == false ? '/product_images/' + category.toLowerCase() + '/' + list_src + '.png' : 'https://skyzimos.github.io/drinkmenu/product_images/' + category.toLowerCase() + '/' + list_src + '.png';

			checkImage(imageUrl)
				.then(result => {
					image.src = production == false ? '/product_images/' + category.toLowerCase() + '/' + list_src + '.png' : '/drinkmenu/product_images/' + category.toLowerCase() + '/' + list_src + '.png';
				})
				.catch(error => {
					image.src = production == false ? '/media/No_Image_Available.png' : '/drinkmenu/media/No_Image_Available.png'
				});
		}

		subtitle.textContent = list;
	});

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

		if (e_t >= 0.05 && deltaX < deltaY * 3 && checkDirection() == 0) return;
		if (checkDirection() == 0) {
			// tring to go backward
			if (production) {
				window.location.href = '/drinkmenu/menu/list/?rf=' + GetParams(window.location.href).d;
			} else {
				window.location.href = '/menu/list/?rf=' + GetParams(window.location.href).d;
			}
		} else {
			// trying to go forward
			// on the view section, can't do anything.
			return;
		}
	});

	Load();
});
