import { useState } from "react";
import {motion} from "framer-motion";
import React from "react";

type CardProps = {
    title: string;
    message: string;
    image: string;
};

export const AdviceCard: React.FC<CardProps> = ({title, message, image}) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="card" onClick={()=> setFlipped(!flipped)}>
            <motion.div
            animate={{rotateY: flipped ? 180 : 0}}
            transition={{duration: 0.8}}
            style={{transformStyle: "preserve-3d"}}
            >
            {/*Front of Card */}
            <div>
                <img className="image" src={image} alt="" />
            </div>
            <div className="card-text">
                <h3>{title}</h3>
                <p>{message}</p>
            </div>
            </motion.div>
        </div>
    );
};