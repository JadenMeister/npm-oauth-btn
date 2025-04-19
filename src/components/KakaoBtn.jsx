import React from "react";
import BaseBtn from "./BaseBtn.jsx";
import { IconPath } from "../utils/IconPath.js";

export default function KakaoBtn({ radius, shape = "rect" }) {
    const handleClick = () => {
        const clientId = import.meta.env.VITE_KAKAO_CLIENT_ID;
        const redirectUri = import.meta.env.VITE_KAKAO_REDIRECT_URI;
        const scope = "profile";
        const url = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
        window.location.href = url;
    };

    const icon = IconPath("kakao", shape);

    return (
        <BaseBtn onClick={handleClick} shape={shape} radius={radius} bgColor="bg-[#FEE500]">
            {icon && <img src={icon} alt="Kakao Icon" className="w-5 h-5" />}

        </BaseBtn>
    );
}