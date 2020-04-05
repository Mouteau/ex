


document.getElementById("sar").hidden=false
document.getElementById("but").hidden=false
document.getElementById("cbr").hidden=false

document.getElementById("sar").addEventListener("click",()=>{
    document.getElementById("but").style.backgroundColor='red'
})

document.getElementById("but").addEventListener("click",()=>{
    if(document.getElementById("but").style.backgroundColor==='red')
    {
        document.getElementById("sar").hidden=true
        document.getElementById("but").hidden=true
        document.getElementById("cbr").hidden=true
        document.getElementById("bj").hidden=false
        document.getElementById("rj").hidden=false
    }
})
document.getElementById("rj").addEventListener("click",()=>{
    document.getElementById("bj").hidden=true
    document.getElementById("rj").hidden=true
    document.getElementById("db").hidden=false
    document.getElementById("db2").hidden=false
    document.getElementById("rtc").hidden=false
})