import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from "react";
import { useContext } from "react";
import { themes, ThemeContext } from "./theme-context"
// COMPS
import About from './Comps/root-pages/About';
import NotFound from './Comps/root-pages/NotFound';
import Products from './Comps/root-pages/Products';
import Stories from './Comps/root-pages/Stories';
import Artists from './Comps/root-pages/Artists';
import Content from './Comps/root-pages/Content';

function App() {
  const theme = useContext(ThemeContext)
  const [themeb, setTheme] = useState(themes.light)
  const handler = () => {
    setTheme((prevTheme)=> prevTheme === themes.light? themes.dark: themes.light)
  } 

  return (
      <ThemeContext.Provider value = {theme}>      
      <div className='container' style={{background: themeb.background, color: themeb.color}}>
        <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Content themeb={themeb} handler={handler}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/stories' element={<Stories/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/artists' element={<Artists/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </Router>      
        </div>
      </div>
      </ThemeContext.Provider>




  );
}

// export const handler = () => {
//   setTheme((prevTheme)=> prevTheme === themes.light? themes.dark: themes.light)
// } 

export default App;
