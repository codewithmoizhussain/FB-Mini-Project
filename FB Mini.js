let button = document.querySelector('#add-friend');
let statusContainer = document.querySelector('#status-container');
let score = 0;

button.addEventListener('click', function () {

    if (score == 0) {
        statusContainer.innerHTML = "<h1> &nbsp;&nbsp;&nbsp;Friends </h1>"
        statusContainer.style.color = "#5cb85c"
        button.innerHTML = "Remove Friend";
        button.style.backgroundColor = "red";
        score++
    }
    else {
        statusContainer.innerHTML = "<h1> Strangers </h1>"
        statusContainer.style.color = "red";
        button.innerHTML = "Add Friend";
        button.style.backgroundColor = "cornflowerblue";
        score = 0;

    }
})