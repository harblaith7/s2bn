import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import LoginForm from "./LoginForm/LoginForm"
import SignUpForm from "./SignUpForm/SignUpForm"
import Alert from '../Alert/Alert'
import './AuthModal.scss'
import {connect} from 'react-redux'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

 function TransitionsModal(props: any) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(true)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="Header__modal-container">
      <button type="button" className="Header__about-btn Header__about-btn-modal" onClick={handleOpen}>
        Login In
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="AuthModal">
            {
                isLogin ? (
                    <>
                        {props.alert && <Alert/>}
                        <h2 className="AuthModal__title">Login</h2>
                        <p className="AuthModal__blurb">Log in as an administrator</p>
                        <LoginForm
                            switchStates = {setIsLogin}
                        />
                    </>
                ) : (
                    <>
                        {props.alert && <Alert alertType={1}/>}
                        <h2 className="AuthModal__title">Sign Up</h2>
                        <p className="AuthModal__blurb">Only administrator can sign up</p>
                        <SignUpForm
                            switchStates = {setIsLogin}
                        />
                </> 
                )
            }
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  alert: state.alert
})

export default connect(mapStateToProps)(TransitionsModal)