const BASE_URL =`https://youtube-v2.p.rapidapi.com`

 export const SearchVideos = async (param) =>{
    const res = await fetch(`${BASE_URL}/${param}`, {
        method: "GET" ,
        headers: {
        'x-rapidapi-key':'041ba30eb2msh9d5992fe0703020p14743ajsn7a1fec72db0f',
		'x-rapidapi-host': 'youtube-v2.p.rapidapi.com'
        }
    })
    const result = await res.json();
    return result;
}
