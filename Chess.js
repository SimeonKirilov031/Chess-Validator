

//
// Simple functions to increment and decrement letters
  function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
};
function prevChar(c) {
  return String.fromCharCode(c.charCodeAt(0) - 1);
};

const textBox1Val =(document.getElementById('Text1').value);
let turn = true;
                    // Create figure classes based on type
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

// Create chess board
var chess = [];
for (i = 65; i <= 72; i++) {
     for(j=1; j<9; j++) {
         chess[String.fromCharCode(i).toLowerCase() + j] = "";
     }
    }

let posIncrement = 'a';



function createFigures(){             // Create figures and place them on the board
for (var i = 1; i < 9; ++i) {
    this["wp"+i] = new pawn(posIncrement, 2, 'white', false);
    chess[this["wp"+i].posX + this["wp"+i].posY] = this["wp"+i];
    this["bp"+i] = new pawn(posIncrement, 7, 'black', false);
    chess[this["bp"+i].posX + this["bp"+i].posY] = this["bp"+i];
    posIncrement = nextChar(posIncrement);
  };

wr1 = new rook('a', 1, 'white', false);
chess['a1'] = wr1;
wr2 = new rook('h', 1, 'white', false);
chess['h1'] = wr2;
br1 = new rook('a', 8, 'black', false);
chess['a8'] = br1;
br2 = new rook('h', 8, 'black', false);
chess['h8'] = br2;
wk1 = new knight('b', 1, 'white', false);
chess['b1'] = wk1;
wk2 = new knight('g', 1, 'white', false);
chess['g1'] = wk2;
bk1 = new knight('b', 8, 'black', false);
chess['b8'] = bk1;
bk2 = new knight('h', 8, 'black', false);
chess['h8'] = bk2;
wb1 = new bishop('c', 1, 'white', false);
chess['c1'] = wb1;
wb2 = new bishop('f', 1, 'white', false);
chess['f1'] = wb2;
bb1 = new bishop('c', 8, 'black', false);
chess['c8'] = bb1;
bb2 = new bishop('f', 8, 'black', false);
chess['f8'] = bb2;
wk = new king('e', 1, 'white', false);
chess['e1'] = wk;
bk = new king('e', 8, 'black', false);
chess['e8'] = bk;
wq = new queen('d', 1, 'white', false);
chess['d1'] = wq;
bq = new queen('d', 8, 'black', false);
chess['d8'] = bq;
};


createFigures();

showPawns();


function showPawns(){
    console.log(wp1,'\n',wp2,'\n',wp3,'\n',wp4,'\n',wp5,'\n',wp6,'\n',wp7,'\n',wp8,'\n',bp1,'\n',bp2,'\n',bp3,'\n',bp4,'\n',bp5,'\n',bp6,'\n',bp7,'\n',bp8,'\n', wr1, '\n', wr2,'\n', br1,'\n', br2,'\n',bb1,'\n',bb2,'\n',wb1,'\n',wb2,'\n',wk1,'\n',wk2,'\n',bk1,'\n',bk2,'\n',wk,'\n',wq,'\n',bk,'\n',bq,'\n');

    };


  //  if (this.posX != new.posX && this.posY != new.posY){     Rook wrong move
  //  if (this.posX - new.posX != this.posY - new.posY)   Bishop wrong move          use abs()
  //  if (this.posX + new.posX == this.posX + 3 & this.posY + new.posY == this.posY + 1 || this.posX + new.posX == this.posX -3 & this.posY + new.posY == -1) 


function moveInArray(ox, oy, nx, ny){
        if(nx>'h' || nx < 'a' || ny > 8 || ny < 1){
        console.log('Out of bounds');
        document.getElementById("asd").innerHTML = "Out of bounds";
      }
      else if(chess[ox+oy].colour == 'white' && turn == false || chess[ox+oy].colour == 'black' && turn == true){
        console.log('Not your turn');
        document.getElementById("asd").innerHTML = "Not your turn";
      }
      else{
      chess[ox + oy].posX = nx;
      chess[ox + oy].posY = ny;
      chess[nx + ny] = chess[ox + oy];
      chess[ox + oy] = '';
      console.log('eh');
      turn = !turn;
      document.getElementById("asd").innerHTML = "Correct";
      }
};

function capture(ox,oy,nx,ny){
  if(chess[ox+oy].colour == 'white' && turn == false || chess[ox+oy].colour == 'black' && turn == true){
    console.log('Not your turn');
    document.getElementById("asd").innerHTML = "Not your turn";
  }
  else{
    chess[nx+ny].dead = true;
    chess[ox + oy].posX = nx;
    chess[ox + oy].posY = ny;
    chess[nx + ny] = chess[ox + oy];
    chess[ox + oy] = '';
    console.log('capture');
    document.getElementById("asd").innerHTML = "Correct, captured";
  }
}

console.log (chess);

// functions to check the path of pieces

function rookCheckCap(ox,oy,nx,ny){
  let flag = true;
  if(ox < nx){
    do{
      ox = nextChar(ox);
      if(ox == nx){
        break;
      }
      else if(chess[ox+oy] != ''){
        flag = false;
        break;
      }
    }
      while(ox < prevChar(nx));
  }
  else if(ox > nx){
    do{
      ox = prevChar(ox);
      if(ox == nx){
        break;
      }
      else if(chess[ox+oy] != ''){
        flag = false;
        break;
      }
    }
        while(ox > nextChar(nx));
  }
  else if(oy < ny){
    do{
      oy++;
      if(oy == ny){
        break;
      }
     else if(chess[ox+oy] != ''){
        flag = false;
        break;
      }
    }
      while(oy < ny - 1);
      }
  else if(oy > ny){
    do{
      oy--;
      if(oy == ny){
        break;
      }
      else if(chess[ox+oy] != ''){
        flag = false;
        break;
      }
    }
      while(oy > ny + 1);
  
      }
  return flag;
}

function rookCheck(ox, oy, nx, ny){  // works for pawn, too
  let flag = true;
if(ox < nx){
  do{
    ox = nextChar(ox);
    if(chess[ox+oy] != ''){
      flag = false;
      break;
    }
  }
    while(ox < nx);
}
else if(ox > nx){
  do{
    ox = prevChar(ox);
    if(chess[ox+oy] != ''){
      flag = false;
      break;
    }
  }
      while(ox > nx);
}
else if(oy < ny){
  do{
    oy++;
    if(chess[ox+oy] != ''){
      flag = false;
      break;
    }
  }
    while(oy < ny);
    }
else if(oy > ny){
  do{
    oy--;
    if(chess[ox+oy] != ''){
      flag = false;
      break;
    }
  }
    while(oy > ny);

    }
return flag;
  }
function bishopCheckCap(ox,oy,nx,ny){
  let flag = true;
  if(ox < nx && oy < ny){
    do{
    ox = nextChar(ox);
    oy++;  
    if(ox == nx && oy == ny){
      break;
    }
    else if(chess[ox+oy] != ''){
      flag = false;
      break;
    }
  }
    while(oy < ny - 1);
  }
  else if(ox < nx && oy > ny){
    do{
    ox = nextChar(ox);
    oy--;
    if(ox == nx && oy == ny){
      break;
    }
    else if(chess[ox+oy] != ''){
      flag = false;
      break;
    }
  }
    while(oy>ny + 1);

    }
  else if(ox > nx && oy < ny){
    do{
    ox = prevChar(ox);
    oy++;
    if(ox == nx &&  oy == ny){
      break;
    }
    else if(chess[ox+oy] != ''){
      flag = false;
      break;
  }
    }
    while(oy < ny -1);
  }
  else{
    do{
      ox = prevChar(ox);
      oy++
      if(ox == nx && oy == ny){
        break;
      }
      else if(chess[ox+oy] != ''){
        flag = false;
        break;
      }
    }
    while(oy > ny + 1);
  }
  return flag;
}

function bishopCheck(ox, oy, nx, ny){
  let flag = true;
  if(ox < nx && oy < ny){
    do{
    ox = nextChar(ox);
    oy++;  
    if(chess[ox+oy] != ''){
      flag = false;
      break;
    }
  }
    while(oy < ny);
    console.log(flag);
  }
  else if(ox < nx && oy > ny){
    do{
    ox = nextChar(ox);
    oy--;
    if(chess[ox+oy] != ''){
      flag = false;
      break;
    }
  }
    while(oy>ny);

    }
  else if(ox > nx && oy < ny){
    do{
    ox = prevChar(ox);
    oy++;
    if(chess[ox+oy] != ''){
      flag = false;
      break;
  }
    }
    while(oy < ny);
  }
  else{
    do{
      ox = prevChar(ox);
      oy++
      if(chess[ox+oy] != ''){
        flag = false;
        break;
      }
    }
    while(oy > ny);
  }
  return flag;
}

function knightCheck(nx,ny){
  let flag = true;
  if(chess[nx,ny] !=''){
    flag = false;
  }
  return flag;
};


function castling(ox,oy,nx,ny){
  let buff;
  buff = chess[ox+oy];
  chess[ox+oy] = chess[nx+ny];
  chess[nx+ny] = buff;
}

   
    //  pieces move validation

   function move (){
        let vari = document.getElementById("Text1").value;
        let varies = vari.split('');
        let oldPosX = varies[0];
        let oldPosY = varies[1];
        let newPosX = varies[3];
        let newPosY = varies[4];
         let figureType = chess[oldPosX + oldPosY].name;
        switch(figureType){
        case 'rook':
          if(chess[newPosX+newPosY] != '' && chess[oldPosX+oldPosY].colour != chess[newPosX+newPosY].colour && oldPosX == newPosX && oldPosY != newPosY && rookCheckCap(oldPosX, oldPosY, newPosX, newPosY)==true || oldPosX != newPosX && oldPosY == newPosY && rookCheckCap(oldPosX, oldPosY, newPosX, newPosY && chess[newPosX+newPosY] != '' && chess[oldPosX+oldPosY].colour != chess[newPosX+newPosY].colour)==true){
            capture(oldPosX, oldPosY, newPosX, newPosY);
          }
          else if(oldPosX != newPosX && oldPosY != newPosY || rookCheck(oldPosX, oldPosY, newPosX, newPosY)==false ){
            console.log('WRONG');
            document.getElementById("asd").innerHTML = "Wrong move";
          }
            else{
            moveInArray(oldPosX, oldPosY, newPosX, newPosY);
            }
            break;

          case 'bishop':
            if(chess[newPosX+newPosY] != '' && chess[oldPosX+oldPosY].colour != chess[newPosX+newPosY].colour && Math.abs((oldPosX.charCodeAt(0)-96) - (newPosX.charCodeAt(0) - 96)) == Math.abs(oldPosY - newPosY) && bishopCheckCap(oldPosX, oldPosY, newPosX, newPosY) == true){
              capture(oldPosX, oldPosY, newPosX, newPosY);
            }
            else if(Math.abs((oldPosX.charCodeAt(0)-96) - (newPosX.charCodeAt(0) - 96)) != Math.abs(oldPosY - newPosY) || bishopCheck(oldPosX, oldPosY, newPosX, newPosY) == false){
              console.log('WRONG');
              document.getElementById("asd").innerHTML = "Wrong move";
            }
            else{
              moveInArray(oldPosX, oldPosY, newPosX, newPosY);
            }
          break;
          case 'queen':
            if(chess[newPosX+newPosY] != '' && chess[oldPosX+oldPosY].colour != chess[newPosX+newPosY].colour && oldPosX == newPosX && oldPosY != newPosY && rookCheckCap(oldPosX, oldPosY, newPosX, newPosY)==true || oldPosX != newPosX && oldPosY == newPosY && rookCheckCap(oldPosX, oldPosY, newPosX, newPosY && chess[newPosX+newPosY] != '' && chess[oldPosX+oldPosY].colour != chess[newPosX+newPosY].colour)==true || chess[newPosX+newPosY] != '' && chess[oldPosX+oldPosY].colour != chess[newPosX+newPosY].colour && Math.abs((oldPosX.charCodeAt(0)-96) - (newPosX.charCodeAt(0) - 96)) == Math.abs(oldPosY - newPosY) && bishopCheckCap(oldPosX, oldPosY, newPosX, newPosY) == true){
              capture(oldPosX, oldPosY, newPosX, newPosY);
            }
            else if(oldPosX == newPosX && oldPosY != newPosY && rookCheck(oldPosX, oldPosY, newPosX, newPosY)==true || oldPosX != newPosX && oldPosY == newPosY && rookCheck(oldPosX, oldPosY, newPosX, newPosY)==true || Math.abs((oldPosX.charCodeAt(0)-96) - (newPosX.charCodeAt(0) - 96)) == Math.abs(oldPosY - newPosY) && bishopCheck(oldPosX, oldPosY, newPosX, newPosY) == true){
              moveInArray(oldPosX, oldPosY, newPosX, newPosY);
            }
              else{
                console.log('WRONG');
                document.getElementById("asd").innerHTML = "Wrong move";
              }  
            break;
          case 'knight':
            if(chess[newPosX+newPosY] != '' && chess[oldPosX+oldPosY].colour != chess[newPosX+newPosY].colour && Math.abs((oldPosX.charCodeAt(0) - 96) - (newPosX.charCodeAt(0) - 96)) == 2 && Math.abs(oldPosY - newPosY == 1) && knightCheck(newPosX, newPosY) == true ||
            chess[newPosX+newPosY] != '' && chess[oldPosX+oldPosY].colour != chess[newPosX+newPosY].colour && Math.abs((oldPosX.charCodeAt(0) - 96) - (newPosX.charCodeAt(0) - 96)) == 1 && Math.abs(oldPosY - newPosY) == 2){
              capture(oldPosX, oldPosY, newPosX, newPosY);
            }
            else if(Math.abs((oldPosX.charCodeAt(0) - 96) - (newPosX.charCodeAt(0) - 96)) == 2 && Math.abs(oldPosY - newPosY == 1) && knightCheck(newPosX, newPosY) == true ||
            Math.abs((oldPosX.charCodeAt(0) - 96) - (newPosX.charCodeAt(0) - 96)) == 1 && Math.abs(oldPosY - newPosY) == 2){
              moveInArray(oldPosX, oldPosY, newPosX, newPosY);
            }
            else{
              console.log('WRONG');
              document.getElementById("asd").innerHTML = "Wrong move";
            }

          break;
          case 'pawn':
            if (chess[oldPosX+oldPosY].colour == 'white'){
              if(chess[newPosX+newPosY] != '' && chess[oldPosX+oldPosY].colour != chess[newPosX+newPosY].colour  && newPosY - oldPosY == 1 && Math.abs(oldPosX.charCodeAt(0) - newPosX.charCodeAt(0)) == 1){
                capture(oldPosX, oldPosY, newPosX, newPosY);
              }
              else if(oldPosX == newPosX && oldPosY == 2 && newPosY - oldPosY < 3 && rookCheck(oldPosX, oldPosY, newPosX, newPosY) == true){
                moveInArray(oldPosX, oldPosY, newPosX, newPosY);
              }
              else if(oldPosX == newPosX && newPosY - oldPosY < 2 && rookCheck(oldPosX, oldPosY, newPosX, newPosY) == true){
                moveInArray(oldPosX, oldPosY, newPosX, newPosY);
              }
              else{
                console.log('WRONG');
                document.getElementById("asd").innerHTML = "Wrong move";
            }
            }
            else if(chess[oldPosX+oldPosY].colour == 'black'){
              if(chess[newPosX+newPosY] != '' && chess[oldPosX+oldPosY].colour != chess[newPosX+newPosY].colour  && oldPosY - newPosY == 1 && Math.abs(oldPosX.charCodeAt(0) - newPosX.charCodeAt(0)) == 1){
                capture(oldPosX, oldPosY, newPosX, newPosY);
              }
              else if(oldPosX == newPosX && oldPosY == 7 && oldPosY - newPosY < 3 && rookCheck(oldPosX, oldPosY, newPosX, newPosY) == true){
                moveInArray(oldPosX, oldPosY, newPosX, newPosY);
              }
              else if(oldPosX == newPosX && oldPosY - newPosY < 2 && rookCheck(oldPosX, oldPosY, newPosX, newPosY) == true){
                moveInArray(oldPosX, oldPosY, newPosX, newPosY);
              }
              else{
                console.log('WRONG');
                document.getElementById("asd").innerHTML = "Wrong move";
            }
            }
          break;
          case 'king':
            if(chess[newPosX+newPosY] != '' && chess[oldPosX+oldPosY].colour != chess[newPosX+newPosY].colour && Math.abs(oldPosX.charCodeAt(0) - oldPosY.charCodeAt(0)) == 1 && newPosY == oldPosY ||
            chess[newPosX+newPosY] != '' && chess[oldPosX+oldPosY].colour != chess[newPosX+newPosY].colour && Math.abs(oldPosY - newPosY) == 1 && oldPosX == newPosX ||
            chess[newPosX+newPosY] != '' && chess[oldPosX+oldPosY].colour != chess[newPosX+newPosY].colour && Math.abs(oldPosY - newPosY) == 1 && Math.abs(oldPosX.charCodeAt(0) - newPosX.charCodeAt(0)) == 1 ) {
              capture(oldPosX, oldPosY, newPosX, newPosY);
            }
            else if (rookCheck(oldPosX,oldPosY,newPosX, newPosY) == true && chess[newPosX+newPosY].name=='rook' && chess[oldPosX+oldPosY].colour == chess[newPosX,newPosY].colour){
              castling(oldPosX,oldPosY,newPosX,newPosY);
            }
            else if (chess[newPosX+newPosY] == '' && Math.abs(oldPosX.charCodeAt(0) - oldPosY.charCodeAt(0)) == 1 && newPosY == oldPosY || chess[newPosX+newPosY] == '' && Math.abs(oldPosY - newPosY) == 1 && oldPosX == newPosX || chess[newPosX+newPosY] == '' && Math.abs(oldPosY - newPosY) == 1 && Math.abs(oldPosX.charCodeAt(0) - newPosX.charCodeAt(0)) == 1){
                moveInArray(oldPosX, oldPosY, newPosX, newPosY);
              } 
              else{
                console.log('WRONG');
                document.getElementById("asd").innerHTML = "Wrong move";
              }

          break;
          default:
            console.log('empty square');
            document.getElementById("asd").innerHTML = "Empty square";
          }
          };



function drawBoard(){
  table[heck] = chess[String.fromCharCode(ii).toLowerCase() + jj].name;
}
/*var chess = [];
for (i = 65; i <= 72; i++) {
     for(j=1; j<9; j++) {
         chess[String.fromCharCode(i).toLowerCase() + j] = "";
     }
    }
*/

      let ii = 65;
      let jj = 1;
      let table = [];
      let table1 = [];
      for (var i =0; i < 8; i++){
        table[i] = chess[String.fromCharCode(ii).toLowerCase() + jj].name;
        ii++;
    }
  jj++;
  ii = 65;
  for (var i =0; i < 8; i++){
    table1[i] = chess[String.fromCharCode(ii).toLowerCase() + jj].name;
    ii++;
}

    document.getElementById("table").innerHTML = table + '<br>' + table1;
    