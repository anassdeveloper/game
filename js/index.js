const btn = document.querySelector('.btn');



btn.addEventListener('click', function(){
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;

  var randomDiceImage = "dice" +randomNumber1+".png";

 var randomDiceResource1 = "img/" + randomDiceImage;

 var image1 = document.querySelectorAll('img')[0];

  image1.setAttribute("src", randomDiceResource1);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImageSource2 = "img/dice" + randomNumber2 + ".png";

    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
document.querySelector("h1").innerHTML = "Draw!";
}
});




/*const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const heading = document.querySelector('h1');

addEventListener('load', refresh());

function refresh(){
    const randomNumber1 = Math.floor(Math.random() * 6) + 1 ;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1 ;
    img1.src = `img/dice${randomNumber1}.png`;
    img2.src = `img/dice${randomNumber2}.png`;

    if( randomNumber1 > randomNumber2){
        
        heading.innerText = "Player 1 is win";
    }else if(randomNumber2 > randomNumber1){
        heading.innerText = "Player 2 is win";
    }else {
        heading.innerText = "ta3adol"
    }
    
}
*/