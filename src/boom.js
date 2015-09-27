import { appendChildren, setAttributes } from './utils'

export function boom(containerId, takken = []) {
  if(takken.length > 0) {
    appendChildren(document.querySelector(containerId), takken)
  }
}

export function tak(tag = 'div', content = '', attributes = {}, children = []) {
  let tak = document.createElement(tag)

  tak.innerHTML = content

  if(typeof attributes === 'object') {
    setAttributes(tak, attributes)
  }

  if(children.length > 0) {
    appendChildren(tak, children)
  }

  return tak
}
