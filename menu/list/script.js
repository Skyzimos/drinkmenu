document.addEventListener('__share_data', (__shared_data) => {
	let production = __shared_data.detail._production;
	let list_data = __shared_data.detail._shared_data;

	let module = {};
	let list = !sessionStorage.getItem('__list.name') ? localStorage.getItem('__list.refresh_name') : sessionStorage.getItem('__list.name');

	console.log(list_data, list_data[list], list_data[list].drinks)

	if (list == '__home') {
		if (production) {
			window.location.href = '/drinkmenu/menu/';
		} else {
			window.location.href = '/menu/';
		}
	}

	let title = document.querySelector('.title');
	let subtitle = document.querySelector('.subtitle');
	let container = document.querySelector('.container');
	let body = document.body;

	if (production) {
		//document.querySelector('.devicejs').src = '/drinkmenu/device/rotation.js';
		//document.querySelector('.navbarjs').src = '/drinkmenu/navbar/nav.js';
		document.querySelector('.background').style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)), url('/drinkmenu/media/Mad-Jack-s-Interior-with-TVs_6B4AD80B-5056-A36F-233C860925E98C0C-6b4ad7745056a36_6b4ad86d-5056-a36f-23078ba42eb6533e-min.png')`;
	} else {
		//document.querySelector('.devicejs').src = '/device/rotation.js';
		//document.querySelector('.navbarjs').src = '/navbar/nav.js';
		document.querySelector('.background').style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)), url('/drinkmenu/media/Mad-Jack-s-Interior-with-TVs_6B4AD80B-5056-A36F-233C860925E98C0C-6b4ad7745056a36_6b4ad86d-5056-a36f-23078ba42eb6533e-min.png')`;
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

	let Encrypt = Module('__encrypt', function (_param) {
		return btoa(_param);
	});

	let Load = Module('_load', function (Name) {
		Name = list;
		let Sort = true;

		if (list_data[Name].extra_data == true) {
			for (var Item of Object.keys(list_data[Name].drinks)) {
				if (Item.includes('__')) {
					Sort = false;
					break;
				}
			}
		} else {
			for (var Item of list_data[Name].drinks) {
				if (Item.includes('__')) {
					Sort = false;
					break;
				}
			}
		}

		if (Sort) {
			if (list_data[Name].extra_data == true) {
				Object.keys(list_data[Name].drinks).sort();
			} else {
				list_data[Name].drinks.sort();
			}
		};

		subtitle.textContent = list_data[Name].subtitle;

		if (list_data[Name].extra_data == true) {
			Object.keys(list_data[Name].drinks).forEach(Item => {
				if (Item.includes('__')) {
					let name = Item.replace('__', '');
					let clone = document.querySelector('.subsection').cloneNode(true);

					clone.style.display = 'block';
					clone.textContent = name;
					container.appendChild(clone);
				} else {
					let clone = document.querySelector('.button').cloneNode(true);
					let arrow = document.querySelector('.arrow-icon').cloneNode(true);

					clone.style.display = 'block';
					clone.textContent = Item;
					clone.appendChild(arrow);
					container.appendChild(clone);

					if (Item.includes('Pepsi')) {
						clone.classList.add('no-click');
						clone.removeChild(arrow)
					} else {
						if (list_data[Name].clickable == true) {
							clone.addEventListener('click', function () {
								if (production) {
									window.location.href = '/drinkmenu/menu/view/?d=' + Encrypt(Item !== 'Cabernet Sauvignon‎ ‎ ‎ ‎(Sycamore Lane)' ? Item : 'Cabernet Sauvignon (Sycamore Lane)');
								} else {
									window.location.href = '/menu/view/?d=' + Encrypt(Item !== 'Cabernet Sauvignon‎ ‎ ‎ ‎(Sycamore Lane)' ? Item : 'Cabernet Sauvignon (Sycamore Lane)');
								}
							})
						} else {
							clone.classList.add('no-click');
							clone.removeChild(arrow);
						}
					}
				}
			});
		} else {
			list_data[Name].drinks.forEach(Item => {
				if (Item.includes('__')) {
					let name = Item.replace('__', '');
					let clone = document.querySelector('.subsection').cloneNode(true);

					clone.style.display = 'block';
					clone.textContent = name;
					container.appendChild(clone);
				} else {
					let clone = document.querySelector('.button').cloneNode(true);
					let arrow = document.querySelector('.arrow-icon').cloneNode(true);

					clone.style.display = 'block';
					clone.textContent = Item;
					clone.appendChild(arrow);
					container.appendChild(clone);

					if (Item.includes('Pepsi')) {
						clone.classList.add('no-click');
						clone.removeChild(arrow)
					} else {
						if (list_data[Name].clickable == true) {
							clone.addEventListener('click', function () {
								if (production) {
									window.location.href = '/drinkmenu/menu/view/?d=' + Encrypt(Item !== 'Cabernet Sauvignon‎ ‎ ‎ ‎(Sycamore Lane)' ? Item : 'Cabernet Sauvignon (Sycamore Lane)');
								} else {
									window.location.href = '/menu/view/?d=' + Encrypt(Item !== 'Cabernet Sauvignon‎ ‎ ‎ ‎(Sycamore Lane)' ? Item : 'Cabernet Sauvignon (Sycamore Lane)');
								}
							})
						} else {
							clone.classList.add('no-click');
							clone.removeChild(arrow);
						}
					}
				}
			});
		}
	});

	let Page = Module('_title', function (Name) {
		Name = list;
		document.title = 'Mad Jacks | ' + Name;
		title.textContent = Name;
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

		if (e_t >= 0.05 && deltaX < deltaY * 3 && checkDirection() >= 0) return;
		if (checkDirection() == 0) {
			// tring to go backward
			if (production) {
				window.location.href = '/drinkmenu/menu/?rf=' + GetParams(window.location.href).rf;
			} else {
				window.location.href = '/menu/?rf=' + GetParams(window.location.href).rf;
			}
		} else if (checkDirection() > 0) {
			// trying to go forward
			// on the list section, go back to the previous menu item selected.
			if (GetParams(window.location.href).rf) {
				if (production) {
					window.location.href = '/drinkmenu/menu/view/?d=' + GetParams(window.location.href).rf;
				} else {
					window.location.href = '/menu/view/?d=' + GetParams(window.location.href).rf;
				}
			} else {
				return;
			}
		} else {
			return;
		}
	});

	Page();
	Load();
});
