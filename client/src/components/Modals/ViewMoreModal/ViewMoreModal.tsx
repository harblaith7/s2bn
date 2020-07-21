import React, {useState, useRef} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import "./ViewMoreModal.scss"

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

type IProps = {
    attendes : {
        name: String,
        email: String,
        phone: String
    }[]
}

export default function TransitionsModal(props: IProps) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  const [emails, setEmails] = useState("")

  const concatEmails = () => {
    let emails = ""
    props.attendes.map(attende => {
      emails += `${attende.email}, `
    })
    return emails
  }

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    setCopySuccess('Copied!');
  };

  const displayUsers: () => JSX.Element[] = () => {
      return props.attendes.map(attende => {
          return (
              <div className="ViewMoreModal__user-section">
                  <p>{attende.name}</p>
                  <p>{attende.phone}</p>
                  <p>{attende.email}</p>
              </div>
          )
      })
  }

  return (
    <div>
      <button type="button" className="MonitorEvent__view-more-btn" onClick={handleOpen}>
        View More
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
          <div className="ViewMoreModal">
            <div className="ViewMoreModal__container">
              {displayUsers()}
            </div>
          <div>
          <input
            type="text"
            ref={textAreaRef}
            value={concatEmails()}
            className="ViewMoreModal__input"
          />
          { document.queryCommandSupported('copy') &&
            (
              <div>
                <button onClick={copyToClipboard} className="ViewMoreModal__copy-btn">Copy Emails</button> 
              </div>
            )
          }
    </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}