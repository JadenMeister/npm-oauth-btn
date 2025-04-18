import React from "react";
import BaseBtn from "./BaseBtn.jsx";
import kakaoIcon from "../assets/icons/kakao.svg";


export default function KakaoObj({ radius, shape }) {

    const handleClick = () =>{
        const clientId = import.meta.env.VITE_KAKAO_CLIENT_ID;
        const redirectUri = import.meta.env.VITE_KAKAO_REDIRECT_URI;
        const scope = "profile";
        const url = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
        window.location.href = url;
    }

    return (
        <BaseBtn onClick={handleClick} shape={shape} radius={radius} bgColor={"bg-[#FEE500]"} >
            <img src={kakaoIcon} alt="Kakao Icon" className="w-5 h-5" />

            {shape === "rect" &&  <span className="text-black">Sign in with Kakao</span> }
        </BaseBtn>
    )
}