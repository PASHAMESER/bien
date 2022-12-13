let btnSearch = document.getElementById("btnSearch");
let iconSearch = document.getElementById("iconSearch");
let button = document.getElementById("button");
let imgUser = document.querySelectorAll(".boxImg img")[0];
window.onload = function () {
  //  setTimeout(()=>{
  //    button.click()
  //  },4000)
  //  clearTimeout()
  // if (btnSearch.focus()) {
  //   // iconSearch.classList.add("displayToggle")
  //   iconSearch.classList.add("displayToggle")
  //   console.log("add")
  // }else {
  //   // iconSearch.classList.remove("displayToggle")
  //   // iconSearch.classList.add("displayToggle")
  //   console.log("re")
  // }
};

let bigBoxComment = document.querySelectorAll(".bigBoxComment")[0];
let divcontent = document.querySelector(".divcontent");
let boxImg = document.querySelector(".boxImg");

bigBoxComment.addEventListener("mouseover", function () {
  imgUser.style.cssText = `border: none;`;
  boxImg.classList.add("classBorderSolid");
  divcontent.classList.add("classBorderSolid");
  boxImg.classList.add("classImgSize");
});

let imgScreenshot = Array.from(document.querySelectorAll(".divContentImg img"));
console.log(imgScreenshot);
let spanClose = document.getElementById("spanClose");
let containrBoxShow = document.querySelector(".containrBoxShow");

let myArray = imgScreenshot.forEach((item) => {
  item.onclick = function () {
    containrBoxShow.style.transform = "scale(1)";
    spanClose.onclick = function () {
      containrBoxShow.style.transform = "scale(0)";
    };
  };
});

myArray();
