document.getElementById("cb").hidden = false
document.getElementById("cb2").hidden = false
document.getElementById("cb3").hidden = false
document.getElementById("cb4").hidden = false
document.getElementById("cb5").hidden = false

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
  }
})

document.getElementById("cb3").addEventListener("click", () => {
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
