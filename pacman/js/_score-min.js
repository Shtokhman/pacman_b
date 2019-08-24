var score;
function InitScore(){
	var divScore1=document.getElementById('divScore1');
	for(var i=0;i<10;i++)
		{var img=document.createElement('img');
		img.id='id'+i;img.border=0;
		img.src='pacman/score/'+i+'.jpg';
		img.style.visibility='visible';
		divScore1.appendChild(img)}

	score=new Score();
	score.SetTotalPoints(0,0)};

	function Score(){
		this.divScore1=document.getElementById('divScore1');
		this.divScore2=document.getElementById('divScore2');
		this.divHighScore=document.getElementById('divHighScore');
		this.dummy=0;
		this.currentPlayer=0};
		Score.prototype.CleanScore=function(currentPlayer) {
			if(currentPlayer==0) {this.divScore1.innerHTML=''}
			else if(currentPlayer==1) {this.divScore2.innerHTML=''}
			else{alert('error')}
		};

		Score.prototype.AddNumber=function(currentPlayer,img){
			if(currentPlayer==0){this.divScore1.appendChild(img)}
			else if(currentPlayer==1){this.divScore2.appendChild(img)}};

		Score.prototype.CleanHighScore=function(){this.divHighScore.innerHTML=''};

		Score.prototype.LoadImageNumber=function(number){
			var img=document.createElement('img');
			img.id='digit'+number;img.border=0;img.src='pacman/score/'+number+'.jpg';img.style.visibility='visible';
			return img};
		
		Score.prototype.UpdateHighScore=function(){
			var html='';
			if(this.currentPlayer==0){html=this.divScore1.innerHTML}
			else if(this.currentPlayer==1){html=this.divScore2.innerHTML}
			this.divHighScore.innerHTML=html};

		Score.prototype.SetHighScore=function(value){
			this.CleanHighScore();
			var number=value.toString();
			var size=number.length;
			for(var i=0;i<size;i++){
				var digit=number.substr(i,1);
				var img=this.LoadImageNumber(digit);
				this.divHighScore.appendChild(img)}
			};

		Score.prototype.SetTotalPoints=function(value,maxValue){
			this.CleanScore(this.currentPlayer);
			var number=value.toString();
			var size=number.length;
			for(var i=0;i<size;i++){
				var digit=number.substr(i,1);
				var img=this.LoadImageNumber(digit);
				this.AddNumber(this.currentPlayer,img)}
				if(value>=maxValue){this.UpdateHighScore()}};
