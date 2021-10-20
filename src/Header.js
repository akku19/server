import React from 'react'
import logo from './logos.png';
import twitter from './twitter.png';
import discord from './discord.svg';
const Header = () => {
    return (
        <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <a href="index.html" className="logo"><img src={logo}  alt="logo" /></a>
                <div className="h-main">
                  <a href="#" className="wallet-btn">Connect Wallet</a>
                    <div className="social">
                      <ul>
                        <li><a href="#"><img src={twitter}  alt="logo" /></a></li>
                        <li><a href="#"><img src={discord} alt="logo" /></a></li>
                      </ul>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Header
