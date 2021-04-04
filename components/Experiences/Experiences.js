import {useState} from 'react';
import style from './Experiences.module.scss';
const Experiences = () => {
    const [experience, setExperience] = useState(
        [
        {icon:'icon',title:'title', caption:'caption'},
        {icon:'icon',title:'title', caption:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, aperiam? Eaque illo debitis architecto quibusdam! Esse aperiam voluptates quos placeat, dolorem expedita enim eos nisi, qui ipsa a officia magni.' },
        {icon:'icon',title:'title', caption:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, aperiam? Eaque illo debitis architecto quibusdam! Esse aperiam voluptates quos placeat, dolorem expedita enim eos nisi, qui ipsa a officia magni.' },
        {icon:'icon',title:'title', caption:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, aperiam? Eaque illo debitis architecto quibusdam! Esse aperiam voluptates quos placeat, dolorem expedita enim eos nisi, qui ipsa a officia magni.' },
        
        
        
        
    ]
    );

    
    return <div className={style.container}>
        {experience.map(x => <div className={style.flex}>
            <p><i class="fas fa-heart"></i></p>
            <p>{x.title}</p>
            <p>{x.caption}</p>
        </div>)}
    </div>
}
 
export default Experiences;