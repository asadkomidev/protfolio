import React from 'react'
import Container from '../shared/container'
import { Separator } from '../ui/separator'

const Footer = () => {
  return (
    <Container>
       
        <footer className='flex items-center justify-center py-6'>
           
            <p className='text-muted-foreground text-xs'>
            &copy; {new Date().getFullYear()} Asad Komi, All Rights Reserved
            </p>
        </footer>
    </Container>
  )
}

export default Footer