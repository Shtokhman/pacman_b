var input;

//
//
//
function InitInput()
{
   
    input = new Input();
    
    
    
    
    document.onkeydown = function( evt ){ input.KeyPress( evt ); };
}

//
//
//
function Input()
{
    this.lastKeyPressed = 'left';
}

//
//
//
Input.prototype.GetLastKeyPressed =
    function () 
    {
        return this.lastKeyPressed;
    };

//
//
//
Input.prototype.SetLastKeyPressed =
    function ( lastKeyPressed ) 
    {
        this.lastKeyPressed = lastKeyPressed;
    };

//
//
//
Input.prototype.KeyPress =
    function ( evt )
    {
        var e = window.event? event : evt;
        var unicode = e.keyCode? e.keyCode : e.charCode

        var key = unicode; 
        switch ( key )
        {
            case 38: 
                this.SetLastKeyPressed( 'up' );
                break;
            case 40: 
                this.SetLastKeyPressed( 'down' );
                break;
            case 39: 
                this.SetLastKeyPressed( 'right' );
                break;
            case 37: 
                this.SetLastKeyPressed( 'left' );
                break;
            case 81: 
                
                if ( game.GetWaitMode() )
                {
                    
                    soundPlayer.Play( 'newCredit' );
                    
                    game.UpdateCurrentCoins( 1 );
                    
                    credit.SetTotalCoins( game.GetCurrentCoins() );
                }
                break;
            case 80:
                
                if ( game.GetWaitMode() && game.GetCurrentCoins()>0 )
                {
                   
                    game.UpdateCurrentCoins( -1 );
                   
                    credit.Clean();
                    
                    game.SetWaitMode( false );
                    
                   
                    effectManager.Clean( 'inputScreen' );
                   
                    effectManager.Clean( 'persecution' );

                   
                    game.New();
                }
                break;
            default:
                break;
        }
    };
    
//
//
//
Input.prototype.Error =
    function ( e )
    {  
        alert('AAAA')  
        alert( e.keyCode)
        alert('!');
        return;
    }
    