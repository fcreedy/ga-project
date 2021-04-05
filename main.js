// Form for user to enter their name

var form = document.querySelector('form')
form.addEventListener('submit', function (event) {
    event.preventDefault()
    var nameInput = document.querySelector('#userName')
    var userName = nameInput.value
    var firstAvailable = document.querySelector('.available')

    // Modal box that pops up if no desks are available. Based on example at https://www.w3schools.com/howto/howto_css_modals.asp

    if (firstAvailable == null) {
        var modal = document.getElementById("noAvailable");
        var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
        span.onclick = function() {
            modal.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
        form.reset()
    }

    // Changes colour in seating plan and adds user name
    else {
        firstAvailable.classList.remove('available')
        firstAvailable.classList.add('occupied')
        var deskName = firstAvailable.querySelector('.desk-name')
        deskName.innerHTML = ''
        deskName.innerHTML += userName
        form.reset()
        var chooseAvatar = document.querySelector('.choose-avatar')
        chooseAvatar.scrollIntoView(true)
    }
})

// Adds an avatar image to the user's allocated desk

var tabby = document.querySelector('#tabby')
tabby.addEventListener('click', function (event) {
    event.preventDefault()
    var occupiedDesks = document.getElementsByClassName('occupied')
    var lastOccupied = occupiedDesks[occupiedDesks.length - 1]
    var deskImage = lastOccupied.querySelector('img.desk-image')
    deskImage.src = "./images/tabby.png"
    deskImage.style.visibility = "visible"
    var seatingPlan = document.querySelector('.seating-plan-heading')
    seatingPlan.scrollIntoView(true)
})

var pigeon = document.querySelector('#pigeon')
pigeon.addEventListener('click', function (event) {
    event.preventDefault()
    var occupiedDesks = document.getElementsByClassName('occupied')
    var lastOccupied = occupiedDesks[occupiedDesks.length - 1]
    var deskImage = lastOccupied.querySelector('img.desk-image')
    deskImage.src = "./images/pigeon.png"
    deskImage.style.visibility = "visible"
    var seatingPlan = document.querySelector('.seating-plan-heading')
    seatingPlan.scrollIntoView(true)
})

var scotty = document.querySelector('#scotty')
scotty.addEventListener('click', function (event) {
    event.preventDefault()
    var occupiedDesks = document.getElementsByClassName('occupied')
    var lastOccupied = occupiedDesks[occupiedDesks.length - 1]
    var deskImage = lastOccupied.querySelector('img.desk-image')
    deskImage.src = "./images/scotty.png"
    deskImage.style.visibility = "visible"
    var seatingPlan = document.querySelector('.seating-plan-heading')
    seatingPlan.scrollIntoView(true)
})

var ginger = document.querySelector('#ginger')
ginger.addEventListener('click', function (event) {
    event.preventDefault()
    var occupiedDesks = document.getElementsByClassName('occupied')
    var lastOccupied = occupiedDesks[occupiedDesks.length - 1]
    var deskImage = lastOccupied.querySelector('img.desk-image')
    deskImage.src = "./images/ginger.png"
    deskImage.style.visibility = "visible"
    var seatingPlan = document.querySelector('.seating-plan-heading')
    seatingPlan.scrollIntoView(true)
})
    
var maltese = document.querySelector('#maltese')
maltese.addEventListener('click', function (event) {
    event.preventDefault()
    var occupiedDesks = document.getElementsByClassName('occupied')
    var lastOccupied = occupiedDesks[occupiedDesks.length - 1]
    var deskImage = lastOccupied.querySelector('img.desk-image')
    deskImage.src = "./images/maltese.png"
    deskImage.style.visibility = "visible"
    var seatingPlan = document.querySelector('.seating-plan-heading')
    seatingPlan.scrollIntoView(true)
})

var chicken = document.querySelector('#chicken')
chicken.addEventListener('click', function (event) {
    event.preventDefault()
    var occupiedDesks = document.getElementsByClassName('occupied')
    var lastOccupied = occupiedDesks[occupiedDesks.length - 1]
    var deskImage = lastOccupied.querySelector('img.desk-image')
    deskImage.src = "./images/chicken.png"
    deskImage.style.visibility = "visible"
    var seatingPlan = document.querySelector('.seating-plan-heading')
    seatingPlan.scrollIntoView(true)
})

var beagle = document.querySelector('#beagle')
beagle.addEventListener('click', function (event) {
    event.preventDefault()
    var occupiedDesks = document.getElementsByClassName('occupied')
    var lastOccupied = occupiedDesks[occupiedDesks.length - 1]
    var deskImage = lastOccupied.querySelector('img.desk-image')
    deskImage.src = "./images/beagle.png"
    deskImage.style.visibility = "visible"
    var seatingPlan = document.querySelector('.seating-plan-heading')
    seatingPlan.scrollIntoView(true)
})

var chihuahua = document.querySelector('#chihuahua')
chihuahua.addEventListener('click', function (event) {
    event.preventDefault()
    var occupiedDesks = document.getElementsByClassName('occupied')
    var lastOccupied = occupiedDesks[occupiedDesks.length - 1]
    var deskImage = lastOccupied.querySelector('img.desk-image')
    deskImage.src = "./images/chihuahua.png"
    deskImage.style.visibility = "visible"
    var seatingPlan = document.querySelector('.seating-plan-heading')
    seatingPlan.scrollIntoView(true)
})

var greyhound = document.querySelector('#greyhound')
greyhound.addEventListener('click', function (event) {
    event.preventDefault()
    var occupiedDesks = document.getElementsByClassName('occupied')
    var lastOccupied = occupiedDesks[occupiedDesks.length - 1]
    var deskImage = lastOccupied.querySelector('img.desk-image')
    deskImage.src = "./images/greyhound.png"
    deskImage.style.visibility = "visible"
    var seatingPlan = document.querySelector('.seating-plan-heading')
    seatingPlan.scrollIntoView(true)
})

// Scrolls back to the top to add another person

var addAnother = document.querySelector('button.add-another')
addAnother.addEventListener('click', function(event) {
    event.preventDefault()
    var title = document.querySelector('.title')
    title.scrollIntoView(true)
}) 


// Extra features to consider: 
// * make the site responsive
// * add 'Clear all desks' button to change all occupied desks back to 'available'
// * add option to clear individual desks
// * add option to change a desk from 'not in use' to 'available' or vice versa
// * add option to change the layout and number of desks
