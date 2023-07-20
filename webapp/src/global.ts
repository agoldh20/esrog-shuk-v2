import { ChangeEventHandler, CSSProperties, MouseEventHandler, ReactNode } from 'react';

export interface DefaultProps {
  id?: string;
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
  onChange?: ChangeEventHandler;
  onClick?: MouseEventHandler;
}
