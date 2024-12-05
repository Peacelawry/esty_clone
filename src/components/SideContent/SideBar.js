import React from 'react'
import styles from './Sidebar.module.css'
import { IoMdHome} from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";

const SideBar = () => {
  return (
    <div>
      <div className={styles.side}> 
<div className= {styles.sido}>
<IoMdHome />
  <p>Home</p>

</div>
<div className= {styles.sidt}>
<SiYoutubeshorts/>

  <p>Shorts</p>

</div> 
<div className= {styles.sidth}>
<MdOutlineSubscriptions />
  <p>Subscriptions</p>

</div>

      </div>
    </div>
  )
}

export default SideBar
