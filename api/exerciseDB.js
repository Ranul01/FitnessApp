import axios from "axios";
import { rapitApiKey } from "../constants";

const baseUrl = 'https://exercisedb.p.rapidapi.com';

const apiCall = async (url, params) => {
    try {
        const options = {
            method: 'GET',
            url,
            params,
            headers: {
                'x-rapidapi-key': rapitApiKey,
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
            }
        }

        const response = await axios.request(options)
        return response.data
    } catch (err) {
        console.log('error', err.message)
    }
}

export const fetchExerciseByBodypart = async (bodyPart) => {
    let data = await apiCall (baseUrl+ `/exercises/bodyPart/${bodyPart}`)
    return data
}