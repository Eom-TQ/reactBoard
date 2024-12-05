import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { boardFind, boardGood, boardRemove } from "../api/board";

export default function BoardDetail() {
    const location = useLocation();
    const navigate = useNavigate();

    const { state } = location;
    const [board, setBoard] = useState('');

    useEffect(() => {
        let obj = new Object();
        obj.boardId = state.boardIdx;
        boardFind(obj).then(res => {
            if (res.data.code === '200') {
                setBoard(res.data.data);
            } else {
                alert('게시글을 불러오는데 실패했습니다.');
                navigate('/BoardList');
            }

        }

        );
    }, [])

    function goodUp() {
        let obj = new Object();
        obj.boardId = state.boardIdx;
        boardGood(obj).then(res => {
            if (res.data.code === '200') {
                setBoard({ ...board, boardGood: board.boardGood + 1 });
            }
        });
    }

    return (
        <body>
            <div class="board-container">
                <h1 class="board-title">게시글 상세</h1>
                <div class="post-detail">
                    <div class="post-header">
                        <h2 class="post-title">{board.title}</h2>
                        <div class="post-meta">
                            <span class="post-author">작성자: {board.memberId}</span>
                            <span class="post-date">작성일: {board.createdAt}</span>
                            <span class="post-date">좋아요: {board.boardGood}</span>
                            <button class="btn-good" onClick={goodUp}>👍</button>
                        </div>
                    </div>
                    <div class="post-content">
                        <p> {board.content}</p>
                    </div>
                    <div class="post-actions">
                        <MyBoard board={board}></MyBoard>

                        <button class="btn-back" onClick={() => {
                            navigate('/BoardList')
                        }}>목록으로</button>
                    </div>
                </div>
            </div>
        </body >
    )
}

function MyBoard(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const { state } = location;

    function boardDelete() {
        let obj = new Object();
        obj.boardId = state.boardIdx;
        boardRemove(obj);
        alert('삭제 되었습니다.');
        navigate('/BoardList');
    }


    if (props.board.memberId === localStorage.getItem('userId')) {
        return (<div>
            <button class="btn-edit" onClick={() => {
                navigate('/BoardEdit', { state: { board: props.board, boardIdx: state.boardIdx } });
            }}>수정</button>&nbsp;&nbsp;
            <button class="btn-delete" onClick={
                () => {
                    const deleteBoard = window.confirm('게시글을 삭제하시겠습니까?');
                    if (deleteBoard) {
                        boardDelete();
                    } else {

                    }
                }
            }>삭제</button>

        </div>
        )
    }
}