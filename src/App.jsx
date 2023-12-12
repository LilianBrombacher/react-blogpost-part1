import './App.css'
import logo from './assets/logo-white.png'
import Home from './pages/home/Home.jsx'
import Blogs from './pages/blogs/Blogs.jsx'
import Newblog from './pages/newblog/Newblog.jsx'
import Navigation from './components/navigation/Navigation.jsx'
import Errorpage from './pages/errorpage/errorpage.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/blogs' element={<Blogs />}/>
                <Route path='/newblog' element={<Newblog />}/>
                <Route path='*' element={<Errorpage />}/>
            </Routes>

        {/*<div className="page-container">*/}
        {/*    <img src={logo} alt="Company logo"/>*/}
        {/*    <h1>Begin hier met het maken van jouw blog-applicatie!</h1>*/}
        {/*</div>*/}
        </>

    )
}

export default App
