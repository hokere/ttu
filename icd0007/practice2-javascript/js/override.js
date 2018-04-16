/*
4. `On click of the green button,
change the text of the button to a different text
and the color of the button to a different colour `.
*/
var greenButton = document.querySelector("a.green-btn")
greenButton.addEventListener("click", function (event) {
    event.preventDefault()

    this.innerText = "Different Text"
    this.style.backgroundColor = "#c0fefe"
    this.style.color = "#333"
})

/*
5. `Link one of the div buttons to your public Facebook or Github profile
(feel free to select any button you live"`
*/
var blueButton = document.querySelector(".blue-btn")
blueButton.innerText = "Github"
blueButton.href = "https://github.com/yasinaydin"


/*
1. `When I hover on the navigation bar of your webpage, 
I want the hover effect to make the box white and the text inside the box Black`
*/
var navbarButtons = document.querySelectorAll(".nav.navbar-nav a")
for (var i = 0; i < navbarButtons.length; i++) {
    var button = navbarButtons[i];

    var oldColor = button.style.color;
    var oldBg = button.style["background-color"];

    button.addEventListener("mouseover", function () {
        this.style.color = "black";
        this.style["background-color"] = "white";
    })
    button.addEventListener("mouseout", function () {
        this.style.color = oldColor;
        this.style["background-color"] = oldBg;
    })
}

////////////////////////////////////////////////////////////////////////////////

var form = document.querySelector('form.contact-form')

var input_name = document.querySelector('form input[name=name]')
var input_email = document.querySelector('form input[name=email]')
var input_subject = document.querySelector('form input[name=subject]')
var input_message = document.querySelector('form textarea[name=message]')

var alertValues = function () {
    var text = "The data you entered:\n" +
        "name=" + input_name.value + "\n" +
        "email=" + input_email.value + "\n" +
        "subject=" + input_subject.value + "\n" +
        "message=" + input_message.value + "\n"
    alert(text)
}

var hasMissingFields = function () {
    var missingFields = []

    if (!input_name.value) missingFields.push("Name")
    if (!input_email.value) missingFields.push("Email")
    if (!input_subject.value) missingFields.push("Subject")
    if (!input_message.value) missingFields.push("Message")

    if (missingFields.length) {
        var text = "You have following fields missing:\n" + missingFields.join(", ")
        alert(text)
    }

    return missingFields.length > 0
}

form.addEventListener("submit", function (event) {
    /*
    3. `If any field is missing/empty when user clicks submit button on contact form,
    pop up and alert box saying the name of the missing field/fields`
    */
    if (hasMissingFields()) return

    /*
    2. `When I click the send button in the contact form
    I want to see all the information entered into the box popped up in an alert box`
    */
    alertValues()
})


