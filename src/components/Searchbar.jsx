 "use client"
import React from 'react'
import { SearchVideos } from '@/utils/fetchData'
import { useState } from 'react'

const Searchbar = () => { 
  const [ loading, setLoading ]=useState(false)
  const [result , setResult]=useState([]);
  const [ask , setAsk]=useState("");

  const handleSearch = async (e) => {
setLoading (true)
e.preventDefault();
const data = await  SearchVideos(`search/?query=${ask}`)   
console.log(data)
setResult(data)
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
    </div>
  )
}

export default Searchbar
