
import githubRect from "../assets/icons/githubBtn/github_rect.svg?url"
import githubCircle from "../assets/icons/githubBtn/github_circle.svg?url"
import githubSquare from "../assets/icons/githubBtn/github_square.svg?url"

import googleRect from "../assets/icons/googleBtn/google_rect.svg?url"
import googleCircle from "../assets/icons/googleBtn/google_circle.svg?url"
import googleSquare from "../assets/icons/googleBtn/google_square.svg?url"

import kakaoRect from "../assets/icons/kakaoBtn/kakao_rect.svg?url"
import kakaoCircle from "../assets/icons/kakaoBtn/kakao_circle.svg?url"
import kakaoSquare from "../assets/icons/kakaoBtn/kakao_square.svg?url"

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

        github_rect: githubRect,
        github_circle: githubCircle,
        github_square: githubSquare,


    };

    return map[key] || null;
}