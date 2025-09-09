import './App.css'
import {StrictMode} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage.tsx";
import {LandingPage} from "./pages/LandingPage.tsx";
import {RegistrationPage} from "./pages/RegistrationPage.tsx";
import {SongPage} from "./pages/SongPage.tsx";
import {InfoPage} from "./pages/InfoPage.tsx";

export default function App() {
    return (
        <StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage/>}/>
                    <Route path="/landing" element={<LandingPage/>}/>
                    <Route path="/registration" element={<RegistrationPage/>}></Route>
                    <Route path="/songs" element={<SongPage/>}></Route>
                    <Route path="/info" element={<InfoPage/>}></Route>
                </Routes>
            </BrowserRouter>
        </StrictMode>
    )
}