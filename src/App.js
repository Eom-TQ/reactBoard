import logo from './logo.svg';
import './App.css';
import './Board.css';
import { BrowserRouter, Link, Route, Routes, useSearchParams } from 'react-router-dom';

import BoardList from './comp/board/BoardList'
import BoardWrite from './comp/board/BoardWrite';
import { useEffect, useState } from 'react';

function App() {

  const [userId, setUserId] = useState();

  useEffect(() => {
    localStorage.setItem('userId', 'hong');
    setUserId(localStorage.getItem('userId'));
  })

  return (
    <div className="App">
      <BrowserRouter>
        <BoardHome />
        <Routes>
          <Route path={"/BoardList"} element={<BoardList />} />
          <Route path={"/BoardWrite"} element={<BoardWrite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


function BoardHome() {

  const [userId, setUserId] = useState();

  useEffect(() => {
    localStorage.setItem('userId', 'hong');
    setUserId(localStorage.getItem('userId'));
  })

  return (


    <div style={{ border: '2px blue solid' }}>
      <Link to="/BoardList">게시글 목록</Link> &nbsp;&nbsp;
      <Link to="/boardWrite">게시글 작성</Link> &nbsp;&nbsp;
      <Link to="/">게시글 목록</Link> &nbsp;&nbsp;
      <Link to="/">게시글 목록</Link> &nbsp;&nbsp;

      어서오세요 {userId}님
    </div>
  )
}


export default App;
