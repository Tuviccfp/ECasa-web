import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import CategoriesID from "./components/CategoriesID";
import SubCategoryID from "./components/SubCategory";
import ProductComplete from "./components/ProductComplete";
import LoginAdm from "./components/Logins/AdmAndEmp";
import Profile from '../src/components/Profile/Admin';
import { useState } from "react";
import ListCategories from "./components/Profile/Admin/ListCategories";
import NewCategorie from "./components/Profile/Admin/NewCategorie";
import NewSubCategorie from "./components/Profile/Admin/ListCategories/NewSubCategorie";
import NewProduct from "./components/Profile/Admin/NewProduct";
import NewDataSheet from "./components/Profile/Admin/NewDataSheet";
import EmployeeCRUD from "./components/Profile/Admin/EmployeeCRUD";
import EditEmploy from "./components/Profile/Admin/EmployeeCRUD/EditEmploy";
import CreateEmploy from "./components/Profile/Admin/EmployeeCRUD/CreateEmploy";
import ListAdmins from "./components/Profile/Admin/ListAdmins";
import LoginEmployee from "./components/Logins/Employee";
import ProfileEmployee from "./components/Profile/Employee";

export default function Router() {
    const [token, setToken] = useState('')
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< App/>}/>
                <Route path="/categories/:id" element={< CategoriesID />} />
                <Route path="/category/get-sub-categorys/:id" element={< SubCategoryID />} />
                <Route path="/products/:id" element={<ProductComplete />} />

                {/* Login and Routers admin*/}
                <Route path="/login-admin" element={<LoginAdm setToken={setToken}/>} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/list-categories-admin" element={<ListCategories />} />
                <Route path="/save-new-categorie-admin" element={<NewCategorie />}/>
                <Route path="/save-new-subcategorie-admin" element={<NewSubCategorie />} />
                <Route path="/save-new-product-admin" element={<NewProduct />}/>
                <Route path="/save-new-datasheet-admin" element={< NewDataSheet />} />
                <Route path="/acess-employee" element={< EmployeeCRUD />} />
                <Route path="/edit-employee/:id" element={<EditEmploy />} />
                <Route path="/create-user-func" element={<CreateEmploy />} />
                <Route path="/list-admins" element={<ListAdmins />} />

                {/* Login and Routers Employee */}
                <Route path="/login-employees" element={<LoginEmployee setToken={setToken}/>}/>
                <Route path="/profile-employees" element={<ProfileEmployee/>}/>
            </Routes>
        </BrowserRouter>
    )
}