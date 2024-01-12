"use client";

const { default: ReactLenis } = require("@studio-freight/react-lenis");


function SmoothScrolling({children}) {
return(
    <ReactLenis root options={{lerp: 0.1, duration: 1.5, smoothTouch: true}}>
        {children}
    </ReactLenis>
)
}
export default SmoothScrolling;