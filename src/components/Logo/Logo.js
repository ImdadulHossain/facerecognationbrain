import Tilt from 'react-tilt'
import './Logo.css';
import face from './icons8-face-id-64.png'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
           <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
               <div className="Tilt-inner pa3"> <img style={{width: '200%'}} alt='face-logo' src={face}/> </div>
             </Tilt>

        </div>
    );
}





export default Logo;