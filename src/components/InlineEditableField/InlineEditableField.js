// ========================================================================
/* External */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

/* Interal */
import { editMenuItem } from '../../store/actions/menuItems.actions';
import checkmarkIcon from "../../assets/images/checkmark.png";
import deleteIcon from "../../assets/images/deleteIcon.png";

// ========================================================================

const InlineEditableField = ({
  value,
  placeholder,
  className,
  id,
  stateKey,
  autoOpen = false,
  customHandler,
  isAdmin,
}) => {

  const [editMode, setEditMode] = useState(autoOpen);
  const [inputValue, setInputValue] = useState(value);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setInputValue(e.target.value);
  }

  const handleClose = () => {
    setEditMode(false);
    setInputValue(value);
    if (typeof customHandler === "function") {
      customHandler()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(editMenuItem({ [stateKey]: inputValue }, id));
    setEditMode(false);
    if (typeof customHandler === "function") {
      customHandler()
    }
  }

  return (
    <div>
      {editMode && isAdmin ?
        <form className="InlineEditableField__container" onSubmit={handleSubmit}>
          <input
            className="InlineEditableField__input"
            placeholder={placeholder}
            value={inputValue}
            data-testid={"inputField"}
            onChange={handleInput}
          />
          <button className="InlineEditableField__checkmarkButton" data-testid="submitIcon">
            <img
              src={checkmarkIcon}
              className="InlineEditableField__checkmarkIcon"
            />
          </button>
          <img
            src={deleteIcon}
            className="InlineEditableField__deleteIcon"
            onClick={handleClose}
            data-testid="closeIcon"
          />
        </form>
        : <div
          className={`${className} ${placeholder.toLowerCase()}${id}`}
          data-testid="textContent"
          onClick={() =>
            setEditMode(!editMode)}
        >
          {value}
        </div>
      }
    </div>
  )
}

export default InlineEditableField;
