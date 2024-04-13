let production = true

let module = {};
let list = !sessionStorage.getItem('__list.name') ? localStorage.getItem('__list.refresh_name') : sessionStorage.getItem('__list.name');

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

let list_data = {
	['Beers']: {
		subtitle: "It's 5 o'clock somewhere!",
		clickable: true,
		drinks: [
			'Heineken',
			'Coors Light',
			'Corona Extra',
			'Coors Banquet',
			'Miller Lite',
			'Michelob Golden Light',
			'Miller Genuine Draft',
			'Michelob Ultra',
			'Guiness Extra Stout',
			'Modelo',
			'Bud Light',
			'Budweiser',
			'Miller High Life',
			'Stella Artois',
			'Bud Light Lime',
		]
	},
	['Tap Beers']: {
		subtitle: '-',
		clickable: false,
		drinks: [
			'Coors Light',
			'Miller Lite',
			'Fresh Squeezed IPA',
			'Castle Danger Cream Ale',
			'Downeast Strawberry',
			'Blue Moon',
			'Warpigs Foggy Geezer',
			'Alaskan Amber',
			'Michelob Golden Light',
			'Sam Adams Cold Snap',
			'Pacifico',
			'Surly Furious',
			'Shiner Bock',
			'Twisted Tea',
			'Summit EPA',
			'Honeyweiss',
			'Liftbridge Mango Blonde',
			'Angry Orchard'
		]
	},
	['Seltzers']: {
		subtitle: '-',
		clickable: true,
		drinks: [
			'White Claw (Black Cherry)',
			'White Claw (Raspberry)',
			'White Claw (Peach)',
			'Carbliss (Lemon-Lime)',
			'Carbliss (Black Raspberry)',
		]
	},
	['Shots']: {
		subtitle: 'SHOTS! SHOTS! SHOTS!',
		clickable: true,
		drinks: [
			'Lemon Drop',
			'Grape Ape',
			'Bazooka Joe',
			'Apple Sauce Cocktail',
			'Salty Dog',
			'Green Tea',
			'Kamakazi',
			'Buttery Nipple',
			'Washington Apple',
			'Salted Nut Roll',
			'Kool Aid',
			'Melon Ball',
			'Peanut Butter and Jelly',
			'Jolly Rancher',
			'Red Headed Slut',
			'Tang',
			'Surfer on Acid',
			'Scooby Snack',
			'Bong Water',
			'F***ing Awesome',
			'Liquid Marijuana',
			'Southern Hospitality',
			'Orange Peel',
			'Jack Apple Sour',
		]
	},
	['Cocktails']: {
		subtitle: 'Liquid Magic. Literally.',
		clickable: true,
		drinks: [
			'Long Island Tea',
			'Blue MF',
			'Tokyo Tea',
			'Bahama Mama',
			'Jackup Punch', // need pic
			'Mai Tai', // need pic
			'Sex on the Beach',
			'Colorado Bulldog', // need pic
			'Fruit Roll Up', // on phone
			'Lime Margarita', // need pic
			'Blue Hawaiian',
			"Courtney's Coffee", // need pic
			'Old Fashioned', // need pic
			'Manhattan', // need pic
			'White Russian',
			'Greyhound',
			'Tequila Sunrise', // on phone
			'Iron Butterfly', // need pic
			'Black Russian', // need pic (make first, then make iron butterfly)
			'Salty Dog',
		]
	},
	['Martinis']: {
		subtitle: 'Shaken, not stirred.',
		clickable: true,
		drinks: [
			'Apple-tini',
			'Cosmopolitan',
			'Dirty Martini',
			'Choco-tini',
			'Lemon-drop Martini',
			'Strawberry Lemon-drop Martini'
		]
	},
	['Wines']: {
		subtitle: 'Words so fancy you probably can\'t even say them.',
		clickable: true,
		drinks: [
			'__Red Wines',
			'Merlot (Barone Fini)',
			'Red Blend (Ménage à Trois)',
			'Cabernet Sauvignon‎ ‎ ‎ ‎(Sycamore Lane)',

			'__White Wines',
			'Prosecco (Zonin)',
			'White Zinfandel (Buehler)',
			'Chardonnay (Hess)',
			'Sauvignon Blanc (Sutter Home)',
		]
	},
	['Liquors']: {
		subtitle: `We just might have what you want.`,
		clickable: false,
		drinks: [
			'__Vodkas',
			'Philips',
			'Tito\'s',
			'Stoli',
			'Svedka',
			'Smirnoff',
			'Grey Goose',
			'Ketel One',
			'Vanilla Smirnoff',
			'Raspberry Smirnoff',
			'Citrus Smirnoff',
			'Blue Raspberry Stoli',
			'Peppar',
			'Ciroc',
			
			'__Gin',
			'Philips',
			'Tanqueray',
			'Sapphire',
			'Hendrick\'s',

			'__Tequila',
			'Philips',
			'Jose Cuervo',
			'1800',
			'Don Julio Blanco',
			'Patron Blanco',
			'Casamigos Blanco',
			'Casamigos Reposado',

			'__Rum',
			'Philips',
			'Captain Morgan',
			'Bacardi',
			'Bacardi Limon',
			'Bacardi Razz',
			'Cruzan Coconut',
			'Myers\'s Dark',

			'__Whiskey',
			'Philips',
			'Jameson',
			'Jack Daniel\'s',
			'Jack Fire',
			'Seagram\'s 7',
			'Skrewball',
			'Jim Beam',
			'Windsor',
			'Southern Comfort',
			'Crown',
			'Crown Apple',
			'Yukon Jack',
			'Maker\'s Mark',
			'Seagram\'s VO',
			'Canadian Club',
			'Wild Turkey',

			'__Bourbon',
			'Bulleit',
			'Bulleit Rye',

			'__Cognac',
			'Hennessy',

			'__Brandy',
			'Philips',
			'Christian Brothers',
			'E&J',

			'__Scotch',
			'Johnnie Walker Black',
			'Johnnie Walker Red',
			'Glenlivet',
			],
	},
	['Non-Alcoholic']: {
		subtitle: '-', // all of the taste, none of the tease, for those who want to get home in one piece
		clickable: true,
		drinks: [
			'__Beers',
			'Heineken 0.0%',
			"O'doul's Amber",

			'__Juices',
			'Cranberry Juice',
			'Grapefruit Juice',
			'Orange Juice',
			'Pineapple Juice',

			'__Energy Drinks',
			'Red Bull',
			'Red Bull (Sugar Free)',

			'__Other',
			'Pepsi Products',
			'Shirley Temple',
		],
	}
};

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

let Encrypt = Module('__encrypt', function(_param) {
	return btoa(_param);
});

let Load = Module('_load', function(Name) {
	Name = list;
	let Sort = true;

	for (var Item of list_data[Name].drinks) {
		if (Item.includes('__')) {
			Sort = false;
			break;
		}
	}

	if (Sort) {
		list_data[Name].drinks.sort();
	};
	
	subtitle.textContent = list_data[Name].subtitle;
	
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
					clone.addEventListener('click', function() {
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
});

let Page = Module('_title', function(Name) {
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