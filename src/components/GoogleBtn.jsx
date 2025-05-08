import React from "react";
import BaseBtn from "./BaseBtn.jsx";
import { IconPath } from "../utils/IconPath.js";

export default function GoogleBtn({ radius, shape = "rect" }) {
    const handleClick = () => {
        const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
        const redirectUri = import.meta.env.VITE_GOOGLE_REDIRECT_URI;
        const scope = "profile email";
        const url = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;
        window.location.href = url;
    };

    const icon = IconPath("google", shape);

    return (
        <BaseBtn onClick={handleClick} shape={shape} radius={radius} bgColor="bg-[#4285F4]">
            {icon && <img src={icon?.default || icon} alt="Google Icon" className="w-5 h-5" />}

        </BaseBtn>
    );
}