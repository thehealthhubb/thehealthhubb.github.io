"use strict";

// Variables

const toggleButton = document.querySelector(".toggleButton");
const dropdown = document.querySelector("#dropdown");
const taskbarDLink = document.querySelector(".taskbarDLink");
const taskbarDWrap = document.querySelector(".taskbarDWrap");
const taskbarDList = document.querySelector(".taskbarDList");
const menubtn = document.querySelector(".menubtn");
const taskbar = document.querySelector("#taskbar");
const root = document.querySelector(":root");
const body = document.querySelector("body");
const html = document.querySelector("html");
const cursor = document.querySelector("#cursor");
const container = document.querySelectorAll(".container");

// Responsive Taskbar

function burgerToggles() {
  dropdown.classList.toggle("open");
  menubtn.classList.toggle("ri-close-line");
  menubtn.classList.toggle("ri-menu-line");
}

toggleButton.addEventListener("click", burgerToggles);
taskbarDLink.addEventListener("click", burgerToggles);
taskbarDWrap.addEventListener("click", burgerToggles);
taskbarDList.addEventListener("click", burgerToggles);

container.onclick = function () {
  dropdown.classList.remove("open");
  menubtn.classList.remove("ri-close-line");
  menubtn.classList.add("ri-menu-line");
};

// Taskbar Color

window.addEventListener("load", function () {
  if (window.scrollY > 25) {
    taskbar.classList.add("scrolled");
    progressBar.classList.add("scrolled");
    progressBarFill.classList.add("scrolled");
  } else {
    taskbar.classList.remove("scrolled");
    progressBar.classList.remove("scrolled");
    progressBarFill.classList.remove("scrolled");
  }
});

document.addEventListener("scroll", () => {
  if (window.scrollY > 25) {
    taskbar.classList.add("scrolled");
    progressBar.classList.add("scrolled");
    progressBarFill.classList.add("scrolled");
  } else {
    taskbar.classList.remove("scrolled");
    progressBar.classList.remove("scrolled");
    progressBarFill.classList.remove("scrolled");
  }
});

// Taskbar Height

root.style.setProperty("--taskbar-height", "${#taskbar.clientHeight}px");

// Progress Bar


window.onscroll = function () {
  var containerHeight;
  var containerPos;
  var containerPer;
  var diff;
  var progressBarPer;
  containerHeight = body.offsetHeight - window.innerHeight;
  containerPos = body.getBoundingClientRect();
  diff = containerHeight + containerPos.top;
  containerPer = (diff / containerHeight) * 100;
  progressBarPer = Math.floor(100 - containerPer);
  progressBarFill.style.width = progressBarPer + "%";
};
