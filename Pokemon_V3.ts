import { question } from 'readline-sync'

function displayOptions(array) {
    var i = 0;
    while (i < 2) {
        console.log(i + '. ' + moves[i].name + ', Damage:' + moves[i].damage);
        // i += 1
        i = i + 1;
    }
}

function pokemonOptions(array) {
    var i = 0;
    while (i < 2) {
        console.log(i + '. ' + option[i].pokemon);
        // i += 1
        i = i + 1;
    }
}

// var myPokemon = 'Charmander';
// var opponent = 'Pidgey';
var myHP = 15;
var oppHP = 10;
var isMyTurn = true;
var moves = [{
        name: 'Tackle',
        damage: 5,
    },
    {
        name: 'Ember',
        damage: 8,
    }
];

var option = [{
    pokemon: 'Charmander',
},
{
    pokemon: 'Pidgey',
}
];

// You can select from 2 moves, "Tackle" and "Ember"
// "Tackle" does 5 damage
// "Ember" does 8 damage
// You can only pick the move for your pokemon, the wild pidgey will only use Tackle
// Hardcode each turn
console.log('You have encountered a pokemon battle.');
//console.log('Your ' + option[0].pokemon + ' starts first');

console.log(option[0].pokemon + ' has ' + myHP + ' HP');
console.log(option[1].pokemon + ' has ' + oppHP + ' HP');

while (myHP > 0 && oppHP > 0) 
{
    
    console.log('------------------------------')
    if(myHP > 0){
        
        pokemonOptions(option);
        let ansPokemon = question('Select which pokemon turn\n')

        //if select Pidgey, Pidgey use Tackle
        if (ansPokemon=='1')
        {
                console.log('------------------------------')

                console.log(option[1].pokemon + ' uses ' + moves[0].name);
                console.log(moves[0].name + ' hits for ' + moves[0].damage + ' damage');
                myHP = myHP - moves[0].damage;
                console.log(option[0].pokemon + "'s HP is " + myHP );  

        }else if(ansPokemon=='0'){
        displayOptions(moves);
        let ans = question('Select type of moves\n')
        
            if(ans=='0'){
                    if(ansPokemon=='0'){
                        console.log(option[0].pokemon + ' uses ' + moves[0].name);
                        console.log(moves[0].name + ' hits for ' + moves[0].damage + ' damage');
                        oppHP = oppHP - moves[0].damage;
                        console.log(option[1].pokemon + "'s HP is " + oppHP );
                    }
            }
            else if(ans ==='1')
            {
                if(ansPokemon=='0'){
                    console.log(option[0].pokemon + ' uses ' + moves[1].name);
                    console.log(moves[1].name + ' hits for ' + moves[1].damage + ' damage');
                    oppHP = oppHP - moves[1].damage;
                    console.log(option[1].pokemon + "'s HP is " + oppHP );
                }
            }
               
        }

            //break the loop if it is 0
            if(myHP <= 0 || oppHP <= 0)
                break;
            
            }
    
}

if (oppHP <= 0) {
    console.log(option[1].pokemon + ' faints');
    console.log('The battle is over');
}else if (myHP <= 0){
    console.log(option[0].pokemon + ' faints');
    console.log('The battle is over');
}

    
