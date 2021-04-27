import React, { useState, useEffect } from "react";
import CompanyIndexCard from "./CompanyIndexCard";

const CompanyIndex = () => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    //dummy data for now
    setCompanies([
      {
        id: "1",
        name: "Company A",
        city: "City A",
        state: "AA",
        description: "Description of Company A",
        foundingDate: new Date(1995, 11, 24),
      },
      {
        id: "2",
        name: "Company B",
        city: "City B",
        state: "BB",
        description: "Description of Company B",
        foundingDate: new Date(2001, 5, 11),
      },
    ]);
  }, []);

  return (
    <>
      {companies.map((company) => (
        <CompanyIndexCard company={company} key={company.id} />
      ))}
    </>
  );
};

export default CompanyIndex;
