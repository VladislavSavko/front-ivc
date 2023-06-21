import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../home"
import UserCard from "../user/user-card"

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<UserCard />} path='/user/:id' />


            <Route path="*" element={<div>Error!</div>} />
        </Routes>
    </BrowserRouter>
}


export default Router