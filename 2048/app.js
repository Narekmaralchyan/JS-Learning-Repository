let box = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
]
let result = 0;

function randomDigitForFreeField(){
    let randomDigit=0;
    while(randomDigit !=2 && randomDigit!=4){
        randomDigit = Math.floor(Math.random()*5)
    }
    return randomDigit
}

function setDigitOnFreeField(list){
    
    let row = Math.floor(Math.random()*4);
    let column = Math.floor(Math.random()*4);
    while (list[row][column] != 0){
        row = Math.floor(Math.random()*4);
        column = Math.floor(Math.random()*4);
    } 
    list[row][column]= randomDigitForFreeField()
    
    return list

}

function upKey(list){
    let emptyFields = 0;
    for(let i = 0 ; i < list.length-1 ; i++)      //i = row , j= column
        {
            for(let j = 0 ; j < list.length ; j++)
            {
                if(list[i][j]==0)
                {   emptyFields++;
                    let first =i;
                    let second = i+1
                    while(first <list.length-1)
                    {
                       while(list[second][j] == 0 && second<list.length-1)
                       {
                            second = second+1
                       }
                       list[first][j] = list[second][j]
                       list[second][j]=0
                       first = first +1
                    }
                }
            }
        }
        let equalFields =0 ;
    for(let i= 0 ;i < list.length-1; i++)
            {
                for(let j=0; j<list.length; j++)
                {
                    if(list[i][j]==list[i+1][j]) 
                {
                    equalFields ++ ;
                    list[i][j] = 2*list[i][j];
                    result = result +list[i][j];
                    let first =i+1;
                    let second = i+2
                    while(first <list.length-1){
                       while(list[second][j] == 0 && second<list.length-1)
                       {
                            second = second+1
                       }
                       list[first][j] = list[second][j]
                       list[second][j]=0
                       first = first +1

                    }
                }
                }
            }
        list = setDigitOnFreeField(list);
        setArrayOnHTML(list);
        //if(equalFields==0 && emptyFields==0) gameEnd() ;
        box = list
        
}

function downKey(list){
    let emptyFields = 0;
    for(let i = list.length-1; i>0 ; i--)
        {
            for(let j=0 ; j < list.length ; j++)
            {
                if(list[i][j]==0)
                {   
                    emptyFields ++;
                    let first = i;
                    let second = i-1
                    while(first>0)
                    {
                        while(list[second][j]==0 && second > 0)
                        {
                            second = second -1
                        }
                        list[first][j]=list[second][j]
                        list[second][j]=0
                        first= first -1
                    }
                }
            }
        }
        let equalFields =0;
        for(let i = list.length-1; i>0 ; i--)
        {
            for(let j=0 ; j < list.length ; j++)
            {
                if(list[i][j]==list[i-1][j]) 
                {   
                    equalFields++ ;
                    list[i][j] = 2*list[i][j];
                    result = result + list[i][j]
                    let first =i-1;
                    let second = i-2;
                    while(first > 0){
                       while(list[second][j] == 0 && second>0)
                       {
                            second = second-1
                       }
                       list[first][j] = list[second][j]
                       list[second][j]=0
                       first = first -1

                    }
                                
                }
            }
            
        }
        list = setDigitOnFreeField(list);
        setArrayOnHTML(list);
        //if(equalFields==0 && emptyFields==0) gameEnd() ;
        box = list
    
}

function rightKey(list){
    let emptyFields =0;
    for(let i = 0 ; i < list.length ; i++)
        {
            for(let j=list.length-1 ; j>0 ; j--)
            {
                if(list[i][j]==0)
                {   emptyFields++;
                    let first = j;
                    let second = j-1
                    while(first>0)
                    {
                        while(list[i][second]==0 && second > 0)
                        {
                            second = second -1
                        }
                        list[i][first]=list[i][second]
                        list[i][second]=0
                        first= first -1
                    }
                }
            }
        } 
    let equalFields =0;
        for(let i = 0 ; i < list.length ; i++)
        {
            for(let j=list.length-1 ; j > 0  ; j--)
            {
                if(list[i][j]==list[i][j-1]) 
                {   equalFields++;
                    list[i][j] = 2*list[i][j];
                    result = result + list[i][j];
                    let first =j-1;
                    let second = j-2;
                    while(first > 0){
                       while(list[i][second] == 0 && second>0)
                       {
                            second = second-1
                       }
                       list[i][first] = list[i][second]
                       list[i][second]=0
                       first = first -1

                    }
                                
                }
            }
        }
        list = setDigitOnFreeField(list);
        setArrayOnHTML(list);
        //if(equalFields==0 && emptyFields==0) gameEnd();
        box = list
    }

function leftKey(list){
    let emptyFields=0;
    for(let i = 0 ; i < list.length ; i++)      
        {
            for(let j = 0 ; j < list.length-1; j++)
            {
                if(list[i][j]==0)
                {
                    emptyFields++;
                    let first =j;
                    let second = j+1
                    while(first <list.length-1)
                    {
                       while(list[i][second] == 0 && second<list.length-1)
                       {
                            second = second+1
                       }
                       list[i][first] = list[i][second]
                       list[i][second]=0
                       first = first +1
                    }
                }
            }
        }
        let equalFields=0;
    for(let i = 0 ; i < list.length ; i++)      
        {
            for(let j = 0 ; j < list.length-1; j++)
            {
                if(list[i][j]==list[i][j+1]) 
                {   equalFields++;
                    list[i][j] = 2*list[i][j];
                    result = result + list[i][j];
                    let first =j+1;
                    let second = j+2
                    while(first <list.length-1){
                       while(list[i][second] == 0 && second<list.length-1)
                       {
                            second = second+1
                       }
                       list[i][first] = list[i][second]
                       list[i][second]=0
                       first = first +1

                    }
                }
            }
        }
        list = setDigitOnFreeField(list);
        setArrayOnHTML(list);
        //if(equalFields==0 && emptyFields==0) gameEnd() ;
        box = list

    }

function setArrayOnHTML(list){
    let res= document.getElementById("result")
    res.innerHTML = `${result}`
    let arrayBox = []
    for( let j = 0; j< list.length ; j++)
        {
            for(let i=0 ; i<list.length ; i++)
                {
                    arrayBox.push(list[i][j])
                }
        }
    let cells = document.querySelectorAll(".cell")
    arrayBox.forEach((item,index)=>{
        if(item==0) cells[index].innerHTML = "" ;
        else cells[index].innerHTML = item;
        cells[index].style.backgroundColor=""
    arrayBox.forEach((item,index)=>{

        if (item==2) cells[index].style.backgroundColor="blue";
            else if (item==4) cells[index].style.backgroundColor="green"
                else if (item==8) cells[index].style.backgroundColor="yellow";
                    else if (item==16) cells[index].style.backgroundColor="red"
                        else if (item==32) cells[index].style.backgroundColor="pink";
                            else if (item==64) cells[index].style.backgroundColor="white"
    })    
    })
        ;
}



function startNewGame(){ 
    result = 0;
    box = box.map(item=>item.map(it=>it=0))
    setDigitOnFreeField(box)
    setDigitOnFreeField(box)
    setArrayOnHTML(box)
    document.body.onkeydown = function(e){
        if(e.key == "ArrowUp")   upKey(box);
                                   
        else if(e.key == "ArrowDown")  downKey(box);         
                                
        else if(e.key == "ArrowLeft")   leftKey(box);
              
        else if(e.key == "ArrowRight")  rightKey(box);
                                 

    }}


function Game(){
    let start = document.getElementById("start")
    start.onclick = startNewGame

}


Game()


