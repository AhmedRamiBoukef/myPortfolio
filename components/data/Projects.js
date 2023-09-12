import simple from "../../images/projects/simple.png";
import AISmarty from "../../images/AISmarty.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LaunchIcon from "@mui/icons-material/Launch";

const l = [
  {
    title: "Simple Protfolio",
    tags: ["Html", "CSS", "JS"],
    photo: simple,
    description:
      "Simple Portfolio is a web project developed with HTML, CSS, and JavaScript aimed at showcasing an individual's skills, experience, and projects in a clear and concise manner.",
    links: [
      {
        icon: <LaunchIcon className="text-red-600" />,
        link: "https://ahmedramiboukef.github.io/Simple-Potfolio/",
      },
      {
        icon: <GitHubIcon className="text-red-600" />,
        link: "https://github.com/AhmedRamiBoukef/Simple-Potfolio",
      },
    ],
  },
  {
    title: "Movies Website",
    tags: ["NextJS", "TailwindCSS", "MoviesAPI"],
    photo: "https://img.youtube.com/vi/kwM9h8GqSJ0/maxresdefault.jpg",
    description:
      "MoviesWebsite is a comprehensive platform showcasing movies from all genres,along with their rating, description,and release date.It also features trending movies and a wide selection of TV series.",
    links: [
      {
        icon: <LaunchIcon className="text-red-600" />,
        link: "https://movieswebsite.vercel.app/",
      },
      {
        icon: <GitHubIcon className="text-red-600" />,
        link: "https://github.com/AhmedRamiBoukef/MoviesWebsite",
      },
      {
        icon: <YouTubeIcon className="text-red-600" />,
        link: "https://youtu.be/kwM9h8GqSJ0",
      },
    ],
  },
  {
    title: "Estato",
    tags: ["NextJS", "Django", "TailwinCSS", "ReactQuery"],
    photo: "https://img.youtube.com/vi/N-NDgJStL8I/maxresdefault.jpg",
    description:
      "This is a real estate web application allowing the user to publish and consult the real estate listings added by users. built with Next.js TailwindCSS React Query.",
    links: [
      {
        icon: <GitHubIcon className="text-red-600" />,
        link: "https://github.com/AhmedRamiBoukef/tpIGL",
      },
      {
        icon: <YouTubeIcon className="text-red-600" />,
        link: "https://youtu.be/N-NDgJStL8I",
      },
    ],
  },
  {
    title: "AISmarty",
    tags: ["NextJS", "ClerkAUTH", "TailwinCSS", "ShadcnUI"],
    photo: AISmarty,
    description:
      "AISmarty is a versatile SaaS platform that integrates chatbot, image, music, video, and code generators, providing users with a one-stop solution for creative content creation and automation.",
    links: [
      {
        icon: <LaunchIcon className="text-red-600" />,
        link: "https://ai-smarty.vercel.app/",
      },
      {
        icon: <GitHubIcon className="text-red-600" />,
        link: "https://github.com/AhmedRamiBoukef/AISmarty",
      },
    ],
  },
  {
    title: "BlazeBlocker",
    tags: ["Arduino", "YOLO", "CV", "DL"],
    photo:
      "https://res.cloudinary.com/hackjunction/image/upload/c_fill,q_auto/v1/junctionapp/projects/junctionx-algiers-2023/SCg7LA_5c/fv4n6lwskmu1mtdbyqvb",
    description:
      "BlazeBlocker is an AI-enabled fire detection and suppression system that detects small traces of fires using a camera and deep learning model. It immediately activates a water-pump / cannon to put out the fire.",
    links: [
      {
        icon: <LaunchIcon className="text-red-600" />,
        link: "https://eu.junctionplatform.com/dashboard/junctionx-algiers-2023",
      },
      {
        icon: <GitHubIcon className="text-red-600" />,
        link: "https://github.com/AhmedRamiBoukef/junction-FireDetection.git",
      },
      {
        icon: <YouTubeIcon className="text-red-600" />,
        link: "https://drive.google.com/file/d/1lVEwTyi3qJjpKUl9FuOVZMwXotjzE7Gn/view?usp=sharing",
      },
    ],
  },
];

export default l;
