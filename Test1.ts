import { question } from 'readline-sync'

function displayOptions(array) {
    var i = 0;
    while (i < 2) {
        console.log(i + '. ' + moves[i].name + ', Damage:' + moves[i].damage);
        // i += 1
        i = i + 1;
    }
}

// having 2 pokemon, with specific oppHP
var myPokemon = 'Charmander';
var opponent = 'Mr.Mime';
var myHP = 100;
var oppHP = 200;
var isMyTurn = true;
var moves = [{
        name: 'Shawdown Ball',
        damage: 50,
        type: 'fire'
    },
    {
        name: 'Hyper Beak',
        damage: 150,
        type: 'normal'
    },
];

console.log('You have encountered a wild ' + opponent);
console.log('You send out ' + myPokemon);
console.log(myPokemon + ' has ' + myHP + ' HP');
console.log(opponent + ' has ' + oppHP + ' HP');

while (myHP > 0 && oppHP > 0) {
    console.log('------------------------------')
    displayOptions(moves);
    let ans = question('Select type of moves\n')
    if(ans=='0'){
            console.log(myPokemon + ' uses ' + moves[0].name);
            console.log(moves[0].name + ' hits for ' + moves[0].damage + ' damage');
            oppHP = oppHP - moves[0].damage;
            console.log(opponent + " 's HP is " + oppHP );

        } else if(ans=='1'){
            console.log(myPokemon + ' uses ' + moves[1].name);
            console.log(moves[1].name + ' hits for ' + moves[1].damage + ' damage');
            oppHP = oppHP - moves[1].damage;
            console.log(opponent + " 's HP is " + oppHP );
        }
}

if (oppHP <= 0) {
    console.log(opponent + ' faints');
    console.log(myPokemon + ' has gained 50 exp');
}
else if (myHP <= 0) {
    console.log(myPokemon + ' faints');
    console.log('GAME OVER');
}
    //else{
    //     ans = question('Please enter type of moves\n')
    // }
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




// console.log(defenderName + "'s health is reduced to " + oppHP)

