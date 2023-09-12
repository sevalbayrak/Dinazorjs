var dinazors =document.getElementById("dinazo");
var kaptusal = document.getElementById("kap");

function zip(){
    if (dinazors.classList != "zip"){
        dinazors.classList.add("zip");
        

        setTimeout(function (){
            dinazors.classList.remove("zip");
        } ,300)
    }


  
}
var yasmak = setInterval(function(){
    var dinazortop = parseInt(window.getComputedStyle(dinazors).getPropertyValue("top"));
    var kaptusleft = parseInt(window.getComputedStyle(kaptusal).getPropertyValue("left"));

    if(kaptusleft < 50 && kaptusleft > 0 && dinazortop >= 150){
        alert("oyun bitti");
    }
    
},10);

document.addEventListener("keydown", function(event){

    zip();
})