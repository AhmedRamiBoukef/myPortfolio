import simple from "../../images/projects/simple.png"
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LaunchIcon from '@mui/icons-material/Launch';


const l = [
    {
        title: "Simple Protfolio",
        tags: ["Html","CSS","JS"],
        photo: simple,
        description: "Simple Portfolio is a web project developed with HTML, CSS, and JavaScript aimed at showcasing an individual's skills, experience, and projects in a clear and concise manner.",
        links: [
            
            {
                icon:<LaunchIcon className="text-red-600"/>, 
                link:"https://ahmedramiboukef.github.io/Simple-Potfolio/", 
            },
            {
                icon:<GitHubIcon className="text-red-600"/>, 
                link:"https://github.com/AhmedRamiBoukef/Simple-Potfolio", 
            },
        ],
    },
    {
        title: "Movies Website",
        tags: ["NextJS","TailwindCSS","MoviesAPI"],
        photo: "https://img.youtube.com/vi/kwM9h8GqSJ0/maxresdefault.jpg",
        description: "MoviesWebsite is a comprehensive platform showcasing movies from all genres,along with their rating, description,and release date.It also features trending movies and a wide selection of TV series.",
        links: [
            {
                icon:<LaunchIcon className="text-red-600"/>, 
                link:"movies-website-delta.vercel.app", 
            },
            {
                icon:<GitHubIcon className="text-red-600"/>, 
                link:"https://github.com/AhmedRamiBoukef/MoviesWebsite", 
            },
            {
                icon:<YouTubeIcon className="text-red-600"/>, 
                link:"https://youtu.be/kwM9h8GqSJ0", 
            },
        ],
    },
    {
        title: "Estato",
        tags: ["NextJS","Django","TailwinCSS","ReactQuery"],
        photo: "https://img.youtube.com/vi/N-NDgJStL8I/maxresdefault.jpg",
        description: "This is a real estate web application allowing the user to publish and consult the real estate listings added by users. built with Next.js TailwindCSS React Query.",
        links: [
            {
                icon:<GitHubIcon className="text-red-600"/>, 
                link:"https://github.com/AhmedRamiBoukef/tpIGL", 
            },
            {
                icon:<YouTubeIcon className="text-red-600"/>, 
                link:"https://youtu.be/N-NDgJStL8I", 
            },
        ],
    }
]

export default l;