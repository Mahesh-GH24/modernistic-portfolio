import { Link } from 'react-router-dom';

function Project() {
    return (
        <div className="projects">
            <section className="card">
                <header>Awesome Weather</header>
                <Link
                to ="https://www.google.com/"
                >
                <img src="images/weatherapp.jpg" alt="Project Image" />
                </Link>
                <p>Application URL    : https://awesome-weather.onrender.com</p>
                <p>GitHub URL         : https://github.com/Mahesh-GH24/awesome-weather</p>
             </section>
            
            <section className="card">
                <header>Wax-on-Wax-off</header>
                <img src="images/candleset.jpg" alt="Project Image" />
                <p>Application URL    : https://terrencethe1.github.io/wax-on-wax-off</p>
                <p>GitHub URL         : https://github.com/terrencethe1/wax-on-wax-off</p>
            </section>
       
            <section className="card">
                <header>Effortless Readme Generator</header>
                <img src="images/readme.jpg" alt="Project Image" />
                <p>Application URL    : None</p>
                <p>GitHub URL         : https://github.com/Mahesh-GH24/effortless-readme-generato</p>
            </section>
       
            <section className="card">
                <header>Modernistic Portfolio</header>
                <img src="images/projects.jpg" alt="Project Image" />
                <p>Application URL    : None</p>
                <p>GitHub URL         : https://github.com/Mahesh-GH24/modernistic-portfolio</p>
            </section>
        
            <section className="card">
                <header>Awesome Vehicle Builder</header>
                <img src="images/vehiclebuilder.jpg" alt="Project Image" />
                <p>Application URL    :None</p>
                <p>GitHub URL         : https://github.com/Mahesh-GH24/Vehicle_Builder</p>
            </section>
       
            <section className="card">
                <header>Employee Tracker System</header>
                <img src="images/employeetracker.jpg" alt="Project Image" />
                <p>Application URL    : None</p>
                <p>GitHub URL         : https://github.com/Mahesh-GH24/terrific-cms</p>
            </section>
        </div>               
    );
}

export default Project;