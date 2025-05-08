import React from "react";
import BaseBtn from "./BaseBtn.jsx";
import { IconPath } from "../utils/IconPath.js";

export default function GithubBtn({ radius, shape = "rect", clientId, redirectUri }) {
    const handleClick = () => {
        if (!clientId || !redirectUri) {
            console.error("GithubBtn: clientId와 redirectUri는 필수입니다.");
            return;
        }

        const state = crypto.randomUUID();
        const scope = "user";
        const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}`;
        window.location.href = url;
    };

    const icon = IconPath("github", shape);

    return (
        <BaseBtn onClick={handleClick} shape={shape} radius={radius} bgColor="bg-[#24292F]">
            {icon && <img src={icon?.default || icon} alt="GitHub Icon" className="w-5 h-5" />}
        </BaseBtn>
    );
}