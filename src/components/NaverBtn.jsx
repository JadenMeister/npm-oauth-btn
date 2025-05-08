import React from "react";
import BaseBtn from "./BaseBtn.jsx";
import { IconPath } from "../utils/IconPath.js";

export default function NaverBtn({ radius, shape = "rect", clientId, redirectUri }) {
    const handleClick = () => {
        if (!clientId || !redirectUri) {
            console.error("NaverBtn: clientId와 redirectUri는 필수입니다.");
            return;
        }

        const state = crypto.randomUUID();
        const url = `https://nid.naver.com/oauth2.0/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&state=${state}`;
        window.location.href = url;
    };

    const icon = IconPath("naver", shape);

    const size = shape === "rect"
        ? { width: "250px", height: "48px" }
        : { width: "40px", height: "40px" };

    return (
        <BaseBtn onClick={handleClick} shape={shape} radius={radius} bgColor="bg-transparent">
            {icon && (
                <img
                    src={icon?.default || icon}
                    alt="naver"
                    style={{
                        ...size,
                        objectFit: "contain",
                        display: "block",
                    }}
                />
            )}
        </BaseBtn>
    );
}