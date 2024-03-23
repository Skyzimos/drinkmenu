let module = {};
let list = sessionStorage.getItem('__list.name') == 'Specialty' ? 'Specialty Drinks' : sessionStorage.getItem('__list.name');

let subtitle = document.querySelector('.subtitle');
let image = document.querySelector('.product-image');
let container = document.querySelector('.container');
let description = document.querySelector('.product-description');
let category = sessionStorage.getItem('__list.name');

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
			'Salty Dog': {
				description: 'Vodka, Grapefruit.'
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
			}
		}
	},
	['Cocktails']: {
		subtitle: '-',
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
			'MAI TAI': {
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
			}
		}
	},
	['Martinis']: {
		subtitle: 'Shaken, not stirred.',
		drinks: [
			''
		]
	},
	['Wines']: {
		subtitle: '"Words so fancy you probably can\'t even say them."',
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

let Decrypt = Module('__decrypt', function(_param) {
	try {
		return atob(_param);
	} catch (_err) {
		window.location.href = '/menu/';
		return console.error(err);
	}
});

let Load = Module('_load', function(Name) {
	let list = Decrypt(GetParams(window.location.href).d);
	let list_src = list.replace(/\s+/g, '').replace(/[^a-zA-Z0-9 ]/g, '');

	if (list == undefined || list == null || list == '') {
		window.location.href = '/menu/';
		return;
	}

	if (category == 'Shots' || category == 'Cocktails') {
		description.textContent = list_data[category].drinks[list].description;

		if (category == 'Cocktails') {
			container.style.top = '60%';
			image.src = '/product_images/' + category.toLowerCase() + '/' + list_src + '.png';
		}
	} else if (category !== 'Wines' && category !== 'Tap Beers') {
		container.style.top = '60%';
		image.src = '/product_images/' + category.toLowerCase() + '/' + list_src + '.png';
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
		window.location.href = '/menu/list/?rf=' + GetParams(window.location.href).d;
	} else {
		// trying to go forward
		// on the view section, can't do anything.
		return;
	}
});

Load();