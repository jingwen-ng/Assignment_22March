
var myPokemon = 'Charmander';
var opponent = 'Pidgey';
var myHP = 15;
var oppHP = 10;
var isMyTurn = true;
var moves = [{
        name: 'Tackle',
        damage: 5,
    },
  
];

console.log('You have encountered a wild ' + opponent);
console.log('Your ' + myPokemon + ' starts first');

console.log(myPokemon + ' has ' + myHP + ' HP');
console.log(opponent + ' has ' + oppHP + ' HP');

while (myHP > 0 && oppHP > 0) 
{
    
    console.log('------------------------------')
   
            console.log(myPokemon + ' uses ' + moves[0].name);
            console.log(moves[0].name + ' hits for ' + moves[0].damage + ' damage');
            oppHP = oppHP - moves[0].damage;
            console.log(opponent + "'s HP is " + oppHP );

            //break the loop if it is 0
            if(myHP == 0 || oppHP == 0)
                break;
            

    console.log('------------------------------')

            console.log(opponent + ' uses ' + moves[0].name);
            console.log(moves[0].name + ' hits for ' + moves[0].damage + ' damage');
            myHP = myHP - moves[0].damage;
            console.log(myPokemon + "'s HP is " + myHP );  

            //break the loop if it is 0
            if(myHP == 0 || oppHP == 0)
                    break;
}

if (oppHP == 0) {
    console.log(opponent + ' faints');
    console.log('The battle is over');
}else if (myHP == 0){
    console.log(myPokemon + ' faints');
    console.log('The battle is over');
}

    
