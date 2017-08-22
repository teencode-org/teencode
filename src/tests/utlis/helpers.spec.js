import expect from 'expect';

import {
  hasClass,
  addClass,
  removeClass,
  trimText,
  stripHtmlTags,
  getTwoUniqueIdsFromBlogsArray,
  sanitizeHtml
} from 'Utils/helpers';

describe('.sanitizeHtml()', () => {
  it('should sanitize a give html string', () => {
    const unsafeHtml = '<img src=x onerror=alert(1)//>';
    const safeHtml = '<img src="x">';

    // TODO: Fix issue with testing with DOMPurify
    // expect(sanitizeHtml(unsafeHtml)).toEqual(safeHtml);
  });
});

describe('.stripHtmlTags()', () => {
  it('removes all html tags from a given text input', () => {
    const text = 'Here is the difference';
    const html = `<div><p>${text}</p></div>`

    expect(stripHtmlTags(html)).toEqual(text);
  })
})

describe ('.trimText()', () => {
  it('reduces a text by the specified number of characters', () => {
    let textToTrim = 'This is a long text';
    let expectedText = 'This is';

    expect(trimText(textToTrim, expectedText.length)).toEqual(expectedText)
  })
})

describe('.getTwoUniqueIdsFromBlogsArray()', () => {
  it('returns to unique values from a given array of integers', () => {
    let ids = [23, 34, 25, 34, 53];
    let idsToExclude = [23, 34];

    let result = getTwoUniqueIdsFromBlogsArray(ids, idsToExclude);
    let resultDoesNotContainExcluded =
        result.every(id => idsToExclude.indexOf(id) == -1);

    expect(resultDoesNotContainExcluded).toEqual(true);
  })
})