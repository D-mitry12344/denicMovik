let menu = document.querySelector(".menuHead");
let listHead = document.querySelector(".listHead");
let closeMenu = document.querySelector(".menuClose")
menu.addEventListener("click", function(){
	listHead.style.display="flex";
	closeMenu.style.display="flex";
	menu.style.display="none";
})

closeMenu.addEventListener("click", function(){
	listHead.style.display="none";
	closeMenu.style.display="none";
	menu.style.display="flex";
})