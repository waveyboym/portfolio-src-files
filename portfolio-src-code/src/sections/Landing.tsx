import axios, {AxiosResponse} from 'axios';
import { motion } from "framer-motion";
import { useEffect, useState, FunctionComponent } from "react";
import { HashLink } from 'react-router-hash-link';
import { sun, cloudsun, cloud, cloudmist, cloudlightning, cloudhrain, fog,
    cloudrain, cloudsnow, lightning, snowflake, sundown, moon, sunrise, } from "../assets";

type LandingPageProps = {turnOffLoading: () => void;}

const delaytime: number = 4000;

const Landing: FunctionComponent<LandingPageProps> = ({turnOffLoading}) => {

    const [dateObj, setdateObj] = useState<Date>(new Date());
    const [temperature, setTemp] = useState<string>("nil");
    const [wheatherText, setwheatherText] = useState<string>("");
    const [fetchStatus, setfetchStatus] = useState<boolean>(false);

    function getWheatherIcon(wText: string){
        if(wText === "Sunny")return sun;
        else if(wText === "Partly cloudy")return cloudsun;
        else if(wText === "cloudy" || "Overcast")return cloud;
        else if(wText === "Mist" || "Patchy rain possible" || "Patchy snow possible" || "Patchy sleet possible"
        || "Patchy freezing drizzle possible" || "Thundery outbreaks possible")
            return cloudmist;
        else if(wText === "Blowing snow" || "Patchy light snow" || "Light snow" || "Patchy moderate snow"
        || "Moderate snow")
            return cloudsnow;
        else if(wText === "Blizzard" || "Patchy heavy snow" || "Heavy snow" || "Ice pellets")
            return snowflake;
        else if(wText === "Fog" || "Freezing fog")return fog;
        else if(wText === "Patchy light drizzle" || "Light drizzle" || "Freezing drizzle"
        || "Heavy freezing drizzle" || "Patchy light rain" || "Light rain" || "Moderate rain at times"
        || "Moderate rain" || "Light freezing rain" || "Light sleet" || "Light rain shower"
        || "Light sleet showers" || "Light snow showers" || "Light showers of ice pellets")
            return cloudrain;
        else if(wText === "Heavy rain at times" || "Heavy rain" || "Moderate or heavy freezing rain"
        || "Moderate or heavy sleet" || "Moderate or heavy sleet" || "Moderate or heavy sleet showers" 
        ||"Moderate or heavy rain shower" || "Torrential rain shower"
        || "Moderate or heavy snow showers" || "Moderate or heavy showers of ice pellets")
            return cloudhrain;
        else if(wText === "Patchy light rain with thunder" || "Patchy light snow with thunder")
            return cloudlightning;
        else if(wText === "Moderate or heavy rain with thunder"
        || "Moderate or heavy snow with thunder"
        )
            return lightning;
        else return sun;
    }

    function getTimeIcon(timeObj: Date){
        const hours: number = timeObj.getHours();
        if(hours >= 4 && hours < 9)return sunrise;
        else if(hours >= 9 && hours < 16)return sun;
        else if(hours >= 16 && hours < 20)return sundown;
        else if(hours >= 20 && hours <= 24 || hours >= 0 && hours < 4)return moon;
        else return sun
    }

    function gethours(hours: number){
        if(hours >= 0 && hours < 10)return "0" + hours.toString();
        else return hours.toString();
    }

    function getminutes(minutes: number){
        if(minutes >= 0 && minutes < 10)return "0" + minutes.toString();
        else return minutes.toString();
    }

    function getTime(timeObj: Date){
        const hours: number = timeObj.getHours();

        if(hours >= 0 && hours < 12)return gethours(timeObj.getHours()) + ":" + getminutes(timeObj.getMinutes()) + "am";
        else return gethours(timeObj.getHours()) + ":" + getminutes(timeObj.getMinutes()) + "pm";
    }

    useEffect(() => {
        const fetchData = () => {
            if(fetchStatus === true)return;
            setfetchStatus(true);
            const starttime = new Date();
            const query = "https://api.weatherapi.com/v1/current.json?key="+ import.meta.env.VITE_API_KEY +"&q=<Your location here>";
            axios.get(query)
                .then((response: AxiosResponse) => {
                    setdateObj(new Date(response.data.location.localtime));
                    setTemp(response.data.current.temp_c);
                    setwheatherText(response.data.current.condition.text);

                    const endtime = new Date();
                    const waittime = delaytime - (endtime.getMilliseconds() - starttime.getMilliseconds());
                    setTimeout(() => {  turnOffLoading(); }, waittime >= 0 ? waittime : 0);
                })
                .catch((error) => {
                    console.log(error);
                    const endtime = new Date();
                    const waittime = delaytime - (endtime.getMilliseconds() - starttime.getMilliseconds());
                    setTimeout(() => {  turnOffLoading(); }, waittime >= 0 ? waittime : 0);
                });
        }

        fetchData();
        /**uncomment this code if you plan on not calling fetchData():
         *  const endtime = new Date();
            const waittime = delaytime - (endtime.getMilliseconds() - starttime.getMilliseconds());
            setTimeout(() => {  turnOffLoading(); }, waittime >= 0 ? waittime : 0);
         */
    }, [])

    return (
        <div className="w-screen flex flex-col items-center overflow-x-hidden" id="landing">
            <div className="w-screen h-[50px]"/>
            <h1 className="text-white_900 mt-[10vh] mxtablet:mt-[20vh] mxdesktop1280:mt-[20px] font-black text-[64px]">Hi I'm</h1>
            <h1 className="outlined-text ml-[10px] mt-[-20px] font-black text-[64px]">Michael</h1>
            <h1 className="text-white_900 mt-[-90px] font-black text-[64px]">Michael</h1>

            <div className="flex flex-wrap mt-[30px] mxtablet:mt-[70px] mxdesktop1280:mt-[30px] ml-[12px] mr-[12px]">
                <h2 className="text-white_900 font-bold text-[24px]">Software engineer</h2>
                <h3 className="text-white_900 font-medium text-[20px] ml-[4px] mt-[4px]">from South Africa,</h3>
            </div>
            <h3 className="text-white_900 font-medium text-[20px] mxtablet:max-w-[60%] ml-[12px] mr-[12px]">
                I enjoy making all types of projects from frontend web development projects to low level systems projects
            </h3>

            <HashLink smooth to="/#works">
                <motion.div className="rounded-full bg-white900 w-[150px] h-[40px] mt-[70px] mxtablet:mt-[180px] mxdesktop1280:mt-[70px]
                    flex justify-center items-center text-black_900 ml-auto mr-auto font-medium text-[16px]"
                    whileHover={{scale: 1.03}}
                    whileTap={{scale: 0.97}}
                >
                    see works
                </motion.div>
            </HashLink>
            <div className="flex justify-between w-[238px] ml-auto mr-auto mt-[70px]">
                <div className="flex">
                    <img className="mr-[10px]" src={(() => getWheatherIcon(wheatherText))() || sun} alt="sun"/>
                    <h3 className="text-white_900 font-medium text-[20px]">{temperature + " c°"}</h3>
                </div>
                <div  className="flex">
                    <h3 className="text-white_900 font-medium text-[20px]">{(() => getTime(dateObj))()}</h3>
                    <img className="ml-[10px]" src={(() => getTimeIcon(dateObj))() || sun} alt="sundown"/>
                </div>
            </div>
        </div>
    )
}

export default Landing
