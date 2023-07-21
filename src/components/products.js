import React from "react"
import Typewriter from 'typewriter-effect';
import vid from "../stock/animation_lka15a8t.mp4"
import bg from "../stock/animation_lka6h3ke.mp4"

function Product() {
    return (
        <div className="flex flex-col">

            <div className="flex flex-row ">
                <div className=" mt-2 h-[2rem] max-w-[700px] absolute ">
                    <div className="   max-w-[700px] h-12 ">
                        <p className="text-8xl ml-20 mt-10 font-bold text-orange-500" >
                            <Typewriter
                                options={{
                                    strings: [' BIGGEST SALE OF THIS SEASON'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </p>
                    </div>
                </div>

                <div className="flex ml-[1000px] mt-14 h-[500px]">
                    <video src={vid}
                        autoPlay
                        loop
                        muted />
                </div>
            </div>
            <div className=" flex flex-row">
                <div className="flex ml-[250px] h-[300px] ">
                    <video src={bg}
                        autoPlay
                        loop
                        muted />
                </div>

                <div className="  ml-[400px] h-[200px] w-[500px]">
                    <button className="text-5xl ml-20 mt-10 font-bold text-blue-500">
                    40% DISCOUNT ON ELECTRONICS 
                </button>

                </div>
            </div>


        </div>


    )


}


export default Product