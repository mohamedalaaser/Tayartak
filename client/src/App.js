import { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import 'tachyons';
import Search from './routes/Search.js'
import Home from './routes/Home.js'
import AddFlight from './routes/AddFlight.js'
import NavBar from './Components/NavBar.js'


export default class App extends Component {


  render() {
    return (
      <div className="App">

        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/addflight" element={<AddFlight />} />
          {/* <Route path="/update" element={<Update />} /> */}
        </Routes>


      </div>
    );
  }
}

