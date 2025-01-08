import React from 'react'
import Stars from '../../assets/stars.png';
import Future from '../../assets/future.png';

function Hero() {
    return (
        <div className="flex items-center justify-center mt-40">
            <div className="flex items-center justify-center space-x-60">
                <img
                    alt=""
                    src={Stars}
                    className="h-80 w-auto object-contain"
                />

                <div>
                            <img
                                alt=""
                                src={Future}
                                className="h-80 w-auto object-contain"
                            />

                    <p className="text-5xl font-bold text-gray-900">Eventd worth yout time</p>
                </div>
              
               
            </div>
        </div>
    );
}

export default Hero;
