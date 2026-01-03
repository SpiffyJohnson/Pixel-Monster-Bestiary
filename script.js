function FoundSecret(AnimationToShow = 99) {
    switch (AnimationToShow) {
        case 0:
            ShowAnimation('mountainpattern', 'img/homepattern.gif');
            break;
        default:
            return;
    }
    
    if (localStorage.IndexSecret == null) {
        if (localStorage.FoundSecret1 == null) {
            alert("You found a Secret Monster!\n\nYou can view it in the BOOK, IMAGES, and SOUNDS pages!");
            localStorage.FoundSecret1 = "Yes";
            localStorage.AmountOfSecretEnemies = 4;
        } else if (localStorage.FoundSecret2 == null) {
            alert("You found a Secret Monster!\n\nYou can view it in the BOOK, IMAGES, and SOUNDS pages!");
            localStorage.FoundSecret2 = "Yes";
            localStorage.AmountOfSecretEnemies = 3;
        } else if (localStorage.FoundSecret3 == null) {
            alert("You found a Secret Monster!\n\nYou can view it in the BOOK, IMAGES, and SOUNDS pages!");
            localStorage.FoundSecret3 = "Yes";
            localStorage.AmountOfSecretEnemies = 2;
        } else if (localStorage.FoundSecret4 == null) {
            alert("You found a Secret Monster!\n\nYou can view it in the BOOK, IMAGES, and SOUNDS pages!");
            localStorage.FoundSecret4 = "Yes";
            localStorage.AmountOfSecretEnemies = 1;
        } else if (localStorage.FoundSecret5 == null) {
            alert("You found a Secret Monster!\n\nYou can view it in the BOOK, IMAGES, and SOUNDS pages!");
            localStorage.FoundSecret5 = "Yes";
            localStorage.AmountOfSecretEnemies = 0;
        }
        localStorage.IndexSecret = 1;
    }
}

function ShowAnimation(element, source) {
    var image = document.getElementById(element);
    image.src = source;
}

// From index.html
function coffeeOrder() {
    alert("If you could just grab me a cup of coffee with caramel, creamer, and two spoons of sugar, that'd be great.\n\n~Website Creator");
}

