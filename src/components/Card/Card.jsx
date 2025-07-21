import './Card.css';
import { useState } from 'react';

function Card({ frontContent, backContent }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
            <div className="flip-card-inner">
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