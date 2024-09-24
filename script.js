let happiness = 50;
let hunger = 50;
let energy = 50;

const happinessElement = document.getElementById('happiness');
const hungerElement = document.getElementById('hunger');
const energyElement = document.getElementById('energy');
const feedButton = document.getElementById('feedButton');
const playButton = document.getElementById('playButton');
const restButton = document.getElementById('restButton');

const profileHappinessElement = document.getElementById('profileHappiness');
const profileHungerElement = document.getElementById('profileHunger');
const profileEnergyElement = document.getElementById('profileEnergy');

function feedPet() {
    if (hunger < 100) {
        hunger += 10;
        if (happiness < 100) {
            happiness += 5;
        }
        updateStats();
    } else {
        alert("Your pet is not hungry!");
    }
}

function playWithPet() {
    if (happiness < 100) {
        happiness += 10;
        hunger -= 5;
        energy -= 10;
        updateStats();
    } else {
        alert("Your pet is already very happy!");
    }
}

function restPet() {
    if (energy < 100) {
        energy += 20;
        updateStats();
    } else {
        alert("Your pet is already well-rested!");
    }
}

function updateStats() {
    happinessElement.textContent = happiness;
    hungerElement.textContent = hunger;
    energyElement.textContent = energy;

    profileHappinessElement.textContent = happiness;
    profileHungerElement.textContent = hunger;
    profileEnergyElement.textContent = energy;

    if (happiness > 100) happiness = 100;
    if (hunger > 100) hunger = 100;
    if (energy > 100) energy = 100;

    if (hunger < 0) {
        hunger = 0;
        alert("Your pet is starving!");
    }

    if (energy < 0) {
        energy = 0;
        alert("Your pet is too tired!");
    }
}

function randomEvent() {
    const events = [
        "Your pet found a toy and is happier!",
        "Your pet is feeling sleepy!",
        "Your pet is hungry!"
    ];
    const randomIndex = Math.floor(Math.random() * events.length);
    alert(events[randomIndex]);

    if (randomIndex === 0) {
        happiness += 5;
    } else if (randomIndex === 1) {
        energy -= 10;
    } else if (randomIndex === 2) {
        hunger -= 5;
    }
    updateStats();
}

feedButton.addEventListener('click', feedPet);
playButton.addEventListener('click', playWithPet);
restButton.addEventListener('click', restPet);

setInterval(randomEvent, 30000);

const customizePetButton = document.getElementById('customizePet');
customizePetButton.addEventListener('click', () => {
    const colors = ['orange', 'blue', 'green', 'purple'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('petImage').style.filter = `hue-rotate(${randomColor})`;
});