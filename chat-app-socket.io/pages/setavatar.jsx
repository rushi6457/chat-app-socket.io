import { Box, Container, Heading } from '@chakra-ui/react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Buffer } from 'buffer';
import { ToastContainer } from 'react-toastify';

const Setavatar = () => {
 const api = "https://api.multiavatar.com/782492"
  
    const router = useRouter()
    const [avatars,setAvatars] = useState([])
    const [loading,setLoading] = useState(false)
    const [selectAvatar,setSelectAvatar] = useState(undefined)
     const toastOptions = {
           position:'bottom-left',
                autoClose:8000,
                pauseOnHover:true,
                draggable:true,
                theme:'dark'
    }

    const setProfilePicture = async()=>{

    }

    (async function myFun (){
         
        //      const data = []
        //  for(let i=0; i<4;i++){
        //     const image = await axios.get(`https://api.multiavatar.com/782492/${Math.round(Math.random()* 1000) }`)
        //     const buffer = new Buffer(image.data)
        //     data.push(buffer.toString("base64"))
        //  }
        //  setAvatars(data)
        //  setLoading(false)
    })()
    // useEffect( async()=>{
    //      const data = []
    //      for(let i=0; i<4;i++){
    //         const image = await axios.get(`${api}/${Math.round(Math.random()* 1000) }`)
    //         const buffer = new Buffer(image.data)
    //         data.push(buffer.toString("base64"))
    //      }
    //      setAvatars(data)
    //      setLoading(false)
    // },[])
    return (
        <div>
            <Box>
                <div>
                    <Heading>Pick an avatar as a profile picture</Heading>
                </div>
                <div>
                    {avatars?.map((el,index)=>{
                          return(
                            <div className={`el ${selectAvatar === index ? 'selected' : ''}`}>
                                <Image src={`data:image/svg+xml;base64,${el}`} 
                                onClick={()=>setSelectAvatar(index)}
                                />
                            </div>
                        
                          )
                    })}
                </div>
            </Box>
            <ToastContainer/>
        </div>

    );
}

export default Setavatar;
