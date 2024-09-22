let production = true

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

let list_data = {
	['Beers']: {
		subtitle: "It's 5 o'clock somewhere!",
		extra_data: false,
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
			'Michelob Golden Light',
			'Voodoo Ranger 1985 Mango',
			'Sam Adams Octoberfest',
			'Surly Furious',
			'Shiner Bock',
			'Summit EPA',
			'Summer Shandy',
			'Liftbridge Mango Blonde',
			'Lupulin Fashion Mullet IPA',
			'Loon Juice',
			'Utepils Skölsch',
			'Kona Big Wave'
		]
	},
	['Seltzers']: {
		subtitle: '-',
		extra_data: false,
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
		extra_data: true,
		clickable: true,
		drinks: {
			'Lemon Drop': {
				description: 'Smirnoff Citrus, Sour, Lemonade.'
			},
			'Grape Ape': {
				description: 'Smirnoff Citrus, Grape Schnapps, Starry, Lemonade.'
			},
			'Bazooka Joe': {
				description: 'Bacardi Limon, Red Bull, Grenadine.'
			},
			'Apple Sauce Cocktail': {
				description: 'Fireball, Apple Schnapps, Pineapple.'
			},
			'Green Tea': {
				description: 'Jameson, Peach, Sour, Lemonade.'
			},
			'Kamakazi': {
				description: 'Vodka, Lime Juice, Triple Sec, Sour.'
			},
			'Buttery Nipple': {
				description: 'Butterscotch Schnapps, Bailey\'s.'
			},
			'Washington Apple': {
				description: 'Whiskey, Apple Schnapps, Cranberry.'
			},
			'Salted Nut Roll': {
				description: 'Rum Chata, Butterscotch Schnapps. (Alternatives: Frangelico or Screwball. Must request.)'
			},
			'Kool Aid': {
				description: 'Vodka, Midori, Amaretto, Cranberry. (Other flavors: Grape or Peach Schnapps. (Must request.)'
			},
			'Melon Ball': {
				description: 'Vodka, Melon Schnapps, Pineapple.'
			},
			'Peanut Butter and Jelly': {
				description: 'Frangelico, Chambord.'
			},
			'Jolly Rancher': {
				description: 'Watermelon Schnapps, Apple Schnapps, Cranberry.'
			},
			'Red Headed Slut': {
				description: 'Jagermeister, Peach Schnapps, Cranberry.'
			},
			'Tang': {
				description: 'Vodka, Triple Sec, Orange Juice, Red Bull.'
			},
			'Surfer on Acid': {
				description: 'Jagermeister, Malibu, Pineapple.'
			},
			'Scooby Snack': {
				description: 'Malibu, Melon, Pineapple, Cream.'
			},
			'Bong Water': {
				description: 'Jagermeister, Melon, Orange Juice.'
			},
			'F***ing Awesome': {
				description: 'Captain, Soco, Malibu, Peach, Amaretto, Apple, Grape, Pineapple, Orange Juice, Sour, Cranberry.'
			},
		}
	},
	['Cocktails']: {
		subtitle: '-',
		extra_data: true,
		clickable: true,
		drinks: {
			'Long Island Tea': {
				description: 'Vodka, Rum, Gin, Triple Sec, Sour, Pepsi.'
			},
			'Blue MF': {
				description: 'Vodka, Rum, Gin, Triple Sec, Sour, Starry, Blue Caraco.'
			},
			'Tokyo Tea': {
				description: 'Vodka, Rum, Gin, Triple Sec, Sour, Melon Schnapps.'
			},
			'Bahama Mama': {
				description: 'Malibu, Banana Schnapps, Orange Juice, Grenadine, Bitters.'
			},
			'Jackup Punch': {
				description: 'Captain, Orange Juice, Pineapple, Starry, Grenadine, Cream.'
			},
			'Mai Tai': {
				description: 'Malibu, Pineapple, Orange Juice, Grenadine, Myers Rum.'
			},
			'Sex on the Beach': {
				description: 'Malibu, Peach, Pineapple, Orange Juice, Grenadine, Cream.'
			},
			'Colorado Bulldog': {
				description: 'Vodka, Kahlua, Cream, Pepsi.'
			},
			'Fruit Roll Up': {
				description: 'Malibu, Peach, Orange Juice, Pineapple, Grenadine, Raspberry Vodka, Blue Caraco.'
			},
			'Lime Margarita': {
				description: 'Tequila, Triple Sec, Margarita Mix, Lime.'
			},
			'Liquid Marijuana': {
				description: 'Captain, Malibu, Midori, Blue Caraco, Pineapple.'
			},
			'Blue Hawaiian': {
				description: 'Malibu, Vodka, Sour, Blue Caraco.'
			},
			'Courtney\'s Coffee': {
				description: 'Vodka, Bailey\'s, Kahlua, Iced Coffee.'
			},
			'Old Fashioned': {
				description: 'Whiskey/Bourbon, Bitters, Starry.'
			},
			'Manhattan': {
				description: 'Whiskey, Water, Bitters.'
			},
			'White Russian': {
				description: 'Vodka, Kahlua, Cream.'
			},
			'Southern Hospitality': {
				description: 'Southern Comfort, Watermelon Schnapps, Red Bull.'
			},
			'Greyhound': {
				description: 'Vodka, Grapefruit.'
			},
			'Tequila Sunrise': {
				description: 'Tequila, Orange Juice, Grenadine.'
			},
			'Iron Butterfly': {
				description: 'Vodka, Kahlua, Bailey\'s.'
			},
			'Black Russian': {
				description: 'Vodka, Kahlua.'
			},
			'Salty Dog': {
				description: 'Vodka, Grapefruit.'
			},
		}
	},
	['Martinis']: {
		subtitle: 'Shaken, not stirred.',
		extra_data: true,
		clickable: true,
		drinks: {
			'Apple-tini': {
				description: 'Vodka, Apple Pucker.'
			},
			'Cosmopolitan': {
				description: 'Vodka, Triple Sec, Cranberry.'
			},
			'Dirty Martini': {
				description: 'Vodka, Olive Juice.'
			},
			'Choco-tini': {
				description: 'Vanilla Vodka, Chocolate, Kahlua, Bailey\'s, Cream.'
			},
			'Lemon-drop Martini': {
				description: 'Citrus Vodka, Sour, Splash of Lemonade.'
			},
			'Strawberry Lemon-drop Martini': {
				description: 'Citrus Vodka, Sour, Splash of Lemonade, Strawberry Puree.'
			},
		}
	},
	['Wines']: {
		subtitle: '"Words so fancy you probably can\'t even say them."',
		extra_data: false,
		clickable: true,
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
	['Liquors']: {
		subtitle: `We just might have what you want.`,
		extra_data: false,
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
		subtitle: 'All of the taste, none of the tease.', // all of the taste, none of the tease, for those who want to get home in one piece
		extra_data: false,
		clickable: true,
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
			'Pepsi Products'
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

let Decrypt = Module('__decrypt', function(_param) {
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

let Load = Module('_load', function(Name) {
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
			document.querySelector('.link').onclick = function() {
				location.href = '/drinkmenu/menu/list/';
				sessionStorage.setItem('__list.name', 'Liquors');
				localStorage.setItem('__list.name', 'Liquors');
			}
		} else {
			document.querySelector('.link').onclick = function() {
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
		image.src = production == false ? '/product_images/' + category.toLowerCase() + '/' + list_src + '.png' : '/drinkmenu/product_images/' + category.toLowerCase() + '/' + list_src + '.png';
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
