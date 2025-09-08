const title = document.getElementById("main-title");
const infoParagraphs = document.getElementsByClassName("info");
const spans = document.getElementsByTagName("span");
const firstInfo = document.querySelector(".info");
const allInfo = document.querySelectorAll(".info");

title.style.color = "blue";
title.style.textAlign = "center";

for (let i = 0; i < infoParagraphs.length; i++) {
  infoParagraphs[i].style.backgroundColor = "#f0f0f0";
}

spans[0].textContent = "Updated span content";
firstInfo.classList.add("highlight");

allInfo.forEach((el, index) => {
  el.innerText += ` (Paragraph ${index + 1})`;
});

const button = document.getElementById("clickMe");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  output.textContent = "🎉 Button was clicked!";
});