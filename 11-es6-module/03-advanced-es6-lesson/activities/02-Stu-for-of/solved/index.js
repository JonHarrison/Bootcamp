const songsLiElements = document.querySelectorAll('#songs > li');

for (const songLiEl of songsLiElements)
{
    songLiEl.classList.add('red');
}