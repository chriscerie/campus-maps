/* eslint-disable eqeqeq */
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Container, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './index.scss';

function SettingsPage() {
  const { id } = useParams<{ id: string }>();
  const mapInstance = useSelector((state: RootState) => state.mapInstance.map);
  const { register, setValue, handleSubmit } = useForm<{
    profile_picture: string;
    name: string;
    display_name: string;
    college: string;
  }>();

  const currentUser = useSelector((state: RootState) => state.currentUser);

  // Set point
  useEffect(() => {
    if (currentUser) {
      setValue('profile_picture', currentUser.profile_picture || '');
      setValue('name', currentUser.first_name + ' ' + currentUser.last_name);
      setValue(
        'display_name',
        currentUser.first_name + ' ' + currentUser.last_name || ''
      );
      setValue('college', '');
    }
  }, [currentUser, setValue]);

  return (
    <Container maxWidth="md" id="settings-page-container">
      <div id="settings-page-inner">
        <h2>Update settings</h2>
        <form>
          <ul>
            <div id="settings-profile-picture-container">
              <li key="Profile_Picture">
                <label>Profile Picture</label>
                  <br></br>
                <Avatar
                  id="profile-greeting-icon"
                  src={currentUser ? currentUser.profile_picture : ''}
                />
              </li>
              </div>
            <li key="Name">
              <br></br>
              <label>Name</label>
              <input disabled={true} {...register('name')} type="text" />
            </li>
            <li key="display_name">
              <label>Display Name</label>
              <input {...register('display_name')} type="text" />
            </li>
            <li key="College">
              <label>College/University</label>
              <input {...register('college')} type="text" />
            </li>
          </ul>
          <div style={{ marginTop: '2em' }}>
            <Button
              variant="contained"
              disableElevation
              id="settings-submit-button"
              onClick={handleSubmit((data) => {
                axios
                  .post(`/api/v1/locations/loc-edit/${id}`, data)
                  .then((res) => {
                    console.log(res);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              })}
            >
              Submit Changes
            </Button>
            <Link to={`/loc/${id}`} id="settings-cancel-link">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default SettingsPage;
