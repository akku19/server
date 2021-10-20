import React from 'react'
import image from './img/traits-img.jpg'
const Traits = () => {
    return (
      <>
  <div className="traits-sec">
    <div className="container">
      <div className="row">
      <div className="col-lg-6 order-last">
      <div className="traits-img">
      <img src={image} alt="" />
          </div>
          </div>
          <div className="col-lg-6">
          <div className="traits-info">
          <h1>Traits</h1>
		   <p>There are 200+ traits, a table showing each trait and its rarity % will be released after mint. 
               (Trait rarity table/info coming soon).</p>
		    <a href="#" className="wallet-btn">Connect Wallet</a>
          </div>
          </div>
          </div>
     </div>
  </div>
    </>						
    )
}

export default Traits
