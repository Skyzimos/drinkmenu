let production = false

let module = {};
let list = sessionStorage.getItem('__list.name') == 'Specialty' ? 'Specialty Drinks' : sessionStorage.getItem('__list.name');

if (list == '__home') {
	window.location.href = '/menu/';
}

let title = document.querySelector('.title');
let subtitle = document.querySelector('.subtitle');
let container = document.querySelector('.container');

let list_data = {
	['Beers']: {
		subtitle: "It's 5 o'clock somewhere!",
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
			'Mwiller High Life',
			'Stella Artois',
			'Bud Light Lime',
		]
	},
	['Tap Beers']: {
		subtitle: '-',
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
			'Liquid Marijuana',
		]
	},
	['Cocktails']: {
		subtitle: 'Liquid Magic. Literally.',
		drinks: [
			'Long Island Tea',
			'Blue MF',
			'Tokyo Tea',
			'Bahama Mama',
			'Jackup Punch', // need pic
			'MAI TAI', // need pic
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
		]
	},
	['Martinis']: {
		subtitle: 'Shaken, not stirred.',
		drinks: [
			
		]
	},
	['Wines']: {
		subtitle: 'Words so fancy you probably can\'t even say them.',
		drinks: [
			'Red Blend (Ménage à Trois)',
			'Merlot (Barone Fini)',
			'Prosecco (Zonin)',
			'White Zinfandel (Buehler)',
			'Chardonnay (Hess)',
			'Sauvignon Blanc (Sutter Home)',
			'Cabernet Sauvignon‎ ‎ ‎ ‎(Sycamore Lane)'
		]
	},
	['Non-Alcoholic']: {
		subtitle: 'All of the taste, none of the tease.', // all of the taste, none of the tease, for those who want to get home in one piece
		drinks: [
			'Heineken 0.0%',
			'Red Bull',
			'Red Bull (Sugar Free)',
			'Shirley Temple',
			"O'doul's Amber",
			'Orange Juice',
			'Cranberry Juice',
			'Pineapple Juice',
			'Grapefruit Juice',
			'All Pepsi Products',
		]
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
	list_data[Name].drinks.sort();
	subtitle.textContent = list_data[Name].subtitle;

	list_data[Name].drinks.forEach(Item => {
		let clone = document.querySelector('.button').cloneNode(true);
		let arrow = document.querySelector('.arrow-icon').cloneNode(true);

		if (Item !== 'All Pepsi Products') {
			clone.addEventListener('click', function() {
				window.location.href = '/menu/view/?d=' + Encrypt(Item);
			})
		}
		
		clone.style.display = 'block';
		clone.textContent = Item;
		clone.appendChild(arrow);
		container.appendChild(clone);

		if (Item == 'All Pepsi Products') {
			clone.removeChild(arrow)
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

	if (deltaX < deltaY && deltaY > 5 && deltaX * 0.2 < deltaY) return -1; // Vertical swipe
	if (touchendX < touchstartX && deltaX > 5) return 1; // Left swipe
	if (touchendX > touchstartX && deltaX > 5) return 0; // Right swipe

	return -2; // No significant swipe
}

document.addEventListener('touchstart', e => {
	touchstartX = e.changedTouches[0].screenX;
	touchstartY = e.changedTouches[0].screenY;
})

document.addEventListener('touchend', e => {
	touchendX = e.changedTouches[0].screenX;
	touchendY = e.changedTouches[0].screenY;

	if (checkDirection() == 0) {
		// tring to go backward
		window.location.href = '/menu/?rf=' + GetParams(window.location.href).rf;
	} else if (checkDirection() > 0) {
		// trying to go forward
		// on the list section, go back to the previous menu item selected.
		if (GetParams(window.location.href).rf) {
			window.location.href = window.location.href = '/menu/view/?d=' + GetParams(window.location.href).rf;
		} else {
			return;
		}
	} else {
		return;
	}
});

Page();
Load();