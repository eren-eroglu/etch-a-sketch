
document.addEventListener('DOMContentLoaded',function(){
        createBoard(2);
        console.log('hi')
})

function createBoard(size){
        let board = document.querySelector('.board');
        board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        board.style.gridTemplateRows    = `repeat(${size}, 1fr)`;

        let numDivs = size * size;

        for(let i = 0; i < numDivs; i++){
                let div = document.createElement('div');
                board.insertAdjacentElement('beforeend',div);
                div.style.backgroundColor = `purple`;
                div.style.border = `1px solid black`;
        }
}