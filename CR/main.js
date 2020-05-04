function Select(){
    let selection = Math.floor(Math.random()*4);
    return attacks[selection];
}
//character constrcutor
class Character {
    constructor(id,name,health){
        this.id = id,
        this.name = name,
        this.health = health;
    }
    display = function() {
        console.log(`${this.name}, ${this.health}`);

        document.getElementById("status" + this.id).innerHTML = `
        <p>
            <b>${this.name}</b><br>
            <b>Health:</b>  ${this.health}
        </p>
        `;
        
    }
        

     
    attack = function(enemy,attack) {
        let newHealth = enemy.health - attack.aDmg;
        enemy.health = newHealth;
        enemy.display();
        document.getElementById('task').innerHTML = `
            <p> <b>${this.name}</b> casts <b>${attack.aName}</b>!<br>
              <img class="attack" src="${attack.aImg}"><br> Dealing ${attack.aDmg} damage to <b>${enemy.name}</b></p>
        `;
        if (newHealth <= 0 ) {
            document.getElementById('task').innerHTML = `
            <h1>Game Over ${this.name} has defeated ${enemy.name}!</h1>
            `;
        if (newHealth <=0 && enemy.name == 'Bahamut') {
            document.getElementById('baimg').src = "img/X.png";
        }
        else if (newHealth <=0 && enemy.name == 'Deku') {
            document.getElementById('estimg').src = "img/X.png";
            
        }

        
    }
    }
    
}
    

class Attacks {
    constructor(aName,aDmg,aImg){
        this.aName = aName,
        this.aDmg = aDmg,
        this.aImg = aImg;
    }
}
const char1 = new Character('char1','Sasuke',200);
const char2 = new Character('char2','Deku',200);
char1.display();
char2.display();
const atk1 = new Attacks("Consecutive punch",50,"img/Consecutive punch.png");
const atk2 = new Attacks("Susanoo",40,"img/Susanoo.png");
const atk3 = new Attacks("Chidori",30,"img/Chidori.png");
const atk4 = new Attacks("Oneforall",25,"img/Oneforall.png");

let attacks =[atk1,atk2,atk3,atk4];