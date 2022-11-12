let btnSearch = document.getElementById("btnSearch")
let iconSearch = document.getElementById("iconSearch")
let button = document.getElementById("button")

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
  
}

let bigBoxComment = document.querySelectorAll(".bigBoxComment")[0]
let divcontent = document.querySelector(".divcontent")
let boxImg = document.querySelector(".boxImg")

bigBoxComment.addEventListener('mouseover' , function () {
  boxImg.classList.add("classBorderSolid")
  divcontent.classList.add("classBorderSolid")
  boxImg.classList.add("classImgSize")
})
