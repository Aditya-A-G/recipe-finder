import axios from 'axios';
import {API_URL} from '../constants/constant';


export const getRecipes = async(searchedQuery: string) => {
    try{
        const res = await axios.get(`${API_URL}/search?q=${searchedQuery}`)
        return res.data;
    }catch(error: unknown){
        console.log('error while calling the api ', (error as Error).message)
    }
};