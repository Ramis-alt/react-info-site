//import logo from './logo.svg';
//import './App.css';
import './index.css'
import React from "react"
import Navbar from "./components/Navbar"
import MainContent from './components/MainContent';


export default function App() {
    return (
        <div className="container">
            <Navbar />
            <MainContent />
        </div>
    )
}


