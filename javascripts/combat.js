// Global Variables
var aStrength = 0;
var aHealth = 0;
var aPower = 0;
var outputPlayer ="";
var bStrength = 0;
var bHealth = 0;
var bPower = 0;
var outputEnemy ="";
var x = "";
var playerPic = "";
var enyPic = "";

// Listeners
// document.getElementById("loadIntro").addEventListener("click", loadDisplay);
document.getElementById("attack").addEventListener("click", attackNow);
//
/*==============================================*/
/* Display ======================================*/
/*==============================================*/
function loadDisplay(){
//Create an Enemy
  createEnemy();
//Render description of fight
  var y = player.playerName;
  var z = enemy.species;
  var x = `<h3 class="center">${y} is facing another fearsome ${z}!</h3>`
  document.querySelector("#intro").innerHTML = x;
// Player Render
  aHealth = player.health + player.class.healthBonus;
  console.log("Player health: ", player.health + player.class.healthBonus)
  if(player.class.magical === true){
    aPower = player.intelligence + player.spell.damage;
    outputPlayer = `<h2>${player.playerName}</h2>
                    <h3>Power: ${aPower}</h3>
                    <h3>Health: ${aHealth}</h3>
                    `
    document.getElementById("playerHere").innerHTML = outputPlayer;
    console.log("Player spell power: ",player.spell.damage)
  } else {
    aStrength = player.strength + player.weapon.damage;
    outputPlayer = `<h2>${player.playerName}</h2>
                  <h3>Strength: ${aStrength}</h3>
                  <h3>Health: ${aHealth}</h3>
                 `
    document.getElementById("playerHere").innerHTML = outputPlayer;
  }
  if(player.species === "Human"){
    playerPic = `<img src="imgs/human.png" alt="Human fighter">`
    document.getElementById("playerImg").innerHTML = playerPic;
  }else{
    playerPic = `<img src="imgs/elf.png" alt="Elven fighter">`
    document.getElementById("playerImg").innerHTML = playerPic;
  }
  // Enemy Render
  enemy.name = enemy.species;
  bStrength = enemy.strength + enemy.weapon.damage;
  bHealth = enemy.health + enemy.class.healthBonus;
  console.log("Enemy Health: ", bHealth);
  if(enemy.class.magical === true){
    bPower = enemy.intelligence + enemy.spell.damage;
    outputEnemy = `<h2>${enemy.playerName}</h2>
                    <h3>Power: ${bPower}</h3>
                    <h3>Health: ${bHealth}</h3>
                    `
    document.getElementById("enyHere").innerHTML = outputEnemy;
    console.log("Enemy spell power: ",enemy.spell.damage)
  } else {
    aStrength = enemy.strength + enemy.weapon.damage;
    outputEnemy = `<h2>${enemy.species}</h2>
                    <h3>Strength: ${bStrength}</h3>
                    <h3>Health: ${bHealth}</h3>
                 `
    document.getElementById("enyHere").innerHTML = outputEnemy;
  }
  if(enemy.species === "Orc"){
    enyPic = `<img src="imgs/orc.png" alt="Orc fighter">`
    document.getElementById("enyImg").innerHTML = enyPic;
  }else{
    enyPic = `<img src="imgs/giant.png" alt="Giant fighter">`
    document.getElementById("enyImg").innerHTML = enyPic;
  }
}
//
/*==============================================*/
/* Attack ======================================*/
/*==============================================*/
function attackNow(e) {
// Player Attacks Enemy
  if(player.class.magical === true){
    var bH = bHealth - (aPower / 3);
    bHealth = Math.floor(bH);
    console.log("After hit", bHealth);
  }else{
    bH = bHealth - (aStrength / 3);
    bHealth = Math.floor(bH);
  }
  if(bHealth <= 0){
    outputEnemy =`<h2>${enemy.species}</h2>
                  <h3>is dead.</h3>`
                  endGame();
    document.getElementById("enyHere").innerHTML = outputEnemy;
    var x = `<h3 class="center">${enemy.species} is dead!</h3>`
    document.querySelector("#intro").innerHTML = x;
  }else{
    outputEnemy = `<h2>${enemy.species}</h2>
                  <h3>Health: ${bHealth}</h3>`
    document.getElementById("enyHere").innerHTML = outputEnemy;
  }
// Enemy Attacks Player
  if(enemy.class.magical === true){
    var aH = aHealth - (bPower /3);
    aHealth = Math.floor(aH);
    console.log("After hit", aHealth);
  }else{
    aH = aHealth - (bStrength / 3);
    aHealth = Math.floor(aH);
  }
  if(aHealth <= 0){
    outputPlayer =`<h2>${player.playerName}</h2>
                    <h3>Is dead.</h3>`
                    endGame();
    document.getElementById("playerHere").innerHTML = outputPlayer;
    var x = `<h3 class="center">${player.playerName} is dead!</h3>`
    document.querySelector("#intro").innerHTML = x;
  }else{
    outputPlayer =`<h2>${player.playerName}</h2>
                   <h3>Health: ${aHealth}</h3>`
    document.getElementById("playerHere").innerHTML = outputPlayer;
  }
}
/*==============================================*/
/* End Game ====================================*/
/*==============================================*/
function endGame(){
  console.log("End Game");
  var clearz = document.getElementById("attack");
  clearz.classList.add("clear");
}
//
