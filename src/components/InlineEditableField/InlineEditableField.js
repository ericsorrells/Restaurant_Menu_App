// ========================================================================
/* External */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

/* Interal */
import MenuItem from '../MenuItem/MenuItem';
import { editMenuItem } from '../../store/actions/menuItems.actions';
import checkmarkIcon from "../../assets/images/checkmark.png";
import deleteIcon from "../../assets/images/deleteIcon.png";

// ========================================================================

const InlineEditableField = ({ value, placeholder, className, id, stateKey }) => {
  const [editMode, setEditMode] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setInputValue(e.target.value);
  }

  const handleClose = () => {
    setEditMode(false);
    setInputValue(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(editMenuItem({ [stateKey]: inputValue }, id));
    setEditMode(false);
  }

  return (
    <div>
      {editMode ?
        <form className="InlineEditableField__container" onSubmit={handleSubmit}>
          <input
            className="InlineEditableField__input"
            placeholder={placeholder}
            value={inputValue}
            data-testid={placeholder}
            onChange={handleInput}
          />
          <button className="InlineEditableField__checkmarkButton">
            <img src={checkmarkIcon} className="InlineEditableField__checkmarkIcon" />
          </button>
          <img src={deleteIcon} className="InlineEditableField__deleteIcon" onClick={handleClose} />
        </form>
        : <div className={`${className} ${placeholder.toLowerCase()}${id}`} data-testid={placeholder} onClick={() => setEditMode(!editMode)}> {value} </div>
      }
    </div>
  )
}

export default InlineEditableField;
