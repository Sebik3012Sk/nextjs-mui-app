import { useState , useEffect } from "react";
import { useRouter } from "next/router";
import User from "@/interface/User";
import { Box, Typography } from "@mui/material";

const UserIdPage = () => {

    const [dataStateUser,setDataStateUser] = useState<User[] | undefined>();
    const [foundUser,setFoundUser] = useState<User>();
    const router = useRouter();
    const { userId } = router.query;

    const getDataUsers = async () => {
        const response = await fetch("/api/users");
        const data_json = await response.json();
        setDataStateUser(data_json[0]);
    } 

    useEffect(() => {
        const found_user = dataStateUser?.find((user) => user.id == Number(userId));
        setFoundUser(found_user);
    } , [dataStateUser,userId])

    useEffect(() => {
        getDataUsers();
    } , [])

    return <Box sx={
        {
            display : "flex",
            flexDirection : "column",
            flexWrap : "wrap",
            justifyContent : "center",
            alignItems : "center",
            backgroundColor : "#19223a",
            width : "90%",
            height : "100vh"
        }
    }>
        <Box sx={
            {
                margin : "10px",
            }
        }>
            <Typography variant="h2">{foundUser?.user}</Typography>
            <Typography variant="h4">{foundUser?.age}</Typography>
            <Typography variant="h4">{foundUser?.job}</Typography>
            {/* <Typography variant="h4">{foundUser?.id}</Typography> */}
        </Box>
    </Box>
}

export default UserIdPage;