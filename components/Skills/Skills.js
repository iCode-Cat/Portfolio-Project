import {useState} from 'react';
import style from './Skills.module.scss';
const Skills = () => {
    const [skills, setSkills] = useState(
        [
            
        {icon:'devicon-html5-plain',title:'HTML', caption:'caption'},
        {icon:'devicon-css3-plain',title:'CSS', caption:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, aperiam? Eaque illo debitis architecto quibusdam! Esse aperiam voluptates quos placeat, dolorem expedita enim eos nisi, qui ipsa a officia magni.' },
        {icon:'devicon-javascript-plain',title:'JAVASCRIPT', caption:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, aperiam? Eaque illo debitis architecto quibusdam! Esse aperiam voluptates quos placeat, dolorem expedita enim eos nisi, qui ipsa a officia magni.' },
        {icon:'devicon-react-original',title:'REACT', caption:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, aperiam? Eaque illo debitis architecto quibusdam! Esse aperiam voluptates quos placeat, dolorem expedita enim eos nisi, qui ipsa a officia magni.' },
        {icon:'devicon-nodejs-plain',title:'NODE.JS', caption:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, aperiam? Eaque illo debitis architecto quibusdam! Esse aperiam voluptates quos placeat, dolorem expedita enim eos nisi, qui ipsa a officia magni.' },
        {icon:'devicon-express-original',title:'EXPRESS.JS', caption:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, aperiam? Eaque illo debitis architecto quibusdam! Esse aperiam voluptates quos placeat, dolorem expedita enim eos nisi, qui ipsa a officia magni.' },
        {icon:'devicon-mongodb-plain',title:'MONGODB', caption:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, aperiam? Eaque illo debitis architecto quibusdam! Esse aperiam voluptates quos placeat, dolorem expedita enim eos nisi, qui ipsa a officia magni.' },
    ]
    );

    
    return <div className={style.container}>
        <h1>Coding Skills</h1>
        {skills.map((x,i) => <div key={i} className={style.flex}>
            <p><i className={x.icon}></i></p>
            <p>{x.title}</p>
            {/* <p>{x.caption}</p> */}
        </div>)}
    </div>
}
 
export default Skills;