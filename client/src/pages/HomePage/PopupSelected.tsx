import { Button, Container, Divider, Paper } from '@mui/material';
import { Box } from '@mui/system';
import { Feature } from 'geojson';
import './PopupSelected.scss';
import CloseButton from '../../components/CloseButton';

function PopupSelected(props: {
  selected: Feature;
  removeSelection: () => void;
}) {
  const properties = props.selected.properties;

  return (
    properties && (
      <Container className="popup-selected-container" maxWidth="xl">
        <Paper
          elevation={3}
          className="popup-selected"
          sx={{ borderRadius: '10px', overflow: 'auto' }}
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
            <Button
              variant="contained"
              disableElevation
              fullWidth
              sx={{
                background: '#2266e3',
                textTransform: 'capitalize',
                marginTop: '1rem',
                borderRadius: '8px',
              }}
            >
              More information
            </Button>
          </Box>
          <Divider variant="middle" />
        </Paper>
      </Container>
    )
  );
}

export default PopupSelected;
