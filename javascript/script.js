document.getElementById("bedut").hidden = false
document.getElementById("bdebut").hidden = false

document.getElementById("bedut").innerHTML
document.getElementById("option").hidden = false

document.getElementById("option").addEventListener("click", () => {
  document.getElementById("bedut").hidden = true
  document.getElementById("bdebut").hidden = true
  document.getElementById("option").hidden = true
  document.getElementById("back").hidden = false
  document.getElementById("mn").hidden = false
})

document.getElementById("back").addEventListener("click", () => {
  document.getElementById("back").hidden = true
  document.getElementById("mn").hidden = true
  document.getElementById("bedut").hidden = false
  document.getElementById("bdebut").hidden = false
  document.getElementById("option").hidden = false
})

document.getElementById("mn").addEventListener("click", () => {
  document.getElementById("mn").style.backgroundColor = "black"
  document.getElementById("bdebut").style.backgroundColor = "black"
})

document.getElementById("bdebut").addEventListener("click", () => {
  if (document.getElementById("bdebut").style.backgroundColor === "black") {
    document.getElementById("but").style.backgroundColor = "black"
    document.getElementById("sar").style.backgroundColor = "black"
    document.getElementById("bdebut").style.backgroundColor = "black"
    document.getElementById("bdbd1").style.backgroundColor = "black"
    document.getElementById("bdbd2").style.backgroundColor = "black"
    document.getElementById("bdbd3").style.backgroundColor = "black"
    document.getElementById("bdbd4").style.backgroundColor = "black"
    document.getElementById("rj").style.backgroundColor = "black"
  }
  document.getElementById("bedut").hidden = true
  document.getElementById("bdebut").hidden = true
  document.getElementById("option").hidden = true
  document.getElementById("sar").hidden = false
  document.getElementById("but").hidden = false
  document.getElementById("cbr").hidden = false
})

document.getElementById("sar").addEventListener("click", () => {
  document.getElementById("but").style.backgroundColor = "red"
})

document.getElementById("but").addEventListener("click", () => {
  if (document.getElementById("but").style.backgroundColor === "red") {
    document.getElementById("sar").hidden = true
    document.getElementById("but").hidden = true
    document.getElementById("cbr").hidden = true
    document.getElementById("bj").hidden = false
    document.getElementById("rj").hidden = false
  }
})
document.getElementById("rj").addEventListener("click", () => {
  document.getElementById("bj").hidden = true
  document.getElementById("rj").hidden = true
  document.getElementById("bd1").hidden = false
  document.getElementById("bd2").hidden = false
  document.getElementById("rtc").hidden = false
})

document.getElementById("bdbd1").addEventListener("click", () => {
  if (document.getElementById("bdbd1").style.backgroundColor === "black") {
    document.getElementById("bdbd1").hidden = true
    document.getElementById("rtc").hidden = true
  }
  if (document.getElementById("bdbd2").style.backgroundColor === "black") {
    document.getElementById("bdbd2").hidden = true
  }
  if (document.getElementById("bdbd3").style.backgroundColor === "black") {
    document.getElementById("bdbd3").hidden = true
    document.getElementById("rtc").hidden = true
  }
  if (document.getElementById("bdbd4").style.backgroundColor === "black") {
    document.getElementById("bdbd4").hidden = true
    document.getElementById("rtc").hidden = true
    document.getElementById("vt").hidden = false
    document.getElementById("bvt").hidden = false
  }
})

document.getElementById("bdbd2").addEventListener("click", () => {
  if (document.getElementById("bdbd1").style.backgroundColor === "black") {
    document.getElementById("bdbd1").hidden = true
    document.getElementById("rtc").hidden = true
  }
  if (document.getElementById("bdbd2").style.backgroundColor === "black") {
    document.getElementById("bdbd2").hidden = true
  }
  if (document.getElementById("bdbd3").style.backgroundColor === "black") {
    document.getElementById("bdbd3").hidden = true
    document.getElementById("rtc").hidden = true
  }
  if (document.getElementById("bdbd4").style.backgroundColor === "black") {
    document.getElementById("bdbd4").hidden = true
    document.getElementById("rtc").hidden = true
    document.getElementById("vt").hidden = false
    document.getElementById("bvt").hidden = false
  }
})

document.getElementById("bdbd3").addEventListener("click", () => {
  if (document.getElementById("bdbd1").style.backgroundColor === "black") {
    document.getElementById("bdbd1").hidden = true
    document.getElementById("rtc").hidden = true
  }
  if (document.getElementById("bdbd2").style.backgroundColor === "black") {
    document.getElementById("bdbd2").hidden = true
  }
  if (document.getElementById("bdbd3").style.backgroundColor === "black") {
    document.getElementById("bdbd3").hidden = true
    document.getElementById("rtc").hidden = true
  }
  if (document.getElementById("bdbd4").style.backgroundColor === "black") {
    document.getElementById("bdbd4").hidden = true
    document.getElementById("rtc").hidden = true
    document.getElementById("vt").hidden = false
    document.getElementById("bvt").hidden = false
  }
})

document.getElementById("bdbd4").addEventListener("click", () => {
  if (document.getElementById("bdbd1").style.backgroundColor === "black") {
    document.getElementById("bdbd1").hidden = true
    document.getElementById("rtc").hidden = true
  }
  if (document.getElementById("bdbd2").style.backgroundColor === "black") {
    document.getElementById("bdbd2").hidden = true
  }
  if (document.getElementById("bdbd3").style.backgroundColor === "black") {
    document.getElementById("bdbd3").hidden = true
    document.getElementById("rtc").hidden = true
  }
  if (document.getElementById("bdbd4").style.backgroundColor === "black") {
    document.getElementById("bdbd4").hidden = true
    document.getElementById("rtc").hidden = true
    document.getElementById("vt").hidden = false
    document.getElementById("bvt").hidden = false
  }
})
document.getElementById("bvt").addEventListener("click", () => {
  window.location.href = "level2.html"
  //document.getElementById("vt").hidden = true
  //document.getElementById("bvt").hidden = true
  //document.getElementById("cb").hidden = false
  //document.getElementById("cb2").hidden = false
  //document.getElementById("cb3").hidden = false
  //document.getElementById("cb4").hidden = false
  //document.getElementById("cb5").hidden = false
})
document.getElementById("cb5").addEventListener("click", () => {
  document.getElementById("cb5").hidden = true
})

document.getElementById("cb3").addEventListener("click", () => {
  if (document.getElementById("cb5").hidden === false) {
    document.getElementById("cb7").hidden = false
    document.getElementById("cb8").hidden = false
    document.getElementById("cb9").hidden = false
    document.getElementById("cb").hidden = true
    document.getElementById("cb2").hidden = true
    document.getElementById("cb3").hidden = true
    document.getElementById("cb4").hidden = true
    document.getElementById("cb5").hidden = true
  }
  if (document.getElementById("cb5").hidden === true) {
    document.getElementById("cb").hidden = true
    document.getElementById("cb2").hidden = true
    document.getElementById("cb3").hidden = true
    document.getElementById("cb4").hidden = true
    document.getElementById("cb5").hidden = true
    document.getElementById("cb10").hidden = false
    document.getElementById("cb9").hidden = false
  }
})

document.getElementById("cb6").addEventListener("click", () => {
  document.getElementById("cb6").hidden = true
  document.getElementById("cb7").hidden = false
})
