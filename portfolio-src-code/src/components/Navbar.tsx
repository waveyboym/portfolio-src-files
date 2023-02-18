import { motion } from "framer-motion";
import { useState } from "react";
import { HashLink } from 'react-router-hash-link';

const delaytime: number = 4.5;

const variants={
    open: {height: "100vh"},
    closed: {height: "50px"},
}

const bartopvariants = {
    open: {top: "50%", rotate: -315, width: "19px", translateX: "10%"},
    closed: {top: "25%", rotate: 0, width: "10px", translateX: "7px"}
}

const barmidvariants = {
    open: {opacity: 0},
    closed: {opacity: 1},
}

const barbottomvariants = {
    open: {top: "50%", rotate: -225, width: "19px", translateX: "10%"},
    closed: {top: "75%", rotate: 0, width: "10px", translateX: "7px"}
}

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    function toggleMenuOpen(){setMenuOpen(!menuOpen);}

    return (
        <motion.div 
            className="fixed w-screen top-0 left-0 z-50"
            transition={{delay: delaytime, type: "tween"}}
            initial={{ opacity: 0 , y: "-50px"}}
            animate={{opacity: 1, y: "0px"}}>
            <motion.div className="fixed w-screen overflow-hidden top-0 left-0 backdrop-blur-xll bg-black90010"
                animate={menuOpen ? "open" : "closed"}
                transition={{type: "tween"}}
                variants={variants}
            >
                <div className="w-full h-[50px] flex justify-between items-center">
                    <HashLink smooth to="/#landing">
                        <motion.h1 className="text-white_900 hover:text-purple_900 ml-[12px] font-bold text-[20px]"
                            whileHover={{scale: 1.03}}
                            whileTap={{scale: 0.9}}
                        >
                            {/**Your name goes here*/}
                        </motion.h1>
                    </HashLink>
                    <div className="items-center hidden xl:flex">
                        <HashLink smooth to="/#landing">
                            <motion.h2 className="text-white_900 hover:text-purple_900 ml-[25px] mr-[25px] font-medium text-[20px]"
                                whileHover={{scale: 1.03}}
                                whileTap={{scale: 0.9}}
                            >
                                home
                            </motion.h2>
                        </HashLink>
                        <HashLink smooth to="/#works">
                            <motion.h2 className="text-white_900 hover:text-purple_900 ml-[25px] mr-[25px] font-medium text-[20px]"
                                whileHover={{scale: 1.03}}
                                whileTap={{scale: 0.9}}
                            >
                                works
                            </motion.h2>
                        </HashLink>
                        <HashLink smooth to="/#about">
                            <motion.h2 className="text-white_900 hover:text-purple_900 ml-[25px] mr-[25px] font-medium text-[20px]"
                                whileHover={{scale: 1.03}}
                                whileTap={{scale: 0.9}}
                            >
                                about
                            </motion.h2>
                        </HashLink>
                        <HashLink smooth to="/#contact">
                            <motion.h2 className="text-white_900 hover:text-purple_900 ml-[25px] mr-[25px] font-medium text-[20px]"
                                whileHover={{scale: 1.03}}
                                whileTap={{scale: 0.9}}
                            >
                                contact
                            </motion.h2>
                        </HashLink>
                    </div>
                    <motion.div className="mr-[12px] w-[24px] h-[24px] relative xl:hidden" whileTap={{scale: 0.97}} onClick={toggleMenuOpen}>
                        <motion.div className="h-[2px] bg-white900 rounded-full absolute"
                            animate={menuOpen ? "open" : "closed"}
                            variants={bartopvariants}
                            />
                        <motion.div className="w-[19px] h-[2px] bg-white900 rounded-full absolute top-2/4 ml-[2.5px] mr-[2.5px]"
                            animate={menuOpen ? "open" : "closed"}
                            variants={barmidvariants}
                        />
                        <motion.div className="h-[2px] bg-white900 rounded-full absolute"
                            animate={menuOpen ? "open" : "closed"}
                            variants={barbottomvariants}
                        />
                    </motion.div>
                    <div className="mr-[12px] w-[24px] h-[24px] hidden xl:block"/>
                </div>
                <div className="flex flex-col justify-center items-center h-screen w-full xl:hidden">
                    <HashLink smooth to="/#landing">
                        <motion.h2 className="text-white_900 hover:text-purple_900 mt-[15px] mb-[15px] font-medium text-[20px]"
                            whileHover={{scale: 1.03}}
                            whileTap={{scale: 0.9}}
                            onClick={toggleMenuOpen}
                        >
                            home
                        </motion.h2>
                    </HashLink>
                    <HashLink smooth to="/#works">
                        <motion.h2 className="text-white_900 hover:text-purple_900 mt-[15px] mb-[15px] font-medium text-[20px]"
                            whileHover={{scale: 1.03}}
                            whileTap={{scale: 0.9}}
                            onClick={toggleMenuOpen}
                        >
                            works
                        </motion.h2>
                    </HashLink>
                    <HashLink smooth to="/#about">
                        <motion.h2 className="text-white_900 hover:text-purple_900 mt-[15px] mb-[15px] font-medium text-[20px]"
                            whileHover={{scale: 1.03}}
                            whileTap={{scale: 0.9}}
                            onClick={toggleMenuOpen}
                        >
                            about
                        </motion.h2>
                    </HashLink>
                    <HashLink smooth to="/#contact">
                        <motion.h2 className="text-white_900 hover:text-purple_900 mt-[15px] mb-[15px] font-medium text-[20px]"
                            whileHover={{scale: 1.03}}
                            whileTap={{scale: 0.9}}
                            onClick={toggleMenuOpen}
                        >
                            contact
                        </motion.h2>
                    </HashLink>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Navbar
