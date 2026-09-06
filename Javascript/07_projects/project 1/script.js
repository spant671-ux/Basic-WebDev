// ==================== Project 1: Color Changer ====================

// Select all element nodes with the class 'button' (returns a NodeList):
const buttons = document.querySelectorAll('.button');

// Select the <body> element node to dynamically modify its background color:
const body = document.querySelector('body');

// Loop through each button element using forEach:
buttons.forEach(function (button) {
    console.log(button);

    // Attach a 'click' event listener to each color button:
    button.addEventListener('click', function (e) {
        console.log(e);

        // e.target refers to the specific element node that was clicked by the user:
        console.log(e.target);

        // Change body background color based on the clicked button's unique 'id':
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
    });
});