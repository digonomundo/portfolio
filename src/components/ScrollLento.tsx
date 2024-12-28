import { ReactLenis } from "lenis/react";

export const Lentinho = () => {
    return (
        <div>
            <ReactLenis root options={{ lerp: 0.05, syncTouch: true }} />
        </div>
    );
};