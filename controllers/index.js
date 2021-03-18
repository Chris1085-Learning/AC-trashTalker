// load required json and js
const taskList = require('../taskList.json')
const taskListImgs = require('../taskListImgs.json')
const generateTrashTalk = require('../generateTrashTalk')

const getIndex = (req, res) => {
  // show alert if user didn't click any radio btns, user init is true at first
  const isGeneratedStr = true
  res.render('index', {
    taskList: taskList,
    taskListImgs: taskListImgs,
    isGeneratedStr: isGeneratedStr
  })
}

const postTalk = (req, res) => {
  // show alert if user didn't click any radio btns
  const isGeneratedStr = typeof req.body.profession !== 'undefined' ? true : false
  // generate trash talk
  const generatedStr = generateTrashTalk(req.body.profession, taskList)

  res.render('index', {
    taskList: taskList,
    taskListImgs: taskListImgs,
    generatedStr: generatedStr,
    isGeneratedStr: isGeneratedStr
  })
}

exports.getIndex = getIndex
exports.postTalk = postTalk
