import axios from "axios";

const key = "3b2937ddd60341348b90542e718eb90e";

const axiosCreate = axios.create({
    baseURL: "https://api.rawg.io/api"
})


const getGenreList = axiosCreate.get('/genres?key='+key);
const getAllGames = axiosCreate.get('/games?key='+key);
const getGamelistbyGenreID = (id) =>axiosCreate.get('/games?key='+key+'&genres='+id)

export default{
    getGenreList,
    getAllGames,
    getGamelistbyGenreID
}