import React from 'react';

const Projects = () => {
    return (
        <>
            <div className="project-section" id="Projects">
                <div className="section-title">
                    <h1>
                        My Projects
            </h1>
                </div>
                <div className="row">
                    <div className="column">
                        <div className="card">
                            <img src="/images/Project_image1.png" alt="Avatar" className="image" />
                            <div className="container">
                                <h4><b>CampusSathi</b></h4>
                            </div>
                        </div>

                    </div>
                
                    <div className="column">
                        <div className="card">
                            <img src="/images/Home.png" alt="Avatar" className="image" />
                            <div className="container">
                                <h4><b>Axis Exam Portal</b></h4>
                                
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </>
    );

}

export default Projects;