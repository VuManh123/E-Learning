
import { Route, Routes } from 'react-router-dom';
import ContentAddPage from '../pages/ContentAddPage.jsx';
import ContentPage from '../pages/ContentPage.jsx';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage.jsx';
import UserPage from '../pages/UserPage.jsx';
import VideoAddPage from '../pages/VideoAddPage.jsx';
import WordAddPage from '../pages/WordAddPage.jsx';
import './App.css';
function App() {
  return (
    <>
      <Routes>
        <Route path='/homepage' element={<HomePage/>}></Route>
        <Route path='/content' element={<ContentPage/>}></Route>
        <Route path='/userm' element={<UserPage/>}></Route>
        <Route path='/addc' element={<ContentAddPage/>}></Route>
        <Route path='/addv' element={<VideoAddPage/>}></Route>
        <Route path='/' element={<LoginPage/>}></Route>
        <Route path='/addw' element={<WordAddPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
