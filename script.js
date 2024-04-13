let production = true;
let bgimg = document.querySelector('.bg-image');

if (production) {
	bgimg.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)), url('/drinkmenu/media/Mad-Jack-s-Interior-with-TVs_6B4AD80B-5056-A36F-233C860925E98C0C-6b4ad7745056a36_6b4ad86d-5056-a36f-23078ba42eb6533e-min.png')`;
} else {
	bgimg.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)), url('/media/Mad-Jack-s-Interior-with-TVs_6B4AD80B-5056-A36F-233C860925E98C0C-6b4ad7745056a36_6b4ad86d-5056-a36f-23078ba42eb6533e-min.png')`;
}

const serverNames = [
	"Jess",
	"Brittany",
	"Tommy",
	"Alexis",
	"Canelia",
	"Hailey",
	"Jen",
	"Chris"
];

// Function to get URL parameters
function GetParams(URL) {
	const Params = {};
	URL.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(M, Key, Value) {
		Params[Key] = decodeURIComponent(Value);
	});

	return Params;
}

function GetGreeting() {
	const hour = new Date().getHours();

	if (hour >= 5 && hour < 12) {
		return "Good Morning,";
	} else if (hour >= 12 && hour < 18) {
		return "Good Afternoon,";
	} else {
		return "Good Evening,";
	}
}


// Get URL parameters
const urlParams = GetParams(window.location.href);
const sectionNumber = urlParams.section;
const tableNumber = urlParams.table;

// Use sectionNumber and tableNumber to customize your website's content
if (sectionNumber !== undefined && tableNumber !== undefined) {
	sessionStorage.setItem('__section.number', sectionNumber);
	sessionStorage.setItem('__table.number', tableNumber);
	console.log("Section Number:", sectionNumber);
	console.log("Table Number:", tableNumber);
}

const Button = document.querySelector('.agree');
Button.disabled = true;

setTimeout(() => {
	Button.disabled = false;
	Button.classList.add('active');
	
	Button.addEventListener('click', function() {
		localStorage.setItem('__agree.clicked', true);
		if (production) {
			window.location.href = '/drinkmenu/menu/';
		} else {
			window.location.href = '/menu';
		}
	});
}, 0);

// THE FUNCTION ABOVE IS IMPORTANT! IT GETS THE SECTION AND TABLE NUMBER AUTOMATICALLY FOR YOU!

const serverName = serverNames[sectionNumber - 2]; // Adjust for zero-based indexing

// Use the serverName variable to further customize the experience.
// serverName !== undefined ? document.getElementById('server').innerHTML = 'your Server is ' + serverName + '.' : document.getElementById('server').innerHTML = 'welcome to Mad Jacks.';
// document.getElementById('greeting').innerHTML = GetGreeting();