import React from 'react';
import SkillsSection from './SkillsSection';

const Skills=()=>{
    return(
        <>
        <div id="Skills">
        <div className="skillsHeading">
               <h1>My Skills</h1>
        </div>
        <div className="skillsContainer">
                <SkillsSection skill={'HTML'} progress={'60%'} width={'60%'}  color={'#ff0000'}/>
                <SkillsSection skill={'CSS'} progress={'40%'} width={'40%'}  color={'#ff1493'} />
                <SkillsSection skill={'Bootstrap'} progress={'80%'} width={'80%'} color={'#8F00FF'} />
                <SkillsSection skill={'JavaScript'} progress={'45%'} width={'45%'}  color={'#00FF00'}/>
                <SkillsSection skill={'Python'} progress={'75%'} width={'75%'}  color={'#0000FF'}/>
                <SkillsSection skill={'C'} progress={'70%'} width={'70%'}  color={'#964B00'}/>
                <SkillsSection skill={'C++'} progress={'40%'} width={'40%'}  color={'#00bfff'}/>
                <SkillsSection skill={'Java'} progress={'60%'} width={'60%'}  color={'#FFA500'}/>
                <SkillsSection skill={'SQL'} progress={'60%'} width={'60%'}  color={'#fff'}/>
                <SkillsSection skill={'React.Js'} progress={'10%'} width={'10%'} color={'#FFB6C1'} />
             
            </div>
            </div>
            </>
    );

}

export default Skills;
