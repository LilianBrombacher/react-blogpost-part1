import './App.css'
import {Route, Routes, useNavigate} from 'react-router-dom';
import logoMedium from './assets/logo-medium.png'
import Home from './pages/home/Home.jsx'
import AllePosts from './pages/posts/AllePosts.jsx'
import Errorpage from './pages/errorpage/errorpage.jsx'
import BlogPostDetail from "./pages/posts/BlogPostDetail.jsx";
import NieuwePost from "./pages/newblog/NieuwePost.jsx";
import Navigation from "./components/navigation/Navigation.jsx";



function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/alleposts' element={<AllePosts />}/>
                <Route path='/nieuwePost' element={<NieuwePost />}/>
                <Route path='*' element={<Errorpage />}/>
                <Route path= '/alleposts/:postId' element={<BlogPostDetail />} />
                <Route path= '/alleposts/:postId' element={<AllePosts />} />
            </Routes>

        </>

    )
}

export default App
