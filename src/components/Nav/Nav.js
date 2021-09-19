// ========================================================================
/* External */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

/* Interal */

// ========================================================================

const Nav = () => {
  const isAdmin = useSelector(state => state.user.admin)

  return (
    <nav data-testid="nav">
      Eric's Pizza Palace
      {isAdmin && <Link to="/create" className="Nav__link">Add Menu Item</Link>}
    </nav>
  )
}

export default Nav;
