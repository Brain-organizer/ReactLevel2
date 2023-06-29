import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SubPage from "../pages/SubPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/:id" element={<SubPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;