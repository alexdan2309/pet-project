import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="150" cy="126" r="125" />
    <rect x="27" y="313" rx="10" ry="10" width="280" height="88" />
    <rect x="29" y="413" rx="10" ry="10" width="90" height="45" />
    <rect x="129" y="413" rx="25" ry="25" width="150" height="45" />
    <rect x="20" y="268" rx="10" ry="10" width="260" height="28" />
  </ContentLoader>
);
