import React from "react";

// defining type
type Props = {
  img: string;
  alt?: string;
};

// React.FC<Props>: React Functional Component, which take Props as data types
const Avatar: React.FC<Props> = ({ img, alt }) => {
  return (
    <div className="rounded-full overflow-hidden w-full pt-[100%] relative">
      <div className="absolute inset-0">
        <img src={img} alt={alt || img} />
      </div>
    </div>
  );
};

export default Avatar;
