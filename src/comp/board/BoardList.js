import { useEffect, useState } from "react"
import { boardList } from "../api/board";
import BoardListArea from "./BoardListArea";

export default function BoardList() {

    const [boards, setBoards] = useState([]);
    const [keyword, setKeyword] = useState();
    const [searchType, setSearchType] = useState('1');

    function startBoard(param) {
        boardList(param).then(res => {
            if (res.data.code === '200') {
                setBoards(res.data.data);
            }
        })
    }

    useEffect(() => {
        startBoard();
    }, [])

    function searchBtn() {
        let param = new Object();
        if (searchType === '1') {
            param.keyword = keyword;
        } else if (searchType === '2') {
            param.created = keyword;
        }
        console.log(param);
        startBoard(param);


    }
    return (

        <div class="board-container">
            <h1 class="board-title">게시판 리스트</h1>

            <div class="search-bar">
                <select class="search-category" onChange={e => { setSearchType(e.target.value) }}>
                    <option value="1">제목</option>
                    <option value="2">작성자</option>
                </select>
                <input type="text" class="search-input" placeholder="검색어를 입력하세요" onChange={e => { setKeyword(e.target.value) }}></input>
                <button class="search-button" onClick={searchBtn}>검색</button>
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