
import React from 'react';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import HeaderLinks from './components/HeaderLinks';
import Navbar from './components/navbar';
import SForm from './components/SForm';
import LForm from './components/LForm';
import './components/css/style.css'
import Profile from "./pages/profile/profile"
import NewsFeed from "./pages/newsFeed"
import Home from "./pages/home"
import CreateNewEvent from './pages/createNewEvent';

import Events from "./pages/events"
import Sidebar from './pages/sidebar/Sidebar';


function App() {
    return (
        <>
            <div className="page-wrap">
            <Router>
            <header className="page-header">
                <div style={
                    {
                        fontFamily: 'sans-serif',
                        fontSize: '2rem',
                        color: '#dbe4ee',
                        fontWeight: 'Bolder',
                        textAlign: 'left',
                        margin: '1rem',
                        display: 'flex',
                        justifyContent: 'left',
                        top:'-25px', 
                        position: 'relative'
                    }
                }>
                    Socializr
                </div>
                <div style={{display:'flex', flexDirection: 'row', justifyContent: 'right', top:'-80px', position: 'relative', zIndex: '1'}}>
                    <HeaderLinks/>
                </div>
            </header>
            <nav style={{zIndex:2, backgroundColor: '#81a4cd'}}>
                <Navbar />
            </nav>
            
            <main className="page-main">                        
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/profile'  element={<Profile/>} />
                    <Route path='/newsFeed' element={<NewsFeed/>} />
                    <Route path='/events/createNewEvent' element={<CreateNewEvent/>} />
                    <Route path='/events' element={<Events/>} />
                    <Route path='/signup' element={<SForm/>} />
                    <Route path='/login' element={<LForm/>} />
                </Routes> 
            </main>
        
            <aside className="page-sidebar">
                <Sidebar/>
            </aside>
            <footer className="page-footer">
                Footer
            </footer>
            </Router>
            </div>            
        </>
    );
}

export default App;