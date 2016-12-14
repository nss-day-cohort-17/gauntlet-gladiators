var aStrength = 0;
var aHealth = 0;
var outputPlayer ="";
var bStrength = 0;
var bHealth = 0;
var outputEnemy ="";

$("#attack").click(function(e){
// Player Render
    aStrength = Number(player.strength);
    aHealth = Number(player.health);
    outputPlayer += `<h2>${player.playerName}</h2>
                  <h3>Strength: ${aStrength}</h3>
                  <h3>Health: ${aHealth}</h3>
                 `
    document.getElementById("playerHere").innerHTML = outputPlayer;
// Enemy Render
    console.log("Enemy Name: ", enemy.name);
    outputEnemy += `<h2>${enemy.playerName}</h2>
                  <h3>Strength: ${bStrength}</h3>
                  <h3>Health: ${bHealth}</h3>
                 `
    document.getElementById("enyHere").innerHTML = outputPlayer;
// Call the Combat!
   displayCombat();
})
