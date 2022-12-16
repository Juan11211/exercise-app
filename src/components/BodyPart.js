import React from 'react'
import { Stack, Typography } from '@mui/material'

import Icon from '../assets/icons/gym.png'

function BodyPart({item, bodyPart, setBodyPart}) {
  return (
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
        sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: 
         '#fff', borderBottomLeftRadius: '20px', width: '270px', height: 
          '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', 
           borderBottomLeftRadius: '20px', width: '270px', height: '282px', 
            cursor: 'pointer', gap: '47px' }}
            onClick={() => { 
              setBodyPart(item)
              window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
            }} // when clicked on, it will scroll down 
            
                >
        <img src={Icon} alt='dumbbell' style={{width: '40px', height:'40px'}}  />
        <Typography fontSize='24px' textTransform='capitalize' 
         fontWeight='bold'>
          {item}
        </Typography>

    </Stack>
  )
}

export default BodyPart