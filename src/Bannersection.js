import React from 'react'
import banner from './solpups-banner.gif'
const Bannersection = () => {
    return (
        <section className="banner-sec">
				  <div className="container">
					<div className="row">
					  <div className="col-lg-6">
					    <div className="banner-img">
						  <img src={banner} alt="" />
						</div>
					  </div>
					  <div className="col-lg-6">
						<div className="banner-text">
						  <h1>SolPups</h1>
						    <h6>10,000 unique SolPups who need owners!</h6>
							  <p>This is a collection of 10,000 generative SolPups with over 200 unique traits. SolPups provide utility, royalties, exclusive deals, and airdrops!</p>
							<ul>
							  <li>Royalties Paid In Sol To Original Minters FOREVER</li>
							  <li>Airdrops, Exclusive Sales, and Prize Giveaways!</li>
							  <li>Buy Backs By The Team & More On The Roadmap</li>
							</ul>
					       <div className="mint-solpup-main">
						     <h3>MINT SolPups Soon!</h3>
							   <p>10,000 remaining / 0.5 Sol per SolPup</p>
							     <div className="min-qty-main">
								   <div className="control">
									 <button className="bttn bttn-left" id="minus"><i className="fa fa-minus" aria-hidden="true"></i></button>
									   <input type="number" className="input" id="input" />
									 <button className="bttn bttn-right" id="plus"><i className="fa fa-plus" aria-hidden="true"></i></button>
								   </div>
									 <a className="mint-now-btn" href="#">Pre-Sale: 10/8/21</a>
									 <br/>
									 <a className="mint-now-btn-full" href="https://discord.gg/G39ha3V9Xf">Join Our Discord!</a>
								   <div className="clear"></div>
								 </div>
						   </div>
						</div>
					  </div>
					</div>
				  </div>
				</section>
    )
}

export default Bannersection
