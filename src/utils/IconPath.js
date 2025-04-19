
import naverReact from "../assets/icons/naverBtn/naver_rect.png"
import naverCircel from "../assets/icons/naverBtn/naver_circle.png"
import naverSquare from "../assets/icons/naverBtn/naver_square.png"

import googleRect from "../assets/icons/googleBtn/google_rect.svg"
import googleCircle from "../assets/icons/googleBtn/google_circle.svg"
import googleSquare from "../assets/icons/googleBtn/google_square.svg"

export function IconPath(provider, shape="rect"){
    const key = `${provider}_${shape}`
    const map = {
        naver_rect: naverReact,
        naver_circle: naverCircel,
        naver_square: naverSquare,


        google_rect: googleRect,
        google_Circle: googleCircle,
        google_Square: googleSquare,
    };

    return map[key] || null;
}