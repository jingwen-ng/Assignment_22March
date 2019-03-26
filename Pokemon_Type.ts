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

function pidgey(){
    console.log('------------------------------')

    console.log(option[1].pokemon + ' uses ' + moves[0].name);
    console.log(moves[0].name + ' hits for ' + moves[0].damage + ' damage');
    console.log(option[1].pokemon + ' attack with value ' + option[1].attack);

    myHP = myHP - moves[0].damage;
    
    console.log(option[0].pokemon + "'s HP is " + myHP );  
    console.log(option[0].pokemon + " defend with value " + option[0].defend)
  //  myHP = myHP + option[0].defend;

    finalDamage = (option[1].attack-option[0].defend) *  moves[0].damage 
    myHP = myHP - finalDamage
    console.log('Final damage is ' + finalDamage);
    console.log(option[0].pokemon + ' current HP is ' +myHP)
}

var myHP = 200;
var oppHP = 100;
var finalDamage=0;
var isMyTurn = true;
let ans;
let j =0;
var sleep=0;
var moves = [{
        name: 'Tackle',
        damage: 5,
        elementalType: 'Bubblebeam',

    },
    {
        name: 'Ember',
        damage: 8,
        elementalType: 'Flamethrower',
 
    }
];

var option = [{
    pokemon: 'Charmander',
    attack: 6,
    defend: 3,
    statusEffect: 'Poison', 
    type: 'Fire',
},
{
    pokemon: 'Squirtle',
    attack: 8,
    defend: 1,
    statusEffect: 'Sleep',
    type: 'Water'
}
];

console.log('You have encountered a pokemon battle.');

console.log(option[0].pokemon + ' has ' + myHP + ' HP');
console.log(option[1].pokemon + ' has ' + oppHP + ' HP');

while (myHP > 0 && oppHP > 0) 
{
    
    console.log('------------------------------')
    if(myHP > 0){
        
        pokemonOptions(option);
        let ansPokemon = question('Select which pokemon turn\n')

        //if select Squirtle , Squirtle use Tackle
        if (ansPokemon=='1')
        {           
            pidgey();

                if(sleep==0)
                {
                    console.log(option[ansPokemon].pokemon+ ' initiate status effect ' + option[ansPokemon].statusEffect);
                    console.log(option[0].pokemon + ' will sleep and not allowed to attack.');

                    pidgey();

                    sleep=+1;
                }

                console.log(option[0].pokemon + ' is ' + option[0].type+ ' type')
                console.log(option[ansPokemon].pokemon + ' uses '+moves[0].elementalType + ' on '+ option[0].pokemon);
                console.log(moves[0].elementalType + ' is '+option[ansPokemon].type+' type')
                myHP = myHP - (moves[0].damage * 2)

                console.log(option[0].pokemon+' current HP is '+myHP+' after double damage. ')

        }else if(ansPokemon=='0'){
        displayOptions(moves);
        ans = question('Select type of moves\n')
        
            if(ans=='0'){ //tackle
                    if(ansPokemon=='0'){ //Charmander
                        console.log(option[0].pokemon + ' uses ' + moves[0].name);
                        console.log(moves[0].name + ' hits for ' + moves[0].damage + ' damage');
                        oppHP = oppHP - moves[0].damage;
                        console.log(option[1].pokemon + "'s HP is " + oppHP );

                        console.log(option[0].pokemon + ' attack with value ' + option[0].attack);

                        console.log(option[1].pokemon + " defend with value " + option[1].defend)
                 //       oppHP = oppHP + option[1].defend;
                        console.log(option[1].pokemon + ' current HP is ' +oppHP)

                        finalDamage = (option[0].attack-option[1].defend) *  moves[0].damage      
                        console.log('Final damage is ' + finalDamage);

                        oppHP = oppHP - finalDamage
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
                 //   oppHP = oppHP + option[1].defend;
        
                    finalDamage = (option[0].attack-option[1].defend) *  moves[1].damage 
                    oppHP = oppHP - finalDamage
                    console.log('Final damage is ' + finalDamage);

                    console.log(option[1].pokemon + ' current HP is ' +oppHP)

                }
            }
            //poison attack
            if(j<5)
            {
                console.log(option[0].pokemon + ' initiate status effect ' +option[0].statusEffect)

                            //damage = 5
                    oppHP = oppHP - (moves[ans].damage * 0.9);
                    console.log('Target ' + option[1].pokemon + ' pokemon HP is ' + oppHP.toFixed(2))
                    
            }
            j=j+1;
            console.log(option[0].pokemon + ' current HP is ' + myHP)
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

    
