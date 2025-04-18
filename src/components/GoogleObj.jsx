import React from "react";
import BaseBtn from "./BaseBtn.jsx";
import googleIcon from "../icons/google.svg";


export default function GoogleObj({ radius, shape }) {
    return (
        const handleClick = () =>{
            const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
            const redirectUri = import.meta.env.VITE_GOOGLE_REDIRECT_URI;
            const scope = "profile email";
            const url = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;
        }
    );
}