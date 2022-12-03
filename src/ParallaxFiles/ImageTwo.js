import { Parallax } from 'react-parallax';
import Universe from '../resources/imgs/universe.jpeg'
import '../resources/css/donate.css'

const ImageTwo = () => (
    <Parallax className='ImageOne' blur={2} bgImage={Universe} bgImageAlt="Universe" strength={500}>
        <div className='donate-text'>
            <h1>PayPal</h1>
        </div>
    </Parallax>
);

export default ImageTwo