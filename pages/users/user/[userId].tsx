import { useState , useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";

// import data
import users from "@/data/data_user";

// import interfaces
import User from "@/interface/User";
import NavBar from "@/components/NavBar";

const UserIdPage = () => {

    const [foundUser,setFoundUser] = useState<User>();
    const router = useRouter();
    const { userId } = router.query;

    useEffect(() => {
        const find_user = users.find((user) => user.id == Number(userId));
        setFoundUser(find_user);
    } , [userId])

    return <Box sx={{
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        alignItems : "center",
    }}>
    
    <NavBar />

    <Box sx={
        {
            display : "flex",
            justifyContent : "center",
            alignItems : "center",
            flexDirection : "column",
            width : "450px",
            height : "250px",
            margin : "10px",
            bgcolor : "#141414",
            borderRadius : "10px"
        }
    }>
        <Typography variant="h3" sx={
            {
                color : "#fff"
            }
        }>{foundUser?.user}</Typography>

        <Typography variant="h4" sx={
            {
                color : "#fff"
            }
        }>Age :{foundUser?.age}</Typography>

        <Typography variant="h4" sx={
            {
                color : "#fff"
            }
        }>{foundUser?.job}</Typography>

        <Typography variant="h4" sx={
            {
                color : "#fff"
            }
        }>Id :{foundUser?.id}</Typography>
    </Box>


    </Box>
}

export default UserIdPage;