import style from './Profile.module.scss'
import Image from 'next/image';

const Profile = () => {
    return <div className={style.container}>
     <Image width={120} height={120} src='/images/me.jpg'/>
        <div className={style.description}>
            <div className={style.text}>
            Hello! I’m Daniel Curry. Web designer from USA, California, San Francisco. I have rich experience in web site design and building, also I am good at wordpress. I love to talk with you about our unique.
            </div>
            <div className={style.placeholders}>
                <div>
                    <span>Age: <span className={style.white}>22</span> </span>
                    <span>Freelance: <span className={style.white}>Available</span></span>
                    <span>Phone: <span className={style.white}>+1 256 254 84 56</span></span>
                </div>
                <div>
                    <span>Residence: <span className={style.white}>Ukraine</span></span>
                    <span>Adress: <span className={style.white}>Kyiv / Ukraine</span></span>
                    <span>E-mail: <span className={style.white}>bussines_dev@gmail.com</span></span>
                </div>
            </div>
        </div>
    </div>
}
 
export default Profile;