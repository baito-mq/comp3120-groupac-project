import React from 'react'
import { useState } from 'react'
import './App.css';
// import logo from './frog.png';
import Nav from './components/Nav.js';
import Posts from './components/Posts';

function App() {
  const [posts, setPosts] = useState([
    {id:1, userId:3, upvotes:14, content:'Enhanced multi-state flexibility',
    first_name:"wendolyn", 
    last_name:"Fluck", 
    email:"gfluck0@booking.com",
    username:"gfluck0",
    avatar:"https://robohash.org/sedaliquamnostrum.png?size=50x50&set=set1"
  
  }])


  return (
    <div className="App">
      <Nav />
      <Posts posts={posts} />
      <header className="App-header">
      </header>
      
    </div>
  );
}

export default App;
