import { action, observable } from 'mobx'

class Store {
  @observable lose = []
  @observable win = []
  @observable count = 0
  @action increment() {
    this.count++
  }
}

const store = new Store()

export default store
