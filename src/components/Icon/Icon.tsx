import {FC, memo} from 'react';

export interface IconProps extends React.HTMLAttributes<SVGSVGElement> {
  svgRef?: React.Ref<SVGSVGElement>;
  transform?: string;
  viewBox?: string;
  width?: string | number;
}

const Icon: FC<IconProps> = memo(({children, className, svgRef, transform, viewBox, width, ...props}) => (
  <svg
    className={className}
    fill="currentColor"
    ref={svgRef}
    transform={transform}
    viewBox={viewBox || "0 0 128 128"}
    width= {width || "128"}
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    {children}
  </svg>
));

export default Icon;
