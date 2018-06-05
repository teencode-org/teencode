import DOMPurify from 'dompurify';

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

const sanitizeHtml = (dirtyHTML) => {
  return DOMPurify.sanitize(dirtyHTML);
}

const getTwoUniqueIdsFromBlogsArray = (arr, arrOfIdsToExclude) => {
  let existingArrClone = arrOfIdsToExclude.slice(0);
  let rand = 0, newArr = []

  while(newArr.length < 2) {
    rand = Math.floor(Math.random() * arr.length)

    while (existingArrClone.indexOf(arr[rand]) != -1) {
      rand = Math.floor(Math.random() * arr.length)
    }

    newArr.push(arr[rand])
    existingArrClone.push(arr[rand])
  }

  return newArr
}

const joinItemsWithCommaWithAnd = (itemList) => {
    return itemList.join(", ").replace(/,(?!.*,)/gmi, " and");
};

const joinHtmlItemsWithCommaWithAnd = (itemList) => {
    itemList = itemList.map(item => `<span>${item}</span>`);
    return itemList.join(", ").replace(/,(?!.*,)/gmi, " and");
};

export {
  hasClass,
  addClass,
  removeClass,
  trimText,
  stripHtmlTags,
  getTwoUniqueIdsFromBlogsArray,
  sanitizeHtml,
  joinItemsWithCommaWithAnd,
  joinHtmlItemsWithCommaWithAnd
}