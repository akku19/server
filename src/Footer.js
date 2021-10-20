import React from 'react'
import twitter from './twitter.png';
import discord from './discord.svg';
const Footer = () => {
    return (
        <div>
            <div class="footer">
                    <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <ul class="f-social">
                            <li><a href="https://twitter.com/SolPups"><img src={twitter} alt=""/></a></li>
                            <li><a href="https://discord.gg/G39ha3V9Xf"><img src={discord} alt=""/></a></li>
                            
                            </ul>
                        <p>&copy; 2021 SolPups. All rights reserved.</p>
                        
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    )
}

export default Footer
