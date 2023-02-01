import './App.scss';

import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PostPage from './components/PostPage/PostPage';
import Posts from './components/Posts/Posts';

const App: React.FC = () => {
  const [page, setPage] = useState(false);

  const handlerOnChange = (): void => {
    setPage(!page);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Posts />,
    },
    {
      path: '/:postID',
      element: <PostPage />,
    },
  ]);

  return (
    <div className="App">
      <div className="main-page" onClick={handlerOnChange}>
        <p> Открыть новости</p>
      </div>
      {
        page
          ? (
            <RouterProvider router={router} />
          )
          : ''
      }
    </div>
  );
}
;

export default App;
