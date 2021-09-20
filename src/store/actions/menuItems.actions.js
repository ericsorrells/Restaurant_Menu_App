const addMenuItem = (payload) => ({
  type: "menuItems::addMenuItem",
  payload
});

const deleteMenuItem = (id) => ({
  type: "menuItems::deleteMenuItem",
  id
})

export {
  addMenuItem,
  deleteMenuItem
}