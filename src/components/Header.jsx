import React from 'react'
import { Box, Typography } from '@mui/material'


export const Header = () => {


  return (

    <Box mt={5}  >
      <Typography
        variant='h1'
        textAlign={"center"}
        fontWeight={"bold"}
        margin={"auto"}
        sx={{
          width: { xs: "100%", sm: "66,6%", md: "100%" },
          fontSize: { xs: 35, md: 60 }
        }}> Seguimiento Pacientes {" "}
        <Typography variant='h1' color={"indigo"} textAlign={"center"} fontSize={60} fontWeight={"bold"} component={"span"}>Veterinaria</Typography>
      </Typography>

    </Box>
  )
}
