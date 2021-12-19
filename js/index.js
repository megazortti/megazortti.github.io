var loadingBar = document.getElementById("loading-content1");
var inputText = document.getElementById("input-text1")
var plug = document.getElementById("plug");
inputText.addEventListener("keyup", ()=>{
    if(inputText.value >= 0 && inputText.value <= 100){
        loadingBar.style=`width: ${inputText.value}%`
        if(inputText.value <= 25){
            loadingBar.style.backgroundColor="red";
        }
        else if(inputText.value <= 50){
            loadingBar.style.backgroundColor="yellow";
        }
        else{
            loadingBar.style.backgroundColor="green";
        }    
    }
    
});