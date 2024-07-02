function initLocomotiveScroll() {
  return new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    multiplier: 0.8,
  });
}

initLocomotiveScroll();

function toggleDarkMode() {
  const ancorTags = document.querySelectorAll("a");

  const para = document.querySelectorAll("p");

  const button = document.querySelectorAll("button");

  const container = document.querySelectorAll(".details-container");

  const contInfo = document.querySelectorAll(".contact-info-upper-container");

  const hamburgerSpan = document.querySelectorAll("span");

  const darkIcon = document.querySelectorAll(".icon");

  const checkbox = document.querySelector("#toggle-1");

  const body = document.body;

  if (checkbox.checked) {
    body.classList.remove("dark-mode");

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
  } else {
    body.classList.add("dark-mode");

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
}

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
