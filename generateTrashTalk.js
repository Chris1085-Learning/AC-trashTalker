function generateTrashTalk(profession, taskList) {
  // 判斷使用者是否點選職業
  if (typeof profession === 'undefined') return ''

  const phrase = ['很簡單', '很容易', '很快', '很正常']
  // 依照array長度random index，Math.random()有小數點，所以需要Math.floor取整數
  let randomTaskIndex = Math.floor(Math.random() * taskList[profession].length)
  let randomPhraseIndex = Math.floor(Math.random() * phrase.length)

  const generatedStr =
    '身為一個' + profession + '，' + taskList[profession][randomTaskIndex] + '，' + phrase[randomPhraseIndex]

  return generatedStr
}

module.exports = generateTrashTalk
