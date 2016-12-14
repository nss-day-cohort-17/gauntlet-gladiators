/*
  Test code to generate a human player and an orc player
 */
var warrior = new Gauntlet.Combatants.Human();
warrior.setWeapon(new WarAxe());
warrior.generateClass();  // This will be used for "Surprise me" option
console.log(warrior.toString());

var orc = new Gauntlet.Combatants.Orc();
orc.generateClass();
orc.setWeapon(new BroadSword());
console.log(orc.toString());

// Global variables to store user selection of name, race, class, weapon
var userName = ""
var userRace = ""
var userClass = ""
var userWeapon = ""

var player;
var enemy;

/*
  Test code to generate a spell
 */
var spell = new Gauntlet.SpellBook.Sphere();
console.log("spell: ", spell.toString());

// Navigates through pages using show and hide attributes
$(document).ready(function() {
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--race":
        userName = $("#player-name").val();
        moveAlong = (userName !== "");
        break;
      // Generate player object upon race selection
      case "card--class":
        if(userRace !== "") {
          player = new Gauntlet.Combatants[userRace]()
          player.playerName = userName
        }
        moveAlong = (userRace !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--battleground":
        moveAlong = ($("#player-name").val() !== "");
        break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

  /*
    When a button with a race on it is clicked,
    Assign that id to a variable
   */
  $(".race__link").click(function(e) {
    userRace = e.target.closest('.race__link').id
  });

  /*
    When a button with a class on it is clicked,
    Assign that id to a variable
   */
  $(".class__link").click(function(e) {
    userClass = e.target.closest('.class__link').id
  })

});


