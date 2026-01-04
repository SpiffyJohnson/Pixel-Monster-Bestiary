function ShowAnimation(element, source) {
    var image = document.getElementById(element);
    image.src = source;
}

// From index.html
function coffeeOrder() {
    alert("If you could just grab me a cup of coffee with caramel, creamer, and two spoons of sugar, that'd be great.\n\n~Website Creator");
}

// From book.html
function changeName() { 
    let ArrayOfNames = document.getElementsByClassName("name");	
    let p = document.getElementById("paragraph");		
    let currentName = ArrayOfNames[slideIndex-1].textContent;		
    p.textContent = currentName;			
}

function changeId() { 
    let ArrayOfNames = document.getElementsByClassName("idnumber");	
    let p = document.getElementById("id");		
    let currentName = ArrayOfNames[slideIndex-1].textContent;		
    p.textContent = currentName;			
}

function changeDescription() { 
    let ArrayOfNames = document.getElementsByClassName("descriptiontext");	
    let p = document.getElementById("descriptionparagraph");		
    let currentName = ArrayOfNames[slideIndex-1].textContent;		
    p.textContent = currentName;			
}

// From images.html
function checkFirstSecret() {
    if (localStorage.FoundSecret1) {
        let SecretImage = document.getElementById("FirstSecretEnemy");
        SecretImage.style.display = "block";
    }
}
function checkSecondSecret() {
    if (localStorage.FoundSecret2) {
        let SecretImage2 = document.getElementById("SecondSecretEnemy");
        SecretImage2.style.display = "block";
    }
}
function checkThirdSecret() {
    if (localStorage.FoundSecret3) {
        let SecretImage3 = document.getElementById("ThirdSecretEnemy");
        SecretImage3.style.display = "block";
    }
}
function checkFourthSecret() {
    if (localStorage.FoundSecret4) {
        let SecretImage4 = document.getElementById("FourthSecretEnemy");
        SecretImage4.style.display = "block";
    }
}
function checkFifthSecret() {
    if (localStorage.FoundSecret5) {
        let SecretImage5 = document.getElementById("FifthSecretEnemy");
        SecretImage5.style.display = "block";
    }
}
function Secret() {
    if (localStorage.FoundSecret) {
        let SecretImage = document.getElementById("Secret");
        SecretImage.style.display = "block";
    }
}
function checkAll() {
    checkFirstSecret();
    checkSecondSecret();
    checkThirdSecret();
    checkFourthSecret();
    checkFifthSecret();
    Secret();
}
function SetAmountOfSecrets() {
    if (localStorage.AmountOfSecretEnemies == null) {
        localStorage.AmountOfSecretEnemies = 6;
    }
}
var SawAnimation = 0;
function ShowRunnerAnimation() {
    if (SawAnimation == 0) {
        var image = document.getElementById("runner");
        image.src = "img/imagerunner.gif";
        SawAnimation = 1;
    }
}

// From sounds.html - Javascript and some CSS from W3Schools: https://www.w3schools.com/Css/css_image_gallery.asp
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n, page) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let captionText = document.getElementById("caption");
    if (localStorage.AmountOfSecretEnemies == null) {
        localStorage.AmountOfSecretEnemies = 5;
    }
    if (n > slides.length - Number(localStorage.AmountOfSecretEnemies)) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length - Number(localStorage.AmountOfSecretEnemies);
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    if (page == "sounds")
        document.getElementById("SoundLink").setAttribute('href', 'audio/monster' + slideIndex + '.mp3');
    else if (page = "book") {
        changeName();
		changeId();
		changeDescription()
    }

}

function playAudio() {

    Sound = new Audio('audio/monster' + slideIndex + '.mp3');
    let currentVolume = document.getElementById("volumeRange").value;
    try {
        Sound.volume = (currentVolume / 10);
        Sound.play();
    } catch(err) {
        alert("Your browser does not support this type of audio file.");
        
    }
}

document.onkeyup = function(e) {
    switch (e.keyCode) {
        case 37:
            plusSlides(-1);
            break;
        case 39:
            plusSlides(1);
            break;
    }
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