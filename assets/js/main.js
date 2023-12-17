const numberHours = document.querySelector(".number-hours");
const barSeconds = document.querySelector(".bar-seconds");

const numberElements = []
const barElements = []

for (let i = 1; i <= 12; i++) {
    numberElements.push(`<span style="--index:${i};"><p>${i}</p></span>`);
}
numberHours.insertAdjacentHTML("afterbegin", numberElements.join(""));

for (let i = 1; i <= 60; i++) {
    barElements.push(`<span style="--index:${i};"><p></p></span>`);
}

barSeconds.insertAdjacentHTML("afterbegin", barElements.join(""));