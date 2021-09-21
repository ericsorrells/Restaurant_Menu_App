// ========================================================================
/* External */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

/* Interal */
import InputItem from '../InputItem/InputItem';
import useCreateMenuItemHooks from './CreateMenuItemHooks';
import { addMenuItem } from '../../store/actions/menuItems.actions';
import { history } from "../../router/AppRouter";

// ========================================================================

const CreateMenuItem = () => {
  const {
    dispatch,
    inputState,
    setInputState,
    menuItems,
  } = useCreateMenuItemHooks();

  const onDescriptionChange = (e) => setInputState({ ...inputState, description: e.target.value });
  const onImageURLChange = (e) => setInputState({ ...inputState, imageURL: e.target.value });
  const onPriceChange = (e) => setInputState({ ...inputState, price: e.target.value });
  const onTitleChange = (e) => setInputState({ ...inputState, title: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Object.keys(menuItems).length + 1;
    const newItem = { id, ...inputState };
    dispatch(addMenuItem(newItem));
    history.push("/?admin=true");
  }

  return (
    <form className="CreateMenuItem__form" data-testid="createMenuItem" onSubmit={handleSubmit}>
      <InputItem
        value={inputState.title}
        onChangeHandler={onTitleChange}
        label="Title"
      />
      <div className="CreateMenuItem__inputItem">
        <div className="CreateMenuItem__label">Description: </div>
        <textarea
          className="CreateMenuItem__textArea"
          onChange={onDescriptionChange}
          placeholder={"Description"}
          value={inputState.description}
        />
      </div>
      <InputItem
        value={inputState.price}
        onChangeHandler={onPriceChange}
        label="Price"
      />
      <InputItem
        value={inputState.imageURL}
        onChangeHandler={onImageURLChange}
        label="Image URL"
      />
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
