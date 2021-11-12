const API_KEY = "5fc58fe8e0bb664c669386bc9f57439a"

const requests={
    netflixOrignals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    actionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    horrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    comedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    romanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    documentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    trendingnow:`/trending/all/month/?api_key=${API_KEY}&language=en-US`,
    topRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`

}   

export default requests;

