let __production = true;

let navmodule = {};
let _list = sessionStorage.getItem('__list.name') == 'Specialty' ? 'Specialty Drinks' : sessionStorage.getItem('__list.name');

const HamburgerIcon = document.getElementById('burger');
let topbar = document.querySelector('.topbar-rightcontent');
let dynamicContainer = document.querySelector('.dynamic');
let sample = document.querySelector('.sample');

HamburgerIcon.addEventListener('click', function () {
	const Menu = document.getElementById('hamburger-menu');

	if (HamburgerIcon.checked) {
		Menu.classList.add('active');
		Menu.style.left = '0%';
		topbar.style.position = 'fixed';
		document.body.classList.add('disable-scroll');
	} else {
		Menu.classList.remove('active');
		Menu.style.left = '100%';
		topbar.style.position = 'absolute';
		document.body.classList.remove('disable-scroll');
	}
});

function Module(Name, Function) {
	navmodule[Name] = Function;
	return navmodule[Name];
}

let GetParamsNav = Module('__get_params', function(URL) {
	const Params = {};
	URL.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(M, Key, Value) {
		Params[Key] = decodeURIComponent(Value);
	});

	return Params;
});

let NewNav = Module('new', function(Name) {
	let sampleClone = sample.cloneNode(true);
	let sampleCloneA = sampleClone.querySelector('.a');
	let br = document.createElement('br');

	if (Name == _list && _list !== '__home') {
		sampleCloneA.classList.add('current');
	}

	let _dlistnav = GetParamsNav(window.location.href).d;

	sampleCloneA.addEventListener('click', function() {
		if (!_dlistnav == undefined && Name == _list) return;
		sessionStorage.setItem('__list.name', Name);
		if (__production) {
			window.location.href = '/drinkmenu/menu/list';
		} else {
			window.location.href = '/menu/list';
		}
	})

	sampleClone.classList.remove('sample');
	sampleCloneA.textContent = Name;
	sampleClone.appendChild(sampleCloneA);
	dynamicContainer.appendChild(sampleClone);
	dynamicContainer.appendChild(br);
})

NewNav('Beers');
NewNav('Tap Beers');
NewNav('Seltzers');
NewNav('Shots');
NewNav('Cocktails');
NewNav('Martinis');
NewNav('Wines');
NewNav('Liquors');
NewNav('Non-Alcoholic');