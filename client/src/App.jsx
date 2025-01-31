 //import React from 'react'
 
 import Auth from "./pages/auth"
 import Profile from "./pages/profile"
 import Chat from "./pages/chat"
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
 
 const App = () => {
   return (
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth></Auth>}/>
          <Route path="/chat" element={<Chat></Chat>}/>
          <Route path="/profile" element={<Profile></Profile>}/>
          <Route path="*" element={<Navigate to="/auth"></Navigate>}/>
        </Routes>
      </BrowserRouter>
   )
 }
 
 export default App