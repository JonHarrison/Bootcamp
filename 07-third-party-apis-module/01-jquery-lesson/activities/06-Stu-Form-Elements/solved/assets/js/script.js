var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

const methods = { shortWay:1 , longWay:2 };
const method = methods.shortWay;

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function processSubmission(event)
{
    // Prevent the default behaviour
    event.preventDefault();

    var input = $('#shopping-input');

    switch(method) {
        case methods.longWay:
            var listEl = $('<li>');
            listEl.text(input.val());
            shoppingListEl.append(listEl);
            break;
        case methods.shortWay:
            shoppingListEl.append($('<li>').text(input.val()));
            break;
    }

    input.val(''); // clear value

}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit', processSubmission);
