/*Tabs*/

const tabLinks = new Array();
const contentDivs = new Array();

function init() {
  const tabListItems = document.getElementById('tabs').childNodes;
  for (let i = 0; i < tabListItems.length; i++) {
    if (tabListItems[i].nodeName == "LI") {
      const tabLink = getFirstChildWithTagName(tabListItems[i], 'A');
      let id = getHash(tabLink.getAttribute('href'));
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById(id);
    }
  }

  let i = 0;

  for (const id in tabLinks) {
    tabLinks[id].onclick = showTab;
    tabLinks[id].onfocus = function() {
      this.blur()
    };
    if (i == 0) tabLinks[id].className = 'selected';
    i++;
  }

  // Hide all content divs except the first
  for (const id in contentDivs) {
    if (i != 0) contentDivs[id].className = 'tabContent hide';
    i++;
  }
}

function showTab() {
  const selectedId = getHash(this.getAttribute('href'));
  for (const id in contentDivs) {
    if (id == selectedId) {
      tabLinks[id].className = 'selected';
      contentDivs[id].className = 'tabContent';
    } else {
      tabLinks[id].className = '';
      contentDivs[id].className = 'tabContent hide';
    }
  }

  return false;
}

function getFirstChildWithTagName(element, tagName) {
  for (let i = 0; i < element.childNodes.length; i++) {
    if (element.childNodes[i].nodeName == tagName) return element.childNodes[i];
  }
}

function getHash(url) {
  const hashPos = url.lastIndexOf('#');
  return url.substring(hashPos + 1);
}

init();