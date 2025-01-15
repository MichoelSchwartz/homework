import './App.css';
import Header from './Header';
import Users from './Users';
import Posts from './Posts';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Outlet />
            </>
          }>
            <Route index element={<Users />} />
            <Route path="/posts/:name/:id" element={<Posts />} />
            <Route path="*" element={<div>Error - 404</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
