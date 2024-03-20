// Iteration 5: Store the player score and display it on the game over screen
document.addEventListener('DOMContentLoaded', function() {
    var scoreBoard = document.getElementById("score-board");
    var playerScore = localStorage.getItem('playerScore');
    console.log("Player's score:", playerScore);
    scoreBoard.textContent = playerScore;
});
play_again_button=document.getElementById("play-again-button");
play_again_button.addEventListener("click", function()
{
  window.location.href = "game.html";
});

  

