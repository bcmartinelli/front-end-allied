import React from 'react';
import { TextField ,FormHelperText } from '@mui/material';

const RenderedTextField = ({
  input,
  value,
  label,
  meta: { touched, error },
  noPaste,
  onChangeValue,
  ...custom
}) => (
  <div>
    <TextField
      label={label}
      margin="dense"
      size="small"
      fullWidth
      error={touched && !!error}
      variant="outlined"
      value={value}
      {...input}
      {...custom}
      onChange={(e) => input.onChange(e)}
    />
    {touched && !!error ? (
      <FormHelperText error={touched && !!error}>{error}</FormHelperText>
    ) : null}
  </div>
)

export default RenderedTextField
