import { Navbar, ProjectCardL, Loadingcomponent, Filter } from "../components";
import { vectorone, vectortwo, vectorthree, } from "../assets";
import { AnimatePresence, motion } from "framer-motion";
import { Footer } from "../sections";
import { Allprojects } from "../content";
import { useState, useEffect, ChangeEvent } from 'react';
import Pagination from '@mui/material/Pagination';
import "../styles/index.css";

const delaytime: number = 4000;
const subtractValue: number = 8;
const maxSize: number = 9;

const Projects = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [currentprojects, setCurrentProjects] = useState<{
        key: number;
        image: string;
        Low_level: boolean;
        Desktop_apps: boolean;
        Frontend: boolean;
        title: string;
        description: string;
        link: string;
        hasWebsite: boolean;
    }[]>([]);
    const [filteredprojects, setFilteredProjects] = useState<{
        key: number;
        image: string;
        Low_level: boolean;
        Desktop_apps: boolean;
        Frontend: boolean;
        title: string;
        description: string;
        link: string;
        hasWebsite: boolean;
    }[]>(Allprojects);
    const [page, setPage] = useState<number>(1);

    const handlepageChange = (_event: ChangeEvent<unknown>, value: number) => {
        window.scroll({top: 0, behavior: 'smooth'});
        setPage(value);
        filterInRange(filteredprojects, value);
    };

    function turnOffLoading(){setLoading(false);}

    function changeFilterTo(arg: string){
        window.scroll({top: 0, behavior: 'smooth'});
        setPage(1);
        let arraydata: {
            key: number;
            image: string;
            Low_level: boolean;
            Desktop_apps: boolean;
            Frontend: boolean;
            title: string;
            description: string;
            link: string;
            hasWebsite: boolean;
        }[] = [];

        if(arg === "All"){
            arraydata = Allprojects;
        }
        else if(arg === "Low-level"){
            arraydata = Allprojects.filter((project) => {return project.Low_level === true});
        }
        else if(arg === "Desktop apps"){
            arraydata = Allprojects.filter((project) => {return project.Desktop_apps === true});
        }
        else{//if(arg === "Frontend")
            arraydata = Allprojects.filter((project) => {return project.Frontend === true});
        }

        setFilteredProjects(arraydata);
        filterInRange(arraydata, 1);
    }

    function filterInRange(arraydata: {
        key: number;
        image: string;
        Low_level: boolean;
        Desktop_apps: boolean;
        Frontend: boolean;
        title: string;
        description: string;
        link: string;
        hasWebsite: boolean;
    }[], pagenumber: number){
        setCurrentProjects([]);
        let dataToPush: {
            key: number;
            image: string;
            Low_level: boolean;
            Desktop_apps: boolean;
            Frontend: boolean;
            title: string;
            description: string;
            link: string;
            hasWebsite: boolean;
        }[] = [];
        for(let i = (pagenumber * maxSize) - subtractValue; i <= pagenumber * maxSize; ++i){
            if(i - 1 >= arraydata.length)break;
            const obj = arraydata[i - 1];
            dataToPush.push(obj);
        }

        setCurrentProjects(dataToPush);
    }

    useEffect(() => {
        const loadPage = () => {
            filterInRange(filteredprojects, 1);
            window.scroll({top: 0, behavior: 'smooth'});
            setTimeout(() => {  turnOffLoading(); }, delaytime);
        }

        loadPage();
    }, []);

    return (
        <div className="w-screen bg-purple100 overflow-x-hidden relative" id="projects">
            {loading && (<Loadingcomponent />)}
            <div className="invisible mxdesktop1280:visible fixed mt-[64px] h-[calc(100vh-128px)] right-[2px] z-[5000] w-[2px] bg-gray90050"/>
            <div className="w-screen overflow-x-hidden minh6:h-[640vh] minh7:h-[580vh] minh75:h-[550vh] minh8:h-[520vh] 
            minh85:h-[495vh] minh9:h-[470vh] minh10w57:h-[250vh] minh11w57:h-[230vh] minh13w57:h-[200vh]
            mxdesktop1280:h-[300vh] overflow-y-hidden">
                <motion.img className="blur-xxl mt-[135%] minh10w57:mt-[40%] mxdesktop1280:mt-[20%] ml-[5%] minh10w57:ml-[15%] mxdesktop1280:ml-[25%] " 
                initial={{rotate: 0, scale: 1}}
                animate={{rotate: 360, scale: 1.3}} 
                transition={{ 
                    repeat: Infinity, 
                    repeatType: "reverse", 
                    repeatDelay: 0,
                    duration: 15,
                }}
                src={vectorone} alt="vector1"/>
                <div className="mt-[170%] minh10w57:mt-[30%] mxdesktop1280:mt-[30%] mxdesktop1280:flex">
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
                    <motion.img className="blur-xxl mt-[150%] minh10w57:mt-[30%] ml-[40%] mxdesktop1280:mt-[0%] mxdesktop1280:ml-[50%]" 
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
                <motion.img className="blur-xxl mt-[200%] ml-[-30%] block minh10w57:hidden mxdesktop1280:hidden" 
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
            <div className="flex justify-center mt-[-350px] minh6:mt-[-220px] minh8:mt-[-180px] 
                minh10w57:mt-[-220px]">
                <Pagination 
                    count={2}
                    page={page} 
                    variant="outlined" 
                    defaultPage={1} 
                    siblingCount={1} 
                    boundaryCount={1}
                    color="secondary"
                    onChange={handlepageChange} />
            </div>
            <div className="mt-[170px] minh6:mt-[40px] minh10w57:mt-[40px]"><Footer /></div>

            <div className="absolute top-0 left-0 right-0 w-screen overflow-x-hidden">
                <Navbar />
                <h1 className="outlined-text ml-[10px] mt-[40px] text-center font-black text-[64px]">projects</h1>
                <h1 className="text-white_900 mt-[-90px] text-center font-black text-[64px]">projects</h1>
                <h2 className="text-white_900 font-bold text-center text-[24px]">all of my projects</h2>

                <div className="mt-[10px]">
                    <Filter changeFilter={changeFilterTo} />
                </div>

                <div className="flex justify-center mt-[10px]">
                    <Pagination 
                        count={2}
                        page={page} 
                        variant="outlined" 
                        defaultPage={1} 
                        siblingCount={1} 
                        boundaryCount={1}
                        color="secondary"
                        onChange={handlepageChange} />
                </div>

                <div className="mt-[-20px] flex flex-wrap mxtablet:w-[80%] mxtablet800:w-full mxtablet900:w-[90%] mxtablet1000:w-[calc(100%-150px)] ml-auto mr-auto">
                    <AnimatePresence>
                        {
                            currentprojects.length > 0 ?
                            currentprojects.map((project) => 
                                <ProjectCardL 
                                    key={project.key}
                                    id={project.key}
                                    image={project.image}
                                    title={project.title}
                                    description={project.description}
                                    link={project.link}
                                    hasWebsite={project.hasWebsite}
                                    />
                            )
                            :
                            (<div className="w-full">
                                <h2 className="text-white_900 font-bold text-center text-[24px] mt-[50px]">
                                    No results on this page
                                </h2>
                            </div>)
                        }
                    </AnimatePresence>
                </div>
            </div> 
        </div>
    )
}

export default Projects