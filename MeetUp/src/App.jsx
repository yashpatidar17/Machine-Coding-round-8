import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/Home/Home'
import { MeetupPage } from './Pages/MeetupPage/MeetupPage'

function App() {


  return (
   <div>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/meetup/:ID" element={<MeetupPage/>}/>
      </Routes>
   </div>
  )
}

export default App
