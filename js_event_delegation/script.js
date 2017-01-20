// Answer the questions here:

// - What do you think is going to happen?
//      Going to show the text
// - What happened?
//      It did not show the text
// - Why?
//      I do not know why. Maybe because the code was executed against button elements before our button element was created.
//========== Write your code below ===========//

$(document).ready(function (){

    // $('#list button').on('click', function() { ****** Original Code *******

    $('#list').on('click', 'button', function() {
        console.log($(event.target).text());
        var attr_test = $(event.target).attr('say_what');

        if (attr_test == 'choose_only_me') {
            window.open('http://www.google.com', '_blank')
        }
    });

    var li_element = $('<li>');
    var button_element = $('<button>', {
       style: 'margin-top: 10px',
        text: 'Delegated Button#5 Handler'
    });

    $('#list').append(li_element);
    $(li_element).append(button_element);

    var li_element_2 = $('<li>');
    var button_element_2 = $('<button>', {
        say_what: 'choose_only_me',
        text: "CLICK ME CLICK ME!",
        style: 'margin-top: 10px'
    })

    $('#list').append(li_element_2);
    $(li_element_2).append(button_element_2);

});
