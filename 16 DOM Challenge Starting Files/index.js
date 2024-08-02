document.querySelector("ul").lastElementChild.innerHTML = "Elizangela";

lista = document.getElementsByTagName("li");

lista[1].innerHTML = "Melinda";

document.getElementsByTagName("li")[2].style.color = "green";

document.getElementsByClassName("btn")[0].style.color = "blue";

document.querySelector("li a").style.color = "red";

document.getElementsByClassName("btn")[0].style.backgroundColor = "yellow";
document.getElementsByClassName("btn")[0].style.borderRadius = "25px";


document.getElementsByTagName("h1")[0].classList.add("huge");

document.querySelector("a").setAttribute("href", "https://www.w3schools.com/jsref/prop_style_borderradius.asp");
