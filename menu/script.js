let module = {};
let container = document.querySelector('.container');

function Module(Name, Function) {
	module[Name] = Function;
	
	return module[Name];
}

let New = Module('new', function(Name) {
	let clone = document.querySelector('.button').cloneNode(true);
	let arrow = document.querySelector('.arrow-icon').cloneNode(true);

	clone.addEventListener('click', function() {
		sessionStorage.setItem('__list.name', Name);
		window.location.href = '/menu/list';
	})
	
	clone.style.display = 'block';
	clone.textContent = Name;
	clone.appendChild(arrow);
	container.appendChild(clone);
})

New('Beers');
New('Seltzers');
New('Shots');
New('Cocktails');
// New('Martinis');
New('Wines');
New('Non-Alcoholic');