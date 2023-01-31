import './App.scss';

import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Posts from './components/Posts/Posts';

const App: React.FC = () => {
  const [page, setPage] = useState(false);

  const handlerOnChange = (): void => {
    setPage(!page);
  };

  return (
    <div className="App">
      <div className="main-page" onClick={handlerOnChange}>
        <p> <a href="#">Открыть новости</a></p>
      </div>
      {
        page
          ? (
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Posts />} />
              </Routes>
            </BrowserRouter>
          )
          : ''
      }

    </div>
  );
}
;

export default App;
