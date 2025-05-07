"use strict";

const artDescription = document.querySelector(".art__description");
const removeAuthor = document.querySelector("#hide-author");
const removeAvatar = document.querySelector("#hide-img");
const hideAuthor = document.querySelector("#author-name");
const changeBackground = document.getElementById("change-bg");
const btnsGrp = document.querySelectorAll(".btn");
const btnShare = document.querySelector("#btn-share");

const socialsVisible = document.querySelector("#social-visible");
const socialPosition = document.querySelector("#social-position");
const btnsSocial = document.querySelector(".btn__grp--social");
const bubbleShape = document.querySelector("#triangle-shape");

let width = screen.width;

const hide = function () {
  bubbleShape.classList.add("hidden");
  removeAuthor.classList.add("hidden");
  removeAvatar.classList.add("hidden");
  hideAuthor.classList.add("hidden");
};

const makeVisible = function () {
  bubbleShape.classList.remove("hidden");
  removeAuthor.classList.remove("hidden");
  removeAvatar.classList.remove("hidden");
  hideAuthor.classList.remove("hidden");
};

const changeOwnerBackground = function () {
  changeBackground.style.backgroundColor = "hsl(217, 19%, 35%)";
  changeBackground.style.height = "4.75rem";
  changeBackground.style.marginTop = "1.875rem";
  changeBackground.style.borderBottomLeftRadius = ".625rem";
  changeBackground.style.borderBottomRightRadius = ".625rem";
};

const styleSocialBtns = function () {
  socialsVisible.classList.remove("hidden");
  socialPosition.style.position = "relative";
  socialsVisible.style.width = "15.5rem";
  socialsVisible.style.position = "absolute";
  socialsVisible.style.bottom = "50px";
  socialsVisible.style.left = "-112px";
  btnsSocial.style.paddingBlock = ".7015rem";
  btnsSocial.style.paddingInline = "2.375rem";
};

btnShare.addEventListener("click", function () {
  if (width < 768) {
    socialsVisible.classList.remove("hidden");
    hide();
    changeOwnerBackground();
    artDescription.style.padding = "0";
  } else if (width >= 768) {
    makeVisible();
    styleSocialBtns();
  }
});
