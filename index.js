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
  var list = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  var array = new Array()
  for(var i = 0; i < list.length; i++) {
    list[i].innerHTML = (parseInt(list[i].innerHTML) + n).toString()
    array.push(list[i].innerHTML)
  }
  return array 
}
