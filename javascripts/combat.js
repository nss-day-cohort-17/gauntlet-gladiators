// Global Variables
var aStrength = 0;
var aHealth = 0;
var outputPlayer ="";
var bStrength = 0;
var bHealth = 0;
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
  createEnemy();
  //Render description of fight
  var y = player.playerName;
  var z = enemy.species;
  console.log(enemy.species);//TEST***********
  var x = `<p>${y} is facing a ${z}!</p>`
  document.querySelector("#intro").innerHTML = x;

  // Player Render
  // console.log("Test this shit: ",aStrength);
  console.log("CHeck this: ",player.health);
  aStrength = player.strength + player.weapon.damage;

  aHealth = player.health + player.class.healthBonus;
  outputPlayer = `<h2>${player.playerName}</h2>
                  <h3>Strength: ${aStrength}</h3>
                  <h3>Health: ${aHealth}</h3>
                 `
  document.getElementById("playerHere").innerHTML = outputPlayer;
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
// Call the Combat!
   // displayCombat();
}
// TODO: If statement, magical: use magic, not: use weapon.
