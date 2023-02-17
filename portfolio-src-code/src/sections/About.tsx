import { coder, } from "../assets";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="w-screen flex flex-col items-center mt-[-50px] overflow-x-hidden" id="about">
            <h1 className="outlined-text ml-[10px] mt-[50px] font-black text-[64px]">about</h1>
            <h1 className="text-white_900 mt-[-90px] font-black text-[64px]">about</h1>

            <div className="flex justify-center flex-col mxdesktop1280:flex-row flex-wrap ml-[12px] mr-[12px] mt-[60px]">
                <img className="mxdesktop1280:mr-[40px]" src={coder} alt="coder"/>
                <div className="max-w-[661px] mxdesktop1280:ml-[40px] mt-[50px] mxdesktop1280:mt-[15px]">
                    <p className="max-w-[661px] text-white_900 font-medium text-[20px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                        ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per 
                        inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur 
                        neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
                    </p>
                    <motion.div className="rounded-full bg-white900 w-[185px] h-[40px] cursor-pointer
                        flex justify-center items-center text-black_900 ml-auto mr-auto mt-[70px] font-medium text-[16px]"
                        whileHover={{scale: 1.03}}
                        whileTap={{scale: 0.97}}
                        //uncomment this function once you have your resume
                        //onClick={ () => window.open({/**Your resume goes here */})}
                    >
                        download resume
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About