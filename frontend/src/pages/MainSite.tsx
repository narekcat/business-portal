import React, { useEffect, useState } from "react";
import { getCompanies } from "../services/apiService";

const MainSite: React.FC = () => {
  const [companies, setCompanies] = useState<any[]>([]);

  useEffect(() => {
    getCompanies().then((response) => {
      setCompanies(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Main Site</h1>
      <ul>
        {companies.map(company => (
          <li key={company.id}>{company.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MainSite;