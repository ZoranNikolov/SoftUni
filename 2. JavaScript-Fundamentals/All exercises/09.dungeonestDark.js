function dungeonestDark(arr){
  let dungeon = arr[0].split('|');
  let health = 100;
  let coins = 0;
  let counterRooms = 0;
  let allCoins = 0;
 
  for(let i = 0; i < dungeon.length;i++){
      let currentRoom = dungeon[i].split(' ');
      let command = currentRoom[0];
      let num = Number(currentRoom[1]); 
      counterRooms++;
 
      if(command === 'potion'){
        if (health + num > 100) {
          num = 100 - health;
          health = 100;
        } else
        {
          health += num;
        }
        console.log(`You healed for ${num} hp.`);
        console.log(`Current health: ${health} hp.`);
 
               
      }else if(command === 'chest'){
        coins = Number(num);
        allCoins += Number(num);
        console.log(`You found ${coins} coins.`);
 
      }else{
        health -= Number(num);
        if(health > 0){
          console.log(`You slayed ${command}.`);
        }else{
          console.log(`You died! Killed by ${command}.`);
          console.log(`Best room: ${counterRooms}`);
          return;
        }
       
      }           
  }
    console.log(`You've made it!`);
    console.log(`Coins: ${allCoins}`);
    console.log(`Health: ${health}`); 
}
// dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);