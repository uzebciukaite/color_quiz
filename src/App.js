import './App.css';
import {React, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';


function App() {


  return (

<div className="App"> 
<BrowserRouter>

<Routes>
 <Route path="/color_quiz" element={<HomePage />}/>
 <Route path="/quiz" element={<QuizPage/>}/>
</Routes>

</BrowserRouter>

</div>


    
  );
}

export default App;