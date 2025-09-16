
"use client";

import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

export const useConfetti = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const fire = () => {
        if (isClient) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
            });
        }
    };

    return { fire };
};
