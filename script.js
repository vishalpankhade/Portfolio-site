function initLocomotiveScroll() {
  scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    multiplier: 0.8,
  });
}

initLocomotiveScroll();

// Function to load the theme from localStorage
function loadTheme() {
  const theme = localStorage.getItem("theme") || {};
  const checkbox = document.querySelector("#toggle-1");

  if (theme === "dark") {
    checkbox.checked = true;
    document.body.classList.add("dark-mode");
    addDark();
  } else {
    checkbox.checked = false;
  }
}

// Load the theme when the page loads
window.onload = loadTheme;

const ancorTags = document.querySelectorAll("a");

const para = document.querySelectorAll("p");

const button = document.querySelectorAll("button");

const container = document.querySelectorAll(".details-container");

const contInfo = document.querySelectorAll(".contact-info-upper-container");

const hamburgerSpan = document.querySelectorAll("span");

const darkIcon = document.querySelectorAll(".icon");

const switchImgBtn = document.querySelectorAll(".switch-btn");

function toggleDarkMode() {
  const checkbox = document.querySelector("#toggle-1");

  const body = document.body;

  if (checkbox.checked) {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
    removeDark();
  } else {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
    addDark();
  }
}

function removeDark() {
  switchImgBtn.forEach((img) => {
    img.src = img.getAttribute("src-light");
  });

  ancorTags.forEach((anchor) => {
    anchor.classList.remove("white");
  });

  para.forEach((pa) => {
    pa.classList.remove("white");
  });

  button.forEach((btn) => {
    btn.classList.remove("dark-mode-btn");
  });

  container.forEach((cont) => {
    cont.classList.remove("container-color");
    cont.classList.add("color-container");
  });

  contInfo.forEach((coInfo) => {
    coInfo.classList.remove("contInfo-color");
  });

  hamburgerSpan.forEach((span) => {
    span.classList.remove("hamburger-span");
  });

  darkIcon.forEach((icon) => {
    icon.classList.remove("filter-dark");
  });
}

function addDark() {
  switchImgBtn.forEach((img) => {
    img.src = img.getAttribute("src-dark");
  });

  ancorTags.forEach((anchor) => {
    anchor.classList.add("white");
  });

  para.forEach((pa) => {
    pa.classList.add("white");
  });

  button.forEach((btn) => {
    btn.classList.add("dark-mode-btn");
  });

  container.forEach((cont) => {
    cont.classList.remove("color-container");
    cont.classList.add("container-color");
  });

  contInfo.forEach((coInfo) => {
    coInfo.classList.add("contInfo-color");
  });

  hamburgerSpan.forEach((span) => {
    span.classList.add("hamburger-span");
  });

  darkIcon.forEach((icon) => {
    icon.classList.add("filter-dark");
  });
}

const menu = document.querySelector(".menu-links");
const icon = document.querySelector(".hamburger-icon");

icon.addEventListener("click", (e) => {
  e.stopPropagation();
  icon.classList.toggle("open");
  menu.classList.toggle("open");
});

window.addEventListener("click", (e) => {
  e.stopPropagation();
  icon.classList.remove("open");
  menu.classList.remove("open");
});

document.querySelector("#goToTopButton").addEventListener("click", () => {
  // Using Locomotive Scroll's scrollTo method to scroll to the top
  scroll.scrollTo(0);

  // setTimeout(() => {
  //   location.reload();
  // }, 2500);
});
