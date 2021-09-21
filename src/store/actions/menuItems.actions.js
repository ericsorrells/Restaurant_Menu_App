const addMenuItem = (payload) => ({
  type: "menuItems::addMenuItem",
  payload
});

const addMenuItems = (payload) => ({
  type: "menuItems::addMenuItems",
  payload
});

const deleteMenuItem = (id) => ({
  type: "menuItems::deleteMenuItem",
  id
});

const editMenuItem = (payload, id) => ({
  type: "menuItems::editMenuItem",
  payload,
  id
});

export {
  addMenuItem,
  addMenuItems,
  deleteMenuItem,
  editMenuItem,
}