const hasClass = (element, className) => {
  if (element.classList)
    return element.classList.contains(className)
  else
    return !!element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

const addClass = (element, className) => {
  if (element.classList)
    element.classList.add(className)
  else if (!hasClass(element, className)) element.className += " " + className
}

const removeClass = (element, className) => {
  if (element.classList)
    element.classList.remove(className)
  else if (hasClass(element, className)) {
    let reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    element.className=element.className.replace(reg, ' ')
  }
}

const trimText = (text, length) => {
  return text.substring(0, length);
}

const stripHtmlTags = (html) => {
  let div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText;
};

export {
  hasClass,
  addClass,
  removeClass,
  trimText,
  stripHtmlTags
}