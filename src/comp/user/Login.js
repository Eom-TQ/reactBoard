import { useState } from "react"
import { memberLogin } from "../api/member";
import { useNavigate } from "react-router-dom";

export default function Login(props) {

    const navigate = useNavigate();

    const [inpId, setInpId] = useState();
    const [inpPw, setInpPw] = useState();

    function pressLoginBtn() {
        let obj = new Object();
        obj.userId = inpId;
        obj.userPw = inpPw;

        memberLogin(obj).then(res => {
            console.log(res);
            if (res.data.data === 'Y') {
                localStorage.setItem('userId', obj.userId);
                alert('로그인 되었습니다.');
                props.onPar();
                navigate('/');
            } else {
                alert('아이디 및 비밀번호를 확인해주세요');
            }
        });
    }

    return (
        <div class="login-container">
            <h2 class="login-title">로그인</h2>
            <form class="login-form">
                <div class="form-group">
                    <label for="username">아이디</label>
                    <input type="text" id="username" class="form-input" placeholder="아이디를 입력하세요" onChange={(e) => { setInpId(e.target.value) }} />
                </div>
                <div class="form-group">
                    <label for="password">비밀번호</label>
                    <input type="password" id="password" class="form-input" placeholder="비밀번호를 입력하세요" onChange={(e) => { setInpPw(e.target.value) }} />
                </div>
                <button type="button" class="btn-login" onClick={pressLoginBtn}>로그인</button>
            </form>
            <div class="signup-link">
                <a onClick={() => { navigate('/Join') }}>회원가입</a>
            </div>

        </div >
    )
}