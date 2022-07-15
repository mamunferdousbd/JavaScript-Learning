// Create a function called highestRunScore that will 
// receive a 2d array called playerInfo
// based on hight score ,return the player name


function highestRunScore(playerInfo) {
    let highestScrorer = playerInfo[0][0];
    let highScore = playerInfo[0][1];

    for (var i = 1; i < playerInfo.length; i++) {
        if (highScore < playerInfo[i][1]) {

            highScore = playerInfo[i][1];
            highestScrorer = playerInfo[i][0]
        }


    }
    return highestScrorer;

}
let playerInfo = [
    ["Mamun", 200],
    ["Hasan", 210],
    ["Abdullah", 290],
    ["Raju", 250],
    ["Kamal", 20]
];
let highscoreer = highestRunScore(playerInfo);
console.log(highscoreer);