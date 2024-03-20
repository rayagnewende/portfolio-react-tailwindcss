import { certifications } from "../data";
import CertificationCard from "./CertificationCard";
import SectionTitle from "./SectionTitle";

/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line react/prop-types, no-unused-vars
const Certifications = () => {
  return (
    <div className=" mt-10 align-element " id="certifications">
      <SectionTitle text="Certifications obtenues" />
      <div className="flex gap-6 items-center whitespace-nowrap">
        {certifications.map((certification) => {
          return (
            <CertificationCard
              key={certification.id}
              certification={certification}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;
