import React from 'react';
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./main";
import Infos from './animeInfos';

function App(){

  return(
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={ <Main goToPage={1}/>}/>
          <Route path="/infos" element={ <Infos/>}/>
        </Routes>
      </Fragment>
    </Router>
  )


}

export default App;