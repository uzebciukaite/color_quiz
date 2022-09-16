import {React} from 'react'
import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const nav = useNavigate()


  return (
    <div className="startquiz">
        <h2>How well do you know color names? </h2>
        <h3>Click START QUIZ and find out</h3>
        

        <button onClick={() => nav("/quiz")}>START QUIZ</button>
        
         </div>
  )
}

export default HomePage