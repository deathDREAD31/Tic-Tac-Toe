let cells = document.querySelectorAll('.cell');
let reset = document.querySelector('.reset');
let newbtn = document.querySelector('.New');
let msg_content = document.querySelector('.msg_content');
let msg = document.querySelector('#winner');


let turn = 'X';
let count = 0;

let winnningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if(turn === 'X') {
            cell.textContent = 'X';
            cell.style.color = 'red';
            turn = 'O';
        } else {
            cell.textContent = 'O';
            cell.style.color = 'yellow';
            turn = 'X';
        }
        cell.disabled = true;
        count++;
        let winner = checkWinner();
        if(count === 9 && !winner) {
            msg.innerText = "It's a tie";
            msg_content.classList.remove('hide');
            disable();
        }
    });  
});

enable = () => {
    cells.forEach(cell => {
        cell.disabled = false;
        cell.innerText = '';
    });
};

disable = () => {
    cells.forEach(cell => {
        cell.disabled = true;
    });
    
};
showwinner = (winner) => {
    msg.innerText = `Congratulation ${winner} won the game`;
    msg_content.classList.remove('hide');
    disable();
};

checkWinner = () => {
    for(let comb of winnningCombinations){
        let text1 = cells[comb[0]].innerText;
        let text2 = cells[comb[1]].innerText;
        let text3 = cells[comb[2]].innerText;
        if(text1 != "" && text2 != "" && text3 != "" && text1 === text2 && text2 === text3) {
            if(text1 === text2 && text2 === text3) {
                showwinner(text1);
                return true;
            }
        }
    }
};

resetbtn = () => { 
    enable();
    turn = 'X';
    count = 0;
    msg_content.classList.add('hide');
};
reset.addEventListener('click', resetbtn);
newbtn.addEventListener('click', resetbtn);