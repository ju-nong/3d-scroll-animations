import React from "react";
import Spline from "@splinetool/react-spline";

function bimo() {
    function test() {
        console.log("load!");
    }
    return (
        <Spline
            scene="https://prod.spline.design/xszKWkM3ewuUvvyv/scene.splinecode"
            onLoad={test}
        />
    );
}

export { bimo as default };
