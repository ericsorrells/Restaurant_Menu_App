// ========================================================================
/* External */
import React from 'react';

// ========================================================================

const InputItem = ({ label, value, onChangeHandler }) => {
  return (
    <div className="CreateMenuItem__inputItem">
      <div className="CreateMenuItem__label">{`${label}:`}</div>
      <input
        className="CreateMenuItem__input"
        onChange={onChangeHandler}
        placeholder={label}
        value={value}
      />
    </div>
  )
}

export default InputItem;