const menuToggle = document.getElementById("mobile-menu");
const menu = document.getElementById("menu");
const menuLinks = document.querySelectorAll(".menu a");

menuToggle.addEventListener("click", function(){
    menu.classList.toggle("active");
});

// Cerrar menú al hacer clic en un enlace
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});
