import React, { useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import SnackAuth from './SnackAuth';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackBarU = (props,{func}) => {
  let open = props.Status;
  const [op , setOpen] = React.useState(open);

  useEffect(() => {
    setOpen(open);
  }, [open]);


  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    props.hello(false);
    setOpen(false);
  };

  return (
    <Snackbar open={op} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {props.response}
        </Alert>
      </Snackbar>
  );
};

export default SnackBarU;
