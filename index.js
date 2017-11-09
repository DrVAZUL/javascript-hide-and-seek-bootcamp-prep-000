function getFirstSelector(Selector) {
return document.querySelector(Selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function deepestChild() {
return document.getElementById('grand-node').querySelector('div div div div div')
}

function increaseRankBy(n) {
  debugger
  var list = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for(var i = 1; i < list.length; i++) {
    list[i].innerHTML = (parseInt(list[i].innerHTML) + n).toString()
    return list.innerHTML
  }
}
