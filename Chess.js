function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
};

class pawn {
    constructor(posX, posY, colour, dead, name){
        this.posX = posX;
        this.posY = posY;
        this.colour = colour;
        this.dead = dead;
        this.name = 'pawn';
    };
};

class rook {
    constructor(posX, posY, colour, dead, name){
        this.posX = posX;
        this.posY = posY;
        this.colour = colour;
        this.dead = dead; 
        this.name = 'rook';
    };
};

class knight {
    constructor(posX, posY, colour, dead, name){
        this.posX = posX;
        this.posY = posY;
        this.colour = colour;
        this.dead = dead; 
        this.name = 'knight';    
    };
};

class bishop {
    constructor(posX, posY, colour, dead, name){
        this.posX = posX;
        this.posY = posY;
        this.colour = colour;
        this.dead = dead; 
        this.name = 'bishop';    
    };
};

class king {
    constructor(posX, posY, colour, dead, name){
        this.posX = posX;
        this.posY = posY;
        this.colour = colour;
        this.dead = dead; 
        this.name = 'king';   
    };
};
class queen {
    constructor(posX, posY, colour, dead, name){
        this.posX = posX;
        this.posY = posY;
        this.colour = colour;
        this.dead = dead; 
        this.name = 'queen';   
    };
};

let posIncrement = 'a';


function createFigures(){
for (var i = 1; i < 9; ++i) {
    this["wp"+i] = new pawn(posIncrement, 2, 'white', false);
    this["bp"+i] = new pawn(posIncrement, 2, 'black', false);
    posIncrement = nextChar(posIncrement);
  };

wr1 = new rook('a', 1, 'white', false);
wr2 = new rook('h', 1, 'white', false);
br1 = new rook('a', 8, 'black', false);
br2 = new rook('h', 8, 'black', false);
wk1 = new knight('b', 1, 'white', false);
wk2 = new knight('g', 1, 'white', false);
bk1 = new knight('b', 8, 'black', false);
bk2 = new knight('h', 8, 'black', false);
wb1 = new bishop('c', 1, 'white', false);
wb2 = new bishop('f', 1, 'white', false);
bb1 = new bishop('c', 8, 'black', false);
bb2 = new bishop('f', 8, 'black', false);
wk = new king('e', 1, 'white', false);
bk = new king('e', 8, 'black', false);
wq = new queen('d', 1, 'white', false);
bq = new queen('d', 8, 'black', false);
};


createFigures();

showPawns();


function showPawns(){
    console.log(wp1,'\n',wp2,'\n',wp3,'\n',wp4,'\n',wp5,'\n',wp6,'\n',wp7,'\n',wp8,'\n',bp1,'\n',bp2,'\n',bp3,'\n',bp4,'\n',bp5,'\n',bp6,'\n',bp7,'\n',bp8,'\n', wr1, '\n', wr2,'\n', br1,'\n', br2,'\n',bb1,'\n',bb2,'\n',wb1,'\n',wb2,'\n',wk1,'\n',wk2,'\n',bk1,'\n',bk2,'\n',wk,'\n',wq,'\n',bk,'\n',bq,'\n');

    };

// Compare array coordinates and fill values

    let arei = ['a2', 'b2', 'c2', 'd2'];

    for (var j=0; j<arei.length; j++) {
    for (var i=1; i<9; i++) {
    if(this["wp"+i].posX + this["wp"+i].posY == arei[j]){
      arei[j] = this["wp"+i];
     };
    };

    };
    console.log(arei);

  //  if (this.posX != new.posX && this.posY != new.posY){     Rook wrong move
  //  if (this.posX - new.posX != this.posY - new.posY)   Bishop wrong move          use abs()
  //  if (this.posX + new.posX == this.posX + 3 & this.posY + new.posY == this.posY + 1 || this.posX + new.posX == this.posX -3 & this.posY + new.posY == -1) 
    let test
  test = wp1.posX.charCodeAt(0) - 96;
  console.log(wp1.posX);
  console.log(test);


    let nue = {
      posX:'a',
      posY: 1
    };


   /* 
   
    // Rook, Bishop, and Queen pieces validation for later integration

   function move (oldPosX, oldPosY, newPosX, newPosY){
      arei.forEach(asd);

      };
        function asd(){
      if (oldPosX + oldPosY == arei[i]){
        let figureType = arei[i].name;
        if (figureType == 'rook'){
          if(oldPosX != newPosX && oldPosY != newPosY){
            console.log('WRONG');
          }
            else{
              arei[i].posX = newPosX;
              arie[i].posY = newPosY;
            };
          }
          else if(figureType == 'bishop'){
            if(abs(oldPosX.charCodeAt(0)-96 - newPosX.charCodeAt(0) - 96) != abs(oldPosY - newPosY)){
              console.log('WRONG');
            }
            else{
              arei[i].posX = newPosX;
              arie[i].posY = newPosY;
            }
          }
          else if(figureType == 'queen'){
            if(oldPosX != newPosX && oldPosY != newPosY || abs(oldPosX.charCodeAt(0)-96 - newPosX) != abs(oldPosY - newPosY)){
              console.log('WRONG');
            }
              else{
                arei[i].posX = newPosX;
                arie[old].posY = newPosY;
              };
            };
          }
          else if(figureType == 'knight'){

          }
          };
      };*/
