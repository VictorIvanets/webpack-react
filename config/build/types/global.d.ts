declare module "*.jpg";
declare module "*.png";
declare module "*.svg" {
    import React from "react";
    const SVG: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __IS_DEV__: boolean
