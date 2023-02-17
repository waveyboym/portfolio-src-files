import { motion } from "framer-motion";
import { Navbar, Loadingcomponent } from "../components";
import { vectorone, error404 } from "../assets";
import { Footer, } from "../sections";
import { useEffect, useState } from "react";

const delaytime: number = 4000;

const Errorpage = () => {
    const [loading, setLoading] = useState<boolean>(true);

    function turnOffLoading(){setLoading(false);}

    useEffect(() => {
        const loadPage = () => {
            setTimeout(() => {  turnOffLoading(); }, delaytime);
        }

        loadPage();
    }, []);
    return (
        <div className="w-screen bg-purple100 overflow-x-hidden relative">
            {loading && (<Loadingcomponent />)}
            <div className="invisible mxdesktop1280:visible fixed mt-[64px] h-[calc(100vh-128px)] right-[2px] z-[5000] w-[2px] bg-gray90050"/>
            <div className="w-screen overflow-x-hidden h-[115vh] mxdesktop1280:h-[150vh] overflow-y-hidden">
                <motion.img className="blur-xxl mt-[135%] mxdesktop1280:mt-[20%] ml-[5%] mxdesktop1280:ml-[25%] " 
                initial={{rotate: 0, scale: 1}}
                animate={{rotate: 360, scale: 1.3}} 
                transition={{ 
                    repeat: Infinity, 
                    repeatType: "reverse", 
                    repeatDelay: 0,
                    duration: 15,
                }}
                src={vectorone} alt="vector1"/>
            </div>
            <div className="mt-[-180px]"><Footer /></div>
            <div className="absolute top-0 left-0 right-0 w-screen overflow-x-hidden">
                <Navbar />
                <div className="mt-[50px] h-screen w-full flex items-center justify-center mxdesktop1280:justify-start flex-col">
                    <div className="ml-[12px] mr-[12px] mxdesktop1280:ml-[0px] mxdesktop1280:mr-[0px] mxdesktop1280:h-[70vh]">
                        <img className="min-w-[100%] h-[100%] inline m-auto object-cover" src={error404} alt="error-404"/>
                    </div>
                    <a href="/">
                        <motion.div className="rounded-full bg-white900 w-[185px] h-[40px] 
                            flex justify-center items-center text-black_900 ml-auto mr-auto mt-[70px] font-medium text-[16px]"
                            whileHover={{scale: 1.03}}
                            whileTap={{scale: 0.97}}
                        >
                            go to home
                        </motion.div>
                    </a>
                </div>
            </div> 
        </div>
    )
}

export default Errorpage