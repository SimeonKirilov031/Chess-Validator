

//
// Simple functions to increment and decrement letters
  function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
};
function prevChar(c) {
  return String.fromCharCode(c.charCodeAt(0) - 1);
};

function outputWrong(){
  console.log('Wrong move');
  
}

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
      movePiece(nx, ny){
        if (this.colour == 'white'){
          if(chess[nx+ny] != '' && this.colour != chess[nx+ny].colour  && ny - this.posY == 1 && Math.abs(oldPosX.charCodeAt(0) - nx.charCodeAt(0)) == 1){
            capture(this.posX, this.posY, nx, ny);
          }
          else if(this.posX == nx && this.posY == 2 && ny - this.posY < 3 && this.checkPath(this.posX, this.posY, nx, ny) == true){
            moveInArray(this.posX, this.posY, nx, ny);
          }
          else if(this.posX == nx && ny - this.posY < 2 && this.checkPath(this.posX, this.posY, nx, ny) == true){
            moveInArray(this.posX, this.posY, nx, ny);
          }
          else{
            outputWrong();

        }
        }
        else if(this.colour == 'black'){
          if(chess[nx+ny] != '' && this.colour != chess[nx+ny].colour  && this.posY - ny == 1 && Math.abs(this.posX.charCodeAt(0) - nx.charCodeAt(0)) == 1){
            capture(this.posX, this.posY, nx, ny);
          }
          else if(this.posX == nx && this.posY == 7 && this.posY - ny < 3 && this.checkPath(this.posX, this.posY, nx, ny) == true){
            moveInArray(this.posX, this.posY, nx, ny);
          }
          else if(this.posX == nx && this.posY - ny < 2 && this.checkPath(this.posX, this.posY, nx, ny) == true){
            moveInArray(this.posX, this.posY, nx, ny);
          }
          else{
            outputWrong();

        }
        }
      }
      checkPath(ox, oy, nx,ny){
        let flag = true;
  if(oy < ny){
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

};

      

class rook {
    constructor(posX, posY, colour, dead, name){
        this.posX = posX;
        this.posY = posY;
        this.colour = colour;
        this.dead = dead; 
        this.name = 'rook';
    };
    movePiece(nx,ny){
      if(chess[nx+ny] != '' && chess[this.posX+this.posY].colour != chess[nx+ny].colour && this.posX == nx && this.posY != ny && this.checkCap(this.posX, this.posY, nx, ny)==true || 
      this.posX != nx && this.posY == ny && this.checkCap(this.posX, this.posY, nx, ny)==true && chess[nx+ny] != '' && chess[this.posX+this.posY].colour != chess[nx+ny].colour){
        capture(this.posX, this.posY, nx, ny);
      }
      else if(this.posX != nx && this.posY != ny || this.checkPath(this.posX, this.posY, nx, ny)==false ){
        outputWrong();
        
      }
        else{
        moveInArray(this.posX, this.posY, nx, ny);
        }
    }
    checkPath(ox, oy, nx, ny){
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
    checkCap(ox, oy, nx, ny){
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
};

class knight {
    constructor(posX, posY, colour, dead, name){
        this.posX = posX;
        this.posY = posY;
        this.colour = colour;
        this.dead = dead; 
        this.name = 'knight';    
    };
    movePiece(nx,ny){
      if(chess[nx+ny] != '' && chess[this.posX+this.posY].colour != chess[nx+ny].colour && Math.abs((this.posX.charCodeAt(0) - 96) - (nx.charCodeAt(0) - 96)) == 2 && Math.abs(this.posY - ny == 1) && knightCheck(nx, ny) == true ||
            chess[nx+ny] != '' && chess[this.posX+this.posY].colour != chess[nx+ny].colour && Math.abs((this.posX.charCodeAt(0) - 96) - (nx.charCodeAt(0) - 96)) == 1 && Math.abs(this.posY - ny) == 2){
              capture(this.posX, this.posY, nx, ny);
            }
            else if(Math.abs((this.posX.charCodeAt(0) - 96) - (nx.charCodeAt(0) - 96)) == 2 && Math.abs(this.posY - ny == 1) && this.checkPath(nx, ny) == true ||
            Math.abs((this.posX.charCodeAt(0) - 96) - (nx.charCodeAt(0) - 96)) == 1 && Math.abs(this.posY - ny) == 2){
              moveInArray(this.posX, this.posY, nx, ny);
            }
            else{
              outputWrong();
  
            }
    }
    checkPath(nx,ny){
      let flag = true;
      if(chess[nx,ny] !=''){
        flag = false;
      }
      return flag;
    }
};

class bishop {
    constructor(posX, posY, colour, dead, name){
        this.posX = posX;
        this.posY = posY;
        this.colour = colour;
        this.dead = dead; 
        this.name = 'bishop';    
    };
    movePiece(nx, ny){
      if(chess[nx+ny] != '' && chess[this.posX+this.PosY].colour != chess[nx+ny].colour && Math.abs((this.posX.charCodeAt(0)-96) - (nx.charCodeAt(0) - 96)) == Math.abs(this.PosY - ny) && this.checkCap(this.posX, this.PosY, nx, ny) == true){
        capture(this.posX, this.PosY, nx, ny);
      }
      else if(Math.abs((this.posX.charCodeAt(0)-96) - (nx.charCodeAt(0) - 96)) == Math.abs(this.PosY - ny) && this.checkPath(this.posX, this.PosY, nx, ny) == true){
        moveInArray(this.posX, this.PosY, nx, ny);
      }
      else{
        outputWrong();
        
      }
    }
    checkPath(ox,oy,nx,ny){
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
    checkCap(ox,oy,nx,ny){
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
};

class king {
    constructor(posX, posY, colour, dead, name){
        this.posX = posX;
        this.posY = posY;
        this.colour = colour;
        this.dead = dead; 
        this.name = 'king';   
    };
    movePiece (nx,ny){
      if (wr1.checkPath(this.posX,this.posY,nx, ny) == true && chess[nx+ny].name=='rook' && chess[this.posX+this.posY].colour == chess[nx,ny].colour){
      castling(this.posX,this.posY,nx,ny);
  }
  if(chess[nx+ny] != '' && chess[this.posX+this.posY].colour != chess[nx+ny].colour && Math.abs(this.posX.charCodeAt(0) - this.posY.charCodeAt(0)) == 1 && ny == this.posY ||
  chess[nx+ny] != '' && chess[this.posX+this.posY].colour != chess[nx+ny].colour && Math.abs(this.posY - ny) == 1 && this.posX == nx ||
  chess[nx+ny] != '' && chess[this.posX+this.posY].colour != chess[nx+ny].colour && Math.abs(this.posY - ny) == 1 && Math.abs(this.posX.charCodeAt(0) - nx.charCodeAt(0)) == 1 ) {
    capture(this.posX, this.posY, nx, ny);
  }
  
  else if (chess[nx+ny] == '' && Math.abs(this.posX.charCodeAt(0) - this.posY.charCodeAt(0)) == 1 && ny == this.posY ||
   chess[nx+ny] == '' && Math.abs(this.posY - ny) == 1 && this.posX == nx ||
    chess[nx+ny] == '' && Math.abs(this.posY - ny) == 1 && Math.abs(this.posX.charCodeAt(0) - nx.charCodeAt(0)) == 1){
      moveInArray(this.posX, this.posY, nx, ny);
    } 
    else{
      outputWrong();
      
    }
  }
};
class queen {
    constructor(posX, posY, colour, dead, name){
        this.posX = posX;
        this.posY = posY;
        this.colour = colour;
        this.dead = dead; 
        this.name = 'queen';   
    };
    movePiece(nx,ny){
      if(chess[nx+ny] != '' && chess[this.posX+this.posY].colour != chess[nx+ny].colour && this.posX == nx && this.posY != ny && wr1.checkCap(this.posX, this.posY, nx, ny)==true || 
      this.posX != nx && this.posY == ny && wr1.checkCap(this.posX, this.posY, nx, ny && chess[nx+ny] != '' && chess[this.posX+this.posY].colour != chess[nx+ny].colour)==true ||
       chess[nx+ny] != '' && chess[this.posX+this.posY].colour != chess[nx+ny].colour && Math.abs((this.posX.charCodeAt(0)-96) - (nx.charCodeAt(0) - 96)) == Math.abs(this.posY - ny) && wb1.checkCap(this.posX, this.posY, nx, ny) == true){
        capture(this.posX, this.posY, nx, ny);
      }
      else if(this.posX == nx && this.posY != ny && wr1.checkPath(this.posX, this.posY, nx, ny)==true || 
      this.posX != nx && this.posY == ny && wr1.checkPath(this.posX, this.posY, nx, ny)==true || 
      Math.abs((this.posX.charCodeAt(0)-96) - (nx.charCodeAt(0) - 96)) == Math.abs(this.posY - ny) && wb1.checkPath(this.posX, this.posY, nx, ny) == true){
        moveInArray(this.posX, this.posY, nx, ny);
      }
        else{
          outputWrong();
          
        }  
    }
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
bk2 = new knight('g', 8, 'black', false);
chess['g8'] = bk2;
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






function castling(ox,oy,nx,ny){
  buff = chess[ox+oy];
  chess[ox+oy] = chess[nx+ny];
  chess[nx+ny] = buff[0];

}

   
    //  pieces move validation

   function move (){
        let vari = document.getElementById("Text1").value;
        let varies = vari.split('');
        let oldPosX = varies[0];
        let oldPosY = varies[1];
        let newPosX = varies[3];
        let newPosY = varies[4];
        if(chess[oldPosX + oldPosY] == ''){
          document.getElementById("asd").innerHTML = "Empty square";
        }
        else{
        chess[oldPosX + oldPosY].movePiece(newPosX,newPosY);
   }
  }
      