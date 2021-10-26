import { Container, Divider, Paper } from '@mui/material';
import { Box } from '@mui/system';
import { Feature } from 'geojson';
import './PopupSelected.scss';
import CloseButton from '../../components/CloseButton';
import { Link } from 'react-router-dom';

function PopupSelected(props: {
  selected: Feature;
  removeSelection: () => void;
}) {
  const properties = props.selected.properties;

  return (
    properties && (
      <Container
        className="popup-selected-container"
        maxWidth="xl"
        sx={{
          padding: 0,
        }}
      >
        <Paper elevation={3} className="popup-selected">
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
        </Paper>
      </Container>
    )
  );
}

export default PopupSelected;
