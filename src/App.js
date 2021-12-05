import React, { Component } from 'react'
import {Route,Routes} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <Header/>
        </div>
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* <a className="list-group-item" href="./about.html">About</a> */}
            {/* <a className="list-group-item active" href="./home.html">Home</a> */}
            {/* <NavLink className="list-group-item" to="/about">About</NavLink>
            <NavLink className="list-group-item" to="/">Home</NavLink> */}
            <MyNavLink to="/">Home</MyNavLink>
            <MyNavLink to="/about">About</MyNavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* <h3>我是Home的内容</h3> */}
              <Routes>
                <Route path='/about' element={<About/>}/>
                <Route  path='/' element={<Home/>}/>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    
      // <div className="list-group">
      //   {/* <a className="list-group-item" href="./about.html">About</a>
      //   <a className="list-group-item active" href="./home.html">Home</a> */}
      //   <Link to="/about">About</Link>
      //   <Link to="/home">Home</Link>

      //   <Route path='/about' component={About}/>
      //   <Route  path='/home' component={Home}/>
      // </div>
    )
  }
}
