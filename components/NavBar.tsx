import { Box, Button, Typography } from "@mui/material";
import { Sling as HamburgerMenu } from "hamburger-react";
import Link from "next/link";
import { darken } from "@mui/material";

import React, { useState } from 'react'

const NavBar = () => {

  const [openMenu,setOpenMenu] = useState<boolean>(false);

  return (
    <Box sx={
      {
        width : "100%",
        height : "65px",
        backgroundColor : "#12043e"
      }
    }>

      <Link href="/">
        <Typography variant="h4" sx={
          {
            float : "right",
            margin : "5px"
          }
        }>MUI App</Typography> 
      </Link>
    

      <HamburgerMenu toggled={openMenu} toggle={setOpenMenu} />
      { openMenu && <Box sx={{
        display : "flex",
        flexDirection : "column",
        width : "100%",
        height : "150px",
        bgcolor : "#161616",
        position : "absolute",
        zIndex : "1000"
      }}>

      <nav style={{margin : "5px"}}>
        <ul>
          <li>
            <Link href={"/"}>
              <Button sx={
                {
                  width : "210px",
                  bgcolor : darken("#161616",1.5),
                  margin : "5px",
                  ":hover" : {
                    bgcolor : darken("#43b7ff",2.3),
                    transform : "scale(1.05)"
                  }
                }
              } variant="outlined">Home</Button>
            </Link>
          </li>

          <li>
            <Link href={"/about-us"}>
              <Button sx={
                {
                  width : "210px",
                  bgcolor : darken("#43b7ff",1.5),
                  margin : "5px",
                  ":hover" : {
                    bgcolor : darken("#43b7ff",2.3),
                    transform : "scale(1.05)"
                  }
                }
              } variant="outlined">O nás</Button>
            </Link>
          </li>

          <li>
            <Link href={"/users/all-users"}>
              <Button sx={
                {
                  width : "210px",
                  bgcolor : darken("#43b7ff",1.5),
                  margin : "5px",
                  ":hover" : {
                    bgcolor : darken("#43b7ff",2.3),
                    transform : "scale(1.05)"
                  }
                }
              } variant="outlined">Uživatelé</Button>
            </Link>
          </li>

        </ul>
      </nav>


      </Box> }

     

    </Box>
  )
}

export default NavBar;