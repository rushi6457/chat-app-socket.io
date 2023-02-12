import React from 'react';
import styled from "styled-components";
import Link from 'next/link'
import styles from "../styles/signup.module.css"
import { Button, Center, Container, Flex, Heading, Input } from '@chakra-ui/react';
import Image from 'next/image';

const Signup = () => {
    
    const handleSubmit = () =>{

    }
    const handleChange = (e)=>{

    }
    return (
        <>
                <div className={styles.signup}>
                        <form onSubmit={(event)=>handleSubmit(event)}>
                        <Flex className={styles.brand} justifyContent={'center'}>
                            <Image src="" alt="" />
                            <Heading fontFamily={ 'Josefin Sans'} textTransform={'uppercase'}>Chat app</Heading>
                        </Flex>
                        <Container>
                        <Input
                        mt='4'
                         type="text" placeholder='Username' name='username' onChange={(e)=>handleChange(e)} />
                        <Input
                        mt='4'
                         type="email" placeholder='Email' name='email' onChange={(e)=>handleChange(e)} />
                        <Input
                        mt='4'
                         type="password" placeholder='Password' name='password' onChange={(e)=>handleChange(e)} />
                        <Input
                        mt='4'
                         type="password" placeholder='Confirm Password' name='confirmPassword' onChange={(e)=>handleChange(e)} />
                        <Input
                        mt='4'
                         type="text" placeholder='Username' name='username' onChange={(e)=>handleChange(e)} />
                        <Flex justifyContent={'space-between'} alignItems={'center'}>
                         <Button textTransform={'camelCase  '} mt='4' varient='solid' colorScheme='red' type='submit'>Create User</Button>
                         <Center>
                            <Flex>already have an account?   <Link href='/login'>Login</Link></Flex>
                         </Center>
                         </Flex>
                         </Container>

                         </form>
                </div>
        </>
    );
}



export default Signup;
