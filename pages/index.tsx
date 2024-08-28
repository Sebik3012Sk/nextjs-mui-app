import React from 'react'
import NavBar from '@/components/NavBar';

// import MUI components
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box>
      <NavBar />


      <Box sx={
        {
          display : "flex",
          justifyContent : "center",
          alignItems : "center",
          width : "100%",
          height : "100vh",
          bgcolor : "#190b2a"
        }
      }>


      <Typography variant='h1' sx={
        {
          width : "375px",
          height : "125px",
          bgcolor : "#151333",
          marginTop : "-100px",
          padding : "10px",
          borderRadius : "10px",

          ":hover" : {
            bgcolor : "#110a36",
            transform : "scale(1.25)",
            transition : "1s"
          }
        }
      }>MUI App</Typography>

      </Box>
      
    </Box>
  )
}

export default Home;