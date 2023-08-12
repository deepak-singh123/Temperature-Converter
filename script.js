const BTN= document.querySelector(".btn");
const OUT=document.querySelector(".out");
var out_val=document.querySelector("p");

function show(){
        
    var inputElement = document.getElementById("inp-temp");
    var inputValue = inputElement.value;
  
    var selectElement = document.getElementById("temp");
    var selectedOption = selectElement.options[selectElement.selectedIndex].value;
        console.log("Entered temperature: " + inputValue);
        console.log("Selected unit: " + selectedOption);

    if(selectedOption=="C"){
        var OUTPUT= (inputValue * (9 / 5)) + 32;
        OUTPUT=Math.floor(OUTPUT * 100) / 100;
        var so ="F";
    }
    else{
        var OUTPUT=(inputValue - 32) * 5/9;
        OUTPUT=Math.floor(OUTPUT * 100) / 100;
        var so ="C";
    }
        OUT.classList.remove("hidden");
        
        out_val.innerHTML=OUTPUT+"&deg"+so;

  }



 