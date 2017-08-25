// https://www.youtube.com/watch?v=S1TQCi9axzg

let x = window.innerWidth / 2;
let y = window.innerHeight / 2;
let value;

let arrayOfSymbols = [];

function setup()
{
    createCanvas(window.innerWidth, window.innerHeight);
    
    for(i = 1; i <= 100; i++)
    {
        arrayOfSymbols.push(i)
    }
        
    textFont('Consolas');
    textSize(60)

    value = String.fromCharCode(0x30A0 + round(random(0, 96)));

    background(0);
}

function draw()
{
    background(0, 165);
    fill(250)
    text(value, x, y)
}