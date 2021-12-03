import './index.scss';

function AboutPage() {
  return (
    <div className="about-us-all">
      <div className="about-us-title">Where Maps meet Campuses</div>
      <div className="about-us-text">
        We envisioned a campus where students would no longer spend hours going
        around campus just to find their classes. That's why we made this to
        help you find your classes with ease.
      </div>
      <div className="about-us-body">
        <div className="about-us-body-parts">
          <div className="about-us-body-top">UCSB CS 148</div>
          <div className="about-us-body-middle">12pm t06-campusmaps</div>
        </div>
        <div className="about-us-body-last">
          <div className="about-us-body-top">Members:</div>
          <div className="about-us-body-middle">
            Christopher Chang<br></br>
            Janet Zhou<br></br>
            Jason Em <br></br>
            Jonathan Wang<br></br>
            Max Binham<br></br>
            Sarah Kwon
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
