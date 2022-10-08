import React from 'react';
import Card from './Card'
import Cart from './Cart'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function MainBody() {
  let init=[];
  sessionStorage.setItem("cart",JSON.stringify(init));
    return (
      <div>
        <Router>
          <Routes>
            <Route exact path='/' element={<Card/>}/>
            <Route exact path='/cart' element={<Cart/>}/>
            <Route path='*' element={<div>Nothing to show here, redirect to home page</div>}/>
          </Routes>
        </Router>
      </div>
    )
}

export default MainBody