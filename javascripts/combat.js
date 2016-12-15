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
  console.log("CHeck this: ",player.health);
  aHealth = player.health + player.class.healthBonus;
  console.log("Player health: ", player.health,"Player health: ", player.class.healthBonus)
  if(player.class.magical === true){
    aPower = player.intelligence + player.spell.damage;
    outputPlayer = `<h2>${player.playerName}</h2>
                    <h3>Power: ${aPower}</h3>
                    <h3>Health: ${aHealth}</h3>
                    `
    document.getElementById("playerHere").innerHTML = outputPlayer;
    console.log("Magical? ",player.spell.damage)
  } else {
    aStrength = player.strength + player.weapon.damage;
    outputPlayer = `<h2>${player.playerName}</h2>
                  <h3>Strength: ${aStrength}</h3>
                  <h3>Health: ${aHealth}</h3>
                 `
    document.getElementById("playerHere").innerHTML = outputPlayer;
  }
  // Enemy Render
  enemy.name = enemy.species;
  bStrength = enemy.strength + enemy.weapon.damage;
  bHealth = enemy.health + enemy.class.healthBonus;
  console.log("Enemy Health: ", bHealth);
  outputEnemy = `<h2>${enemy.species}</h2>
                 <h3>Strength: ${bStrength}</h3>
                 <h3>Health: ${bHealth}</h3>
                `
  document.getElementById("enyHere").innerHTML = outputEnemy;
}
//
/*==============================================*/
/* Attack ======================================*/
/*==============================================*/
function attackNow(e) {
console.log("Attack Clicked");
// if(player.)


}
// TODO: If statement, magical: use magic, not: use weapon.









//
