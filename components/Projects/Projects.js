import {useState} from 'react';
import style from './Projects.module.scss';
const Projects = () => {
    const [projects, setProjects] = useState(
        [
            {id:1, title:'Documents', img:'https://i.postimg.cc/mgXcQJpz/documents.png', front:true, back:true, description:'lorem', link:'/', github:'https://github.com/iCode-Cat/Guide-creator'},
            {id:2,title:'Documents', img:'https://i.postimg.cc/mgXcQJpz/documents.png', front:true, back:true, description:'lorem', link:'/', github:'/'},
    ]
    );
    const [categories, setCategories] = useState(
        [
        {title:'ALL'},
        {title:'FRONT-END'},
        {title:'BACK-END',},
        {title:'FULL-STACK',},
    ]
);

    const [active, setActive] = useState(0);
    const [toggle, setToggle] = useState([]);


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
        {filter.map((x,i) => <div onMouseEnter={()=>setToggle(x.id)} onMouseLeave={()=>setToggle(false)} style={{backgroundImage:`${'url('+x.img +')'}`, backgroundSize:'cover'}} key={i} className={`${style.flex}`}>
            <p><i className={x.icon}></i></p>
            {toggle == x.id ? <div className={style.details}>
            <p>{x.title}</p>
            <a target='_blank' href={x.github}><i className="devicon-github-original-wordmark colored"></i></a>
            <a target='_blank'  href={x.link}><button>Preview</button></a>
            </div>:''}
            {/* <p>{x.caption}</p> */}
        </div>)}
        </div>
    </div>
}
 
export default Projects;