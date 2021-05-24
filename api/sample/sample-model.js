const initializeUsers = () => ([
  { plant_id: 1, nickname: 'Invisible Dewberry', species: 'Corydalis flavula', h2oFrequency: '23hrs', image: 'https://i.picsum.photos/id/106/200/200.jpg?hmac=buP7QPRJ18uSC5niV6HaCXgnkrp01jx5H_5w_3CUx9c'},
  { plant_id: 2, nickname: 'Ice Weed', species: 'Phytolacca americana', h2oFrequency: '5hrs', image: 'https://i.picsum.photos/id/106/200/200.jpg?hmac=buP7QPRJ18uSC5niV6HaCXgnkrp01jx5H_5w_3CUx9c'},
  { plant_id: 3, nickname: 'Dwarf Clover', species: 'Barbarea vulgaris', h2oFrequency: '54hrs', image: 'https://i.picsum.photos/id/106/200/200.jpg?hmac=buP7QPRJ18uSC5niV6HaCXgnkrp01jx5H_5w_3CUx9c'},
  { plant_id: 4, nickname: 'Mountain Groundberry', species: 'Barbarea vulgaris', h2oFrequency: '12hrs', image: 'https://i.picsum.photos/id/106/200/200.jpg?hmac=buP7QPRJ18uSC5niV6HaCXgnkrp01jx5H_5w_3CUx9c'},
  { plant_id: 5, nickname: 'Invisible Thimbleweed', species: 'Ilex verticillata', h2oFrequency: '9hrs', image: 'https://i.picsum.photos/id/106/200/200.jpg?hmac=buP7QPRJ18uSC5niV6HaCXgnkrp01jx5H_5w_3CUx9c'},
  { plant_id: 6, nickname: 'Bleeding Raspberry', species: 'Fraxinus pennsylvanica', h2oFrequency: '6hrs', image: 'https://i.picsum.photos/id/106/200/200.jpg?hmac=buP7QPRJ18uSC5niV6HaCXgnkrp01jx5H_5w_3CUx9c'}
])

let users = initializeUsers()

const find = () => {
  return Promise.resolve(users)
}

module.exports = {
  find
}