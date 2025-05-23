import KakaoBtn from  './src/components/KakaoBtn.jsx';
import GoogleBtn from "./src/components/GoogleBtn.jsx";
import NaverBtn from "./src/components/NaverBtn.jsx";
import GithubBtn from "./src/components/GithubBtn.jsx";

function App() {
    return (
        <>

            <div style={{padding: '2rem'}}>
                <KakaoBtn shape="rect"/>
                <KakaoBtn shape="circle"/>
                <KakaoBtn shape="square" radius="rounded-md"/>
            </div>

            <div>
                <GoogleBtn shape="rect"/>
                <GoogleBtn shape="circle"/>
                <GoogleBtn shape="square"/>
            </div>

            <div>
                <NaverBtn shape="rect"/>
                <NaverBtn shape="circle"/>
                <NaverBtn shape="square"/>
            </div>

            <div>
                <GithubBtn shape="rect"/>
                <GithubBtn shape="circle"/>
                <GithubBtn shape="square"/>
            </div>

        </>

    );
}

export default App;