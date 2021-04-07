import {useState} from 'react';
import style from './Projects.module.scss';
const Projects = () => {
    const [projects, setProjects] = useState(
        [
            
            {title:'FRONT', front:true, back:false},
            {title:'BACK', front:false, back:true},
            {title:'FRONT', front:true, back:false},
            {title:'BACK', front:false, back:true},
            {title:'FULL', front:true, back:true},
            {title:'FULL', front:true, back:true},
            
    ]
    );
    const [categories, setCategories] = useState(
        [
        {title:'ALL'},
        {title:'FRONT'},
        {title:'BACK',},
        {title:'FULL',},
    ]
);

    const [active, setActive] = useState(0);

    //Filter by categories
    const filter = projects.filter((x) => {
        if(active == 0) return x;
        if(active == 1) return x.front == true && x.back == false;
        if(active == 2) return x.front == false && x.back == true;
        if(active == 3) return x.front == true && x.back == true;
    });
    

    
    
    return <div className={style.container}>
        <h1>Projects</h1>
        <div className={style.categories}>
           {categories.map((x,i)=>
               <p className={`${active == i && 'active'}`} onClick={()=>{setActive(i)}} key={i}>{x.title}</p>
           )}
        </div>
        <div className={style.wrapper}>
        {filter.map((x,i) => <div key={i} className={`${style.flex}`}>
            <p><i className={x.icon}></i></p>
            <p>{x.title}</p>
            {/* <p>{x.caption}</p> */}
        </div>)}
        </div>
    </div>
}
 
export default Projects;