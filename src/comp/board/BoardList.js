import { useEffect, useState } from "react"
import { boardList } from "../api/board";
import BoardListArea from "./BoardListArea";

export default function BoardList() {

    const [boards, setBoards] = useState([]);

    function startBoard() {
        boardList().then(res => {
            console.log(res);
            if (res.data.code === '200') {
                setBoards(res.data.data);
            }
        })
    }

    useEffect(() => {
        startBoard();
    }, [])

    return (

        <div class="board-container">
            <h1 class="board-title">게시판 리스트</h1>

            <div class="search-bar">
                <select class="search-category">
                    <option value="title">제목</option>
                    <option value="author">작성자</option>
                </select>
                <input type="text" class="search-input" placeholder="검색어를 입력하세요"></input>
                <button class="search-button">검색</button>
            </div>

            <table class="board-table">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th>좋아요</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        boards.map((item, index) => (
                            <BoardListArea item={item} index={index}></BoardListArea>

                        ))
                    }

                </tbody>
            </table>
        </div>

    )
}