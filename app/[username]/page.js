import content from "../../content.json";
const {
  page
} = content;
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
const Page = async ({
  params
}) => {
  return <>
      <div className="relative ">
        <img className="object-cover w-full" src={page.page_image_1} alt="" />
        <img className="w-50 relative bottom-[110px] mx-auto" src={page.page_image_2} alt="" />
        <div className="w-[80%] gap-2 flex mx-auto">
          <div className="w-1/2 p-5 my-10 bg-slate-900/80 text-white min-h-[100px] rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4">{page.page_supporters}</h2>

            <ul className="flex flex-col gap-y-2 min-h-[200px]  pr-2">
              <li className="bg-slate-800 px-4 py-2 rounded-md hover:bg-slate-700 transition duration-200 ease-in-out flex gap-5 items-center"><img width={40} className="rounded-[50%]" src={page.page_image_3} alt="" />

                akshit paid u 300 rupeee
              </li>
              <li className="bg-slate-800 px-4 py-2 rounded-md hover:bg-slate-700 transition duration-200 ease-in-out flex gap-5 items-center"><img width={40} className="rounded-[50%]" src={page.page_image_3} alt="" />

                akshit paid u 300 rupeee
              </li>
              <li className="bg-slate-800 px-4 py-2 rounded-md hover:bg-slate-700 transition duration-200 ease-in-out flex gap-5 items-center"><img width={40} className="rounded-[50%]" src={page.page_image_3} alt="" />

                akshit paid u 300 rupeee
              </li>
              <li className="bg-slate-800 px-4 py-2 rounded-md hover:bg-slate-700 transition duration-200 ease-in-out flex gap-5 items-center"><img width={40} className="rounded-[50%]" src={page.page_image_3} alt="" />

                akshit paid u 300 rupeee
              </li>
              <li className="bg-slate-800 px-4 py-2 rounded-md hover:bg-slate-700 transition duration-200 ease-in-out flex gap-5 items-center"><img width={40} className="rounded-[50%]" src={page.page_image_3} alt="" />

                akshit paid u 300 rupeee
              </li>
              <li className="bg-slate-800 px-4 py-2 rounded-md hover:bg-slate-700 transition duration-200 ease-in-out flex gap-5 items-center"><img width={40} className="rounded-[50%]" src={page.page_image_3} alt="" />

                akshit paid u 300 rupeee
              </li>
             
            </ul>
          </div>

          <div className="w-1/2 p-5 my-10 bg-slate-900/80 text-white min-h-[100px] rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-center">{page.page_make_a_payment}</h2>

            <div className="inputs flex flex-col gap-4 w-[90%] mx-auto">
              <input type="text" className="w-full bg-slate-800 text-white placeholder-gray-400 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out" placeholder="Enter Name" />
              <input type="text" className="w-full bg-slate-800 text-white placeholder-gray-400 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out" placeholder="Enter Message" />
              <input type="number" className="w-full bg-slate-800 text-white placeholder-gray-400 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out" placeholder="Enter Amount" />

              <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300 ease-in-out">{page.page_pay}</button>

              <div className="pay flex justify-center gap-4 mt-4">
                <button className="bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-600 hover:scale-105 transition duration-300 ease-in-out">
                  ₹100
                </button>
                <button className="bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-600 hover:scale-105 transition duration-300 ease-in-out">
                  ₹200
                </button>
                <button className="bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-600 hover:scale-105 transition duration-300 ease-in-out">
                  ₹300
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>;
};
export default Page;