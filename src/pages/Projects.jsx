import React from 'react'
import img1 from "../../src/assets/book.png"
import img2 from "../../src/assets/ecommerce.png"
import img3 from "../../src/assets/social.png"

function Projects() {
  return (
    <div id="projects">
       
        <div className="grid grid-cols-1 lg:grid-cols-3 md:min-[600px]:grid-cols-2 sm:gap-4 gap-5  sm:pl-0 md:mt-[10%]">
            <div className="bg-white p-4 rounded-lg shadow-lg shadow-black w-80 border-4 border--[#e25064] sm:ml-28 md:min-[800px]:ml-120 cursor-pointer">
                <img className="w-80" src={img1} />
                <h3 className="text-xl text-center pt-5 font-bold mb-2">Book Store Website</h3>
                <div className="flex gap-10">
                    <h3 className="text-xl mb-2">Reactjs and TailwandCss</h3>
                   
                </div>
                <p className="text-gray-700 mb-4">This is a project made to learn the latest languages that is  ReactJs and tailwandCss by building an app.</p>

                <a href="https://book-store-f.vercel.app/"><button className="bg-gray-300 shadow-lg  px-8  mt-3 py-2 rounded-lg font-semibold"><i class="fa-brands fa-github"></i> Demo </button></a>
            </div>

            {/* two */}
            <div className="bg-white p-4 rounded-lg shadow-lg shadow-black w-80 border-4 -[#e25064] sm:ml-28 md:min-[800px]:ml-20 cursor-pointer ">
                <img className="w-80" src={img2} />
                <h3 className="text-xl text-center pt-5 font-bold mb-2">E-commerce Website</h3>
                <div className="flex gap-10">
                    <h3 className="text-xl mb-2">Reactjs and TailwandCss</h3>
                   
                </div>
                <p className="text-gray-700 mb-4">This is a project made to learn the latest languages that is  ReactJs and tailwandCss by building an app.</p>

                <a href="https://e-commerce-full-beta.vercel.app//"><button className="bg-gray-300 shadow-lg  px-8  mt-3 py-2 rounded-lg font-semibold"><i class="fa-brands fa-github"></i> Demo </button></a>
            </div>


            {/* three */}
            <div className="bg-white p-4 rounded-lg shadow-lg shadow-black w-80 border-4  sm:ml-28 md:min-[800px]:ml-3 cursor-pointer ">
                <img className="w-80" src={img3} />
                <h3 className="text-xl text-center pt-5 font-bold mb-2">Social Media App</h3>
                <div className="flex gap-10">
                    <h3 className="text-xl mb-2">Reactjs and TailwandCss</h3>
                   
                </div>
                <p className="text-gray-700 mb-4">This is a project made to learn the latest languages that is  ReactJs and tailwandCss by building an app.</p>

                <a href="https://social-media-e58i.vercel.app/"><button className="bg-gray-300 shadow-lg  px-8  mt-3 py-2 rounded-lg font-semibold"><i class="fa-brands fa-github"></i> Demo </button></a>
            </div>


        </div>

    </div>
  )
}

export default Projects