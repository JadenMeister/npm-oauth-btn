
import naverReact from "../assets/icons/naverBtn/naver_rect.png"
import naverCircel from "../assets/icons/naverBtn/naver_circle.png"
import naverSquare from "../assets/icons/naverBtn/naver_square.png"

export function IconPath(provider, shape="rect"){
    const key = `${provider}_${shape}`
    const map = {
        naver_rect: naverReact,
        naver_circle: naverCircel,
        naver_square: naverSquare,
    };

    return map[key] || null;
}