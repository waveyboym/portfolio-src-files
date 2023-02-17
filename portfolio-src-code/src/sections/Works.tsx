import { motion } from "framer-motion";
import { ProjectCardM } from "../components";
import { HashLink } from 'react-router-hash-link';
import { Topprojects } from "../content";

const Works = () => {
    return (
        <div className="w-screen mt-[100px] flex flex-col items-center overflow-x-hidden" id="works">
            <h1 className="outlined-text ml-[10px] mt-[70px] font-black text-[64px]">Works</h1>
            <h1 className="text-white_900 mt-[-90px] font-black text-[64px]">Works</h1>

            <h2 className="text-white_900 font-bold mt-[20px] text-[24px]">My top projects</h2>
            <div className="mt-[35px] w-full flex justify-evenly items-center mxtablet:flex-col mxdesktop1280:flex-row flex-wrap">
                {Topprojects.map((project) =>
                    <ProjectCardM 
                        key={project.key}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                    />
                )}
            </div>
            
            <HashLink smooth to="/projects">
                <motion.div className="rounded-full bg-white900 w-[204px] h-[40px] 
                    flex justify-center items-center text-black_900 ml-auto mr-auto mt-[40px] font-medium text-[16px]"
                    whileTap={{scale: 0.97}}
                >
                    see all my projects
                </motion.div>
            </HashLink>
        </div>
    )
}

export default Works