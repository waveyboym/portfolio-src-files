import { FunctionComponent, useState } from 'react';
import { motion } from 'framer-motion';

type FilterProps = {changeFilter: (arg: string) => void;}

const Filter : FunctionComponent<FilterProps> = ({changeFilter}) =>  {

    const [selectedFilter, setSelectedFilter] = useState<string>("All");

    function changefilter(arg: string){
        if(selectedFilter === arg)return;

        if(arg === "All"){setSelectedFilter("All"); changeFilter("All");}
        else if(arg === "Low-level"){setSelectedFilter("Low-level"); changeFilter("Low-level");}
        else if(arg === "Desktop apps"){setSelectedFilter("Desktop apps"); changeFilter("Desktop apps");}
        else if(arg === "Frontend"){setSelectedFilter("Frontend"); changeFilter("Frontend");}
    }

    return (
        <div className="flex justify-center flex-wrap">
            <motion.h1 className={selectedFilter === "All" ? "btn-primary-nh" : "btn-primary-h"}
                onClick={() => changefilter("All")}
                whileTap={{scale: 0.97}}
                >
                    All
            </motion.h1>
            <motion.h1 className={selectedFilter === "Low-level" ? "btn-primary-nh" : "btn-primary-h"}
                onClick={() => changefilter("Low-level")}
                whileTap={{scale: 0.97}}
                >
                    Low-level
            </motion.h1>
            <motion.h1 className={selectedFilter === "Desktop apps" ? "btn-primary-nh" : "btn-primary-h"}
                onClick={() => changefilter("Desktop apps")}
                whileTap={{scale: 0.97}}
                >
                    Desktop apps
            </motion.h1>
            <motion.h1 className={selectedFilter === "Frontend" ? "btn-primary-nh" : "btn-primary-h"}
                onClick={() => changefilter("Frontend")}
                whileTap={{scale: 0.97}}
                >
                    Frontend
            </motion.h1>
        </div>
    )
}

export default Filter