/* eslint-disable import/no-extraneous-dependencies */
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import styles from '../styles/styles.module.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className={styles.navbar}>
      <NavLink to="/" className={styles.link}>
        {location.pathname !== '/' && <FiArrowLeft className={styles.back_btn} />}
      </NavLink>

      <Outlet />
    </div>
  );
};

export default Navbar;
