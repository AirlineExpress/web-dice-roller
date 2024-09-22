function diceRoller() {

    /* This will assign the dice to their slots and then roll their value*/
    const dice1 = document.getElementById("dice1");
    const dice2 = document.getElementById("dice2");
    const dice3 = document.getElementById("dice3");
    const dice4 = document.getElementById("dice4");
    const dice5 = document.getElementById("dice5");

    dice1.value = Math.floor(Math.random()*6)+1;
    dice2.value = Math.floor(Math.random()*6)+1;
    dice3.value = Math.floor(Math.random()*6)+1;
    dice4.value = Math.floor(Math.random()*6)+1;
    dice5.value = Math.floor(Math.random()*6)+1;
}