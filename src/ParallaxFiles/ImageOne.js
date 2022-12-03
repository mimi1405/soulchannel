import { Parallax } from 'react-parallax';
import Universe from '../resources/imgs/universum.jpg'

const ImageOne = () => (
    <Parallax className='ImageOne' blur={2} bgImage={Universe} bgImageAlt="Universe" strength={500}>
        <div className='donate-text'>
            <h1>DONATE</h1>
        </div>
    </Parallax>
);

export default ImageOne