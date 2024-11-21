const BASE_URL =`https://youtube-v2.p.rapidapi.com`

 export const SearchVideos =(query) =>{
    const res = fetch(`${BASE-URL}/${query}`, {
        method: "GET" ,
        headers: {
'x-rapidapi-key': '041ba30eb2msh9d5992fe0703020p14743ajsn7a1fec72db0f',
		'x-rapidapi-host': 'youtube-v2.p.rapidapi.com'
        }
    })
    const result =res.json();
    return result;
}
