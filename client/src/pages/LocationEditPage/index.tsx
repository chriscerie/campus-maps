/* eslint-disable eqeqeq */
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Container, Button, Grid } from '@mui/material';
import { Close } from '@mui/icons-material';
import { useForm, useFieldArray } from 'react-hook-form';
import axios from 'axios';
import { getLocationInfo } from '../../api/LocationAPI';
import { StatesList } from '../../types/StatesList';
import './index.scss';

function LocationEditPage() {
  const { id } = useParams<{ id: string }>();
  const mapInstance = useSelector((state: RootState) => state.mapInstance.map);
  const { register, control, setValue, handleSubmit, getValues } = useForm<{
    name: string;
    type: string;
    description: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip_code: string;
    rooms: Array<{
      room_name: string;
    }>;
  }>({
    shouldUnregister: false,
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'rooms',
  });

  // Set point
  useEffect(() => {
    if (mapInstance) {
      getLocationInfo(id, mapInstance).then((res) => {
        if (res) {
          setValue('name', res.name || '');
          setValue('type', res.type || '');
          setValue('description', res.description || '');
          setValue('address1', res.address1 || '');
          setValue('address2', res.address2 || '');
          setValue('city', res.city || '');
          setValue('state', res.state || '');
          setValue('zip_code', res.zip_code || '');
          setValue('rooms', res.rooms || [{ room_name: '' }]);
        }
      });
    }
  }, [id, mapInstance, setValue]);

  return (
    <Container maxWidth="md" id="location-edit-page-container">
      <div id="location-edit-page-inner">
        <h2>Update location details</h2>
        <p>All changes are subject to moderation.</p>
        <form>
          <ul>
            <li key="Name">
              <label>Name</label>
              <input
                disabled={true}
                {...register('name')}
                type="text"
                placeholder="Main Hall"
              />
            </li>
            <li key="Type">
              <label>Type</label>
              <input
                {...register('type')}
                type="text"
                placeholder="University Building"
              />
            </li>
            <li key="Description">
              <label>Description</label>
              <textarea {...register('description')} />
            </li>
            <li key="Address1">
              <label>Address 1</label>
              <input
                {...register('address1')}
                type="text"
                placeholder="123 Main St"
              />
            </li>
            <li key="Address2">
              <label>Address 2</label>
              <input
                {...register('address2')}
                type="text"
                placeholder="123 Main St"
              />
            </li>
            <li key="City">
              <label>City</label>
              <input
                {...register('city')}
                type="text"
                placeholder="San Francisco"
              />
            </li>

            <li key="State">
              <label>State</label>
              <select {...register('state')}>
                {Object.entries(StatesList).map(([key, state]) => {
                  return (
                    <option key={key} value={key}>
                      {state}
                    </option>
                  );
                })}
              </select>
            </li>

            <li key="ZIP">
              <label>ZIP Code</label>
              <input
                {...register('zip_code')}
                type="text"
                placeholder="11111"
              />
            </li>

            <li key="Rooms">
              <label>Room Numbers</label> <br />
              {fields.map((item, index) => (
                <Grid container item xs={12}>
                  <Grid item>
                    <input
                      {...register(`rooms.${index}.room_name` as const)}
                      type="text"
                      placeholder={'1111'}
                    />
                  </Grid>
                  {fields.length > 1 && index < fields.length - 1 && (
                    <Grid item>
                      <Button
                        id="remove-classroom-button"
                        onClick={() => {
                          if (fields.length > 1) {
                            remove(index);
                          }
                        }}
                      >
                        <Close id="close-icon" />
                      </Button>
                    </Grid>
                  )}
                </Grid>
              ))}
              <Button
                variant="contained"
                disableElevation
                id="location-edit-add-class-button"
                onClick={() => {
                  const lastRoom =
                    getValues('rooms')[getValues('rooms').length - 1];
                  if (lastRoom.room_name !== '') {
                    append({
                      room_name: '',
                    });
                  }
                }}
              >
                Add
              </Button>
            </li>
          </ul>
          <div style={{ marginTop: '2em' }}>
            <Button
              variant="contained"
              disableElevation
              id="location-edit-submit-button"
              onClick={handleSubmit((data) => {
                console.log(data);
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
            <Link to={`/loc/${id}`} id="location-edit-cancel-link">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default LocationEditPage;
