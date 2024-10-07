import React, { forwardRef } from "react";

const MyInput = forwardRef(function MyInput(props, ref) {
  const { label, ...otherProps } = props;

  return (
    <div>
      <label>
        {label}
        <input {...otherProps} ref={ref} />
      </label>
    </div>
  );
});

export default MyInput;
