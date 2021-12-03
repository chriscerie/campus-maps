import type { LocationType } from '../../types/LocationType';
import './RightColumnDetails.scss';

function LeftColumnDetais({
  locationInfo,
}: {
  locationInfo: LocationType | null;
}) {
  return (
    <div id="location-page-right-column">
      <div id="sticky-sidebar">
        <div className="sidebar-box">{locationInfo?.name}</div>
        <div className="sidebar-box">{locationInfo?.type}</div>
        <div className="sidebar-box">
          {locationInfo?.rooms?.length?.toString()} rooms
        </div>
        {locationInfo?.address1 && (
          <div className="sidebar-box">{locationInfo.address1}</div>
        )}
        {locationInfo?.address2 && (
          <div className="sidebar-box">{locationInfo.address2}</div>
        )}
        {locationInfo?.zip_code && (
          <div className="sidebar-box">{locationInfo.zip_code}</div>
        )}
        {locationInfo?.city && (
          <div className="sidebar-box">{locationInfo.city}</div>
        )}
        {locationInfo?.state && locationInfo.state !== '' && (
          <div className="sidebar-box">{locationInfo.state}</div>
        )}
        <div className="sidebar-box">
          Consider contributing to Campus Maps by editing this location's
          information.
        </div>
      </div>
    </div>
  );
}

export default LeftColumnDetais;
