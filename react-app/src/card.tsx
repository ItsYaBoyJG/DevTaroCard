import { useState } from "react";
import {motion} from "framer-motion";
import React from "react";

type CardProps = {
    title: string;
    message: string;
};

export const AdviceCard: React.FC<CardProps> = ({title, message}) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div onClick={()=> setFlipped(!flipped)}>
            <motion.div
            animate={{rotateY: flipped ? 180 : 0}}
            transition={{duration: 0.8}}
            style={{transformStyle: "preserve-3d"}}
            >
            {/*Front of Card */}
            <div>

            </div>
            <div>
                <h3>{title}</h3>
                <p>{message}</p>
            </div>
            </motion.div>
        </div>
    );
};