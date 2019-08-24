var loader;


function InitLoader()
{
    
    loader = new Loader();
};


function Loader()
{
    this.dummy = 0;
    
    
    this.divLoader          = document.getElementById('divLoader');
    this.loaderBorder       = document.getElementById('loaderBorder');
    this.loaderPercentage   = document.getElementById('loaderPercentage');
    
    
    this.loaderWidth    = 332;
    this.loaderHeight   = 23;
    this.loaderPercentage.style.width   = '0px';
    this.loaderPercentage.style.height  = this.loaderHeight+'px';
    
    
    this.maxValue = 100;
}


Loader.prototype.Hide =
    function () 
    {
        this.divLoader.style.visibility         = 'hidden';
        this.loaderBorder.style.visibility      = 'hidden';
        this.loaderPercentage.style.visibility  = 'hidden';
        
    };


Loader.prototype.Reset =
    function () 
    {
        this.loaderPercentage.style.width   = '0px';
        this.loaderPercentage.style.height  = this.loaderHeight+'px';
    };


Loader.prototype.SetMaxValue =
    function ( value ) 
    {
        this.maxValue = value;
    };
        

Loader.prototype.Update =
    function ( value ) 
    {
        if ( value > this.maxValue )
        {
            this.loaderPercentage.style.width   = this.loaderWidth + 'px';
        }
        else if( value <= 0 )
        {
            this.loaderPercentage.style.width   = '0px';
        }
        else 
        {
            
            var percentage = ( value / this.maxValue ) * this.loaderWidth;
            this.loaderPercentage.style.width = percentage + 'px';
        }
    };    