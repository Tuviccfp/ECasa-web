import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import App from "./App";
import CategoriesID from "./components/CategoriesID";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< App/>}/>
                <Route path="/categories/:id" element={< CategoriesID />}/>
            </Routes>
        </BrowserRouter>
    )
}