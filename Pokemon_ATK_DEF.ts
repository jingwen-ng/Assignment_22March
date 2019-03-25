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

// you can use whatever damage formula you like, but the assignment would require:
// 1. attacker has an attack value
// 2. defender has a defense value
// 3. each move (e.g. Tackle, Ember, Shadow Ball) has  a base damage value
// 4. the final damage formula takes all 3 of the above into account

var myHP = 200;
var oppHP = 100;
var finalDamage=0;
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
    attack: 6,
    defend: 3,
},
{
    pokemon: 'Pidgey',
    attack: 8,
    defend: 1,
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
                console.log(option[1].pokemon + ' attack with value ' + option[1].attack);

                myHP = myHP - moves[0].damage;
                
                console.log(option[0].pokemon + "'s HP is " + myHP );  
                console.log(option[0].pokemon + " defend with value " + option[0].defend)
                myHP = myHP + option[0].defend;

                finalDamage = (option[1].attack-option[0].defend) *  moves[0].damage 
                myHP = myHP - finalDamage
                console.log('Final damage is ' + finalDamage);
                console.log(option[0].pokemon + ' current HP is ' +myHP)

        }else if(ansPokemon=='0'){
        displayOptions(moves);
        let ans = question('Select type of moves\n')
        
            if(ans=='0'){ //tackle
                    if(ansPokemon=='0'){ //Charmander
                        console.log(option[0].pokemon + ' uses ' + moves[0].name);
                        console.log(moves[0].name + ' hits for ' + moves[0].damage + ' damage');
                        console.log(option[0].pokemon + ' attack with value ' + option[0].attack);

                        oppHP = oppHP - moves[0].damage;
                        console.log(option[1].pokemon + "'s HP is " + oppHP );

                        console.log(option[1].pokemon + " defend with value " + option[1].defend)
                        oppHP = oppHP + option[1].defend;
        
                        finalDamage = (option[0].attack-option[1].defend) *  moves[0].damage 
                        myHP = myHP - finalDamage
                        console.log('Final damage is ' + finalDamage);

                        console.log(option[1].pokemon + ' current HP is ' +oppHP)

                    }
            }
            else if(ans ==='1') //ember
            {
                if(ansPokemon=='0'){
                    console.log(option[0].pokemon + ' uses ' + moves[1].name);
                    console.log(moves[1].name + ' hits for ' + moves[1].damage + ' damage');
                    console.log(option[0].pokemon + ' attack with value ' + option[0].attack);

                    oppHP = oppHP - moves[1].damage;
                    console.log(option[1].pokemon + "'s HP is " + oppHP );

                    console.log(option[1].pokemon + " defend with value " + option[1].defend)
                    oppHP = oppHP + option[1].defend;
        
                    finalDamage = (option[0].attack-option[1].defend) *  moves[1].damage 
                    oppHP = oppHP - finalDamage
                    console.log('Final damage is ' + finalDamage);

                    console.log(option[1].pokemon + ' current HP is ' +oppHP)

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

    
