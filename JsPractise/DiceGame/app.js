let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage = "dice" + randomNumber1 + ".png";
let randomImageSource = "images/" + randomDiceImage;
let image = document.querySelectorAll("img")[0];
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage2 = "dice" + randomNumber2 + ".png";
let randomImageSource2 = "images/" + randomDiceImage2;

document.querySelector('.btn').addEventListener('click', () => {
    document.querySelectorAll('img')[0].setAttribute('src', randomImageSource);
    document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector('h2').innerHTML = ('Player1 WIN!');
    }

    else if (randomNumber1 == randomNumber2) {
        document.querySelector('h2').innerHTML = ('Draw');
    }

    else {
        document.querySelector('h2').innerHTML = ('Player 2 WIN');
    }
})