#  React OAuth Social Button

**OAuth 소셜 로그인 버튼 컴포넌트 모음집**  
지원 플랫폼: GitHub / Google / Kakao / Naver  
Tailwind 기반 + 커스터마이징 가능한 React 컴포넌트

**VITE** 기반으로 개발되었습니다.

---

##  설치

```bash
npm install oauth-btn
```
또는
```bash
yarn add oauth-btn
```

---

##  사용법

```jsx
import { KakaoBtn, GoogleBtn, NaverBtn, GithubBtn } from 'oauth-btn';

<KakaoBtn shape="rect" />
<GoogleBtn shape="circle" />
<NaverBtn shape="square" />
<GithubBtn shape="rect" />
```

---

## ⚙️ Props 설명

| prop        | 타입     | 기본값        | 설명                                               |
|-------------|----------|----------------|----------------------------------------------------|
| `shape`     | `string` | `'rect'`       | `'rect'`, `'circle'`, `'square'` 중 하나 선택      |
| `radius`    | `string` | —              | Tailwind의 border-radius 클래스 (`rounded-md`)     |
| `bgColor`   | `string` | `'transparent'`| Tailwind 배경 색상 클래스                          |
| `textColor` | `string` | `'text-white'` | Tailwind 텍스트 색상 클래스                        |
| `fontSize`  | `string` | `'text-sm'`    | Tailwind 폰트 크기 클래스                          |
| `onClick`   | `func`   | —              | 클릭 이벤트 핸들러                                 |

---

## 🔐 OAuth 연동 방식

버튼 클릭 → provider의 인증 페이지로 리디렉션 → `code` 발급 → 백엔드에서 토큰 교환

```
https://provider.com/oauth2/authorize?
  client_id=YOUR_CLIENT_ID&
  redirect_uri=YOUR_CALLBACK_URL&
  response_type=code&
  state=SOME_RANDOM_STRING
```

- 버튼 컴포넌트는 위 URL로 이동하는 역할만 수행합니다.
- `state`는 CSRF 공격 방지를 위해 자동 생성됩니다 (`crypto.randomUUID()`).

---

##  보안 및 주의사항

- OAuth 앱 설정에서 **redirect_uri** 를 정확하게 등록하세요
- `state` 파라미터를 백엔드에서 검증하여 CSRF 방지
- client_id와 redirect_uri는 `.env` 파일에 보관
- `.env` 파일은 반드시 `.gitignore` 처리
- 이 라이브러리는 **프론트엔드 UI 용도**입니다 (access_token 처리는 백엔드에서!)


---

##  .env 설정 예시

`.env.example`:

```env
VITE_KAKAO_CLIENT_ID=your_kakao_key
VITE_KAKAO_REDIRECT_URI=http://localhost:5173/auth/kakao/callback

VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_GOOGLE_REDIRECT_URI=http://localhost:5173/auth/google/callback

VITE_NAVER_CLIENT_ID=your_naver_id
VITE_NAVER_REDIRECT_URI=http://localhost:5173/auth/naver/callback

VITE_GITHUB_CLIENT_ID=your_github_id
VITE_GITHUB_REDIRECT_URI=http://localhost:5173/auth/github/callback
```



##  미리보기

(![preview.png](/public/images/preview.png))

---

##  라이선스

MIT

---
## 기여

버그 제보, PR 환영합니다!
패키지 이름은 oauth-btn, 레포는 [github-repo](https://github.com/JadenMeister/npm-oauth-btn)에서 확인



---ENGLISH---

# React OAuth Social Button

**A customizable collection of OAuth social login buttons**  
Supported platforms: GitHub / Google / Kakao / Naver  
Built with Tailwind CSS + customizable React components

> Developed using **VITE**

---

## 📦 Installation

```bash
npm install oauth-btn
```

or

```bash
yarn add oauth-btn
```

---

##  Usage

```jsx
import { KakaoBtn, GoogleBtn, NaverBtn, GithubBtn } from 'oauth-btn';

<KakaoBtn shape="rect" />
<GoogleBtn shape="circle" />
<NaverBtn shape="square" />
<GithubBtn shape="rect" />
```

---

##  Props

| Prop         | Type     | Default         | Description                                                 |
|--------------|----------|------------------|-------------------------------------------------------------|
| `shape`      | `string` | `'rect'`         | One of `'rect'`, `'circle'`, or `'square'`                  |
| `radius`     | `string` | —                | Tailwind border radius class (e.g. `rounded-md`)            |
| `bgColor`    | `string` | `'transparent'`  | Tailwind background color class                             |
| `textColor`  | `string` | `'text-white'`   | Tailwind text color class                                   |
| `fontSize`   | `string` | `'text-sm'`      | Tailwind font size class                                    |
| `onClick`    | `func`   | —                | Click event handler                                         |

---

## OAuth Flow

Clicking a button will redirect the user to the provider's auth page:

```
https://provider.com/oauth2/authorize?
  client_id=YOUR_CLIENT_ID&
  redirect_uri=YOUR_CALLBACK_URL&
  response_type=code&
  state=SOME_RANDOM_STRING
```

- The button **only redirects** to the provider.
- `state` is generated using `crypto.randomUUID()` to prevent CSRF attacks.

---

## 🔒 Security & Notes

- Ensure that `redirect_uri` is properly registered in your OAuth app settings.
- Verify the `state` parameter in your backend to prevent CSRF.
- Keep your `client_id` and `redirect_uri` in a `.env` file.
- Always add your `.env` to `.gitignore`.
- This package is strictly for **frontend UI use** — token handling must be done on the backend.

---

## 📁 .env Example

`.env.example`:

```env
VITE_KAKAO_CLIENT_ID=your_kakao_key
VITE_KAKAO_REDIRECT_URI=http://localhost:5173/auth/kakao/callback

VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_GOOGLE_REDIRECT_URI=http://localhost:5173/auth/google/callback

VITE_NAVER_CLIENT_ID=your_naver_id
VITE_NAVER_REDIRECT_URI=http://localhost:5173/auth/naver/callback

VITE_GITHUB_CLIENT_ID=your_github_id
VITE_GITHUB_REDIRECT_URI=http://localhost:5173/auth/github/callback
```

---

##  Preview

![preview.png](/public/images/preview.png)

---

##  License

MIT

---

## Contributing

Bug reports and pull requests are welcome!
The package name is oauth-btn, and the repository can be found here: [github-repo](https://github.com/JadenMeister/npm-oauth-btn)


