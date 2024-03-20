/* eslint-disable react/prop-types */
const CertificationCard = ({ certification }) => {
  console.log(certification);
  return (
    <div className="hover:">
      <img
        src={certification.img}
        alt={certification.title}
        className="h-80 w-90"
      />
    </div>
  );
};

export default CertificationCard;
