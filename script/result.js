const timer = document.querySelector('.timer');
let time = 600;

setInterval(updateTimer, 1000);

function updateTimer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    timer.innerHTML = `${minutes}:${seconds}`;
    time--;
}

document.querySelector('.result__button').addEventListener('click', () => {
    fetch('https://swapi.dev/api/people/1/ ')
      .then(response => response.json())
      .then(data => (
        document.querySelector('.result__name').innerHTML = data.name,
        document.querySelector('.result__height').innerHTML = data.height,
        document.querySelector('.result__mass').innerHTML = data.mass,
        document.querySelector('.result__hair-color').innerHTML = data.hair_color,
        document.querySelector('.result__skin-color').innerHTML = data.skin_color,
        document.querySelector('.result__eye-color').innerHTML = data.eye_color,
        document.querySelector('.result__birth-year').innerHTML = data.birth_year,
        document.querySelector('.result__gender').innerHTML = data.gender
        
        )
      );
});
