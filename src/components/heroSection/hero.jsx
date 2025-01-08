import React from 'react'
import Stars from '../../assets/stars.png';
import Future from '../../assets/future.png';
import Share from '../../assets/share.png';

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
                           <div className="flex items-center space-x-4 mt-4">
                                    <img
                                        alt=""
                                        src={Share}
                                        className="h-4 w-auto object-contain" // Reduced size of the image
                                    />

                                    <p className="text-[18px] font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3EA969] via-[#9374D5] to-[#FBB123]">
                                        Events worth <br /> your time
                                    </p>
                         </div>

                        

                </div>
               
            </div>
        </div>
    );
}

export default Hero;
