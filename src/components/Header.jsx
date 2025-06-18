import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => setShowModal(prev => !prev);

  const handleLogout = () => {
    localStorage.clear();

    navigate('/');

    setShowModal(false);
  };

  return (
    <header style={styles.header}>
      <div style={styles.title}>MyPath App</div>
      <div style={styles.profileWrapper}>
        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          style={styles.profilePic}
          onClick={toggleModal}
        />
        {showModal && (
          <div style={styles.modal}>
            <button style={styles.logoutBtn} onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

const styles = {
  header: {
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #e0e0e0',
    backgroundColor: '#f9f9f9',
    position: 'relative',
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    color: '#333',
  },
  profileWrapper: {
    position: 'relative',
  },
  profilePic: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    cursor: 'pointer',
  },
  modal: {
    position: 'absolute',
    top: '50px',
    right: '0',
    background: '#fff',
    border: '1px solid #ccc',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    zIndex: 10,
  },
  logoutBtn: {
    background: 'transparent',
    border: 'none',
    color: '#d00',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

export default Header;
