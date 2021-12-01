import { Divider } from '@mui/material';
import { Box } from '@mui/system';
import { Feature } from 'geojson';
import { Link } from 'react-router-dom';
import './PopupSelected.scss';
import CloseButton from '../../components/CloseButton';
import BottomPopup from '../../components/BottomPopup';

function PopupSelected(props: {
  selected: Feature;
  removeSelection: () => void;
}) {
  const properties = props.selected.properties;

  return (
    properties && (
      <BottomPopup
        zIndex={100}
        bigScreenStyle={{
          marginTop: 'inherit',
          top: '52%',
          height: '85%',
          width: '400px',
          transform: 'translateY(-50%)',
          borderRadius: '10px',
          left: '3em',
          paddingTop: '1.6em',
        }}
      >
        <Box className="header-title">
          <h1 className="header-title-title">
            {properties.name || 'Name unavailable'}
          </h1>
          <CloseButton
            sx={{ marginLeft: 'auto' }}
            onClick={() => {
              props.removeSelection();
            }}
          />
        </Box>
        <Box className="popup-section" sx={{ paddingTop: 0 }}>
          <h2 className="header-title-subheader">
            {properties.category_en || properties.type}
          </h2>
          <Link to={'/loc/' + props.selected.id} id="popup-location-button">
            More information
          </Link>
        </Box>
        <Divider variant="middle" />
        <div className="address">Address</div>
        <div className="address-details">Santa Barbara</div>
        <div className="address-details">CA 93106</div>
        <div className="address-details">United States</div>
      </BottomPopup>
    )
  );
}

export default PopupSelected;
