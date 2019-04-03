import * as React from 'react';

import './inject';

interface Props {
  size: number,
  spinnerColor: string,
  spinnerWidth: number,
  visible: boolean,
  [key: string]: any
}

const Spinner = ({ visible = true, spinnerColor = '#333333', spinnerWidth = 5, size = 40, ...rest }: Props) => 
  !visible 
    ? null
    : (
      <div
        {...rest}
        className="spinner"
        style={{
            width: size,
            height: size,
            borderColor: spinnerColor,
            borderWidth: spinnerWidth
        }} 
      />
    );

export default Spinner;