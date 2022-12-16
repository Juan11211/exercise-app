import React, { lazy } from 'react'
import {Link} from 'react-router-dom'
import {Button, Stack, Typography} from '@mui/material'

function ExerciseCard({exercise}) {


  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
        <Stack direction='row'>
            <Button sx={{ ml: '21px', color: 'white', background: '#fd9346', fontSize: '14px', borderRadius: '20px', 
        textTransform: 'capitalize'}}>
            {exercise.bodyPart}
            </Button>
            <Button sx={{ ml: '21px', color: 'white', background: '#D3D3D3', fontSize: '14px', borderRadius: '20px', 
        textTransform: 'capitalize'}}>
            {exercise.bodyPart}
            </Button>
        </Stack>
        <Typography ml='21px' color='#000' fontWeight='bold' mt='11px' pb='10px' textTransform='capitalize' fontSize='24px'> 
            {exercise.name}
        </Typography>
    </Link>

    )
}

export default ExerciseCard