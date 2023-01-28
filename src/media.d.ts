/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module "*.jpg" {
  export const ReactComponent: any;
  const src: string;
  export default src;
}

declare module "*.webp" {
  export const ReactComponent: any;
  const src: string;
  export default src;
}
