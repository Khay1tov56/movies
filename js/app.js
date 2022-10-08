let elList = document.querySelector(".list");
let elTemplate = document.querySelector(".js-template").content;
let elText = document.querySelector(".title-text");
let elTexta = document.querySelector(".title-texta");
let elStar = document.querySelector(".star");
let elYear = document.querySelector(".year");
let elClock = document.querySelector(".soat");
let elMn = document.querySelector(".minut");
let elFrame = document.querySelector(".iframe");
let elStars = document.querySelector(".stars");
let elYears = document.querySelector(".years");
let elSoats = document.querySelector(".soats");
let elMinutes = document.querySelector(".minuts");
let elNames = document.querySelector(".names");
let elLorems = document.querySelector(".lorem");
let elMore = document.querySelector(".more");
let elClose = document.querySelector(".close");

let fragment = new DocumentFragment();

let movieSplic = movies.splice(0, 100);
let count = 1;

for (movie of movieSplic) {

    let elTemplateClone = elTemplate.cloneNode(true);

    elTemplateClone.querySelector(".image").src = "http://i3.ytimg.com/vi/" + movie.ytid + "/mqdefault.jpg",
        elTemplateClone.querySelector(".count").textContent = count++,
        elTemplateClone.querySelector(".title-text").textContent = movie.Title,
        elTemplateClone.querySelector(".star").textContent = movie.imdb_rating,
        elTemplateClone.querySelector(".year").textContent = movie.movie_year,
        elTemplateClone.querySelector(".liitem").dataset.idItem = movie.imdb_id,
        elTemplateClone.querySelector(".js-href").dataset.idBtn = movie.imdb_id,
        elTemplateClone.querySelector(".soat").textContent = Number(Math.floor(movie.runtime / 60)),
        elTemplateClone.querySelector(".minut").textContent += Number(Math.floor(movie.runtime % 60));

    fragment.appendChild(elTemplateClone);

}

elList.addEventListener("click", function (evt) {

    if (evt.target.matches(".js-href")) {

        let btnId = evt.target.dataset.idBtn;

        let itemFind = movieSplic.find(obj => obj.imdb_id == btnId);

        elTexta.textContent = itemFind.Title,
            elFrame.src = `https://www.youtube-nocookie.com/embed/${itemFind.ytid}`,
            elStars.textContent = itemFind.imdb_rating,
            elYears.textContent = itemFind.movie_year,
            elSoats.textContent = Number(Math.floor(itemFind.runtime / 60)),
            elMinutes.textContent = Number(Math.floor(itemFind.runtime % 60)),
            elNames.textContent = itemFind.Categories,
            elLorems.textContent = itemFind.summary,
            elMore.href = " https://www.youtube.com/watch?/=" + itemFind.ytid;

        elClose.addEventListener("click", function () {

            elFrame.src = "";

        });

    };

});


elList.appendChild(fragment);