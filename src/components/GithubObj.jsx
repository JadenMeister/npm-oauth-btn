import React from "react";
import BaseBtn from "./BaseBtn.jsx";
import { getIconPath } from "../utils/getIconPath.js";

export default function GithubObj({ radius, shape = "rect" }) {
    const handleClick = () => {
        const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
        const redirectUri = import.meta.env.VITE_GITHUB_REDIRECT_URI;
        const state = crypto.randomUUID();
        const scope = "user";
        const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}`;
        window.location.href = url;
    };

    const icon = getIconPath("github", shape);

    return (
        <BaseBtn onClick={handleClick} shape={shape} radius={radius} bgColor="bg-[#24292F]">
            {icon && <img src={icon} alt="GitHub Icon" className="w-5 h-5" />}
            {shape === "rect" && <span className="text-white">Sign in with GitHub</span>}
        </BaseBtn>
    );
}
