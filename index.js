



for(var i=0; i<document.querySelectorAll(".drum").length;i++ )
{

document.querySelectorAll(".drum")[i].addEventListener("click", function ()
{
  var buttons= this.innerHTML;

  makesound(buttons);
 buttona(buttons);

});
}


document.addEventListener("keypress",function(event){
makesound(event.key);
buttona(event.key);
});



function makesound(key)
{
  switch(key)
  {
   case "f":
   var tom1=new Audio("sound/crash.wav");
   tom1.play();
   break;



   case "g":
   var tom1=new Audio("sound/tom.wav");
   tom1.play();
   break;

   case "j":
   var tom2=new Audio("sound/clap.wav");
   tom2.play();
   break;


   case "h":
   var tom3=new Audio("sound/rim.wav");
   tom3.play();
   break;


   case "c":
   var tom4=new Audio("sound/kick.wav");
   tom4.play();
   break;

   case "k":
   var tom4=new Audio("sound/kick.wav");
   tom4.play();
   break;

   case "v":
   var snare=new Audio("sound/snare.wav");
   snare.play();
   break;


   case "b":
   var crash=new Audio("sound/ohat.wav");
   crash.play();
   break;

   case "n":
   var bass=new Audio("sound/chat.wav");
   bass.play();
   break;

   

}
}



function buttona(currentKey)
{
  var activeb=document.querySelector("."+currentKey);

  activeb.classList.add("pressed");

  setTimeout(function(){
activeb.classList.remove("pressed");
},100);
}
