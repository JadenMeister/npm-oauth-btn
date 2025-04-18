import React from "react";
import BaseBtn from "./BaseBtn.jsx";
import { getIconPath } from "../utils/getIconPath.js";

export default function NaverObj({ radius, shape = "rect" }) {
    const handleClick = () => {
        const clientId = import.meta.env.VITE_NAVER_CLIENT_ID;
        const redirectUri = import.meta.env.VITE_NAVER_REDIRECT_URI;
        const state = crypto.randomUUID();
        const url = `https://nid.naver.com/oauth2.0/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&state=${state}`;
        window.location.href = url;
    };

    const icon = getIconPath("naver", shape);

    return (
        <BaseBtn onClick={handleClick} shape={shape} radius={radius} bgColor="bg-[#03C75A]">
            {icon && <img src={icon} alt="Naver Icon" className="w-5 h-5" />}
            {shape === "rect" && <span className="text-white">네이버 로그인</span>}
        </BaseBtn>
    );
}
