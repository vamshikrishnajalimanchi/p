window.addEventListener('DOMContentLoaded',()=>{
    const resetButton=document.querySelector('#reset');
    const playerDisplay=document.querySelector('.display-player');
    const tiles = Array.from(document.querySelectorAll('.tile'))
    let player='X';
    let chanceCompleted=0;
    
    //selecting name each tile
    //tiles.
    for(let i in tiles){
        console.log(i);
        console.log(tiles[i]);
        tiles[i].addEventListener('click',(e)=>{
            console.log(e.target.id);
            var id=e.target.id;
            clickFunction(id);})  
    }

    function clickFunction(idOfTile){
        console.log('id in function'+idOfTile);
        //if ((tiles[idOfTile].innerHTML()!==X)&&(tiles[idOfTile].innerHTML()!==O)){tiles[idOfTile].innerText='X';}
        //tiles[idOfTile].innerText='X';
        if((tiles[idOfTile].innerText=='')&&(player=='X')){
            tiles[idOfTile].innerText='X';player='O';
            //to show players turn
            playerDisplay.innerText='O';chanceCompleted++;
            //checking chance if greater than 4, for winners
            checking(tiles[idOfTile].innerText);
        }
        else if((tiles[idOfTile].innerText=='')&&(player=='O')){
            tiles[idOfTile].innerText='O';player='X';
            //to show players turn
            playerDisplay.innerText='X';chanceCompleted++;
            //checking chance if greater than 4, for winners
            checking(tiles[idOfTile].innerText);
        }
        else{
            window.confirm('box already filled')}
            console.log(tiles[idOfTile].innerHTML);
    }
    
    resetButton.addEventListener('click', ()=>{location.reload()});
    //function resetBoard(){
    //    location.reload();
    //    console.log('hii')}
    function checking(playerSelected){
        if((chanceCompleted>4)&&(chanceCompleted<8)
        &&(((tiles[0].innerText==tiles[4].innerText)&&(tiles[4].innerText==tiles[8].innerText)&&(tiles[4].innerText!='')

        )||((tiles[0].innerText==tiles[1].innerText)&&(tiles[1].innerText==tiles[2].innerText)&&(tiles[1].innerText!='')

        )||((tiles[0].innerText==tiles[3].innerText)&&(tiles[3].innerText==tiles[6].innerText)&&(tiles[3].innerText!='')

        )||((tiles[2].innerText==tiles[5].innerText)&&(tiles[5].innerText==tiles[8].innerText)&&(tiles[5].innerText!='')

        )||((tiles[6].innerText==tiles[7].innerText)&&(tiles[7].innerText==tiles[8].innerText)&&(tiles[7].innerText!='')

        )||((tiles[6].innerText==tiles[4].innerText)&&(tiles[4].innerText==tiles[2].innerText)&&(tiles[4].innerText!='')

        )||((tiles[3].innerText==tiles[4].innerText)&&(tiles[4].innerText==tiles[5].innerText)&&(tiles[4].innerText!='')

        )||((tiles[1].innerText==tiles[4].innerText)&&(tiles[4].innerText==tiles[7].innerText)&&(tiles[4].innerText!='')

        ))){
           let winner =window.confirm(playerSelected+' Won!')
           if(winner){location.reload()}
           else{location.reload()}
        } 
        
        else if (chanceCompleted>6){
        let draw =window.confirm('Game is draw!')
        if(draw){location.reload()}
        else{location.reload()}     
        }
    }    
});