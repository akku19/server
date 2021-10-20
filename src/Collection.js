import React from 'react'

import slider from './Slider';
import Sliderimages from './Sliderimages';

const Collection = () => {
	
    return (
        <div className="collection-sec">
							  <div className="container">
								<div className="row">
								  <div className="col-lg-12">
									<div className="title">
									  <h1>Sneak Peek</h1>
									</div>									
																	     
										{slider.map((currenElement,ind)=>{
                                         return ( 
										 <Sliderimages />
										 )
										})}
									
									
								  </div>
								</div>
							  </div>
							</div>  
    )
}

export default Collection
