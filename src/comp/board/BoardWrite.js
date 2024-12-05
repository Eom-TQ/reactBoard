import { useState } from "react"
import { boardRegist } from "../api/board";
import { useNavigate } from "react-router-dom";

export default function BoardWrite() {

    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    localStorage.getItem('userId');

    function sendBoard() {
        if (title === '' || content === '') {
            alert('제목과 내용을 모두 입력해주세요')
        } else {
            let obj = new Object();
            obj.title = title;
            obj.content = content;
            obj.memberId = localStorage.getItem('userId');
            boardRegist(obj).then(res => {
                if (res.data.code === '200') {
                    navigate('/BoardList');
                } else {
                    alert('게시글 등록에 실패 했습니다.');
                }
            }

            );


        }
    }

    return (

        <div class="board-container">
            <h1 class="board-title">게시글 작성</h1>

            <div class="post-form">
                <div class="form-group">
                    <label for="title">제목</label>
                    <input type="text" id="title" name="title" class="form-input" placeholder="제목을 입력하세요" onChange={
                        (e) => {
                            setTitle(e.target.value);
                        }
                    } />
                </div>

                <div class="form-group">
                    <label for="content">내용</label>
                    <textarea id="content" name="content" class="form-textarea" placeholder="내용을 입력하세요" rows="10" onChange={
                        (e) => {
                            setContent(e.target.value);
                        }
                    }></textarea>
                </div>

                <div class="form-actions">
                    <button type="button" class="btn-submit" onClick={
                        sendBoard
                    }>작성</button>
                    <button type="button" class="btn-cancel" onClick={() => navigate(-1)}>취소</button>
                </div>
            </div>
        </div>

    )
}