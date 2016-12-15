/*
  Test code to generate a human player and an orc player
 */
// var warrior = new Gauntlet.Combatants.Human();
// warrior.setWeapon(new WarAxe());
// warrior.generateClass();  // This will be used for "Surprise me" option
// console.log(warrior.toString());

// var orc = new Gauntlet.Combatants.Orc();
// orc.generateClass();
// orc.setWeapon(new BroadSword());
// console.log(orc.toString());

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
// var spell = new Gauntlet.SpellBook.Sphere();
// console.log("spell: ", spell.toString());

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
      // Add class upon moving to next page
      case "card--weapon":
        if(userClass === "") {break}
        // randomize class if the user selected Surprise Me
        if(userClass === "Surprise-Me") {
          player.generateClass()
          userClass = player.class.name
        }
        // otherwise, assign them class they selected
        else {
          player.assignClass(userClass)
        }
        moveAlong = (userClass !== "");
        break;
      case "card--battleground":
        if(userWeapon === "") {break}
        // Calls the setWeapon function based on weapon selection
        for(var i = 0; i < weaponsChest.length; i++) {
          if(userWeapon === weaponsChest[i].name) {
            player.setWeapon(new weaponsChest[i]())
          }
        }
        console.log(player.toString())
        createEnemy();
        moveAlong = (userWeapon !== "")
        break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
      // Hides class buttons that do not apply to that race
      if(nextCard === "card--class") {
        // add this: disabled="disabled"
        $(".class__link").attr('disabled', 'disabled')
        $("#Surprise-Me").removeAttr('disabled')
        for(var i = 0; i < player.allowedClasses.length; i++) {
          // Traverses up to .col div for each class button in array
          $('#' + player.allowedClasses[i]).removeAttr('disabled')
        }
      }
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

  /*
    When a button with a weapon on it is clicked,
    Assign that weapon to a variable
   */
  $(".weapon__link").click(function(e) {
    userWeapon = e.target.closest('.weapon__link').id
  })

});

function createEnemy() {
  // Generate enemy upon enterring battleground
  var random = Math.floor(Math.random() * monsterList.length);
  var randomRace = monsterList[random];
  enemy = new Gauntlet.Combatants[randomRace];
  enemy.generateClass();
  var random = Math.floor(Math.random() * weaponsChest.length);
  enemy.setWeapon(new weaponsChest[random]());
  console.log(enemy.toString())
  moveAlong = (userWeapon !== "");
}








