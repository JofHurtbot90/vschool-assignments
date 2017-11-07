// character creation
// walking
// running from a fight
// fighting
// enemy creation
// attacking enemy
// enemy attacking
// enemy dying (including dropping an item)
// character dying


const readlineSync = require('readline-sync');
  let health = 100;

      while(health > 0) {
          walk();
      }

  let intro = `Welcome Player-One to Colossal Adventure RPG.`;
    console.log(intro);
  let userName = readlineSync.question('Player-One, what is your name? ');
    console.log(`Welcome ${userName} let us begin`);
  let brief = `Let's go through a small set of guidelines for character creation`;
    console.log(brief);
  let hero = `What is your Hero name?`;
    console.log(`${hero}, Welcome to Colossal Adventure.`);
  let villain = `What is the Villain name?`;
    console.log(`${villain} Welcome Villain.`);



  function walk(){
    let comm = readlineSync.keyInYN(`Would you like to walk?`);
      console.log(comm);
        if(comm === true) {
          if(Math.random() < .25) {
            fight();
          }else {
            console.log('You have walked in the safe zone');
          }
        }else {
          console.log(`You are checking inventory and health`);
        }
      }


    function fight(){
      control = ['fight', 'run'],
      index = readlineSync.keyInSelect(control, `Which do you choose?`);

      console.log(control[index]);

        if(control === 'run') {
          
        }
    }
