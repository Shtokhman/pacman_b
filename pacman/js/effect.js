
//
var effectManager;
var currentEffect;

//
//
//
function InitEffects()
{
   
    effectManager = new EffectManager();
}

function EffectManager()
{
    
    this.effects = [];

   
    this.effects.push( new EffectGameLoading( 'gameLoading', 8000 ) ); // 6800 ms
  
    this.effects.push( new EffectPacmanDying( 'pacmanDying', 2600 ) ); // 2 segs
       
    this.effects.push( new EffectMazeBlinking( 'mazeBlinking', 1800 ) ); // 1800 ms
    
    this.effects.push( new EffectInputScreen( 'inputScreen', 14*400 ) ); // 1800 ms
    


}

EffectManager.prototype.AllImagesAreLoaded =
    function () 
    {
        var loaded = true;
        for ( var i=0; i<this.effects.length; i++ )
        {
            if ( !this.effects[i].IsLoaded() )
            {
                loaded = false;
                break;
            }
        }
        
        return loaded;
    };
    
EffectManager.prototype.GetTotalImages =
    function () 
    {
        var totalImages = 0;
        for ( var i=0; i<this.effects.length; i++ )
        {
            totalImages = totalImages + this.effects[i].GetNumImages();
        }
        
        return totalImages;
    };

EffectManager.prototype.GetTotalImagesLoaded =
    function () 
    {
        var totalImagesLoaded = 0;
        for ( var i=0; i<this.effects.length; i++ )
        {
            totalImagesLoaded = totalImagesLoaded + this.effects[i].GetNumImagesLoaded();
        }
        
        return totalImagesLoaded;
    };    
    
//
//
//
EffectManager.prototype.Run =
    function ( name ) 
    {
        for (var i=0; i<this.effects.length; i++)
        {
            if ( this.effects[i].GetName()==name )
            {
                currentEffect = this.effects[i];
               
                this.effects[i].Run();
                break;
            }
        }
    };
   
//
//
//
EffectManager.prototype.Clean =
    function ( name ) 
    {
        for (var i=0; i<this.effects.length; i++)
        {
            if ( this.effects[i].GetName()==name )
            {
              
                this.effects[i].Clean();
                break;
            }
        }
    };
    
//
//
//
EffectManager.prototype.Cancel =
    function ( name ) 
    {
        for (var i=0; i<this.effects.length; i++)
        {
            if ( this.effects[i].GetName()==name )
            {
              
                this.effects[i].Cancel();
                break;
            }
        }
    };



function Effect( name, durationms )
{
   
    this.effectName = name;
    this.durationms = durationms;

    this.isActive   = false;
    this.cancel     = false;
}

//
//
//
Effect.prototype.Cancel =
    function ( value )
    {
        this.cancel = value;
    };

//
//
//
Effect.prototype.IsCancelled =
    function ()
    {
        return this.cancel;
    };
    
//
//
//
Effect.prototype.GetName =
    function ()
    {
        return this.effectName;
    };

//
//
//
Effect.prototype.IsActive =
    function () 
    {
        return this.isActive;
    }   

//
//
//
Effect.prototype.Run =
    function () 
    {
    }

//
//
//
Effect.prototype.Update =
    function () 
    {
    }


    
 

//
//
//
function EffectPacmanDying( name, durationms )
{
   
    this.effectName     = name;
    this.durationms     = durationms;
    this.previousImg    = 0;
    this.currentImg     = 0;
    this.numImages      = 14;

    this.isActive   = false;
    this.cancel     = false;

    
    this.images = [];
    
    for ( var i=0; i<this.numImages; i++ )
    {
        var img = document.createElement('img');
        img.id      = this.effectName + i;
        img.border  = 0;
        img.src     = 'pacman/effects/pacmandying/pacman' + i +'.gif';
        img.style.position      = 'absolute';
        img.style.zIndex        = 999;
        img.style.top           = 352;
        img.style.left          = 500;
        img.style.visibility    = 'hidden';
        
      
        var divContent = document.getElementById( 'content' );
        divContent.appendChild( img );

             
        this.images.push( img );
    }
}


EffectPacmanDying.prototype = new Effect();

//
//
//
EffectPacmanDying.prototype.Clean =
    function () 
    {
      
        return;
    }

//
//
//
EffectPacmanDying.prototype.IsLoaded =
    function () 
    {
        
        var loaded = true;
        for( var i=0; i<this.images.length; i++ )
        {
            if ( !this.images[i].complete )
            {
                loaded = false;
                break;
            }
        }
        
        return loaded;
    };

//
//
//
EffectPacmanDying.prototype.GetNumImages =
    function () 
    {
        return this.numImages;
    };

//
//
//
EffectPacmanDying.prototype.GetNumImagesLoaded =
    function () 
    {
        var imagesLoaded = 0;
        for( var i=0; i<this.images.length; i++ )
        {
            if ( this.images[i].complete )
            {
                imagesLoaded++;
            }
        }
        
        return imagesLoaded;
    };


//
//
//
EffectPacmanDying.prototype.Run =
    function () 
    {
        
        this.Cancel( false );
        
        
        soundPlayer.Play( 'pacmanKilled' );
        
        
        for (var i=0; i<pacmans.length; i++)
            pacmans[i].Hide();

       
        for (var i=0; i<ghosts.length; i++)
            ghosts[i].Hide();
    
        this.currentImg = 0;
        this.previousImg = 0;
        this.Update();
    }

//
//
//
EffectPacmanDying.prototype.Update =
    function () 
    {
       
        this.images[this.previousImg].style.visibility = 'hidden';
        
        var top = 16 * ( pacmans[0].GetY() -1 ) + 72;  
        var left = 16 * ( pacmans[0].GetX() -1 ) + 16;  
        this.images[this.currentImg].style.top      = top + 'px';
        this.images[this.currentImg].style.left     = left + 'px';
        this.images[this.currentImg].style.visibility = 'visible';
        
        this.previousImg = this.currentImg;
        this.currentImg++;
        
        if ( this.currentImg<this.numImages )
        {
            
            setTimeout( 'currentEffect.Update()', 180 ); 
        }
        else
        {
            this.images[this.previousImg].style.visibility = 'hidden';
            
           
            life.ShowLifes( pacmans[0].GetCurrentLifes()-1 )
            
          
            game.Continue();
        }
    }

 

function EffectMazeBlinking( name, durationms )
{
   
    this.effectName     = name;
    this.durationms     = durationms;
    this.previousImg    = 0;
    this.currentImg     = 0;
    this.numImages      = 2;
    this.repeatTimes    = 6;
    this.counter        = 0;

    this.isActive   = false;
    this.cancel     = false; 

    
    this.images = [];
    
    for ( var i=0; i<this.numImages; i++ )
    {
        var img = document.createElement('img');
        img.id      = this.effectName + i;
        img.border  = 0;
        img.src     = 'pacman/effects/mazeblinking/mazeblinking' + i +'.jpg';
        img.style.position      = 'absolute';
        img.style.zIndex        = 999;
        img.style.top           = 0;
        img.style.left          = 0;
        img.style.visibility    = 'hidden';
        
       
        var divContent = document.getElementById( 'content' );
        divContent.appendChild( img );

              
        this.images.push( img );
    }
}


EffectMazeBlinking.prototype = new Effect();

//
//
//
EffectMazeBlinking.prototype.Clean =
    function () 
    {
       
        return;
    }

//
//
//
EffectMazeBlinking.prototype.IsLoaded =
    function () 
    {
        
        var loaded = true;
        for( var i=0; i<this.images.length; i++ )
        {
            if ( !this.images[i].complete )
            {
                loaded = false;
                break;
            }
        }
        
        return loaded;
    }

//
//
//
EffectMazeBlinking.prototype.GetNumImages =
    function () 
    {
        return this.numImages;
    };

//
//
//
EffectMazeBlinking.prototype.GetNumImagesLoaded =
    function () 
    {
        var imagesLoaded = 0;
        for( var i=0; i<this.images.length; i++ )
        {
            if ( this.images[i].complete )
            {
                imagesLoaded++;
            }
        }
        
        return imagesLoaded;
    };
        
//
//
//
EffectMazeBlinking.prototype.Run =
    function () 
    {
       
        this.Cancel( false ); 
            
       
        for (var i=0; i<ghosts.length; i++)
            ghosts[i].Hide();
    
        this.currentImg = 0;
        this.previousImg = 0;
        this.counter = 0;
        
        this.Update();
    }

//
//
//
EffectMazeBlinking.prototype.Update =
    function () 
    {
        
        this.images[this.previousImg].style.visibility = 'hidden';
                
        this.images[this.currentImg].style.top      = 56 + 'px';  
        this.images[this.currentImg].style.left     = 0;  
        this.images[this.currentImg].style.visibility = 'visible';
        
        this.previousImg = this.currentImg;
        this.currentImg = ( (this.counter % 2)==0 ) ? this.currentImg = 1: this.currentImg = 0;
        
        if ( this.counter<this.repeatTimes )
        {
            this.counter++;
            
            setTimeout( 'currentEffect.Update()', 300 );  
        }
        else
        {
            this.images[this.previousImg].style.visibility = 'hidden';
            
            
            for (var i=0; i<pacmans.length; i++)
                pacmans[i].Hide();
            return;
        }
    }



function EffectGameLoading( name, durationms )
{
    
    this.effectName     = name;
    this.durationms     = durationms;
    this.previousImg    = 0;
    this.currentImg     = 0;
    this.numImages      = 40;

    this.isActive   = false;
    this.cancel     = false; 

    
    this.images = [];
    
    for ( var i=0; i<this.numImages; i++ )
    {
        var img = document.createElement('img');
        img.id      = this.effectName + i;
        img.border  = 0;
        img.src     = 'pacman/effects/gameloading/1gameloading' + i +'.jpg';
        img.style.position      = 'absolute';
        img.style.zIndex        = 950;
        img.style.top           = 200;
        img.style.left          = 110;
        img.style.visibility    = 'hidden';
        
        
        var divContent = document.getElementById( 'content' );
        divContent.appendChild( img );

              
        this.images.push( img );
    }
}


EffectGameLoading.prototype = new Effect();

//
//
//
EffectGameLoading.prototype.Clean =
    function () 
    {
        
        return;
    }

//
//
//
EffectGameLoading.prototype.IsLoaded =
    function () 
    {
        
        var loaded = true;
        for( var i=0; i<this.images.length; i++ )
        {
            if ( !this.images[i].complete )
            {
                loaded = false;
                break;
            }
        }
        
        return loaded;
    }

//
//
//
EffectGameLoading.prototype.GetNumImages =
    function () 
    {
        return this.numImages;
    };

//
//
//
EffectGameLoading.prototype.GetNumImagesLoaded =
    function () 
    {
        var imagesLoaded = 0;
        for( var i=0; i<this.images.length; i++ )
        {
            if ( this.images[i].complete )
            {
                imagesLoaded++;
            }
        }
        
        return imagesLoaded;
    };
            
//
//
//
EffectGameLoading.prototype.Run =
    function () 
    {
        
        this.Cancel( false ); 
            
       
        for (var i=0; i<pacmans.length; i++)
            pacmans[i].Hide();

        
        for (var i=0; i<ghosts.length; i++)
            ghosts[i].Hide();
    
        this.currentImg = 0;
        this.previousImg = 0;
        this.Update();
    }

//
//
//
EffectGameLoading.prototype.Update =
    function () 
    {
        
        this.images[this.previousImg].style.visibility = 'hidden';
        
        this.images[this.currentImg].style.top      = 0; 
        this.images[this.currentImg].style.left     = 0; 
        this.images[this.currentImg].style.visibility = 'visible';
        
        this.previousImg = this.currentImg;
        this.currentImg++;
        
        if ( this.currentImg<this.numImages )
        {
            // Set the timer to see the next image
            setTimeout( 'currentEffect.Update()', 200 ); 
        }
        else
        {
            this.images[this.previousImg].style.visibility = 'hidden';
            
           

            
            game.WaitMode();
        }
    }



function EffectInputScreen( name, durationms )
{
   
    this.effectName     = name;
    this.durationms     = durationms;
    this.previousImg    = 0;
    this.currentImg     = 0;
    this.numImages      = 16;

    this.isActive   = false;
    this.cancel     = false; 

    
    this.images = [];
 
    this.divInputScreen = document.getElementById('divInputScreen');
    
    for ( var i=0; i<this.numImages; i++ )
    {
        var img = document.createElement('img');
        img.id      = this.effectName + i;
        img.border  = 0;
        img.src     = 'pacman/effects/inputscreen/inputscreen' + i +'.gif';
        img.style.position      = 'absolute';
        img.style.zIndex        = 950;
        img.style.top           = 0;
        img.style.left          = 0;
        img.style.visibility    = 'hidden';
        
        

              
        this.images.push( img );
    }
    
    // Load the images into the div
    this.LoadImages();
}


EffectInputScreen.prototype = new Effect();

//
//
//
EffectInputScreen.prototype.Clean =
    function () 
    {
       
        
        for ( var i=0; i<this.images.length; i++ )
        {
         
            this.images[i].style.visibility = 'hidden';
        }          
    }

//
//
//
EffectInputScreen.prototype.IsLoaded =
    function () 
    {
        
        var loaded = true;
        for( var i=0; i<this.images.length; i++ )
        {
            if ( !this.images[i].complete )
            {
                loaded = false;
                break;
            }
        }
        
        return loaded;
    }

//
//
//
EffectInputScreen.prototype.GetNumImages =
    function () 
    {
        return this.numImages;
    };

//
//
//
EffectInputScreen.prototype.GetNumImagesLoaded =
    function () 
    {
        var imagesLoaded = 0;
        for( var i=0; i<this.images.length; i++ )
        {
            if ( this.images[i].complete )
            {
                imagesLoaded++;
            }
        }
        
        return imagesLoaded;
    };
            
//
//
//
EffectInputScreen.prototype.LoadImages =
    function () 
    {
        for ( var i=0; i<this.images.length; i++ )
        {
           
            this.images[i].style.visibility = 'hidden';
           
            this.divInputScreen.appendChild( this.images[i] );
        }        
    }
    
    
//
//
//
EffectInputScreen.prototype.Run =
    function () 
    {
       
        this.Cancel( false );        
        
        
        this.Clean();
        
     
        
     
        for (var i=0; i<pacmans.length; i++)
            pacmans[i].Hide();

       
        for (var i=0; i<ghosts.length; i++)
            ghosts[i].Hide();
    
        this.currentImg = 0;
        this.previousImg = 0;
        this.Update();
    }

//
//
//
EffectInputScreen.prototype.Update =
    function () 
    {
       
        this.images[this.previousImg].style.visibility = 'hidden';
        
       
        if ( !game.GetWaitMode() ) 
        {
            this.Clean();
            return;
        }

                
        this.images[this.currentImg].style.top      = 0;  
        this.images[this.currentImg].style.left     = 0; 
        this.images[this.currentImg].style.visibility = 'visible';
        
        this.previousImg = this.currentImg;
        this.currentImg++;
        
        if ( this.currentImg<this.numImages )
        {
          
            setTimeout( 'currentEffect.Update()', 700 ); 
        }
        else
        {
           
            
         
            effectManager.Run( 'persecution' );
        }
    }


