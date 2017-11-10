const readlineSync = require('readline-sync');



let intro = `Welcome Player-One to Colossal Adventure RPG.`;
  console.log(intro);
let userName = readlineSync.question('Player-One, what is your name? ');
  console.log(`Welcome ${userName} let us begin`);

let health = 100;

  while (health > 0) {
    walk();
}


function walk() {
  let comm = readlineSync.keyInYN(`Would you like to walk? `);
  console.log(comm);
    if (comm === true) {
      if (Math.random() < .25) {
      fight();
    } else {
      console.log('You have walked in the safe zone');
    }
  } else {
    console.log(`You are checking inventory and health`);
  }
}

function run() {
  let running = readlineSync.keyInYN(`Do you want to run? `)
  console.log(running);
  if (running === true) {
    if (Math.random() <= .50) {
      run();

    }
  } else {
    if (Math.random() <= .50) {
      fight();

    } else {
      console.log(`Run as fast as you can.`);
    }

  }
}

function fight() {
  let attack = readlineSync.keyInYN(`Do you wish to fight?`)
  console.log(attack);
  if (attack === true) {
    if (Math.random() <= .20) {
      power();
    } else {
      console.log(`Enemy is HERE!!!`);
    }
  } else {
    run();
  }
}



function power() {
  let power = [`Five Finger Death Punch`, `Drunken Fist`, `Seismic Toss`, `One-Inch Punch`],
    index = readlineSync.keyInSelect(power, `What attack power do you choose? `);
  console.log(power[index]);
}

function attackEnemy() {
  while(health > 0) {
    attackEnemy();
  }
}

function enemyAttack() {
  while(health > 0) {
    enemyAttack();
  }
}

function die() {
  while(health < 0) {
    die();
  }console.log(`GAME OVER MAN!`);
}
function enemyDie() {
  while(health < 0) {
    enemyDie();
  }console.log(`The enemy has fallen, retrieve your reward`);
}
