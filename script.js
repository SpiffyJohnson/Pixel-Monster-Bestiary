function ShowAnimation(element, source) {
    var image = document.getElementById(element);
    image.src = source;
}

// From index.html
function coffeeOrder() {
    alert("If you could just grab me a cup of coffee with caramel, creamer, and two spoons of sugar, that'd be great.\n\n~Website Creator");
}

// From secret.html
function ShowSecret() {
    if (localStorage.FoundSecret == null) {
        var image = document.getElementById("hiddenimg");
        image.src = "img/monsters/sprite_f.gif";
        localStorage.FoundSecret = 1;
        Sound = new Audio('audio/surprise.mp3');
        Sound.play();
        Pitch = new Audio('audio/surprisepitch.mp3');
        Pitch.loop = true;
        Pitch.play();
        CorruptScreen();
        alert("He found you, [InvalidUsername]! He'll look for you in the IMAGES tab!");
    }
}
function FoundSecret() {
    if (localStorage.FoundSecret != null) {
        var image = document.getElementById("hiddenimg");
        image.src = "img/decoy.png";
        CorruptScreen();
    }
}

function CorruptScreen() {
    document.getElementById("main").style.backgroundImage = "url('img/error.png')";
    document.getElementById("title").innerText = "><?a$%^*)_}{";
    document.getElementById("top").innerText = "\n";
    document.body.style.backgroundImage = "url('img/error2.png')";
    document.getElementById("header").style.backgroundImage = "url('img/error.png')";
    document.getElementById("navsetup").style.backgroundImage = "url('img/error3.png')";
    document.getElementById("foot").style.backgroundImage = "url('img/error4.png')";
}