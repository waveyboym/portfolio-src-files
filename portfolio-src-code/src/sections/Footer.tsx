import { motion } from "framer-motion";

const Footer = () => {

    function scrollToTop(){window.scroll({top: 0, behavior: 'smooth'});}

    return (
        <div className="w-screen flex flex-col items-center overflow-x-hidden h-[180px] rounded-t-[20px]
        bg-black_90010 border-t border-solid border-gray_90050 backdrop-blur-xll">
            <h1 className="text-white_900 font-medium text-[20px] mt-[30px]">{/** Your name goes here*/}</h1>

            <motion.div className="rounded-full bg-white900 w-[150px] h-[40px] cursor-pointer
                flex justify-center items-center text-black_900 ml-auto mr-auto mt-[15px] font-medium text-[16px]"
                whileHover={{scale: 1.03}}
                whileTap={{scale: 0.97}}
                onClick={scrollToTop}
            >
                back to top
            </motion.div>

            <div className="flex ml-auto mr-auto mt-[15px] text-white_900">
                Powered by&nbsp;<a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
            </div>

        </div>
    )
}

export default Footer
