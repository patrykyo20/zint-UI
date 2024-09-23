import { BaseHTMLAttributes } from "react";
import IBasic from "../../types/IBasic";

interface IFlex extends BaseHTMLAttributes<HTMLDivElement>, IBasic {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'start' | 'end' | 'left' | 'right';
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'start' | 'end' | 'self-start' | 'self-end';
  alignContent?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'start' | 'end';
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: string | number;
  gap?: number;
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch' | 'start' | 'end' | 'self-start' | 'self-end';
}

export default IFlex;
