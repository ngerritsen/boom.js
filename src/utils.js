export function appendChildren(container, elements) {
  elements.forEach((element) => {
    container.appendChild(element)
  })
}

export function setAttributes(element, attributes) {
  loopObject(attributes, (value, name) => {
    element.setAttribute(name, value)
  })
}

function loopObject(object, callback) {
  if(typeof object === 'object') {
    Object.keys(object).forEach((key) => {
      callback(object[key], key)
    })
  }
}
