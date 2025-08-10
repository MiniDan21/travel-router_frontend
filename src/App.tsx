import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Welcome from './pages/Welcome'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import NotFoundPage from './pages/NotFoundPage'
import './App.css'


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />}/>
                <Route path="/signin" element={<SignIn />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
  )
}

export default App
