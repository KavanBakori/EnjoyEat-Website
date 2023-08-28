import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function FooterStyles() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Box>
  );
}

export default FooterStyles;
