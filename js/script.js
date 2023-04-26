const eleGrid = document.querySelector('.grid');
const eleCell = document.querySelector('.cell');
const btnPlay = document.querySelector('#play');
const selectDifficulty = document.querySelector('#difficulty');
const eleHelp = document.querySelector('.help');
let points = 0;

btnPlay.addEventListener('click',
    function () {
        eleHelp.classList.add('hidden');
	    eleGrid.classList.remove('hidden');
        const nCells = parseInt(selectDifficulty.value);
        eleGrid.style.setProperty('--sideSquare', Math.sqrt(nCells));
        createGrid(nCells, eleGrid);
        const arrMines = getRandomArray (1, nCells, 16);
        console.log(arrMines);
    }
);

// funzione per creare le celle

function createGrid(numCells, eleContainer) {
    eleContainer.innerHTML = '';
    for (let i = 1; i <= numCells; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.innerHTML = [i];
        eleContainer.append(cell);
        cell.addEventListener('click', function () {
            console.log(cell);
            cell.classList.toggle('clicked');
            points++;
            if (i == randomArray)) {
                this.classList.toggle("clicked-bomb")
            }
        });
    }
};

// funzione per creare il numero random delle bombe

function getRandomArray(min, max, arrNum) {
    let randomArray = [];
    while (randomArray.length < arrNum) {
      let random = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!randomArray.includes(random)) {
        randomArray.push(random);
      }
    }
    return randomArray;
};