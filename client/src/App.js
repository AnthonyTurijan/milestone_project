import React from 'react';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Navbar from './components/navbar';
import './components/css/style.css'
import Profile from "./pages/profile"
import NewsFeed from "./pages/newsFeed"
import Home from "./pages/home"

import CreateNewEvent from './pages/createNewEvent';

import Events from "./pages/events"


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
                    <Dashboard/>
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

                    <Route path='/createNewEvent' element={<CreateNewEvent/>} />
                    <Route path='/events' element={<Events/>} />

                </Routes> 
            </main>
        
            <aside className="page-sidebar">
                Aside
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