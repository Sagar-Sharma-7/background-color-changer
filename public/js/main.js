
const title = document.querySelector("title");
const form = document.querySelector("form");
const userColor = document.querySelector("#userColor");
const changeColor = document.querySelector("#changeColor");
const randomColor = document.querySelector("#randomColor");
const container = document.querySelector(".container");
const github = document.querySelector("a");
const body = document.querySelector("body");

// text content
title.innerHTML = "Background Color Changer";
randomColor.innerHTML = "Random Color";
github.innerHTML = "Click to Contribute to my <i class='fab fa-github'></i>";

// stop auto refreshing
form.addEventListener("submit", (e) => {
    e.preventDefault();
});

// changing background color on user's demand
changeColor.addEventListener("click", () => {
    body.style.backgroundColor = userColor.value;
    userColor.style.color = userColor.value;
    github.style.color = userColor.value;
});

// random background color
randomColor.addEventListener("click", () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    userColor.value = `rgb(${r}, ${g}, ${b})`;
    userColor.style.color = `rgb(${r}, ${g}, ${b})`;
    github.style.color = `rgb(${r}, ${g}, ${b})`;
});


