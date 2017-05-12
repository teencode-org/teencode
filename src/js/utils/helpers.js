function hasClass(element, className) {
  if (element.classList)
    return element.classList.contains(className)
  else
    return !!element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

function addClass(element, className) {
  if (element.classList)
    element.classList.add(className)
  else if (!hasClass(element, className)) element.className += " " + className
}

function removeClass(element, className) {
  if (element.classList)
    element.classList.remove(className)
  else if (hasClass(element, className)) {
    let reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    element.className=element.className.replace(reg, ' ')
  }
}

function getFriendlyName(field) {
  return field.replace("_", " ")
}

export default {
  hasClass,
  addClass,
  removeClass,
  getFriendlyName
}