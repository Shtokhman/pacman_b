var game;

function Game()
{
    this.currentLevel = 1;
    this.nextTick = true;
    this.tick = 3.5;
    
    
    this.pacmanTicks    = [80,60,40];
    
    this.ghostTicks     = [100,80,60]
    
    
    this.acumGhostEatables  = 0;
    this.areGhostEatables   = false;

    
    this.highScore = 0;
    this.currentScore = 0;
    
    
    this.multiplier = 1;
    this.maxMultiplier = 8;
    
    
    this.gotExtraLife = false;
    
   
    this.currentCoins = 10;
    
    
    this.waitMode = true;
}

//
//
//
Game.prototype.GetCurrentCoins =
    function () 
    {
        return this.currentCoins;
    }

//
//
//
Game.prototype.UpdateCurrentCoins =
    function ( value ) 
    {
        this.currentCoins += value;
    }
    
//
//
//
Game.prototype.GetWaitMode =
    function () 
    {
        return this.waitMode;
    }

//
//
//
Game.prototype.SetWaitMode =
    function ( value ) 
    {
        this.waitMode = value;
    }

//
//
//
Game.prototype.GetTick =
    function () 
    {
        return this.tick;
    }

//
//
//
Game.prototype.SetNextTick =
    function ( nextTick ) 
    {
        this.nextTick = nextTick;
    }

//
//
//
Game.prototype.SetAcumGhostEatables =
    function ( tick ) 
    {
        this.acumGhostEatables =+ tick;
    }

//
//
//
Game.prototype.ResetAcumGhostEatables =
    function () 
    {
        this.acumGhostEatables = 0;;
    }

//
//
//
Game.prototype.UpdateScore =
    function ( addValue ) 
    {
        this.currentScore += addValue;
        
        
        score.SetTotalPoints( this.currentScore, this.highScore );
        if ( this.currentScore>=this.highScore )
            this.highScore = this.currentScore;
        
        
        if ( this.currentScore>=5000 && !this.gotExtraLife ) 
        {
          
            pacmans[0].UpdateCurrentLifes( 1 );
            
            life.ShowLifes( pacmans[0].GetCurrentLifes()-1 );
           
            soundPlayer.Play('extraPacman');
            
            this.gotExtraLife = true;
        }
    }

//
//
//
Game.prototype.ResetMultiplier =
    function () 
    {
        this.multiplier = 1;
    }

//
//
//
Game.prototype.ResetScore =
    function () 
    {
        this.currentScore = 0;
        
       
        score.SetTotalPoints( 0, this.highScore );
    }

//
//
//
Game.prototype.SetHighScore =
    function ( value ) 
    {
        this.highScore = value;
    }

//
//
//
Game.prototype.GetHighScore =
    function () 
    {
        return this.highScore;
    }

//
//
//
Game.prototype.Load =
    function () 
    {
        InitSounds();
        InitLoader();
        InitScore();
        InitCredit();
        InitMessage();
        InitLifes();
        InitFruits();
        InitInput();
        InitMaze();
        InitFood();
        InitGhosts();
        InitPacmans();
        InitEffects();
    };    
    
//
//
//
Game.prototype.Play =
    function ()
    {
    };

//
//
//
Game.prototype.SetTheGhostEatables =
    function ( value )
    {
        
        for (var i=0; i<ghosts.length; i++)
        {
            ghosts[i].SetCanBeEaten( value );
            
            if ( value ) ghosts[i].ResetTickAcumEatable();
        }
        
        
        this.areGhostEatables   = value; 
        this.acumGhostEatables  = 0;
    };

//
//
//
Game.prototype.GotoNextLevel =
    function ()
    {
        food.Refresh();
        food.SetActualDots(0);
        
        
        
        for (var i=0; i<ghosts.length; i++)
        {
            ghosts[i].SetInEyeMode( false );
            ghosts[i].SetCanBeEaten( false );
        }
        
        

        
        this.currentLevel++;

        
        this.SetPacmanAndGhostsSpeed( this.currentLevel );
        
        
        fruit.ShowFruits( this.currentLevel );
        
        
        this.Continue();
    };


Game.prototype.New =
    function ()
    {
        
        soundPlayer.Play( 'startStage' );
    
        
        pacmans[0].SetCurrentLifes( 3 ); 
        
        
        life.ShowLifes( pacmans[0].GetCurrentLifes() );
		
		credit.SetTotalCoins( this.GetCurrentCoins() );
        
        
        this.ResetScore();
        
        
        food.Refresh();
        food.SetActualDots(0);
        
        
        this.currentLevel = 1;
        
        
        fruit.ShowFruits( this.currentLevel );
        
        
        this.gotExtraLife = false;
        
        
        this.ResetAcumGhostEatables();
        this.areGhostEatables = false;
        
        
        this.SetPacmanAndGhostsSpeed( this.currentLevel );        
        
        
        message.CleanMessage();
        message.ShowMessage( 'readyplayer1' );
        
        
        setTimeout('game.Continue()', 4300 ); 
        setTimeout('message.CleanMessage();', 4300 );
        setTimeout('game.ShowPacmanAndGhostDelay();', 3000 );
    }


Game.prototype.SetPacmanAndGhostsSpeed =
    function ( currentLevel ) 
    {
        var pacmanSpeed = currentLevel>this.pacmanTicks.length ? 
                            this.pacmanTicks[this.pacmanTicks.length-1]: 
                            this.pacmanTicks[currentLevel-1];
        var ghostsSpeed = currentLevel>this.ghostTicks.length ? 
                            this.ghostTicks[this.ghostTicks.length-1]: 
                            this.ghostTicks[currentLevel-1];
    
        
        for ( var i=0; i<pacmans.length; i++ )
            pacmans[i].SetTick( pacmanSpeed );

        
        for ( var i=0; i<ghosts.length; i++ )
            ghosts[i].SetTick( ghostsSpeed );
    }

//
//
//
Game.prototype.ShowPacmanAndGhostDelay =
    function () 
    {
        
        message.CleanMessage();
        message.ShowMessage( 'ready' );
    
        
        for ( var i=0; i<pacmans.length; i++ )
        {
            pacmans[i].SetDefaultPosition();
            pacmans[i].Show();
        } 

        
        for ( var i=0; i<ghosts.length; i++ )
        {
            ghosts[i].SetDefaultPosition();
            ghosts[i].Show();
        }
        
        
        life.ShowLifes( pacmans[0].GetCurrentLifes()-1 );
    }
    
//
//
//
Game.prototype.Continue =
    function () 
    {
        /**************************************/
        // Verify the number of pacman lifes. //
        /**************************************/
        if ( pacmans[0].GetCurrentLifes()==0 )
        {
            
            message.ShowMessage( 'gameover' );
            
            
            this.SetWaitMode( false );
            setTimeout('game.WaitMode()', 200 );
            
            return; 
        }            
        
        
        for ( var i=0; i<ghosts.length; i++ )
        {
            
            ghosts[i].SetInDoorOfCave( false );
            
            if ( i!=3)
                ghosts[i].SetIsInTheCave( true ); 
            ghosts[i].SetInEyeMode( false );
            ghosts[i].SetCanBeEaten( false );
            ghosts[i].SetIsGoingUpOutside( false );
            ghosts[i].ResetCurrentHits();
            ghosts[i].ResetTickAcumEatable();
        
            ghosts[i].SetDefaultPosition();
            ghosts[i].Show();
        }
        ghosts[0].SetWaitToGetOutCave( true ); 
        ghosts[2].SetWaitToGetOutCave( true );

        
        for ( var i=0; i<pacmans.length; i++ )
        {
            pacmans[i].SetDefaultPosition();
            pacmans[i].Show();
        }

        
        this.nextTick = true;
        
        
        input.SetLastKeyPressed( 'left' );
        
        
        setTimeout( 'game.Run()', 200 ); 
    };
    
    

Game.prototype.Run =
    function () 
    {
       
        soundPlayer.PlayLoop();
        
       
        if ( this.areGhostEatables )
        {
            this.acumGhostEatables += this.tick;
            if ( this.acumGhostEatables>=8600 ) 
            {
                this.ResetAcumGhostEatables();
                game.SetTheGhostEatables( false );
                
                game.ResetMultiplier();
                
                this.areGhostEatables = false;
            }
        }
        
       
       
        for (var i=0; i<pacmans.length; i++)
            pacmans[i].Update( this.tick );
        
       
        for (var i=0; i<ghosts.length; i++)
        {
            ghosts[i].Update( this.tick );
            if ( ghosts[i].IsPacmanTouched() && !ghosts[i].IsInEyeMode() )
            {
                
                if ( ghosts[i].CanBeEaten() )
                {
                   
                    pacmans[0].Hide();
                
                   
                    var bonus = 200 * this.multiplier;
                    game.UpdateScore( bonus );
                    
                    ghosts[i].SetInPointMode( bonus );
                    
                    this.multiplier = this.multiplier * 2;
                    if ( this.multiplier>this.maxMultiplier )
                        this.ResetMultiplier(); 
                    
                   
                    setTimeout( 'ghosts['+i+'].SetInEyeMode( true );', 500 ); 
                    
                    
                    soundPlayer.Play( 'ghostEaten' );
                    
                    
                    setTimeout( 'game.Run()', 800 ); 
                   
                    setTimeout( 'pacmans[0].Show();', 800 )
                    
                    
                    return;
                }
                else
                {
                    
                    
                    soundPlayer.StopAll();
                     
                    this.SetTheGhostEatables( false );
                   
                    pacmans[0].UpdateCurrentLifes( -1 );
                    
                    setTimeout('effectManager.Run( "pacmanDying" )', 1000 ); 
                   
                    this.nextTick = false;
                }
            }
        }

       
        food.Update( this.tick ); 
        
        
        if ( food.GetActualDots()==food.GetTotalDots() )
        {
            
            soundPlayer.StopAll();

            
            setTimeout('effectManager.Run( "mazeBlinking" )', 1000 ); 

            
            setTimeout('game.GotoNextLevel();', 3000 ); 
            
            return;
            
        }
        
       
        if ( this.nextTick )
        {
            
            setTimeout( 'game.Run()', this.tick );
        }
    };
    
    
//
//
//
Game.prototype.WaitMode =
    function ()
    {
        
        this.SetWaitMode( true );
        
        
        credit.SetTotalCoins( this.GetCurrentCoins() );
        
      
        score.SetHighScore( this.GetHighScore() );
        
        
        effectManager.Run( 'inputScreen' );
    };    