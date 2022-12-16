import React from 'react'
import {Box, Stack, Typography, Button} from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'

function HeroBanner() {
  return (
    <Box sx={{
        mt: { lg: '212px', xs: '70px'}, 
        ml: { sm: '50px'}
    }} position='relative' p='20px'>
        <Typography color='red' 
        fontWeight='600' fontSize='24px'>
            Fitness Club
        </Typography>
        <Typography fontWeight='700' sx={{ 
            fontSize: { lg: '44px', xs: '40px'} 
        }} mb='23px' mt='30px'>
            Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb={4}>
            Check out some of the best exercises. 
        </Typography>
        <Button variant='contained' color='error' href='#exercises' sx={{ backgroundColor:'red', padding: '10px'}}>Explore Exercises</Button>
        <Typography 
            fontWeight={600}
            color='red'
            sx={{ 
                opacity: 0.1, 
                display: {lg: 'block', xs: 'none'}
            }} fontSize='200px'
            >
                Exercise
            </Typography>
        
        <img src={HeroBannerImage} alt='hero-img' className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner