import logo from './logo.svg';
import './App.css';
import './Board.css';
import { BrowserRouter, Link, Route, Routes, useSearchParams } from 'react-router-dom';

import BoardList from './comp/board/BoardList'
import BoardWrite from './comp/board/BoardWrite';
import { useEffect, useState } from 'react';
import BoardDetail from './comp/board/BoardDetail';
import BoardEdit from './comp/board/BoardEdit';
import Logout from './comp/user/Logout';
import Login from './comp/user/Login';
import Join from './comp/user/Join';

function App() {

  const [userId, setUserId] = useState();

  useEffect(() => {
    loadUserId();
  }, []);

  function loadUserId() {
    setUserId(localStorage.getItem('userId'));
  }

  return (
    <div className="App">
      <BrowserRouter>
        <BoardHome userId={userId} />
        <Routes>
          <Route path={"/BoardList"} element={<BoardList />} />
          <Route path={"/BoardWrite"} element={<BoardWrite />} />
          <Route path={"/BoardDetail"} element={<BoardDetail />} />
          <Route path={"/BoardEdit"} element={<BoardEdit />} />
          <Route path={"/Login"} element={<Login onPar={obj => loadUserId()} />} />
          <Route path={"/Logout"} element={<Logout onPar={obj => setUserId('')} />} />
          <Route path={"/Join"} element={<Join />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}


function BoardHome(props) {

  return (
    <div className='header'>
      <Link to="/BoardList">게시글 목록</Link> &nbsp;&nbsp;
      <Link to="/boardWrite">게시글 작성</Link> &nbsp;&nbsp;

      <UserStatus userId={props.userId}></UserStatus>
    </div>
  )
}

function UserStatus(props) {

  if (props.userId) {
    return (
      <div className='header'>
        어서오세요 {props.userId}님 &nbsp;&nbsp;  <Link to="/logout">로그아웃</Link>
      </div>
    )
  } else {
    return (
      <div className='header'>
        <Link to="/Login">로그인</Link> &nbsp;

      </div >
    )
  }
}


export default App;
