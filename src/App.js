import { Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import './App.css';
import Main from './Main';
import Login from './Login';
import axios from 'axios';

function App() {
  const data = {
    id: 'test',
    pw: '123',
  };
  const url = 'http://localhost:8080/test';
  const submit = async () => {
    const result = await axios.post(url, data);

    console.log(result);
  };

  return (
    <div>
      <button
        onClick={() => {
          submit();
        }}
      >
        버튼
      </button>
      {/* <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes> */}
    </div>
  );
}

export default App;
