/*
4. `On click of the green button,
change the text of the button to a different text
and the color of the button to a different colour `.
*/
var greenButton = $("a.green-btn").first()
greenButton.on("click", function (event) {
    event.preventDefault()

    $(this).text("Different Text")
        .css("backgroundColor", "#c0fefe")
        .css("color", "#333")
})

/*
5. `Link one of the div buttons to your public Facebook or Github profile
(feel free to select any button you live"`
*/
var blueButton = $(".blue-btn").first()
blueButton
    .text("Yasin's Github")
    .prop("href", "https://github.com/yasinaydin")

/*
1. `When I hover on the navigation bar of your webpage, 
I want the hover effect to make the box white and the text inside the box Black`
*/
$(".nav.navbar-nav a").hover(
    function () {
        $(this).data("color", $(this).css("color"))
        $(this).data("bgcolor", $(this).css("background-color"))
        $(this).css("color", "black")
        $(this).css("background-color", "white")
    },
    function () {
        $(this).css("color", $(this).data("color"))
        $(this).css("background-color", $(this).data("bgcolor"))
    }
)

////////////////////////////////////////////////////////////////////////////////

var form = $("form.contact-form").first()

var input_name = $('form input[name=name]').first()
var input_email = $('form input[name=email]').first()
var input_subject = $('form input[name=subject]').first()
var input_message = $('form textarea[name=message]').first()

var alertValues = function () {
    var text = "The data you entered:\n" +
        "name=" + input_name.val() + "\n" +
        "email=" + input_email.val() + "\n" +
        "subject=" + input_subject.val() + "\n" +
        "message=" + input_message.val() + "\n"
    alert(text)
}

var hasMissingFields = function () {
    var missingFields = []

    if (!input_name.val()) missingFields.push("Name")
    if (!input_email.val()) missingFields.push("Email")
    if (!input_subject.val()) missingFields.push("Subject")
    if (!input_message.val()) missingFields.push("Message")

    if (missingFields.length) {
        var text = "You have following fields missing:\n" + missingFields.join(", ")
        alert(text)
    }

    return missingFields.length > 0
}

form.on("submit", function (event) {
    /*
    3. `If any field is missing/empty when user clicks submit button on contact form,
    pop up and alert box saying the name of the missing field/fields`
    */
    if (hasMissingFields()) {
        event.preventDefault()
        return
    }

    /*
    2. `When I click the send button in the contact form
    I want to see all the information entered into the box popped up in an alert box`
    */
    alertValues()
})
