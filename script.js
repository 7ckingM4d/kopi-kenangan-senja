// Toggle class active 

const navbarNav = document.querySelector
('.navbar-nav')

// On-Click Hamburger Menu 
document.querySelector ('#hamburger-menu').onclick = () => {
	navbarNav.classList.toggle('active');
};

// Klik Di Luar Navbar Langsung - Close 

const hamburger = document.querySelector ('#hamburger-menu');

document.addEventListener('click',function(e) {

	if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
		navbarNav.classList.remove('active')
	}
})