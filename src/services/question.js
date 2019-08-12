import axios from 'axios'

export default {
  getMonthName () {
    return {
      'Jan': '01월',
      'Feb': '02월',
      'Mar': '03월',
      'Apr': '04월',
      'May': '05월',
      'Jun': '06월',
      'Jul': '07월',
      'Aug': '08월',
      'Sep': '09월',
      'Oct': '10월',
      'Nov': '11월',
      'Dec': '12월'
    }
  },
  convertToDate (questionList) {
    const monthNameDic = this.getMonthName()

    questionList.forEach(item => {
      let tmpDate = new Date(item.timestamp).toDateString()
      let tmpDateSplit = tmpDate.split(' ')
      const replaceSplit = tmpDate.replace(tmpDateSplit[1], monthNameDic[tmpDateSplit[1]]).split(' ')
      tmpDate = replaceSplit[3] + '년 ' + replaceSplit[1] + ' ' + replaceSplit[2] + '일'
      item.timestamp = tmpDate

      item.answers.forEach(answer => {
        let tmpAnsDate = new Date(answer.timestamp).toDateString()
        let tmpAnsDateSplit = tmpAnsDate.split(' ')
        const replaceAnsSplit = tmpAnsDate.replace(tmpAnsDateSplit[1], monthNameDic[tmpAnsDateSplit[1]]).split(' ')
        tmpAnsDate = replaceAnsSplit[3] + '년 ' + replaceAnsSplit[1] + ' ' + replaceAnsSplit[2] + '일'
        answer.timestamp = tmpAnsDate
      })
    })
    return questionList
  },
  findAllQuestions () {
    return axios.get('/api/findAllQuestions').then(itemList => {
      return itemList.data
    })
  },
  findQuestion (qid) {
    return axios.get('/api/findQuestion').then(itemList => {
      return itemList.data
    })
  }
}
