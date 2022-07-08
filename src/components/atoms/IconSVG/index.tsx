/**
 * @author Asish Kalintha <asish.sugun@zemosolabs.com>
 */


import { SvgIcon } from '@mui/material';
import { CommonProps } from '@mui/material/OverridableComponent';
import * as React from 'react';
interface SvgProps{
  component : React.ElementType;
  htmlColor? : string;
}

const CustomSvgIcon:React.FC<SvgProps & CommonProps> = ({ component, htmlColor} ) => {
  return (
    <SvgIcon
      data-testid='SVGIcon'
      component={component}
      inheritViewBox
      fontSize='medium'
      htmlColor={htmlColor}      
    />
  );
};

export default CustomSvgIcon;
