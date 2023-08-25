import React, { FC } from 'react';
import { OptionalProps } from './types';

const Optional: FC<OptionalProps> = ({ children, renderIf = false }) => (
  <>{renderIf ? children : null}</>
);

export default Optional;
