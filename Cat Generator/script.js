function generateCat () {
    const catGIF = document.createElement('img');
    const catDiv = document.getElementById('catImages');
    catGIF.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    catDiv.appendChild (catGIF);
}