import React from "react";
import "./Stars.css";
import { IoStar } from "react-icons/io5";

const Stars = ({ rating }) => {
    return (
        <div className="stars">
            {Array.from({ length: 5 }, (_, i) => {
                const starValue = i + 1;
                return (
                    <span
                        key={i}
                        className={`star ${rating >= starValue ? "filled" : ""}`}
                    >
                        <IoStar />
                    </span>
                );
            })}
        </div>
    );
};

export default Stars;