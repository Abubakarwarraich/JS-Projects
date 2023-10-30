const colors = ["yellow","orange","grey","green","blue"];
const btn = document.getElementById("btn");
const bColor = document.querySelector(".color");

btn.addEventListener("click", function(){

    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    bColor.textContent = colors[randomNumber];
});
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length) ;
}
