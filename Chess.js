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

let posIncrement = 'A';


function createFigures(){
for (var i = 1; i < 9; ++i) {
    this["wp"+i] = new pawn(posIncrement, 2, 'white', false);
    this["bp"+i] = new pawn(posIncrement, 2, 'black', false);
    posIncrement = nextChar(posIncrement);
wr1 = new rook('A', 1, 'white', false);
wr2 = new rook('H', 1, 'white', false);
br1 = new rook('A', 8, 'black', false);
br2 = new rook('H', 8, 'black', false);
wk1 = new knight('B', 1, 'white', false);
wk2 = new knight('G', 1, 'white', false);
bk1 = new knight('B', 8, 'black', false);
bk2 = new knight('H', 8, 'black', false);
wb1 = new bishop('C', 1, 'white', false);
wb2 = new bishop('F', 1, 'white', false);
bb1 = new bishop('C', 8, 'black', false);
bb2 = new bishop('F', 8, 'black', false);
wk = new king('E', 1, 'white', false);
bk = new king('E', 8, 'black', false);
wq = new queen('D', 1, 'white', false);
bq = new queen('D', 8, 'black', false);
};
};


createFigures();

showPawns();


function showPawns(){
    console.log(wp1,'\n',wp2,'\n',wp3,'\n',wp4,'\n',wp5,'\n',wp6,'\n',wp7,'\n',wp8,'\n',bp1,'\n',bp2,'\n',bp3,'\n',bp4,'\n',bp5,'\n',bp6,'\n',bp7,'\n',bp8,'\n', wr1, '\n', wr2,'\n', br1,'\n', br2,'\n',bb1,'\n',bb2,'\n',wb1,'\n',wb2,'\n',wk1,'\n',wk2,'\n',bk1,'\n',bk2,'\n',wk,'\n',wq,'\n',bk,'\n',bq,'\n');

    };

