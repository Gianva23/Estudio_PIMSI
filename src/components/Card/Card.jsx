import './Card.css';
import { useState } from 'react';
import { ReactComponent as Flipicon } from '../../assets/images/icons_flip.svg';

function Card({ frontContent, backContent }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
            <div className="flip-card-inner">
                <div className='container-flip-icon'><Flipicon className='flip-icon'/></div>
                <div className="flip-card-front">
                    {frontContent}
                </div>
                <div className="flip-card-back">
                    {backContent}
                </div>
            </div>
        </div>
    );
}

export default Card;