"use client"
import Image from "next/image";
import Navbar from "@/components/Navbar_components/Navbar";
import YoutubeImage from "@/components/Navbar_components/YoutubeImage";
import React, {useState} from "react"
import Searchbar from "@/components/Searchbar";
import Feeds from "@/components/MainContent/Feeds";
import SideBar from "@/components/SideContent/SideBar";

export default function Home() {

  const [count, setCount]=useState("data")
  
  return (
    <div className="container page_container">
      <Navbar/>
      <div className="con">
      <SideBar/>
        <Feeds cou={count}/>
       
      </div>
    </div>


  )
}