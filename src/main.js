/**
 * 浮窗，可拖拽
 */

 class EHome {
  constructor(url = '') {
    this.url = url
    this.valueY = 0
    this.divBox = document.getElementById('e_home_box') || null
    this.clientHeight = 0
    this.href = ''
    this.isEmpty = true
  }

  init(data = {}) {
    if (this.isHas()) return
    const img = new Image()
    const divBox = document.createElement('div')
    const url = data?.url || ''
    const top = data.top || 60

    img.src = url || this.url
    img.style.cssText = `
      width: 30px;
      height: 30px;
      position: relative;
      top: 50%;
      left: 7px;
      transform: translateY(-50%);
      border-radius: 100%;
      background: #D8D8D8;
    `
    divBox.style.cssText = `
			position: fixed;
			right: 0;
			top: ${top}%;
      width: 44px;
      height: 42px;
      overflow: hidden;
			margin-right: 0;
      background: #FFFFFF;
      box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);
      border: 0;
			border-radius: 100% 0 0 100%;
			overflow: hidden;
			transition: top 200ms;
		`
    divBox.setAttribute('id', 'e_home_box')

    divBox.appendChild(img)
    document.body.appendChild(divBox)
    this.clientHeight = document.documentElement.clientHeight
    this.divBox = divBox
    this.max = data.max || 80
    this.min = data.min || 20
    this.href = data?.href || ''
    this.isEmpty = !data?.url
    this.listen()
  }

  hide() {
    if (!this.isHas()) return
    this.divBox.style.visibility = 'hidden'
  }

  show() {
    if (!this.isHas()) return
    this.divBox.style.visibility = 'visible'
  }

  isHas() {
    if (this.divBox) {
      return true
    }
    return false
  }

  reset(data = {}) {
    this.clear()
    this.init(data)
  }

  /**
   * @param {number} value
   */
  set max(value) {
    if (typeof value !== 'number') {
      throw new Error('error: 请输入数值')
    }
    this._max = Math.floor(value)
  }

  get max() {
    if (this._max > 100 || this._max < 0) return 100
    return this._max
  }

  /**
   * @param {number} value
   */
  set min(value) {
    if (typeof value !== 'number') {
      throw new Error('error: 请输入数值')
    }
    this._min = Math.floor(value)
  }

  get min() {
    if (this._min > 100 || this._min < 0) return 0
    return this._min
  }

  listen() {
    this.divBox.addEventListener('touchmove', event => this.move(event))
    this.divBox.addEventListener('click', event => this.click(event))
  }

  start(e) {
    e.preventDefault()
    const valueY = Math.floor(e.changedTouches[0].clientY - 20)
    this.divBox.style.top = `${Math.floor((valueY / this.clientHeight) * 100)}%`
  }

  move(e) {
    e.preventDefault()
    const touch = e.changedTouches[0]
    const valueY = Math.floor(touch.clientY - 20)
    const value = Math.floor((valueY / this.clientHeight) * 100)

    if (value < this.min || value > this.max) return
    this.divBox.style.top = `${Math.floor((valueY / this.clientHeight) * 100)}%`
    this.valueY = valueY
    // console.log('.......', `${Math.floor((valueY / this.clientHeight) * 100)}%`)
  }

  click(e) {
    e.preventDefault()
    if (this.href) {
      window.location.href = this.href
    }
  }

  clear() {
    if (!this.divBox) return
    document.body.removeChild(this.divBox)
    this.divBox = null
  }
}

export default new EHome()
