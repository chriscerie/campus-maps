import Modal from '@mui/material/Modal';
import CloseButton from '../../components/CloseButton';
import { Container } from '@mui/material';
import './SharePopup.scss';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import MailIcon from '@mui/icons-material/Mail';
import { Button } from '@mui/material';
import { useState } from 'react';

function SharePopup({
  onClose,
  isOpen,
}: {
  onClose: (event: {}) => void;
  isOpen: boolean;
}) {
  const { register, setValue } = useForm<{
    link: string;
    recipient: string;
    body: string;
  }>();
  useEffect(() => {
    setValue('link', window.location.href);
  }, [setValue]);

  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href =
      'mailto:' +
      email +
      '?subject=Shared Campus Map&body= Map Link: ' +
      window.location.href +
      '%0D%0A' +
      body;
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      sx={{
        padding: '3em 1em',
        '@media (min-width: 769px)': {
          padding: '3em 2em',
        },
      }}
    >
      <div id="share-popup-container">
        <div id="share-popup-inner-container">
          <CloseButton
            sx={{
              position: 'absolute',
              right: '1em',
              top: '1em',
            }}
            onClick={() => {
              onClose({});
            }}
          />

          <div id="share-popup-title">Share Maps</div>
          <Container maxWidth="md" id="share-popup-page-container">
            <div id="share-popup-page-inner">
              <form onSubmit={submitForm}>
                <label>Link</label>
                <input {...register('link')} type="text" placeholder="link" />

                <label>Recipient</label>
                <input
                  {...register('recipient')}
                  type="text"
                  placeholder="Email Recipeint"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label>Message</label>
                <textarea
                  {...register('body')}
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />
                <Button
                  type="submit"
                  variant="outlined"
                  color="inherit"
                  startIcon={<MailIcon />}
                  sx={{ textTransform: 'none', fontSize: '1em' }}
                >
                  Share
                </Button>
              </form>
            </div>
          </Container>
        </div>
      </div>
    </Modal>
  );
}

export default SharePopup;
