import axios from 'axios';
// trival api snippet start
const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary'

// snippet endss here
export const getPlacesData = async (sw, ne) => {
    try {
        //request 
        const { data:{data} }= await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
            tr_latitude: ne.lat,
          },
          headers: {
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
            'X-RapidAPI-Key': '57f6c7222amsh1423bfb9b1dd4c9p1aab28jsnc8da9cc8d596'
          }
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}