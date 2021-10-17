import { Container, Paper } from '@mui/material';
import { Feature } from 'geojson';

function PopupSelected(props: { selected: Feature }) {
  return (
    <Container sx={{ height: '100%' }}>
      <Paper
        elevation={3}
        sx={{
          position: 'relative',
          height: '500px',
          width: '300px',
          top: '50%',
          transform: 'translateY(-50%)',
          float: 'right',
          zIndex: 10,
        }}
      >
        {props.selected.properties != null && props.selected.properties.name}
      </Paper>
    </Container>
  );
}

export default PopupSelected;
