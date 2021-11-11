/* eslint-disable eqeqeq */
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { getLocationInfo } from '../../api/LocationAPI';
import './index.scss';

function LocationEditPage() {
  const { id } = useParams<{ id: string }>();
  const mapInstance = useSelector((state: RootState) => state.mapInstance.map);
  const [formValue, setFormValue] = useState<{
    name: string;
    address1: string;
  }>({
    name: '',
    address1: '',
  });

  // Set point
  useEffect(() => {
    if (mapInstance) {
      getLocationInfo(id, mapInstance).then((res) => {
        if (res) {
          setFormValue({
            name: res.name || '',
            address1: '',
          });
        }
      });
    }
  }, [id, mapInstance]);

  return (
    <Container maxWidth="md" id="location-edit-page-container">
      <div id="location-edit-page-inner">
        <h2>Update location details</h2>
        <p>Any changes are subject to moderation.</p>
        <form>
          <ul>
            <li>
              <label>Name</label>
              <input
                name="LocationName"
                placeholder="Main Hall"
                value={formValue.name}
              />
              <label>Address 1</label>
              <input
                name="Address1"
                placeholder="123 Main St"
                value={formValue.address1}
              />
            </li>
          </ul>
        </form>
      </div>
    </Container>
  );
}

export default LocationEditPage;
