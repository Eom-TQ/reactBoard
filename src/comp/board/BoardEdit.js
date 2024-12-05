import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { boardModify } from "../api/board";

export default function BoardEdit() {
    const location = useLocation();
    const navigate = useNavigate();


    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { state } = location;

    useEffect(() => {
        setTitle(state.board.title);
        setContent(state.board.content);
    }, [])

    function editBoard() {
        let obj = new Object();
        obj.boardId = state.boardIdx;
        obj.title = title;
        obj.content = content;
        obj.memberId = localStorage.getItem('userId');
        console.log(obj);
        boardModify(obj).then(res => {
            if (res.data.code === '200') {
                alert('수정되었습니다.');
                navigate('/BoardList');

            } else {
                alert('수정에 실패하였습니다.');
            }
        });
    }

    return (

        <div class="board-container">
            <h1 class="board-title">게시글 수정</h1>

            <div class="post-form">
                <div class="form-group">
                    <label for="title">제목</label>
                    <input type="text" id="title" name="title" class="form-input" placeholder="제목을 입력하세요" value={title} onChange={
                        (e) => {
                            setTitle(e.target.value);
                        }
                    } />
                </div>

                <div class="form-group">
                    <label for="content">내용</label>
                    <textarea id="content" name="content" class="form-textarea" placeholder="내용을 입력하세요" value={content} rows="10" onChange={
                        (e) => {
                            setContent(e.target.value);
                        }
                    }></textarea>
                </div>

                <div class="form-actions">
                    <button type="button" class="btn-submit" onClick={
                        editBoard
                    }>수정</button>
                    <button type="button" class="btn-cancel" onClick={() => navigate(-1)}>취소</button>
                </div>
            </div>
        </div>
    )
}