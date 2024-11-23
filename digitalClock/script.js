const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const clockFace = document.querySelector(".clock-face");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);

// Add numbers to clock face
for (let i = 1; i <= 12; i++) {
  const number = document.createElement("div");
  number.classList.add("number");
  number.textContent = i;
  const angle = (i / 12) * 360;
  number.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translate(0, -130px) rotate(-${angle}deg)`; // Adjust radius (130px) as needed
  clockFace.appendChild(number);
}
