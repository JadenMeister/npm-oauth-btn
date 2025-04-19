
import naverRect from "../assets/icons/naverBtn/naver_rect.png"
import naverCircle from "../assets/icons/naverBtn/naver_circle.png"
import naverSquare from "../assets/icons/naverBtn/naver_square.png"

import googleRect from "../assets/icons/googleBtn/google_rect.svg"
import googleCircle from "../assets/icons/googleBtn/google_circle.svg"
import googleSquare from "../assets/icons/googleBtn/google_square.svg"

import kakaoRect from "../assets/icons/kakaoBtn/kakao_rect.svg"
import kakaoCircle from "../assets/icons/kakaoBtn/kakao_circle.svg"
import kakaoSquare from "../assets/icons/kakaoBtn/kakao_square.svg"

export function IconPath(provider, shape="rect"){
    const key = `${provider}_${shape}`
    const map = {
        naver_rect: naverRect,
        naver_circle: naverCircle,
        naver_square: naverSquare,


        google_rect: googleRect,
        google_circle: googleCircle,
        google_square: googleSquare,

        kakao_rect: kakaoRect,
        kakao_circle: kakaoCircle,
        kakao_square: kakaoSquare,
    };

    return map[key] || null;
}