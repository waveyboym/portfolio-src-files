import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className="w-screen flex flex-col mt-[100px] items-center overflow-x-hidden" id="contact">
            <h1 className="outlined-text ml-[10px] mt-[0px] font-black text-[64px]">contact</h1>
            <h1 className="text-white_900 mt-[-90px] font-black text-[64px]">contact</h1>

            <div className="flex justify-center items-center flex-col mxdesktop1280:flex-row flex-wrap w-full mt-[100px]">
                <motion.a className="mxdesktop1280:mr-[45px]" whileHover={{scale: 1.03}} whileTap={{scale: 0.97}}
                    href="mailto:<your email>" target="_blank">
                        <h2 className="text-white_900 font-medium text-[20px] hover:text-purple_900">email: {/**your email */}</h2>
                </motion.a>
                <motion.a className="mt-[20px] mxdesktop1280:ml-[45px] mxdesktop1280:mt-[0px]" whileHover={{scale: 1.03}} whileTap={{scale: 0.97}}
                    href="https://discord.gg/<discord username>" target="_blank">
                        <h2 className="text-white_900 font-medium text-[20px] hover:text-purple_900">discord: {/**discord username */}</h2>
                </motion.a>
            </div>
        </div>
    )
}

export default Contact