var life;

//
//
//
function InitLifes()
{
    
    
    life = new Life();
    life.ShowLifes( 3 ); 
}


function Life()
{
    this.divLifes1      = document.getElementById('divLifes1');
    this.divLifes2      = document.getElementById('divLifes2');
    
   
    this.currentPlayer  = 0;
}


//
//
//
Life.prototype.CleanLifes =
    function ( currentPlayer )
    {
        if ( currentPlayer==0 )
        {
            
            this.divLifes1.innerHTML = '';
        }
        else if ( currentPlayer==1 )
        {
            
            this.divLifes2.innerHTML = '';
        }
        else
        {
            alert('error');
        }
    }

//
//
//
Life.prototype.AddPacmanImage =
    function ( currentPlayer, img )
    {
        if ( currentPlayer==0 )
        {
            this.divLifes1.appendChild( img );
        }
        else if ( currentPlayer==1 )
        {
            this.divLifes2.appendChild( img );
        }
    }
    
//
//
//
Life.prototype.LoadPacmanImage =
    function ()
    {
      
        var img = document.createElement('img');
        img.id = 'pacman';
        img.border = 0;
        img.src = 'pacman/lifes/pacman.gif';
      
        img.style.visibility = 'visible'; 
           
        return img;
    };

//
//
//
Life.prototype.ShowLifes =
    function ( value )
    {
       
        this.CleanLifes( this.currentPlayer );
        
        
        var number = value.toString();
        
        for ( var i=0; i<(value/*-1*/); i++)
        {
           
            var img = this.LoadPacmanImage();
            this.AddPacmanImage( this.currentPlayer, img );
        }
    };

    