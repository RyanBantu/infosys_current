import React, { useState } from "react"
import m1 from "../stock/jeans.png"
import m2 from "../stock/girl_pant.png"
import m3 from "../stock/kurti.png"
import m5 from "../stock/shirt_1.png"


function Apparel() {

    let [count, setCount] = useState(0);
    let [price, setPrice] = useState(0);

    let [count2, setCount2] = useState(0);
    let [price2, setPrice2] = useState(0);

    let [count3, setCount3] = useState(0);
    let [price3, setPrice3] = useState(0);

    let [count4, setCount4] = useState(0);
    let [price4, setPrice4] = useState(0);


    const incrementCount = () => {

        setCount(count + 1);
        setPrice(price + 1000);
    };

    const incrementCount2 = () => {
        setCount2(count2 + 1);
        setPrice2(price2 + 1000);
    };
    const incrementCount3 = () => {
        setCount3(count3 + 1);
        setPrice3(price3 + 1000);
    };
    const incrementCount4 = () => {
        setCount4(count4 + 1);
        setPrice4(price4 + 1000);


    };
    const decrementCount = () => {

        setCount(count - 1);
        setPrice(price - 1000);
    };
    const decrementCount2 = () => {

        setCount2(count2 - 1);
        setPrice2(price2 - 1000);
    };
    const decrementCount3 = () => {
        setCount3(count3 - 1);
        setPrice3(price3 - 1000);
    };
    const decrementCount4 = () => {
        setCount4(count4 - 1);
        setPrice4(price4 - 1000);

    };




    return(


 <><div className=" ml-[200px] mt-20 flex flex-row">
            <div className="flex h-[500px] w-[270px]">
                <img src={m1} alt="blah blah" />
            </div>
            <div>
                <button className=" text-xl font-bold border-4 border-red-500" onClick={incrementCount}> select</button>
            </div>

            <div className="ml-4">
                <button className=" text-xl font-bold border-4 w-8 h-8 border-blue-500" onClick={incrementCount}>+</button>
                <div className="ml-4"> quantity = {count}</div>
                <button className="text-xl h-8 w-8 font-bold border-4 border-blue-500" onClick={decrementCount}>-</button>

            </div>
            <div className="font-extrabold"> price = $ {price}</div>
        </div><div>
                <div className=" ml-[200px] flex flex-row">
                    <div className="flex h-[500] w-[300px]">
                        <img src={m2} alt="blah blah" />
                    </div>
                    <div>
                        <button className=" text-xl font-bold border-4 border-red-500" onClick={incrementCount2}> select</button>
                    </div>

                    <div className="ml-4">
                        <button className=" text-xl font-bold border-4 w-8 h-8 border-blue-500" onClick={incrementCount2}>+</button>
                        <div className="ml-4"> quantity = {count2}</div>
                        <button className="text-xl h-8 w-8 font-bold border-4 border-blue-500" onClick={decrementCount2}>-</button>

                    </div>
                    <div className="font-extrabold"> price = $ {price2}</div>
                </div>

                <div className="ml-[200px] flex flex-row">
                    <div className="flex  h-[500] w-[300px]">
                        <img src={m3} alt="blah blah" />
                    </div>
                    <div>
                        <button className=" text-xl font-bold border-4 border-red-500" onClick={incrementCount3}> select</button>
                    </div>

                    <div className="ml-4">
                        <button className=" text-xl font-bold border-4 w-8 h-8 border-blue-500" onClick={incrementCount3}>+</button>
                        <div className="ml-4"> quantity = {count3}</div>
                        <button className="text-xl h-8 w-8 font-bold border-4 border-blue-500" onClick={decrementCount3}>-</button>

                    </div>
                    <div className="font-extrabold"> price = $ {price3}</div>
                </div>
            </div><div className=" ml-[200px] flex flex-row">

                <div className="flex h-[500] w-[300px]">
                    <img src={m5} alt="blah blah" />
                </div>
                <div>
                    <button className=" text-xl font-bold border-4 border-red-500" onClick={incrementCount4}> select</button>
                </div>

                <div className="ml-4">
                    <button className=" text-xl font-bold border-4 w-8 h-8 border-blue-500" onClick={incrementCount4}>+</button>
                    <div className="ml-4"> quantity = {count4}</div>
                    <button className="text-xl h-8 w-8 font-bold border-4 border-blue-500" onClick={decrementCount4}>-</button>

                </div>
                <div className="font-extrabold"> price = $ {price4}</div>
            </div></>

    )
}

export default Apparel

