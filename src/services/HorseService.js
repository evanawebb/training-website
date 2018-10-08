import Api from '@/services/Api'

export default {
  fetchHorses () {
    return Api().get('horses')
  },
  putHorses (params) {
    return Api().post('horses', params)
  }
}
