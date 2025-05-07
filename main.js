"use strict";

// const container = document.querySelector(".container");
const artDescription = document.querySelector(".art__description");

// hide author details on small screen
const removeAuthor = document.querySelector("#hide-author");
const removeAvatar = document.querySelector("#hide-img");
const hideAuthor = document.querySelector("#author-name");
const changeBackground = document.getElementById("change-bg");
const btnsGrp = document.querySelectorAll(".btn");
const btnShare = document.querySelector("#btn-share");

const socialsVisible = document.querySelector("#social-visible");
console.log(socialsVisible);
const socialPosition = document.querySelector("#social-position");
const btnsSocial = document.querySelector(".btn__grp--social");
const bubbleShape = document.querySelector("#triangle-shape");
let width = screen.width;

btnShare.addEventListener("click", function () {
  if (width < 768) {
    alert(1);
    socialsVisible.classList.remove("hidden");
    bubbleShape.classList.add("hidden");
    removeAuthor.classList.add("hidden");
    removeAvatar.classList.add("hidden");
    hideAuthor.classList.add("hidden");
    changeBackground.style.backgroundColor = "hsl(217, 19%, 35%)";
    changeBackground.style.height = "4.75rem";
    changeBackground.style.marginTop = "1.875rem";
    changeBackground.style.borderBottomLeftRadius = ".625rem";
    changeBackground.style.borderBottomRightRadius = ".625rem";
    artDescription.style.padding = "0";
  } else if (width > 768) {
    alert(2);
    socialsVisible.classList.remove("hidden");
    bubbleShape.classList.remove("hidden");
    removeAuthor.classList.remove("hidden");
    removeAvatar.classList.remove("hidden");
    hideAuthor.classList.remove("hidden");
    socialPosition.style.position = "relative";
    socialsVisible.style.width = "15.5rem";
    socialsVisible.style.position = "absolute";
    socialsVisible.style.bottom = "50px";
    socialsVisible.style.left = "-64px";
    btnsSocial.style.paddingBlock = ".7015rem";
    btnsSocial.style.paddingInline = "2.375rem";
  }
});
