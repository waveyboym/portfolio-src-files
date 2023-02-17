import {clang, cpp, css3, dart, golang, html5, java, javascript, markdown,
    mysql, php, python, scss, rust, tailwindcss, typescript,electron, 
    firebase, flutter, mui, nodejs, npm, react, sanity, vite, figma, 
    git, github, atom, codesandbox, intellij, sublime, visualstudiocode, 
    visualstudio,} from "../assets";
import { motion } from "framer-motion";

const languagesicons = [
    {key: 0, link: "https://www.w3schools.com/c/c_intro.php", image: clang}, 
    {key: 1, link: "https://cplusplus.com/", image: cpp}, 
    {key: 2, link: "https://www.w3.org/Style/CSS/Overview.en.html", image: css3}, 
    {key: 3, link: "https://dart.dev/", image: dart}, 
    {key: 4, link: "https://go.dev/", image: golang}, 
    {key: 5, link: "https://html.com/", image: html5},
    {key: 6, link: "https://www.java.com/", image: java}, 
    {key: 7, link: "https://www.javascript.com/", image: javascript}, 
    {key: 8, link: "https://www.markdownguide.org/", image: markdown}, 
    {key: 9, link: "https://www.mysql.com/", image: mysql}, 
    {key: 10, link: "https://www.php.net/", image: php}, 
    {key: 11, link: "https://www.python.org/", image: python},
    {key: 12, link: "https://sass-lang.com/", image: scss}, 
    {key: 13, link: "https://www.rust-lang.org/", image: rust}, 
    {key: 14, link: "https://tailwindcss.com/", image: tailwindcss}, 
    {key: 15, link: "https://www.typescriptlang.org/", image: typescript},
]

const frameworkicons = [
    {key: 0, link: "https://electronjs.org/", image: electron}, 
    {key: 1, link: "https://firebase.google.com/", image: firebase}, 
    {key: 2, link: "https://flutter.dev/", image: flutter}, 
    {key: 3, link: "https://mui.com/", image: mui}, 
    {key: 4, link: "https://nodejs.org/", image: nodejs}, 
    {key: 5, link: "https://www.npmjs.com/", image: npm},
    {key: 6, link: "https://reactjs.org/", image: react}, 
    {key: 7, link: "https://www.sanity.io/", image: sanity}, 
    {key: 8, link: "https://vitejs.dev/", image: vite}, 
]

const toolsicons = [
    {key: 0, link: "https://www.figma.com/", image: figma}, 
    {key: 1, link: "https://git-scm.com/", image: git}, 
    {key: 2, link: "https://github.com/", image: github}, 
]

const editorsicons = [
    {key: 0, link: "https://github.com/atom/atom", image: atom}, 
    {key: 1, link: "https://codesandbox.io/", image: codesandbox}, 
    {key: 2, link: "https://www.jetbrains.com/idea/", image: intellij}, 
    {key: 3, link: "https://www.sublimetext.com/", image: sublime}, 
    {key: 4, link: "https://code.visualstudio.com/", image: visualstudiocode}, 
    {key: 5, link: "https://visualstudio.microsoft.com/vs/", image: visualstudio},
]

const Skills = () => {
    return (
        <div className="w-screen mt-[100px] flex flex-col items-center overflow-x-hidden" id="skills">
            <div className="flex flex-wrap ml-[12px] mr-[12px] justify-center mxtablet:justify-evenly w-full">
                <div className="max-w-[340px] min-h-[260px]">
                    <h1 className="text-white_900 font-bold text-center mt-[20px] text-[24px]">languages</h1>
                    <div className="max-w-[340px] flex flex-wrap mxtablet:min-w-[340px] mt-[70px]">
                        {languagesicons.map((language) =>
                            <motion.a key={language.key}
                                className="ml-[8px] mr-[8px] mt-[8px] mb-[8px]" 
                                href={language.link} 
                                target="_blank"
                                whileTap={{scale: 0.97}} 
                                whileHover={{scale: 1.03}}
                            >
                                <img src={language.image} alt="language" />
                            </motion.a>
                        )}
                    </div>
                </div>
                <div className="mxtablet:mt-[30px] mxtablet:w-[1px] mxtablet:h-[164px] mxtablet:bg-gray90050"/>
                <div className="max-w-[340px] min-h-[260px] mxtablet:min-w-[340px]">
                    <h1 className="text-white_900 font-bold text-center mt-[20px] text-[24px]">frameworks</h1>
                    <div className="max-w-[340px] flex flex-wrap mt-[70px]">
                        {frameworkicons.map((framework) =>
                            <motion.a key={framework.key}
                                className="ml-[8px] mr-[8px] mt-[8px] mb-[8px]" 
                                href={framework.link} 
                                target="_blank"
                                whileTap={{scale: 0.97}} 
                                whileHover={{scale: 1.03}}
                            >
                                <img src={framework.image} alt="language" />
                            </motion.a>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap ml-[12px] mr-[12px] justify-center mxtablet:justify-evenly w-full">
                <div className="max-w-[340px] min-h-[260px] mxtablet:min-w-[340px]">
                    <h1 className="text-white_900 font-bold text-center mt-[20px] text-[24px]">tools</h1>
                    <div className="max-w-[340px] flex flex-wrap mt-[70px]">
                        {toolsicons.map((tool) =>
                            <motion.a key={tool.key}
                                className="ml-[8px] mr-[8px] mt-[8px] mb-[8px]" 
                                href={tool.link} 
                                target="_blank"
                                whileTap={{scale: 0.97}} 
                                whileHover={{scale: 1.03}}
                            >
                                <img src={tool.image} alt="language" />
                            </motion.a>
                        )}
                    </div>
                </div>
                <div className="mxtablet:mt-[30px] mxtablet:w-[1px] mxtablet:h-[164px] mxtablet:bg-gray90050"/>
                <div className="max-w-[340px] min-h-[260px] mxtablet:min-w-[340px]">
                    <h1 className="text-white_900 font-bold text-center mt-[20px] text-[24px]">ide's/text editors</h1>
                    <div className="max-w-[340px] flex flex-wrap mt-[70px]">
                        {editorsicons.map((editor) =>
                            <motion.a key={editor.key}
                                className="ml-[8px] mr-[8px] mt-[8px] mb-[8px]" 
                                href={editor.link} 
                                target="_blank"
                                whileTap={{scale: 0.97}} 
                                whileHover={{scale: 1.03}}
                            >
                                <img src={editor.image} alt="language" />
                            </motion.a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills