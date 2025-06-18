import { useEffect, useState } from 'react';
import routes from '../constants/appUrls';
import Header from '../components/Header';
import OrganizationCard from '../components/OrganizationCard';
import '../styles/Organizations.scss';

const Organizations = () => {
  const [orgs, setOrgs] = useState([]);

  useEffect(() => {
    const fetchOrgs = async () => {
      const token = localStorage.getItem('token');
      const res = await fetch(routes.organizations, {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) setOrgs(data.organizations);
      else alert('Fetch failed');
    };
    fetchOrgs();
  }, []);

  return (
    <>
      <Header />
      <div className="org-grid">
        {orgs.map((org) => (
          <OrganizationCard key={org.id} org={org} />
        ))}
      </div>
    </>
  );
};

export default Organizations;
