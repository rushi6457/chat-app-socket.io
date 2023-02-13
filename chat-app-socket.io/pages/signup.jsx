import React, { useState } from 'react';
import styled from "styled-components";
import Link from 'next/link'
import styles from "../styles/signup.module.css"
import { Button, Center, Container, Flex, Heading, Input } from '@chakra-ui/react';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import axios from 'axios';
import { registerRoute } from '@/utils/APIroutes';
import { useRouter } from 'next/router';
const Signup = () => {
    const router = useRouter()
    const [values,setValues] = useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    const toastOptions = {
           position:'bottom-left',
                autoClose:8000,
                pauseOnHover:true,
                draggable:true,
                theme:'dark'
    }
        const handleChange = (e)=>{
        const {name,value} = e.target;
        setValues({...values,[name]:value})
    }
       const handleValidation = () =>{
        const {password,confirmPassword,username,email} = values;
        if(password !== confirmPassword){
            toast.error("Password must be same",
            toastOptions
            )
            return false;
        }
         else if(username.length <3){
                  toast.error("Username length should be greater than 3") 
                  return false; 
            }
          
    }
    
    const handleSubmit = async(e) =>{
        e.preventDefault()
        if(handleValidation()){
           
            const data = await axios.post("http://localhost:5000/signup",values);
            console.log(data);
        //     if(data.status === false){
        //         toast.error(data.message,toastOptions)
        //     }
        //     if(data.status === true){
        //         console.log(data);
        //         router.push("/")
        //     }
         }
    }

 console.log(values);

   
    return (
        <>
                <div className={styles.signup}>
                        <form onSubmit={handleSubmit}>
                        <Flex className={styles.brand} justifyContent={'center'}>
                            <Image src="" alt="" />
                            <Heading fontFamily={ 'Josefin Sans'} textTransform={'uppercase'}>Chat app</Heading>
                        </Flex>
                        <Container>
                        <Input
                        mt='4'
                         type="text" placeholder='Username' name='username' onChange={handleChange} />
                        <Input
                        mt='4'
                         type="email" placeholder='Email' name='email' onChange={handleChange} />
                        <Input
                        mt='4'
                         type="password" placeholder='Password' name='password' onChange={handleChange} />
                        <Input
                        mt='4'
                         type="password" placeholder='Confirm Password' name='confirmPassword' onChange={handleChange} />
                         <Input
                         type='file'
                          mt='4'
                         />
                     
                        <Flex justifyContent={'space-between'} alignItems={'center'}>
                         <Button textTransform={'camelCase  '} mt='4' varient='solid' colorScheme='red' type='submit'>Create User</Button>
                         <Center>
                            <Flex>already have an account?   <Link href='/login'>Login</Link></Flex>
                         </Center>
                         </Flex>
                         </Container>
                         </form>
                </div>
                <ToastContainer/>
        </>
    );
}



export default Signup;
