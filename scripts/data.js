const event = new CustomEvent('__share_data', {
    detail: {
        _production: true,
        _shared_data: {
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
                extra_data: false,
                clickable: false,
                drinks: [
                    'Coors Light',
                    'Miller Lite',
                    'Fresh Squeezed IPA',
                    'Castle Danger Cream Ale',
                    'Downeast (ask for flavor)',
                    'Blue Moon',
                    'Warpigs Foggy Geezer',
                    'Michelob Golden Light',
                    'Odell Brewery Oktoberfest',
                    'Surly Furious',
                    'Summit EPA',
                    'Shiner Bock',
                    'Liftbridge Mango Blonde',
                    'Kona Big Wave',
                    'Busch Light',
                    'Samuel Adams Oktoberfest',
                    'Angry Orchard',
                    'Saga Hazy IPA',
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
                    'White Claw (Grape)',
                    'White Claw (Blackberry)',
                    'Carbliss (Lemon-Lime)',
                    'Carbliss (Black Raspberry)',
                    'Lift Bridge (Grape Ape)',
                    'Lift Bridge (Orange)',
                    'Sun Cruiser (Iced Tea)',
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
                    'Liquid Marijuana': {
                        description: 'Captain, Malibu, Midori, Blue Caraco, Pineapple.'
                    },
                    'Southern Hospitality': {
                        description: 'Southern Comfort, Watermelon Schnapps, Red Bull.'
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
                    'Bloody Mary': {
                        description: 'Vodka, Bloody Mix.'
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
                    'Strawberry Margarita': {
                        description: 'Tequila, Triple Sec, Margarita Mix, Strawberry Puree.'
                    },
                    'Blue Hawaiian': {
                        description: 'Malibu, Vodka, Sour, Blue Caraco.'
                    },
                    'Courtney\'s Coffee': {
                        description: 'Vodka, Bailey\'s, Kahlua, Iced Coffee.'
                    },
                    'Moscow Mule': {
                        description: 'Vodka, Lime Juice, Ginger Beer.'
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
                    'Chardonnay (Hess)',
                    'Sauvignon Blanc (Sand Point)',
                    'Cabernet Sauvignon‎ ‎ ‎ ‎(Sycamore Lane)',
                    'Moscato (Sand Point)',
                    'Pinot Grigio (Sand Point)',
                ]
            },
            ['Liquors']: {
                subtitle: `We just might have what you want.`,
                extra_data: false,
                clickable: false,
                drinks: [
                    '__Vodkas',
                    'Rail',
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
                    'Rail',
                    'Tanqueray',
                    'Sapphire',
                    'Beefeater',

                    '__Tequila',
                    'Rail',
                    'Jose Cuervo',
                    '1800',
                    'Don Julio Blanco',
                    'Don Julio Reposado',
                    'Patron Blanco',
                    'Casamigos Blanco',
                    'Casamigos Reposado',

                    '__Rum',
                    'Rail',
                    'Captain Morgan',
                    'Bacardi',
                    'Bacardi Limon',
                    'Bacardi Razz',
                    'Cruzan Coconut',
                    'Myers\'s Dark',

                    '__Whiskey',
                    'Rail',
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
                    'Rail',
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
                    '__Beers',
                    'Heineken 0.0%',
                    'Budweiser 0.0%',

                    '__Caffeinated Drinks',
                    'Red Bull',
                    'Red Bull (Sugar Free)',

                    '__Fruit Juices',
                    'Cranberry Juice',
                    'Grapefruit Juice',
                    'Orange Juice',
                    'Pineapple Juice',

                    '__Miscellaneous',
                    'Shirley Temple',
                    'Cherry Limeade',
                    'Bottled Water',
                    'Pepsi Products'
                ]
            }
        }
    }
});

document.dispatchEvent(event);
