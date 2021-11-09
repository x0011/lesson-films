let numberOfFilm;
let personalMovieDB = {
    count: undefined,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

function isFloat(number) {
    return Number(number) === number && number%1 !==0;
}

function start() {
    let checkNum = true;
    let countMovies;
    while (checkNum) {
        countMovies = Number(prompt("Сколько фильмов вы посмотрели?", ""));
        if (Number.isInteger(countMovies) && countMovies > 0) {
            numberOfFilm = countMovies;
            personalMovieDB.count = numberOfFilm;
            checkNum = false;
        } else {
            alert("Введено неправильное значение. Укажите число фильмов цифрой");
        }
    }
}

// start();

function rememberMyFilms() {
    let movie;
    let rating;

    for (let i = 1; i <= numberOfFilm; i++) {
        let movieLengthCheck = true;
        while (movieLengthCheck) {
            movie = prompt("Фильм который вы уже посмотрели", "");
            if (movie.length < 50 && movie.length > 1) {
                movieLengthCheck = false;
            } else {
                alert('Вы не можете указать название длинее 50 и менее 2-х символов');
            }
        }

        let ratingCheck = true;

        while (ratingCheck) {
            rating = Number(prompt("Оцените фильм по шкале от 1.0 до 10", ''));

            if (rating <= 10 && rating >= 1 && (isFloat(rating) || Number.isInteger(rating))) {
                personalMovieDB.movies[movie] = rating;
                ratingCheck = false;
            } else {
                alert('Оценка введена некорректно, формат оценки от 1.0 до 10, например 5.5');
            }
        }

    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман!');
    } else {
        alert('Произошла ошибк51518а' + personalMovieDB.count);
    }
}

// detectPersonalLevel();

function showMyDB(){
    console.log(personalMovieDB.privat);
    if(!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }else {
        console.log('Приватный объект');
    }
}

function writeYourGenres(){
    let genre;
    let count;
    for(let i = 0; i < 3; i++){
        count = i+1;
        genre = prompt(`Ваш любимый жанр № ${count}`);
        personalMovieDB.genres[i] = genre;
    }
}

writeYourGenres();

showMyDB();
