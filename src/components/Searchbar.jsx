 "use client"
import React from 'react'
import { SearchVideos } from '@/utils/fetchData'
import { useState , useContext} from 'react'

import { SearchContext } from '@/contexts/SearchContexts'
const Searchbar = () => { 
  const {result , setResult}  =useContext(SearchContext)
  const [ loading, setLoading ]=useState(false)
  // const [result , setResult]=useState([]);
  const [ask , setAsk]=useState("");

  const handleSearch = async (e) => {
setLoading (true)
e.preventDefault();
const data = await  SearchVideos(`search/?query=${ask}`)   
console.log(data)
setResult(data.videos)
setLoading(false)
  }


//   function update (){
//     setCount (count+1)
//   }
// const [count , setCount] = useState(0)


  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder='search...'
        value={ask}
        onChange={(e) => setAsk(e.target.value)} 
         />
         
      <button>
        search
      </button>
      </form>
      {
        loading ? <p>loading...</p> : null
      }
      {
        result.map((eachItems, index, array)=>(
          <div key={index}>
            <h1>{eachItems.title}</h1>
          <h1>{eachItems.number_of_views}</h1>
          <h1>{eachItems.video_length}</h1>
          <img src={eachItems.thumbnails[0].url} 
          alt="image" />
        
      </div>
      ))
    }
      </div>

    
  )
}

export default Searchbar
