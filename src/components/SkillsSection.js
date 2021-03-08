import React from 'react';

const SkillsSection=({skill,progress,width,color})=>{
    return(
        <>
        <div className="SkillsSection" >
            <div className="skills-container">
                <h5 className="skill-title">{skill}</h5>
                <div className="skill-bar">
                    {/* <p className="skill-text">{progress}</p> */}
                    <div className="skill-progress">
                        <div className="progress">
                            <div className="inner-pregress" style={{width:width,backgroundColor:color}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    );
}

export default SkillsSection;
