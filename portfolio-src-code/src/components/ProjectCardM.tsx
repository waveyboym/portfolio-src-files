import { FunctionComponent } from 'react';
import { motion } from "framer-motion";

type ProjectCardMProps = {image: string, title: string, description: string, link: string}

const ProjectCardM : FunctionComponent<ProjectCardMProps> = ({image, title, description, link}) => {
    return (
        <a href={link} target="_blank">
            <motion.div className="w-[250px] mt-[35px] mb-[35px] h-[256px] rounded-[20px] bg-black_90010 border border-solid border-gray_90050 backdrop-blur-xll"
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
                <p className="text-white_900 font-medium text-[14px] w-[240px] mt-[-2px] ml-[5px] mr-[5px]">{description}</p>
            </motion.div>
        </a>
    )
}

export default ProjectCardM