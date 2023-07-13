import { useContext } from "react"
import { DataContext } from "../../Context/DataContextProvider"
import { Navbar } from "../Nav/Navbar"
import "./home.css"
import { MeetupCard } from "../MeetupCard.jsx/MeetupCard"
export const Home = () =>{
    const {} = useContext(DataContext)
    return(
        <div className="home-container">
        <Navbar/>
        <hr/>
            <MeetupCard/>
        </div>
    )
}