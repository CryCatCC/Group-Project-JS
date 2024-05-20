var game_try;
function loadgame(){
    var board = initBoard(3);
    var start = document.createElement("button");
    start.innerText="Start";
    start.id="start_button";
    var game_state = 0;
    var boardSize = 3;
    var cake_names = ["coffee","cream","kakao"]
    start.addEventListener("click",function(){
        if (game_state==0){
            game_try=boardSize;
            var number = Math.floor(Math.random()*(boardSize-1));
            let capt = document.getElementById("game_caption");
            capt.innerText = "Find the " +cake_names[number]+" cake";
            let cells = document.getElementsByClassName("cake");
            for (let i = 0; i < 3; i++)
                cells[i].classList.toggle("hide");   
            let tds = document.getElementsByTagName("td");
            for (let i = 0; i < 9; i++)
                tds[i].addEventListener('click', (event)=>toggleCell(event,number));
        }
        game_state=1;
    })
    var new_game = document.createElement("button");
    new_game.innerText="New game";
    new_game.id="new_game_button";
    new_game.addEventListener("click",()=>loadgame());
    var last_tr = board.getElementsByTagName("tr");
    last_tr[last_tr.length-1].appendChild(new_game);
    last_tr[0].appendChild(start);
    
}
function createBoard(board, boardSize)
{
    for (let i = 0; i < boardSize; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < boardSize; j++) {
            const cell = document.createElement('td');
           // cell.addEventListener('click', (event)=>toggleCell(event,number));
            //cell.classList.toggle('on', true);
            row.appendChild(cell);
        }
        board.appendChild(row);
    }
}

function initBoard(boardSize) {
        var container = document.getElementById("catalog-container");
        container.innerHTML = '';
        var board = document.createElement("table");
        var caption = document.createElement("caption");
        caption.id = "game_caption";
        caption.innerText = "Find the...";
        board.appendChild(caption);
        container.appendChild(board);
        createBoard(board, 3);
       /* for (let i = 0; i < boardSize; i++){
        const cell = document.getElementsByTagName('td')[i+boardSize*(boardSize-1)];
        cell.classList.toggle(String("place"+i));
        cell.style.border=String("2px solid "+colors[i]);
    } */
    function setCake(cake_count){
        let cake_x = Math.floor(Math.random()*boardSize);
        let cake_y = Math.floor(Math.random()*(boardSize));
        const cell = document.getElementsByTagName('td')[cake_y*boardSize+cake_x];
        if (!cell.classList.contains("cake")){
            cell.classList.toggle(String("cake"+cake_count));
            cell.classList.toggle("cake");
            let img = document.createElement("img");
            img.setAttribute("src",String("images/cakes/"+(cake_count+1)+".jpg"));
            img.classList.toggle(String("cake"+cake_count));
            cell.appendChild(img);
            return true;
        }
        return false;
    }
    for (let cake_count=0; cake_count<boardSize; cake_count++){
        while(!setCake(cake_count));
        
    }
    return board;
    // moves = 0;
    // document.getElementById('moves').innerHTML = moves;
    // timeS = new Date().getTime();
}
function toggleCell(event,number){
    
    var cell = event.target;
    console.log(number,cell);
    cell.classList.toggle("hide");
    if (cell.classList.contains(String("cake"+number))){
        cell.classList.toggle("place2");
        if (game_try>0)
        alert("You win!");
    }else{
        cell.classList.toggle("place0");
        game_try-=1;
    if (game_try==0){
        alert("You loose");
    }
    }

}
