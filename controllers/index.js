const taskList = require('../taskList.json')
const taskListImgs = require('../taskListImgs.json')

const getIndex = (req, res) => {
  res.render('index', { taskList: taskList, taskListImgs: taskListImgs })
}

// const getSearch = (req, res) => {
//   const keyword = req.query.keyword.toLowerCase()
//   const searchResults = taskList.filter(
//     (restaurant) =>
//       restaurant.name.toLowerCase().includes(keyword) ||
//       restaurant.name_en.toLowerCase().includes(keyword) ||
//       restaurant.category.includes(keyword)
//   )
//   res.render('index', {
//     taskList: searchResults,
//     searchWord: req.query.keyword
//   })
// }

// const getShowpage = (req, res) => {
//   const id = +req.params.id
//   const title = true
//   res.render('showPage', { restaurant: taskList[id - 1], title })
// }

exports.getIndex = getIndex
