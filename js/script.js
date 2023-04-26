/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/

const eleGrid = document.querySelector('.grid');
const eleCell = document.querySelector('.cell');
const btnPlay = document.querySelector('#play');
const selectDifficulty = document.querySelector('#difficulty');
const eleHelp = document.querySelector('.help');

btnPlay.addEventListener('click',
    function () {
        eleHelp.classList.add('hidden');
	    eleGrid.classList.remove('hidden');
        const nCells = parseInt(selectDifficulty.value);
        eleGrid.style.setProperty('--sideSquare', Math.sqrt(nCells));
        createGrid(nCells, eleGrid);
    }
);

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
        });
    }
};