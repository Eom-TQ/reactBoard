import { useState } from "react";
import { memberIdCheck, memberRegist } from "../api/member";
import { useNavigate } from "react-router-dom";

export default function Join() {

    const navigate = useNavigate();

    const [userIdChk, setUserIdChk] = useState(false);

    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');

    function idCheck() {
        let obj = new Object();
        obj.userId = userId;

        memberIdCheck(obj).then(res => {
            if (res.data.data === 'Y') {
                alert('사용가능한 아이디입니다.');
                setUserIdChk(true);
            } else {
                alert('이미 사용중인 아이디입니다.');
            }
        });
    }

    function joinAction() {
        if (userIdChk) {
            if (userPw === '' || userName === '' || userEmail === '') {
                alert('모든 항목을 입력해 주세요');
            } else {
                let obj = new Object();
                obj.userId = userId;
                obj.userPw = userPw;
                obj.userName = userName;
                obj.email = userEmail;
                memberRegist(obj).then(res => {
                    console.log(res);
                    if (res.data.code === '200') {
                        alert('가입되었습니다.');
                        navigate('/');
                    }
                });
            }
        } else {
            alert('아이디 확인을 해주시기 바랍니다.')
        }
    }

    return (
        <body>
            <div class="signup-container">
                <h1 class="signup-title">회원가입</h1>
                <form class="signup-form" id="signupForm">
                    <div class="form-group">
                        <label for="username">아이디</label>
                        <div class="input-group">
                            <input type="text" id="username" class="form-input" placeholder="아이디를 입력하세요" onChange={e => { setUserId(e.target.value); setUserIdChk(false); }} />
                            <button type="button" class="btn-check" id="checkUsername" onClick={idCheck}>아이디 확인</button>
                        </div>
                        <small id="usernameFeedback" class="feedback"></small>
                    </div>
                    <div class="form-group">
                        <label for="password">비밀번호</label>
                        <input type="password" id="password" class="form-input" placeholder="비밀번호를 입력하세요" onChange={e => { setUserPw(e.target.value) }} />
                    </div>
                    <div class="form-group">
                        <label for="name">이름</label>
                        <input type="text" id="name" class="form-input" placeholder="이름을 입력하세요" onChange={e => { setUserName(e.target.value) }} />
                    </div>
                    <div class="form-group">
                        <label for="email">이메일</label>
                        <input type="email" id="email" class="form-input" placeholder="이메일을 입력하세요" onChange={e => { setUserEmail(e.target.value) }} />
                    </div>
                    <button type="button" class="btn-submit" id="signupButton" onClick={joinAction}>회원가입</button>
                </form>
            </div>
        </body>
    )
}