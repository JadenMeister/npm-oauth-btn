import React from "react";
import BaseBtn from "./BaseBtn.jsx";
import { getIconPath } from "../utils/getIconPath.js";

export default function GoogleObj({ radius, shape = "rect" }) {
    const handleClick = () => {
        const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
        const redirectUri = import.meta.env.VITE_GOOGLE_REDIRECT_URI;
        const scope = "profile email";
        const url = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;
        window.location.href = url;
    };

    const icon = getIconPath("google", shape);

    return (
        <BaseBtn onClick={handleClick} shape={shape} radius={radius} bgColor="bg-[#4285F4]">
            {icon && <img src={icon} alt="Google Icon" className="w-5 h-5" />}
            {shape === "rect" && <span className="text-white">Sign in with Google</span>}
        </BaseBtn>
    );
}