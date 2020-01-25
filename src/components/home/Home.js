import React from 'react';
import './home.css'
import SignIn from '../signIn/SignIn';
import SignUp from '../signup/SignUp';

const Home = () => {
  return (
    <div className="home">
      <div className="signin signup">       
        {/* <SignIn/> */}
        <SignUp/>
      </div>

      <div className="layer">
        <h1 id="title">Artisanship</h1>
        <p id="buy-online">Buy handicraft online</p>
      </div>
    </div>
  );
}
 
export default Home;