import { question } from 'readline-sync'

function displayOptions(array) {
  let i = 0
  while (i < 2) {
    console.log(i + '. ' + moves[i].name + ', Damage:' + moves[i].damage)

    // i += 1
    i = i + 1
  }
}

// having 2 pokemon, with specific oppHP
let myPokemon = 'Charmander'
let opponent = 'Mr.Mime'
let myHP = 100
let oppHP = 200
let isMyTurn = true

const moves = [{

    name: 'Shawdown Ball',
    damage: 50,
    type: 'fire'
 },
 {
     name: 'Hyper Beak',
     damage: 150,
     type: 'normal'
 
 }
//  {
//      name: 'Hyper Beak',
//      damage: 150,
//      type: 'normal'
 
//  }
 ]

 displayOptions(moves)
 let ans = question('Select a moves\n')

console.log('You have encountered a wild ' + opponent)
console.log('You send out ' + myPokemon)
console.log(myPokemon + ' has ' + myHP + ' HP')
console.log(opponent + ' has ' + oppHP + ' HP')

// the game continues while either pokemon has more than 0 HP
// as long as my HP is more than 0 and opponent HP is more than 50
// if myHP goes below 0, stop
// if oppHP goes below 0, stop

// myHP >0 || oppHP > 0
// my HP goes below 0, but opponent HP is above 0, continue
// opponent HP goes below 0, but my HP is above 0, continue
// my HP is below 0 and opponent HP is below 0, stop
// while (myHP > 0 && oppHP > 0) {
//   console.log('------------------------------')
//   let attackerName = isMyTurn ? myPokemon : opponent
//   let defenderName = isMyTurn ? opponent : myPokemon
//   // first pokemon attacks

//   console.log(attackerName + ' uses ' +  moves[0].name)
//   console.log(moves[0].name + ' hits for ' + moves[0].damage  + 'damage')

//   if (isMyTurn) {
//     oppHP = oppHP - 50
//     console.log(defenderName + "'s health is reduced to " + oppHP)
//   } else {
//     myHP = myHP - 50
//     console.log(defenderName + "'s health is reduced to " + myHP)
//   }

//   console.log(attackerName + ' uses ' +  moves[0].name)
//   console.log(moves[0].name + ' hits for ' + moves[0].damage  + 'damage')

//   // TODO: switch turns
//   isMyTurn = !isMyTurn
// }

if(ans=='0'){
  console.log(opponent + ' uses ' +  moves[0].name)
  console.log(moves[0].name + ' hits for ' + moves[0].damage  + ' damage')
}
else if(ans=='1'){
  console.log(opponent + ' uses ' +  moves[1].name)
  console.log(moves[1].name + ' hits for ' + moves[1].damage  + ' damage')
  
}

    oppHP = oppHP - moves[0].damage 
    // console.log(defenderName + "'s health is reduced to " + oppHP)

  // console.log(myPokemon + ' uses ' +  moves[1].name)
  // console.log(moves[1].name + ' hits for ' + moves[1].damage  + ' damage')

if (oppHP <= 0) {
  console.log(opponent + ' faints')
  console.log(myPokemon + ' has gained 50 exp')
} else if (myHP <= 0) {
  console.log(myPokemon + ' faints')
  console.log('GAME OVER')
}
