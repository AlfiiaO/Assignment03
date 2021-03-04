let coinFlip;
let i;
let coin = prompt("How many flips?");
for (i = 0; i < coin; i++) {
    coinFlip = Math.round(Math.random());
    console.log(coinFlip);
} if (coinFlip < 1) {
    console.log(coinFlip + " Heads");
} else  {
    console.log(coinFlip + " Tails")
}
