import './App.css'
import logo from './assets/logo-white.png'
import posts from './constants/data.json'
import Home from './pages/home/Home.jsx'
import AllePosts from './pages/posts/AllePosts.jsx'
import Navigation from './components/navigation/Navigation.jsx'
import Errorpage from './pages/errorpage/errorpage.jsx'
import { Routes, Route } from 'react-router-dom'
import BlogPostDetail from "./pages/posts/BlogPostDetail.jsx";
import NieuwePost from "./pages/newblog/NieuwePost.jsx";



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
            </Routes>

        {/*<div className="page-container">*/}
        {/*    <img src={logo} alt="Company logo"/>*/}
        {/*    <h1>Begin hier met het maken van jouw blog-applicatie!</h1>*/}
        {/*</div>*/}
        </>

    )
}

export default App
