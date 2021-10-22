import { Container } from '@mui/material';
import PhotoHeader from './PhotoHeader';
import './index.scss';

function LocationPage() {
  return (
    <div className="location-page-container">
      <PhotoHeader />

      <Container>
        <div className="building-info align-text-left">
          <p>
            {/* TODO Properly fetch building information*/}
            <strong>Building code:</strong> PHELP 3526
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            accumsan, purus at eleifend ornare, libero metus tincidunt velit,
            quis tincidunt nisl eros non tellus. Nunc ullamcorper porttitor
            risus, eu luctus justo auctor sed. Vestibulum ornare eros est, in
            tempus massa congue ut. Duis eu fringilla nulla, nec mattis ex.
            Quisque viverra justo a luctus feugiat. Aliquam erat volutpat.
            Nullam varius odio ex, non aliquet eros tristique ullamcorper. Donec
            dignissim nisl dui, in sollicitudin magna faucibus eu. Duis porta
            ornare erat, ut lacinia lacus volutpat id. Suspendisse potenti.
            Suspendisse et iaculis velit.
          </p>
        </div>

        <div className="align-text-left">
          {/* TODO implement comments */}
          <h1>Comments</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            accumsan, purus at eleifend ornare, libero metus tincidunt velit,
            quis tincidunt nisl eros non tellus. Nunc ullamcorper porttitor
            risus, eu luctus justo auctor sed. Vestibulum ornare eros est, in
            tempus massa congue ut. Duis eu fringilla nulla, nec mattis ex.
            Quisque viverra justo a luctus feugiat. Aliquam erat volutpat.
            Nullam varius odio ex, non aliquet eros tristique ullamcorper. Donec
            dignissim nisl dui, in sollicitudin magna faucibus eu. Duis porta
            ornare erat, ut lacinia lacus volutpat id. Suspendisse potenti.
            Suspendisse et iaculis velit.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default LocationPage;
