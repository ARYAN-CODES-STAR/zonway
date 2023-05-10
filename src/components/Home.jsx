import React from 'react';
import vg from "../assets/2.webp"
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle, 
  AiFillYoutube,
  AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className="home">
      <main>
        <h1>Zonway</h1>
        <p>We are the future</p>
      </main>
    </div>
    <div className="home2">
      <img src={vg} alt="Graphic" />
      <div>
          <p>In the fast-paced and rapidly evolving world of technology, having a reliable support system in place can be crucial to the success of a business or an individual. By offering their services as bug solvers and technical problem solvers, the person or organization is showing that they understand the importance of providing timely and effective technical support to their customers.</p>
      </div>
    </div>

    <div className="home3" id="about">
      <div>
        <h1>Who we are?</h1>
        <p>we are here to solve your tech-related issues, we are solvers of bug and any technical deformity</p>
      </div>
    </div>
    
    <div className="home4" id="brands">
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{
            animationDelay:"0.3s",
          }}>
          <AiFillGoogleCircle />
          <p>Google</p>
           </div>
           <div style={{
            animationDelay:"0.5s",
          }}>
          <AiFillAmazonCircle />
          <p>Amazon</p>
           </div>
           <div style={{
            animationDelay:"0.7s",
          }}>
          <AiFillYoutube />
          <p>YouTube</p>
           </div>
           <div style={{
            animationDelay:"1s",
          }}>
          <AiFillInstagram />
          <p>Instagram</p>
           </div>
        </article>
      </div>
    </div>

    </>

  );
};

export default Home;