import { useNavigate, useParams } from 'react-router';
import './Detail.css';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { MdBackspace } from 'react-icons/md';

export default function Detail({children, heroes}) {

    const {id} = useParams(); // stringa
    
    const hero = heroes ? heroes.find(h => h.id.toString() === id.toString()) : {};

    const navigate = useNavigate();

    const {isDarkMode} = useContext(ThemeContext);

    return(
        <>
            
            {children}
            <div className={isDarkMode ? 'hero-detail-card dark' : 'hero-detail-card light'}>
            <h2>{hero.name} </h2>
            <p>eta:  {hero.age}</p>
            <p>genere: {hero.gnre} </p>
            <img src={hero.img_url} alt={hero.name} />
            <p>poteri: {hero.powers}</p>
            <p>stato:  {hero.is_alive ? 'vivo' : 'morto'}</p>
            
            </div>

            <button onClick={() => navigate('/')}><MdBackspace style={{fontSize: '50px'}}/></button>
        </>


    );
}