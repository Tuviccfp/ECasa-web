import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import CategoriesID from "./components/CategoriesID";
import SubCategoryID from "./components/SubCategory";
import ProductComplete from "./components/ProductComplete";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< App/>}/>
                <Route path="/categories/:id" element={< CategoriesID />} />
                <Route path="/category/get-sub-categorys/:id" element={< SubCategoryID />} />
                <Route path="/products/:id" element={<ProductComplete />} />
            </Routes>
        </BrowserRouter>
    )
}