
const nav = document.querySelector(".navHeader");
const modal = document.getElementById("modal");


nav.classList.remove("open");

modal.addEventListener("click", () =>{
    nav.classList.toggle("open")
});

window.addEventListener("scroll", () => {
    // Se o menu estiver aberto (a classe "open" estiver presente)
    if (nav.classList.contains("open")) {
        // Remover a classe "open" para fechar o menu
        nav.classList.remove("open");
    }
});



