var aStrength = 0;
var aHealth = 0;
var outputPlayer ="";

$("#attack").click(function(e){
    console.log("Button clicked")
    aStrength = Number(player.strength);
    console.log("Player strength: ", player.strength);
    aHealth = Number(player.health);
    console.log("Player health: ", aHealth, player.playerName);; //**** Meassage *******************************
    displayCombat();
})


function displayCombat(e) {
  console.log("Player Name: ", player.name);
  outputPlayer = `<h2>${player.playerName}</h2>
                  <h3>${aStrength}</h3>
                  <h3>${aHealth}</h3>
                 `
  document.getElementById("playerHere").innerHTML = outputPlayer;
}
