



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
   case "a":
   var tom1=new Audio("sounds/crash.wav");
   tom1.play();
   break;

   case "s":
   var tom2=new Audio("sounds/tom.wav");
   tom2.play();
   break;


   case "d":
   var tom3=new Audio("sounds/kick.wav");
   tom3.play();
   break;


   case "f":
   var tom4=new Audio("sounds/ohat.wav");
   tom4.play();
   break;

   case "g":
   var snare=new Audio("sounds/snare.wav");
   snare.play();
   break;


   case "h":
   var crash=new Audio("sounds/clap.wav");
   crash.play();
   break;

   case "j":
   var bass=new Audio("sounds/chat.wav");
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
