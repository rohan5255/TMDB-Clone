import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDhjZGFiOWMzMWYwNmY0YzEwMGE5YmJlOTcyYjJkYiIsInN1YiI6IjY0NDVmZGYyYTA2ZWZlMGY5ZGE0OGQzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GxG_f-Cu4bja7afPmHm-GhcTP4jUpwd28JqcBq7WAJQ";
const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async(url, params)=>{
    try{
        const {data} = await axios.get(BASE_URL + url, {headers, params})
        return data;
    }
    catch(err){
        console.log(err);
        return err;
    }
}