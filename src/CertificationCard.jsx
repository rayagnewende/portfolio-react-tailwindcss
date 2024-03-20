/* eslint-disable react/prop-types */
const CertificationCard = ({ certification }) => {
  console.log(certification);
  return (
    <div className="">
      <img
        src={certification.img}
        alt={certification.title}
        className="h-60 w-48"
      />
    </div>
  );
};

export default CertificationCard;
