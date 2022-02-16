import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Waterfall from "./pages/Waterfall"
import "./app.css"

const App = () => {

    const [ user, setUser ] = useState(null)

    useEffect(() => {

        const getUser = () => {
            fetch("http://localhost:5000/auth/login/success", {
                method: "GET",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": true
                }
            }).then(response => {
                if(response.status === 200) return response.json()
                throw new Error("Ocorreu um erro ao fazer login!")
            }).then(responseObject => {
                setUser(responseObject.user)
            }).catch(error => {
                console.log(error)
            })
        }

        getUser()

    }, [])

    return (
        <BrowserRouter>
            <div>
                <Navbar user={user}/>
                <Routes>

                    <Route
                        path="/"
                        element={<Home/>}
                    />

                    <Route
                        path="/login"
                        element={user ? <Navigate to="/" /> : <Login/>}
                    />

                    <Route
                        path="/waterfall/:id"
                        element={user ? <Waterfall/> : <Navigate to="/login" />}
                    />
                    
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App