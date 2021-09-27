import axios from 'axios';


const getData =async () => {
    let result = null;
    try {
        result=await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=40315881b5af1985a7ceba1f41b45973&language=en-US');
    } catch (err) {
        //console.log(err.response)
        return err.response
    }
    
    return result;
}



export {getData};