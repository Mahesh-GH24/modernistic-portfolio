import { Link } from 'react-router-dom';

function Project(props) {
    console.log(props);

    return (
        <div className="projects">
            {/* Pass our array of project data to the Portfolio page to map over */}
            {props.projectsData.map((projectData) => (
                <section className="card">
                    <header>{projectData.projectName}</header>
                    <Link
                        to={projectData.appURL}
                    >
                        <img src={projectData.projectImage} alt="Project Image" width="500" height="300" />
                    </Link>
                    {/* <p>Application URL:
                        <Link
                            to={projectData.appURL}
                        >
                            {projectData.appURL}
                        </Link>
                    </p> */}
                    <p id="link">
                        <Link
                            to={projectData.githubURL}
                        >
                            {projectData.githubURL}
                        </Link>
                    </p>
                </section>
            ))}
        </div>
    );
}

export default Project;