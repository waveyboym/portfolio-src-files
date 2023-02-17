import { Loadingcomponent, Navbar } from "../components";
import { vectorone, vectortwo, vectorthree, vectorfour } from "../assets";
import { About, Contact, Footer, Landing, Skills, Works } from "../sections";
import { motion } from "framer-motion";
import { useState } from "react";

const Home = () => {

    const [loading, setLoading] = useState<boolean>(true);

    function turnOffLoading(){setLoading(false);}

    return (
        <div className="w-screen bg-purple100 overflow-x-hidden relative">
            {loading && (<Loadingcomponent />)}

            <div className="invisible mxdesktop1280:visible fixed mt-[64px] h-[calc(100vh-128px)] right-[2px] z-[5000] w-[2px] bg-gray90050"/>
            <div className="w-screen overflow-x-hidden minh6:h-[760vh] minh7:h-[700vh] minh75:h-[670vh] minh8:h-[630vh] 
                minh85:h-[600vh] minh9:h-[580vh] minh10w57:h-[450vh] minh11w57:h-[400vh] minh13w57:h-[350vh] mxdesktop1280:h-[500vh]">
                    <motion.img className="blur-xxl mt-[135%] mxdesktop1280:mt-[20%] ml-[5%] mxdesktop1280:ml-[25%] minh10w57:mt-[120%]" 
                        initial={{rotate: 0, scale: 1}}
                        animate={{rotate: 360, scale: 1.3}} 
                        transition={{ 
                            repeat: Infinity, 
                            repeatType: "reverse", 
                            repeatDelay: 0,
                            duration: 15,
                        }}
                        src={vectorone} alt="vector1"/>
                    
                    <div className="minh6:mt-[350%] minh7:mt-[330%] minh9:mt-[300%] mxdesktop1280:mt-[30%] mxdesktop1280:flex minh10w57:mt-[50%]">
                        <motion.img className="blur-xxl ml-[-30%] mxdesktop1280:mt-[0%] mxdesktop1280:ml-[-25%]"
                            initial={{rotate: 0,}}
                            animate={{rotate: 360,}} 
                            transition={{ 
                                repeat: Infinity, 
                                repeatType: "loop", 
                                repeatDelay: 0,
                                duration: 20,
                            }}
                            src={vectortwo} alt="vector2"/>
                        <motion.img className="blur-xxl mt-[100%] mxtablet:mt-[30%] ml-[40%] mxdesktop1280:mt-[0%] mxdesktop1280:ml-[50%]" 
                            initial={{rotate: 0,}}
                            animate={{rotate: 360,}} 
                            transition={{ 
                                repeat: Infinity, 
                                repeatType: "loop", 
                                repeatDelay: 0,
                                duration: 20,
                            }}
                            src={vectorthree} alt="vector3"/>
                    </div>
            </div>
            <div className="h-[460px] w-screen mt-[-460px] overflow-hidden">
                <motion.img className="blur-xxl mt-[70%] mxtablet:mt-[30%] mxdesktop1280:mt-[15%] ml-[5%] mxdesktop1280:ml-[25%]" 
                    initial={{rotate: 0,}}
                    animate={{rotate: 360,}} 
                    transition={{ 
                        repeat: Infinity, 
                        repeatType: "loop", 
                        repeatDelay: 0,
                        duration: 20,
                    }}
                    src={vectorfour} alt="vector3"/>
            </div> 
            <div className="mt-[-180px]"><Footer /></div>
            <div className="absolute top-0 left-0 right-0 w-screen overflow-x-hidden">
                <Navbar />
                <Landing turnOffLoading={turnOffLoading}/>
                <Works />
                <Skills />
                <About />
                <Contact />
            </div> 
        </div>
    )
}

export default Home