import React, { useState } from "react";
import './ReviewText.css'

const ReviewText = ({ text, limit = 120 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    const displayText = text.length > limit && !isExpanded? text.substring(0, limit) + "...": text;

    return (
        <p className="review-text">
            {displayText}{" "}
            {text.length > limit && (
                <span
                    className="see-more"
                    onClick={toggleExpand}
                >
                    {isExpanded ? "ver menos" : "ver más"}
                </span>
            )}
        </p>
    );
};

export default ReviewText;
