// ========================================================================
/* External */
import React from 'react';
import { useSelector } from 'react-redux';

/* Interal */
import InlineEditableField from "../InlineEditableField/InlineEditableField";
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
          <InlineEditableField value={title} placeholder={"Title"} className={"MenuItem__title"} id={id} stateKey={"title"}/>
          <InlineEditableField value={description} placeholder={"Description"} className={"MenuItem__description"} id={id} stateKey={"description"}/>
        </div>
        <div className="MenuItem__optionsPrice">
          {isAdmin && <button onClick={handleDeleteItem} className="MenuItem__deleteButton">Delete</button>}
          <InlineEditableField value={price} placeholder={"Price"} className={"MenuItem__price"} id={id} stateKey={"price"}/>
        </div>
      </div>
    </div>
  )
}

export default MenuItem;
