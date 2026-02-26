import content from "../content.json";
const {
  page
} = content;
import Image from "next/image";
export default function Home() {
  return <>
      <div className="flex flex-col min-h-[50vh] gap-5 text-white justify-center items-center">
        <h2 className="text-5xl font-medium flex items-center justify-center">
          <span className="flex items-center">{page.hero_title_text}</span>{" "}
          <span>
            <img width={150} src={page.tea_image} alt="" />
          </span>
        </h2>
        <p>
          A crowd fundeding platform for creators. Get funded by your fans and
          follower.Start now!
        </p>
        <div className="buttons">
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Start Here
          </button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Read More
          </button>
        </div>
      </div>
      <div className="w-full bg-white h-0.5 opacity-10"></div>
      <div className="text-white container mx-auto py-14">
        <h2 className="text-3xl m-auto text-center my-10">
          Your fans can buy u a Chai
        </h2>
        <div className="flex justify-around">
          <div className="flex flex-col justify-center items-center">
            <img width={80} className="p-2 bg-gray-500 rounded-full" src={page.man_image} alt="" />
            <p>Fund Yourself</p>
            <p className="w-1/2 text-center text-sm">
              Start your journey and get support
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img width={80} className="p-2 bg-gray-500 rounded-full" src={page.coin_image} alt="" />
            <p>Earn Tips</p>
            <p className="w-1/2 text-center text-sm">
              Receive tips and contributions from your audience
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img width={80} className="p-2 bg-gray-500 rounded-full" src={page.group_image} alt="" />
            <p>Fans want to help</p>
            <p className="w-1/2 text-center text-sm">
              Your fans are available to help you
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white h-0.5 opacity-10"></div>
       <div className="text-white container mx-auto py-14">
        <h2 className="text-3xl m-auto text-center my-10">
          Your fans can buy u a Chai
        </h2>
        <div className="flex justify-around">
          <div className="flex flex-col justify-center items-center">
            <img width={80} className="p-2 bg-gray-500 rounded-full" src={page.man_image} alt="" />
            <p>Fund Yourself</p>
            <p className="w-1/2 text-center text-sm">
              Start your journey and get support
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img width={80} className="p-2 bg-gray-500 rounded-full" src={page.coin_image} alt="" />
            <p>Earn Tips</p>
            <p className="w-1/2 text-center text-sm">
              Receive tips and contributions from your audience
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img width={80} className="p-2 bg-gray-500 rounded-full" src={page.group_image} alt="" />
            <p>Fans want to help</p>
            <p className="w-1/2 text-center text-sm">
              Your fans are available to help you
            </p>
          </div>
        </div>
      </div>
    </>;
}