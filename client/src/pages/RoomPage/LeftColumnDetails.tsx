import LocationSection from './LocationSection';
import './LeftColumnDetails.scss';

function LeftColumnDetails({
  classroomInfo,
  id,
}: {
  classroomInfo: string;
  id: string;
}) {
  return (
    <div id="classroom-page-left-column">
      <LocationSection title="Description">
        <div className="building-info align-text-left">
          <p style={{ margin: 0 }}>
            This is a description for classroom {classroomInfo}
          </p>
        </div>
      </LocationSection>
    </div>
  );
}

export default LeftColumnDetails;
