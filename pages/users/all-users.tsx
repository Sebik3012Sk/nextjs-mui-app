import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from 'react'
import Link from "next/link";
import { useState } from "react";

// import NavBar
import NavBar from "@/components/NavBar";

import User from "@/interface/User";

const Users = () => {
  
  const [dataUsersState,setDataUsersState] = useState([]);

  const getDataUsers = async () => {
    const response = await fetch("/api/users");
    const data_json = await response.json();
    setDataUsersState(data_json[0])
  }

  useEffect(() => {
    getDataUsers();
  } , [])

  return (
    <Box sx={{
      display : "flex",
      flexDirection : "column",
      justifyContent : "center",
      // alignItems : "center"
    }}>

      

      <NavBar />

      <Box sx={
        {
          display : "flex",
          alignItems : "center",
          justifyContent : "center"
        }
      }>
          <Typography variant="h3" sx={
            {
              borderBottom : "1px solid #000",
              width : "250px",
              marginTop : "5px"
            }
          }>Uživatelé</Typography>
      </Box>
     
     {
      dataUsersState.map((user : User,key : number) => {
        return <div style={
          {
            display : "flex",
            justifyContent : "center",
            alignItems : "center"
          }
        } key={key}><Box sx={
          {
              bgcolor : "#12043e",
              borderRadius : "5px",
              width : "250px",
              height : "175px",
              marginTop : "75px",
              boxShadow : "5px 5px 5px #1f0824",

              ":hover" : {
                transform : "scale(1.05)",
                transition : "0.5s"
              }
          }
        }>

          <Typography variant="h5" sx={
            {
              color : "#fff",
              margin : "10px",
              // width : "40%",
              // height : "350px"
            }
          }>{user.user}</Typography>

          <Typography variant="h5" sx={
            {
              color : "#fff",
              margin : "10px",
              // width : "40%",
              // height : "350px"
            }
          }>{user.job}</Typography>
          
          <Link href={`user/${user.id}`} prefetch={true}>
            <Button variant="contained" sx={
              {
                margin : "5px"
              }
            }>
              Detail Uživatele
            </Button>
          </Link>
        </Box>
        </div>
      })
     }

    </Box>
  )
}

export default Users;