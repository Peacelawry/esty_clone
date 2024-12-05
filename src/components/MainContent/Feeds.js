import React, {useContext, useState} from 'react'
import { SearchContext } from '@/contexts/SearchContexts'
import styles from './Feeds.module.css'

const Feeds = () => {
  const {result, setResult} = useContext(SearchContext)
  // state to track video playing
  const [playingVideo, setPlayingVideo]=useState(null)  
  // function to play video related to the thumbnail
  const handlePlayVideo = (videoId) =>{
    setPlayingVideo(videoId)
  }
  return (
    <div className= { styles.container}>
      {
        result.map((eachItems, index, array)=>(
          <div key={index} className={styles.content}>     
          {
           playingVideo === eachItems.video_id ?
          (
            <iframe src={`https://www.youtube.com/embed/${eachItems.video_Id}`}
          >
 
            </iframe>
          )
           :
           (
            <div>
              <img src={eachItems.thumbnails[0].url} 
          alt="image" onClick={ () =>handlePlayVideo(eachItems.video_id)} />
          <h1>{eachItems.title}</h1>
          <h1>{eachItems.number_of_views}</h1>
          <p>{eachItems.description}</p>
          <h1>{eachItems.video_length}</h1>
          <p>{eachItems.number_of_views}</p>
          <p>{eachItems.video_length}</p>
          <p>{eachItems.published_time}</p>
            </div>
           )
          }
        
      </div>
      ))
    }
      
    </div>
  )
}

export default Feeds
