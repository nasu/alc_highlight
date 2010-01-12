// ==UserScript==
// // @name         Highlight at alc
// // @namespace    http://yakan.flatz.jp/~nasu/
// // @description  The word seen once is highlighted at alc.co.jp
// // @match        http://eow.alc.co.jp/*
// // @include      http://eow.alc.co.jp/*
// // ==/UserScript==
// //TODO この仕組みだとWebStorageの方がいいか
(function(){
  var list = document.querySelectorAll('span.midashi');
  var search = document.querySelector('#q').value;
  if (localStorage[search]) {
    localStorage[search]++;
  } else {
    localStorage[search] = 1;
  }
  for (var i=0, len=list.length; i<len; i++) {
    if (localStorage[list[i].innerText]) {
      list[i].innerHTML += '&nbsp;(' +
        parseInt(localStorage[list[i].innerText]) + ')';
      list[i].style.background = '#ffcccc';
    }
  }
  var navi = document.querySelector('#naviArea>tbody>tr>td>div.left>div');
  navi.style.width = '220px';
  navi.innerHTML += '・' + '<a href="javascript:return false;" onClick="localStorage.clear();window.location.reload();">検索リセット</span>(' + localStorage.length +')';
})();

