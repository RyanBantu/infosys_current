import React from "react"
import { Outlet, Link } from "react-router-dom";




function Nav() {
    return(
     <>
        <div className=" flex flex-row w-screen h-20 bg-blue-900 ">
                <div className=" ml-6 text-xl text-white m-2 border-2">
                    <a href="/"> SHOPIFY</a>
                </div>

          
            <div className=" ml-6 text-xl text-white m-2">
                    <a href="phone">Electronics</a>
        </div>
            <div className=" ml-6 text-xl text-white m-2 border-2">
                    <a href="apparel">Apparel</a>
            </div>

                

              
            
        </div>
       <Outlet/>
    </>

    )


}


export default Nav