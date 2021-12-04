import { ReactNode } from 'react';
import './LocationSection.scss';

function TitleDivider({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <section id="location-section">
      <div id="location-section-title-container">
        <h2 id="location-section-title">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default TitleDivider;
