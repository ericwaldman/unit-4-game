$(document).ready(function(){
  
  // Rules slide panel - toggle on off
  $("#flip").click(function () {
    $("#panel").slideToggle("slow");
  });

  // Create random number from 19-122
  var Random=Math.floor(Math.random()*101+19)
  
  // Put random number to the html doc
  $('#randomNumber').text(Random);
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);
  
  // Random numbers for each crystal between 1-12
  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)
  
  // Varibles for game totals
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;
  
//reset game after win or loss
function reset(){
  Random=Math.floor(Math.random()*101+19);
  $('#randomNumber').text(Random);
  num1= Math.floor(Math.random()*11+1);
  num2= Math.floor(Math.random()*11+1);
  num3= Math.floor(Math.random()*11+1);
  num4= Math.floor(Math.random()*11+1);
  userTotal= 0;
  $('#finalTotal').text(userTotal);
} 
// Add the wins to userTotal
function winner(){
  alert("You won!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
}
// Add the losses to userTotal
function loser(){
  alert ("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
}
// Click function for jewels
$('#one').on ('click', function(){
  userTotal = userTotal + num1;
    $('#finalTotal').text(userTotal); 

      //if win or lose
      if (userTotal == Random){
        winner();
      }
      else if ( userTotal > Random){
        loser();
      }   
})  
$('#two').on ('click', function(){
  userTotal = userTotal + num2;
    $('#finalTotal').text(userTotal); 
        
      if (userTotal == Random){
        winner();
      }
      else if ( userTotal > Random){
        loser();
      } 
})  
$('#three').on ('click', function(){
  userTotal = userTotal + num3;
    $('#finalTotal').text(userTotal);

      if (userTotal == Random){
        winner();
      }
      else if ( userTotal > Random){
        loser();
      } 
})  
$('#four').on ('click', function(){
  userTotal = userTotal + num4;
    $('#finalTotal').text(userTotal); 
      
        if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        }
});   
}); 