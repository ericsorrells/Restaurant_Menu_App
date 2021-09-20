// ========================================================================
/* External */
import React from 'react';
import { useSelector } from 'react-redux';

/* Interal */
import { deleteMenuItem } from '../../store/actions/menuItems.actions';

// ========================================================================

const MenuItem = ({ item = {}, dispatch }) => {
  const { id, title, description, price, imageURL } = item;
  const isAdmin = useSelector(state => state.user.admin);

  const handleDeleteItem = () => {
    if (window.confirm('Are you sure you want to delete this menu item?')) {
      dispatch(deleteMenuItem(id))
    }
  }

  return (
    <div className="MenuItem__container" data-testid="menuItem" key={item.id}>
      <img src={imageURL} className="MenuItem__image" data-testid="image" />
      <div className="MenuItem__detailsContainer">
        <div className="MenuItem__titleDescription">
          <div className="MenuItem__title" data-testid="title">
            {title}
          </div>
          <div className="MenuItem__description" data-testid="description">
            {description}
          </div>
        </div>
        <div className="MenuItem__optionsPrice">
          {isAdmin && <button onClick={handleDeleteItem} className="MenuItem__deleteButton">Delete</button>}
          <div className="MenuItem__price" data-testid="price">
            {price}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuItem;
