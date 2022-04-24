let box = [
    [0,2,0,2],
    [0,0,0,0],
    [0,0,2,0],
    [0,0,0,2],
]

function randomDigitForFreeField(){
    let temp=0;
    while(temp!=2 || temp!=4){
        temp = Math.random()*10
    }
    return temp
}

function setDigitOnFreeField(list){
    
    let row = Math.floor(Math.random()*5);
    let column = Math.floor(Math.random()*5);
    while (list[row][column] != 0){
        row = Math.floor(Math.random()*5);
        column = Math.floor(Math.random()*5);
    } 
    list[row][column]= randomDigitForFreeField()
    
    return list

}

function upKey(list){

    for(let i = 0 ; i < list.length-1 ; i++)      //i = row , j= column
        {
            for(let j = 0 ; j < list.length ; j++)
            {
                if(list[i][j]==0)
                {
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
    for(let i= 0 ;i < list.length-1; i++)
            {
                for(let j=0; j<list.length; j++)
                {
                    if(list[i][j]==list[i+1][j]) 
                {
                    list[i][j] = 2*list[i][j];
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
        //list = setDigitOnFreeField(list);
        return list;
}

function downKey(list){

    for(let i = list.length-1; i>0 ; i--)
        {
            for(let j=0 ; j < list.length ; j++)
            {
                if(list[i][j]==0)
                {
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
        for(let i = list.length-1; i>0 ; i--)
        {
            for(let j=0 ; j < list.length ; j++)
            {
                if(list[i][j]==list[i-1][j]) 
                {
                    list[i][j] = 2*list[i][j];
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
    //list = setDigitOnFreeField(list);
    return list
}

function rightKey(list){
    for(let i = 0 ; i < list.length ; i++)
        {
            for(let j=list.length-1 ; j>0 ; j--)
            {
                if(list[i][j]==0)
                {
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
    
        for(let i = 0 ; i < list.length ; i++)
        {
            for(let j=list.length-1 ; j > 0  ; j--)
            {
                if(list[i][j]==list[i][j-1]) 
                {
                    list[i][j] = 2*list[i][j];
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
        //list = setDigitOnFreeField(list);
        return list
    }

function leftKey(list){
    for(let i = 0 ; i < list.length ; i++)      
        {
            for(let j = 0 ; j < list.length-1; j++)
            {
                if(list[i][j]==0)
                {
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
    for(let i = 0 ; i < list.length ; i++)      
        {
            for(let j = 0 ; j < list.length-1; j++)
            {
                if(list[i][j]==list[i][j+1]) 
                {
                    list[i][j] = 2*list[i][j];
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
            //list = setDigitOnFreeField(list);
        return list

    }

