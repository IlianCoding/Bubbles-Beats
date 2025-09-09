import './App.css'
import {StrictMode} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage.tsx";
import {LandingPage} from "./pages/LandingPage.tsx";

export default function App() {
    return (
        <StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage/>}/>
                    <Route path="/landing" element={<LandingPage/>}/>
                    {/*<Route path="/register" element={<WeighinPage/>}></Route>*/}
                    {/*<Route path="/tatami" element={<TatamiPage/>}></Route>*/}
                </Routes>
            </BrowserRouter>
        </StrictMode>
    )
}