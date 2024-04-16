
function Project(props) {

    const projectsList =  [{id: 1,
                            imgLink: "",
                            alt: "github/colab/ipynb",
                            projectName: "Project Name 1",
                            projectDescription: "Short description about the project"},
                            {id: 2,
                            imgLink: "",
                            alt: "github/colab/ipynb",
                            projectName: "Project Name 2",
                            projectDescription: "Short description about the project"},
                            {id: 3,
                            imgLink: "",
                            alt: "github/colab/ipynb",
                            projectName: "Project Name 3",
                            projectDescription: "Short description about the project"},
                            {id: 4,
                            imgLink: "",
                            alt: "github/colab/ipynb",
                            projectName: "Project Name 4",
                            projectDescription: "Short description about the project"},
                            {id: 5,
                            imgLink: "",
                            alt: "github/colab/ipynb",
                            projectName: "Project Name 5",
                            projectDescription: "Short description about the project"}]

    const projectListItems = projectsList.map(project =>    <div className="project" key={project.id}>
                                                                <img src={project.imgLink} alt={project.alt}/>
                                                                <h2>{project.projectName}</h2>
                                                                <p>{project.projectDescription}</p>
                                                            </div>)

    return(
        projectListItems
    );
}

Project.defaultProps = {
    projectLink: "",
    projectName: "Project",
    projectDescription: "Short description about the project"
}

export default Project