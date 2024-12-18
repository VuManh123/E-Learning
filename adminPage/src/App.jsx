
import { Route, Routes } from 'react-router-dom';
import ContentAddPage from '../pages/ContentAddPage.jsx';
import ContentPage from '../pages/ContentPage.jsx';
import HomePage from '../pages/HomePage';
import UserPage from '../pages/UserPage.jsx';
import VideoAddPage from '../pages/VideoAddPage.jsx';
import './App.css';
import LoginPage from '../pages/LoginPage.jsx'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='content' element={<ContentPage/>}></Route>
        <Route path='userm' element={<UserPage/>}></Route>
        <Route path='addc' element={<ContentAddPage/>}></Route>
        <Route path='addv' element={<VideoAddPage/>}></Route>
        <Route path='login' element={<LoginPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
