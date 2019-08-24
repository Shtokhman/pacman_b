var fruit;

//
//
//
function InitFruits()
{
   
    var divFruits = document.getElementById('divFruits');
    
    for ( var i=0; i<6; i++ )
    {
        var img = document.createElement('img');
        img.id = 'id'+i;
        img.border = 0;
        img.src = 'pacman/fruits/'+i+'.png';
       
        img.style.visibility = 'visible'; 
        divFruits.appendChild( img );
    }
    /*****************************************************************************/
    
    fruit = new Fruit();
    fruit.ShowFruits( 1 ); 
}




//
//
//
function Fruit()
{
    this.divFruits  = document.getElementById('divFruits');
    
    this.xScreen    = 400;
    this.yScreen    = 568;
}


//
//
//
Fruit.prototype.CleanFruits =
    function ()
    {
       
        this.divFruits.innerHTML = '';
        
       
        this.divFruits.style.left   = this.xScreen;
        this.divFruits.style.top    = this.yScreen;
        this.divFruits.style.width  = 32 + 'px'; 
        this.divFruits.style.height = 32 + 'px'; 
    }

//
//
//
Fruit.prototype.AddFruitImage =
    function ( img )
    {
        this.divFruits.appendChild( img );
    }
    
//
//
//
Fruit.prototype.LoadFruitImage =
    function ( value )
    {
      
        var img = document.createElement('img');
        img.id = 'fruit';
        img.border = 0;
        img.src = 'pacman/fruits/'+value+'.png';
       
        img.style.visibility = 'visible'; 
           
        return img;
    };

//
//
//
Fruit.prototype.ShowFruits =
    function ( value )
    {
       
        this.CleanFruits();
        
        var fruit = (value % 6);
        if (fruit==0) fruit=6;
        
        for ( var i=fruit; i>0; i--)
        {
            
            var img = this.LoadFruitImage( i );
            this.AddFruitImage( img );
            
           
            var width = 32*fruit; 
            var left = this.xScreen - (32*(fruit-1)); 
            this.divFruits.style.width  = width + 'px'
            this.divFruits.style.left   = left + 'px'
        }
    };

    