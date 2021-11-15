import { Box, Button, TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import './CommentForm.scss';
import { useSelector } from 'react-redux';
import { RootState } from 'reducers';

function CommentForm({
  locationName,
  locationType,
  isVisible,
  onClose,
}: {
  locationName: string;
  locationType: string;
  isVisible: boolean;
  onClose: () => void;
}) {
  const currentUser = useSelector((state: RootState) => state.currentUser);
  const [userComment, setUserComment] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    //todo: change to actual comment type, update comment type to fit new paramters
    console.log('First Name:', currentUser?.first_name);
    console.log('Last Name:', currentUser?.last_name);
    console.log('Profile pictsure:', currentUser?.profile_picture);
    console.log('Time:', new Date().toLocaleString());
    console.log('Comment:', userComment);
    // ..code to submit form to backend here...

    setUserComment('');
    onClose();
  };

  const handleChange = (event: any) => {
    setUserComment(event.target.value);
  };

  return (
    <div className="comment-form-container">
      <Modal
        open={isVisible}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            bgcolor: 'background.paper',
            border: '1px solid #000',
            boxShadow: 12,
            p: 3,
          }}
        >
          <div className="comment-form-header-container">
            <div className="location-name-container">{locationName}</div>
            <div className="location-type-container">{locationType}</div>
          </div>
          <div className="comment-form-box-container">
            <TextField
              id="outlined-multiline-static"
              onChange={handleChange}
              variant="outlined"
              label="Write a Comment"
              multiline
              rows={13}
              fullWidth
            />
          </div>
          <div className="comment-form-button-container">
            <Button
              onClick={handleSubmit}
              variant="outlined"
              color="inherit"
              sx={{ textTransform: 'none', fontSize: '1em' }}
            >
              Post Comment
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default CommentForm;
