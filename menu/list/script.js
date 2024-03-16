let module = {};
let list = sessionStorage.getItem('__list.name') == 'Specialty' ? 'Specialty Drinks' : sessionStorage.getItem('__list.name');

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
			'F***ing Awesome'
		]
	},
	['Cocktails']: {
		subtitle: 'Liquid Magic. Literally.',
		drinks: [
			'Long Island Tea',
			'Blue MF',
			'Tokyo Tea',
			'Bahama Mama',
			'Jackup Punch',
			'MAI TAI',
			'Sex on the Beach',
			'Colorado Bulldog',
			'Fruit Roll Up',
			'Lime Margarita',
			'Liquid Marijuana',
			'Blue Hawaiian',
			"Courtney's Coffee",
			'Old Fashioned',
			'Manhattan',
			'White Russian',
			'Southern Hospitality',
			'Greyhound',
			'Tequila Sunrise',
			'Iron Butterfly',
			'Black Russian',
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
})

Page();
Load();