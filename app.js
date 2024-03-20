// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.getElementById("buttons").getElementsByTagName("img");
    function handleSymbolButtonClick() {
        console.log("Button clicked:", this.getAttribute('id'));
    }
    for (let button of buttons) {
        button.addEventListener('click', handleSymbolButtonClick);
    }
});
