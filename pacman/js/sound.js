
var soundPlayer;

var sounds = [];

//
//
//
function InitSounds()
{
    soundPlayer = new SoundPlayer();
}

//
//
//
function SoundPlayer()
{

    soundManager.waitForWindowLoad = true;
    
    soundManager.url            = 'lib/soundmanager/soundmanager2.swf'; 
    
    soundManager.debugMode      = false;  
    soundManager.consoleOnly    = false; 

    soundManager.onload = function() {
        LoadSounds( sounds, soundManager );
    }
}

//
//
//
function LoadSounds( sounds4, soundManager ) 
{
   
    sounds.push( new Sound( soundManager, 'startStage',     'pacman/sounds/gamebeginning.mp3',      false,  true,   4300 ) );
    sounds.push( new Sound( soundManager, 'background',     'pacman/sounds/background.mp3',         true,   true,   15   ) );
    sounds.push( new Sound( soundManager, 'eatBiscuit',     'pacman/sounds/pacchompfast.mp3',       false,  true,   200 ) ); 
    sounds.push( new Sound( soundManager, 'bigDotEaten',    'pacman/sounds/bigdoteaten.mp3',        false,  false,  8800 ) );
    sounds.push( new Sound( soundManager, 'eatBigBiscuit',  'pacman/sounds/fruiteat.mp3',           false,  false,  440 ) );
    sounds.push( new Sound( soundManager, 'pacmanKilled',   'pacman/sounds/killed.mp3',             false,  false,  1600 ) );
    sounds.push( new Sound( soundManager, 'ghostEaten',     'pacman/sounds/ghosteaten.mp3',         false,  false,  700 ) );
    sounds.push( new Sound( soundManager, 'extraPacman',    'pacman/sounds/extrapac.mp3',           false,  false,  2000 ) );
    sounds.push( new Sound( soundManager, 'newCredit',      'pacman/sounds/newcredit.mp3',          false,  false,  2000 ) );
}

//
//
//
SoundPlayer.prototype.Play =
    function ( name ) 
    {
        for (var i=0; i<sounds.length; i++)
        {
            if ( sounds[i].GetName()==name )
            {
               
                sounds[i].Play();
                break;
            }
        }
    };

//
//
//
SoundPlayer.prototype.Pause =
    function ( name ) 
    {
        for (var i=0; i<sounds.length; i++)
        {
            if ( sounds[i].GetName()==name )
            {
                sounds[i].Pause();
                break;
            }
        }    
    };

//
//
//
SoundPlayer.prototype.Resume =
    function ( name ) 
    {
        for (var i=0; i<sounds.length; i++)
        {
            if ( sounds[i].GetName()==name )
            {
                
                sounds[i].Resume();
                break;
            }
        }    
    };

//
//
//
SoundPlayer.prototype.Stop =
    function ( name ) 
    {
        for (var i=0; i<sounds.length; i++)
        {
            if ( sounds[i].GetName()==name )
            {
                
                sounds[i].Stop();
                break;
            }
        }    
    };

//
//
//
SoundPlayer.prototype.PlayLoop =
    function () 
    {
        for (var i=0; i<sounds.length; i++)
        {
            if ( sounds[i].Loop() )
            {
                
                sounds[i].Play();
            }
        }    
    };

        
//
//
//
SoundPlayer.prototype.StopAll =
    function () 
    {
       soundManager.stopAll();
    };


function Sound( soundManager, name, source, loop, waitToFinish, durationms )
{
    
    this.soundName      = name;
    this.source         = source;
    this.timeAcum       = 0;
    this.isPlaying      = false;
    this.waitToFinish   = waitToFinish;
    this.durationms     = durationms;   
    this.loop           = loop;
    
  
    this.track = soundManager.createSound
        (
            {
            id: this.soundName,
            url: this.source
            }
        );
}

//
//
//
Sound.prototype.SetLoop =
    function ( value )
    {
        this.loop = value;
    };

//
//
//
Sound.prototype.Loop =
    function ()
    {
        return this.loop;
    };
    
//
//
//
Sound.prototype.IsPlaying =
    function ( value )
    {
        this.isPlaying = value;
    };

//
//
//
Sound.prototype.GetIsPlaying =
    function ()
    {
        return this.isPlaying;
    };
    
//
//
//
Sound.prototype.GetName =
    function ()
    {
        return this.soundName;
    };
   
//
//
//
Sound.prototype.Play =
    function ()
    {
        if ( this.waitToFinish )
        {
   
   
            if ( this.track!=null && this.track.playState == 0 )
            {
                this.track.play();
            }
        }
        else
        {
            this.track.play();
        }
    };
    
//
//
//
Sound.prototype.Stop =
    function ()
    {
        this.track.stop();
    };

//
//
//
Sound.prototype.Pause =
    function ()
    {
        this.track.pause();
    };

//
//
//
Sound.prototype.Resume =
    function ()
    {
        this.track.resume();
    };

   