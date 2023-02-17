import { FunctionComponent } from 'react';
import { motion } from "framer-motion";
import { globe, github } from "../assets";

type ProjectCardLProps = {id: number, image: string, title: string, description: string, link: string, hasWebsite: boolean}

const ProjectCardL : FunctionComponent<ProjectCardLProps> = ({id, image, title, description, link, hasWebsite}) => {
    return (
        <motion.div className="mt-[50px] mb-[50px] ml-auto mr-auto mxtablet800:mr-[75px] mxtablet800:ml-[75px]"
            key={id}
            layout
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
            >
                <a href={link} target="_blank">
                    <motion.div className="w-[250px] h-[256px] rounded-[20px] bg-black_90010 border border-solid border-gray_90050 backdrop-blur-xll"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{
                            default: {
                            duration: 0.3,
                            ease: [0, 0.71, 0.2, 1.01]
                            },
                            scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001
                            }
                        }}
                    >
                        <div className="w-[248px] h-[157px] rounded-t-[20px] overflow-hidden">
                            <img className="min-w-[100%] h-[100%] inline m-auto object-cover" src={image} alt="projectimg" />
                        </div>
                        <h1 className="text-white_900 font-bold text-[24px] w-[240px] mt-[-3px] ml-[5px] mr-[5px]">{title}</h1>
                        <p className="text-white_900 font-medium text-[14px] w-[240px] mt-[-2px]  ml-[5px] mr-[5px]">{description}</p>
                    </motion.div>
                </a>

                <div className="flex w-[250px] h-[40px] mt-[20px]">
                    <a href={link} target="_blank">
                        <motion.div className="rounded-full bg-white900 text-gray_900 w-[190px] h-[40px] flex justify-center items-center"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            {hasWebsite ? "live preview" : "see on github"}
                        </motion.div>
                    </a>
                    <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-white900 ml-[20px]">
                        <div className="w-[24px] h-[26px] mt-[-1.5px] rounded-full overflow-hidden">
                            {hasWebsite ? 
                                (<img className="min-w-[100%] min-h-[100%] inline m-auto object-cover" src={globe} alt="globe"/>) 
                                : 
                                (<img className="min-w-[100%] min-h-[100%] inline m-auto object-cover" src={github} alt="github"/>)
                            }
                        </div>
                    </div>
                </div>
        </motion.div>
    )
}

export default ProjectCardL