
//
//
var food;
var foodMaze = [];
var foodCurrent = [];

//
//
//
function GetMazeFood()
{
    var array =  
    [
        ['XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX'],
        ['XX','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','XX','XX','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','XX'],
        ['XX','oo','XX','XX','XX','XX','oo','XX','XX','XX','XX','XX','oo','XX','XX','oo','XX','XX','XX','XX','XX','oo','XX','XX','XX','XX','oo','XX'],
        ['XX','OO','XX','XX','XX','XX','oo','XX','XX','XX','XX','XX','oo','XX','XX','oo','XX','XX','XX','XX','XX','oo','XX','XX','XX','XX','OO','XX'],
        ['XX','oo','XX','XX','XX','XX','oo','XX','XX','XX','XX','XX','oo','XX','XX','oo','XX','XX','XX','XX','XX','oo','XX','XX','XX','XX','oo','XX'],
        ['XX','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','XX'],
        ['XX','oo','XX','XX','XX','XX','oo','XX','XX','oo','XX','XX','XX','XX','XX','XX','XX','XX','oo','XX','XX','oo','XX','XX','XX','XX','oo','XX'],
        ['XX','oo','XX','XX','XX','XX','oo','XX','XX','oo','XX','XX','XX','XX','XX','XX','XX','XX','oo','XX','XX','oo','XX','XX','XX','XX','oo','XX'],
        ['XX','oo','oo','oo','oo','oo','oo','XX','XX','oo','oo','oo','oo','XX','XX','oo','oo','oo','oo','XX','XX','oo','oo','oo','oo','oo','oo','XX'],
        ['XX','XX','XX','XX','XX','XX','oo','XX','XX','XX','XX','XX','  ','XX','XX','  ','XX','XX','XX','XX','XX','oo','XX','XX','XX','XX','XX','XX'],
        ['XX','XX','XX','XX','XX','XX','oo','XX','XX','XX','XX','XX','  ','XX','XX','  ','XX','XX','XX','XX','XX','oo','XX','XX','XX','XX','XX','XX'],
        ['XX','XX','XX','XX','XX','XX','oo','XX','XX','  ','  ','  ','  ','  ','  ','  ','  ','  ','  ','XX','XX','oo','XX','XX','XX','XX','XX','XX'],
        ['XX','XX','XX','XX','XX','XX','oo','XX','XX','  ','XX','XX','XX','XX','XX','XX','XX','XX','  ','XX','XX','oo','XX','XX','XX','XX','XX','XX'],
        ['XX','XX','XX','XX','XX','XX','oo','XX','XX','  ','XX','XX','XX','XX','XX','XX','XX','XX','  ','XX','XX','oo','XX','XX','XX','XX','XX','XX'],
        ['XX','  ','  ','  ','  ','  ','oo','  ','  ','  ','XX','XX','XX','XX','XX','XX','XX','XX','  ','  ','  ','oo','  ','  ','  ','  ','  ','XX'],
        ['XX','XX','XX','XX','XX','XX','oo','XX','XX','  ','XX','XX','XX','XX','XX','XX','XX','XX','  ','XX','XX','oo','XX','XX','XX','XX','XX','XX'],
        ['XX','XX','XX','XX','XX','XX','oo','XX','XX','  ','XX','XX','XX','XX','XX','XX','XX','XX','  ','XX','XX','oo','XX','XX','XX','XX','XX','XX'],
        ['XX','XX','XX','XX','XX','XX','oo','XX','XX','  ','  ','  ','  ','  ','  ','  ','  ','  ','  ','XX','XX','oo','XX','XX','XX','XX','XX','XX'],
        ['XX','XX','XX','XX','XX','XX','oo','XX','XX','  ','XX','XX','XX','XX','XX','XX','XX','XX','  ','XX','XX','oo','XX','XX','XX','XX','XX','XX'],
        ['XX','XX','XX','XX','XX','XX','oo','XX','XX','  ','XX','XX','XX','XX','XX','XX','XX','XX','  ','XX','XX','oo','XX','XX','XX','XX','XX','XX'],
        ['XX','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','XX','XX','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','XX'],
        ['XX','oo','XX','XX','XX','XX','oo','XX','XX','XX','XX','XX','oo','XX','XX','oo','XX','XX','XX','XX','XX','oo','XX','XX','XX','XX','oo','XX'],
        ['XX','oo','XX','XX','XX','XX','oo','XX','XX','XX','XX','XX','oo','XX','XX','oo','XX','XX','XX','XX','XX','oo','XX','XX','XX','XX','oo','XX'],
        ['XX','OO','oo','oo','XX','XX','oo','oo','oo','oo','oo','oo','oo','  ','  ','oo','oo','oo','oo','oo','oo','oo','XX','XX','oo','oo','OO','XX'],
        ['XX','XX','XX','oo','XX','XX','oo','XX','XX','oo','XX','XX','XX','XX','XX','XX','XX','XX','oo','XX','XX','oo','XX','XX','oo','XX','XX','XX'],
        ['XX','XX','XX','oo','XX','XX','oo','XX','XX','oo','XX','XX','XX','XX','XX','XX','XX','XX','oo','XX','XX','oo','XX','XX','oo','XX','XX','XX'],
        ['XX','oo','oo','oo','oo','oo','oo','XX','XX','oo','oo','oo','oo','XX','XX','oo','oo','oo','oo','XX','XX','oo','oo','oo','oo','oo','oo','XX'],
        ['XX','oo','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','oo','XX','XX','oo','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','oo','XX'],
        ['XX','oo','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','oo','XX','XX','oo','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','oo','XX'],
        ['XX','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','oo','XX'],
        ['XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX','XX']
    ];
    
    return array;
}

//
//
//
function InitFood()
{
    foodCurrent = GetMazeFood();
    foodMaze    = GetMazeFood();
    
  
    
    
    var divFood = document.getElementById('divFood');
            
    
    var lenghtx     = foodMaze[0].length;
    var lenghty     = foodMaze.length;
    var totalDots   = 0;
    var bigDots     = [];
    
    this.bigDotHide = false;
    
    for (var i=0; i<lenghty; i++)
    {
        for (var j=0; j<lenghtx; j++)
        {
            if ( foodMaze[i][j]=='oo' )
            {
                var mNewObj = document.createElement('img');
                mNewObj.id = 'food_'+ i +'_'+ j;
                mNewObj.border = 0;
                mNewObj.src = 'pacman/food/dot.gif';
                mNewObj.style.position = 'absolute';
                var posx = (16 * (i))-1 + 72; 
                var posy = (16 * (j))-1 + 16; 
                mNewObj.style.top = posx + 'px';
                mNewObj.style.left = posy + 'px';

                divFood.appendChild(mNewObj);
                
                
                totalDots++;
            }
            else if ( foodMaze[i][j]=='OO' )
            {
                var mNewObj = document.createElement('img');
                mNewObj.id = 'food_'+ i +'_'+ j;
                mNewObj.border = 0;
                mNewObj.src = 'pacman/food/dotbig.gif';
                mNewObj.style.position = 'absolute';
                var posx = (16 * (i)) - 8 + 72;  
                var posy = (16 * (j)) - 8 + 16; 
                mNewObj.style.top = posx + 'px';
                mNewObj.style.left = posy + 'px';

                divFood.appendChild(mNewObj);
                
                
                totalDots++;
                
                
                bigDots.push( {img:mNewObj, x:i, y:j} );
            }
        }
    }

    
    food = new Food( totalDots );
    food.SetBigDots( bigDots );
}



//
//
//
function Food( totalDots )
{
   
    this.tickAcum = 0;
        
    this.totalDots  = totalDots;
    
    this.actualDots = 0;
    
   
    this.bigDots = [];
}

//
//
//
Food.prototype.GetBigDots =
    function ()
    {
        return this.bigDots;
    };

//
//
//
Food.prototype.SetBigDots =
    function ( value )
    {
        this.bigDots = value;
    };
    
//
//
//
Food.prototype.GetActualDots =
    function ()
    {
        return this.actualDots;
    };

//
//
//
Food.prototype.SetActualDots =
    function ( value )
    {
        this.actualDots = value;
    };
    
//
//
//
Food.prototype.SetTotalDots =
    function ( value )
    {
        this.totalDots = value;
    };

//
//
//
Food.prototype.GetTotalDots =
    function ()
    {
        return this.totalDots;
    };
    
//
//
//
Food.prototype.RemoveDot =
    function (  x, y )
    {
        var id = 'food_'+ y + '_' + x;
        var biscuit = document.getElementById( id );
        biscuit.style.visibility = 'hidden';
        
       
        foodMaze[y][x]='';    
        
       
        this.actualDots++;
    };

//
//
//
Food.prototype.Refresh =
    function () 
    {
       
        foodMaze        = GetMazeFood(); 
        var lenghtx     = foodMaze[0].length;
        var lenghty     = foodMaze.length;
        var totalDots   = 0;
        
        
        for (var i=0; i<lenghty; i++)
        {
            for (var j=0; j<lenghtx; j++)
            {
                if ( foodMaze[i][j]=='oo' || foodMaze[i][j]=='OO' )
                {
                    var id = 'food_'+ i + '_' + j;
                    var biscuit = document.getElementById( id );
                    biscuit.style.visibility = 'visible';
                    
                    totalDots++;
                }
            }
        }
        
      
        this.SetTotalDots( totalDots );
    }


//
//
//
Food.prototype.Update =
    function ( tick ) 
    {
        
        this.tickAcum += tick;
        if ( this.tickAcum>=150 ) 
        {
           
            var bigDots = this.GetBigDots();
            for ( var i=0; i<bigDots.length; i++ )
            {
                var visible = ( this.bigDotHide ) ? 'visible': 'hidden';
                var image   = bigDots[i].img; 
                var x = bigDots[i].x; 
                var y = bigDots[i].y; 
                
                if ( foodMaze[x][y]=='OO')
                    image.style.visibility = visible;
            }
            this.bigDotHide = !this.bigDotHide;
            this.tickAcum = 0;
        }
        
        
    
        
        var x = pacmans[0].GetX();
        var y = pacmans[0].GetY();

        var posx = x;
        var posy = y;
        var biscuit = foodMaze[y][x];
        
        var isBiscuit = biscuit=='oo' ? true: false;
        var isBigBiscuit = biscuit=='OO' ? true: false;
        
        if ( isBiscuit || isBigBiscuit )
        {
            if ( isBiscuit )
            {
                soundPlayer.Play( 'eatBiscuit' );
                game.UpdateScore( 10 ); 
            }
            
            if ( isBigBiscuit )
            {
                
                soundPlayer.Play( 'bigDotEaten' );
                
                game.UpdateScore( 50 ); 
                
                
                game.SetTheGhostEatables( true );
                
                
                game.ResetMultiplier();
                
               
            }

            this.RemoveDot( posx, posy );
        }
    }
    