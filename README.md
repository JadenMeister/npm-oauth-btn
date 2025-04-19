# oauth-btn


OAuth 2.0 로그인 버튼 컴포넌트 패키지 (React + VITE 용)  
•	✅ Vite (import.meta.env)

Google, Kakao, Naver, GitHub 지원 + 다양한 버튼 형태(circle, square, rect)

---

##  설치 : INSTALL

```bash
npm install oauth-btn

```


🛠️ 사용 방법: HOW TO USE

환경 변수 설정 (.env)

```bash
VITE_GOOGLE_CLIENT_ID=...
VITE_GOOGLE_REDIRECT_URI=...

VITE_KAKAO_CLIENT_ID=...
VITE_KAKAO_REDIRECT_URI=...

VITE_NAVER_CLIENT_ID=...
VITE_NAVER_REDIRECT_URI=...

VITE_GITHUB_CLIENT_ID=...
VITE_GITHUB_REDIRECT_URI=...
```

## Vite 사용자 주의 

환경변수는 import.meta.env.VITE_... 형태로 불러와야 합니다.

### 컴포넌트 예시 : EXAMPLE

```javascript
import { GoogleObj, KakaoObj, NaverObj, GithubObj } from "oauth-btn";

<GoogleObj shape="rect" />
<KakaoObj shape="circle" />
<NaverObj shape="square" radius="rounded-md" />
<GithubObj shape="rect" />

```


### 커스터마이징


| Prop  | 설명                                      |
|-------|-----------------------------------------|
| shape | 버튼 모양 (circle, square, rect)            |
| radius | Tailwind-style radius (rounded-md, x1 ) |
| text | 텍스트 커스터마이징(기본값 자동 제공                    |


### 지원 SNS 
| SNS     | 지원 여부 |
|---------|----------|
| Google  | ✅       |
| Kakao   | ✅       |
| Naver   | ✅       |
| Github  | ✅       |


 라이센스 : LICENSE

MIT