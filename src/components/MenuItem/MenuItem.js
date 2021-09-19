// ========================================================================
/* External */
import React from 'react';

/* Interal */
// ========================================================================

const MenuItem = ({ item = {} }) => {
  const { title, description, price, imageURL } = item;

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
        <div className="MenuItem__price" data-testid="price">
          {price}
        </div>
      </div>
    </div>
  )
}

export default MenuItem;
