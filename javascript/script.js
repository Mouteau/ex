var bonjour=true
var timer
document.getElementById("but").addEventListener("click",()=>{
    console.log("click toto",bonjour)

    if(bonjour===true)
    {
        document.getElementById("presentation").innerHTML="au revoir"
        bonjour=false
    }
    else
    {
        document.getElementById("presentation").innerHTML="rebonjour"
        bonjour=true
    }

    

    var i=0
    window.clearInterval(timer)
    timer=window.setInterval(()=>{
        document.getElementById("presentation").innerHTML=i
        i=i+1
    },1000)
    

})