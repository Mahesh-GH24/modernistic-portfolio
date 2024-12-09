import Project from '../components/Project'

export default function Portfolio() {
   //Store Projects data in an array
   const projectsData = [
    {
        projectName: "Awesome Weather",
        appURL: "https://awesome-weather.onrender.com",
        githubURL: "https://github.com/Mahesh-GH24/awesome-weather",
        projectImage: "images/weatherapp.jpg"
    },
    {
        projectName: "Wax-on-Wax-off",
        appURL: "https://terrencethe1.github.io/wax-on-wax-off",
        githubURL: "https://github.com/terrencethe1/wax-on-wax-off",
        projectImage: "images/candleset.jpg"
    },
    {
        projectName: "Effortless Readme Generator",
        appURL: "",
        githubURL: "https://github.com/Mahesh-GH24/effortless-readme-generator",
        projectImage: "images/readme.jpg"
    },
    {
        projectName: "Modernistic Portfolio",
        appURL: "https://netlify-mahesh-react-portfolio.netlify.app/",
        githubURL: "https://github.com/Mahesh-GH24/modernistic-portfolio",
        projectImage: "images/projects.jpg"
    },
    {
        projectName: "Awesome Vehicle Builder",
        appURL: "",
        githubURL: "https://github.com/Mahesh-GH24/Vehicle_Builder",
        projectImage: "images/vehiclebuilder.jpg"
    },
    {
        projectName: "Employee Tracker System",
        appURL: "",
        githubURL: "https://github.com/Mahesh-GH24/terrific-cms",
        projectImage: "images/employeetracker.jpg"
    }
]

 
  return (
    <div>
      <h3>Portfolio Page</h3>
      <p>
        This displays all the wonderful projects that I have built over time!
      </p>
      {/* Map results and display the data passed in a loop */}
      < Project projectsData={projectsData} />
    </div>
  );
}

