import "../styles/Organizations.scss";

const OrganizationCard = ({ org }) => (
  <div className="org-card">
    <div className="org-image">
      <img
        src={`https://imgs.search.brave.com/ZAF0KOmXBZ7S4dP7uN2O4cY7N_1wOuWH68-N3MXlZW4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDQwNTY3/OTYuanBn`}
        alt={org.title}
      />
    </div>
    <div className="org-name">{org.title}</div>
  </div>
);

export default OrganizationCard;
