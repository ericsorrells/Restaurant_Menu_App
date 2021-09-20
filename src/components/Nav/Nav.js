// ========================================================================
/* External */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// ========================================================================

const Nav = () => {
  const isAdmin = useSelector(state => state.user.admin)

  return (
    <nav data-testid="nav">
      <Link
        to={isAdmin ? "/?admin=true" : "/"}
        className="Nav__link"
        id="Nav__title"
        data-testid="mainPageLink"
      >
        Eric's Pizza Palace
      </Link>
      {
        isAdmin &&
        <Link
          to={`/create/?admin=true`}
          className="Nav__link"
          data-testid="createMenuItemLink"
        >
          Add Menu Item
        </Link>
      }
    </nav>
  )
}

export default Nav;
