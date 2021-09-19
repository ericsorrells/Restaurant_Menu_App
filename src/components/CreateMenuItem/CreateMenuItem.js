// ========================================================================
/* External */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

/* Interal */
import { addMenuItem } from '../../store/actions/menuItems.actions';
import { history } from "../../router/AppRouter";

// ========================================================================

const CreateMenuItem = () => {
  const dispatch = useDispatch();
  const menuItems = useSelector(state => state.menuItems);

  const [inputState, setInputState] = useState({
    title: "",
    description: "",
    price: 0,
    imageURL: ""
  })

  const onDescriptionChange = (e) => setInputState({...inputState, description: e.target.value});
  const onImageURLChange = (e) => setInputState({...inputState, imageURL: e.target.value});
  const onPriceChange = (e) => setInputState({...inputState, price: e.target.value});
  const onTitleChange = (e) => setInputState({...inputState, title: e.target.value});

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Object.keys(menuItems).length + 1;
    const newItem = { id, ...inputState };
    dispatch(addMenuItem(newItem));
    history.push("/?admin=true");
  }

  return (
    <form className="CreateMenuItem__form" data-testid="createMenuItem" onSubmit={handleSubmit}>
      <div className="CreateMenuItem__inputItem">
        <div className="CreateMenuItem__label">Title:</div>
        <input
          className="CreateMenuItem__input"
          onChange={onTitleChange}
          placeholder={"Title"}
          value={inputState.title}
        />
      </div>
      <div className="CreateMenuItem__inputItem">
        <div className="CreateMenuItem__label">Description:</div>
        <textarea
          className="CreateMenuItem__textArea"
          onChange={onDescriptionChange}
          placeholder={"Description"}
          value={inputState.description}
        />
      </div>
      <div className="CreateMenuItem__inputItem">
        <div className="CreateMenuItem__label">Price:</div>
        <input
          className="CreateMenuItem__input"
          onChange={onPriceChange}
          placeholder={"Price"}
          step="any"
          type="number"
          value={inputState.price}
        />
      </div>
      <div className="CreateMenuItem__inputItem">
        <div className="CreateMenuItem__label">Image URL:</div>
        <input
          className="CreateMenuItem__input"
          onChange={onImageURLChange}
          placeholder={"Image URL"}
          value={inputState.imageURL}
        />
      </div>
      <button
        className="CreateMenuItem__button"
        data-testid="submitButton"
      >
        Enter
      </button>
    </form>
  )
}

export default CreateMenuItem;
