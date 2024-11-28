import React from 'react'
import Image from "next/image"
import Link from "next/link"
import profileImg from "@/public/img.jpg"
const Logo = () => {
  return (
    <Link href ="/">
        <div>
            <Image src = {profileImg} alt = "LeThienDoanh" className = "w-full h-auto rounded-full"    />
        </div> 
    </Link> 

  )
}

export default Logo