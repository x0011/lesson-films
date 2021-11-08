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

let checkNum = true;
let countMovies;
while(checkNum){

    countMovies = Number(prompt("Сколько фильмов вы посмотрели?", ""));

    if(Number.isInteger(countMovies) && countMovies > 0){
        numberOfFilm = countMovies;
        personalMovieDB.count = numberOfFilm;
        checkNum = false;
    }else{
        alert("Введено неправильное значение). Укажите число фильмов цифрой");
    }
}


let movie;
let rating;
for(let i = 1; i <= numberOfFilm; i++){

    movie =  prompt("Фильм который вы уже посмотрели", "");

    let ratingCheck = true;

    while(ratingCheck) {
        rating = Number(prompt("Оцените фильм по шкале от 1.0 до 10", ''));
        if(rating <= 10 || rating >= 1 || isFloat(rating) || Number.isInteger(rating)) {
            personalMovieDB.movies[movie] = rating; 
            console.log(typeof(rating));
            ratingCheck = false;
        }else {
            alert('Оценка введена некорректно, формат оценки от 1.0 до 10, например 5.5');
        }
    }

}

console.log(personalMovieDB);
