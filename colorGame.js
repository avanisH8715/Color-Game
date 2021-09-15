var colors=generateRandomColors(6);
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.getElementById("message");
var h1Display=document.querySelector("h1");
var pickedColor=pickColor();
var resetButton=document.querySelector("#resetButton");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors=generateRandomColors(3);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.background=colors[i];
		}
		else
		{	
		    document.querySelectorAll(".square")[i].style.display="none";
		}
	}

})

hardBtn.addEventListener("click",function()
{
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors=generateRandomColors(6);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	//display random colors
	for(var i=0;i<colors.length;i++)
	{
		squares[i].style.background=colors[i];
		squares[i].style.display="block";
	}
	h1Display.style.background="#232323";
	resetButton.textContent="New Color";
	messageDisplay.textContent="";

})

resetButton.addEventListener("click",function()
{
	colors=generateRandomColors(6);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	//display random colors
	for(var i=0;i<colors.length;i++)
	{
		squares[i].style.background=colors[i];
		squares[i].style.display="block";
	}
	h1Display.style.background="#232323";
	resetButton.textContent="New Color";
	messageDisplay.textContent="";
})   


colorDisplay.textContent=pickedColor;

for(var i=0;i<squares.length;i++)
{
	squares[i].style.background=colors[i];
    // add click listener to square
    squares[i].addEventListener("click", function(){
    var clickedColor=this.style.background;
    	if(clickedColor=== pickedColor)
    	{
           messageDisplay.textContent="correct!";
           colorChange(clickedColor);
           h1Display.style.background=clickedColor;
           resetButton.textContent="Play Again??";

    	}
    	else
        {
    		this.style.background="#232323";
    		messageDisplay.textContent="Try Again!";

        }

    });
}

function colorChange(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=color;
	}
}


function pickColor()
{
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];

}

function generateRandomColors(num)
{
    //make array
    var arr=[];
    for(var i=0;i<num;i++)
    {
    	arr.push(randomColors());
    }
    return arr;
    //add num random colors to array
}

function randomColors()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}