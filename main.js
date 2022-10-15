// CSVファイル読み込み
function csvToArray(path) {
  var csvData = new Array();
  var data = new XMLHttpRequest();  
  data.open("GET", path, false);
  data.send(null);
  var LF = String.fromCharCode(10);
  var CR = String.fromCharCode(13);
  var lines = data.responseText.replace(/\n/g,'').split(CR);
  for (var i = 0; i < lines.length;++i) {
    var cells = lines[i].split(",");
    if( cells.length != 1 ) {
      csvData.push(cells);
    }
  }
  return csvData;
}
function arrayShuffle(array) {
  for(var i = (array.length - 1); 0 < i; i--){

    // 0〜(i+1)の範囲で値を取得
    var r = Math.floor(Math.random() * (i + 1));

    // 要素の並び替えを実行
    var tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
  }
  return array;
}

function datasort(data,i){
  data.sort(function(a,b){return(b[i]-a[i]);});
  return data
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function makecard(menu){
  return '<a href="'+menu[13]+'"target="_blank"><div class="item__Card-sc-2teu2n-1 cKscZI"><h4 class="item__OrderLabel-sc-2teu2n-0 kEsMVQ ribbon">'+menu[0]+'</h4><h2 class="item__MenuName-sc-2teu2n-2 dpqSil">'+menu[1]+'</h2><p>'+menu[2]+'円 '+menu[3]+'kcal 塩分 '+menu[7]+'g</p></div></a>'
}

function makeresult(vcs,rgy){
  return '<div class="iteml"><h2>合計</h2></div><div class="itemr"><h3>'+vcs[0]+'円</br>'+vcs[1]+'kcal</br>塩分相当量'+vcs[2]+'g</br>赤：'+rgy[0].toFixed(1)+'点</br>緑：'+rgy[1].toFixed(1)+'点</br>黄：'+rgy[2].toFixed(1)+'点</h3></div></div>'
}

function selectshop(ddmenu){
  switch(ddmenu){
    case '0':
    var data = csvToArray('https://docs.google.com/spreadsheets/d/e/2PACX-1vRYdUc-mpd3Lvy2ZSUd3xyMfB3avzXDv5kbzJU5SwPbhAv0yCqMGHYR4yhJfSFT96Vvc0GgpGcXw3JV/pub?gid=0&single=true&output=csv');
    break;
    case '1':
    var data = csvToArray('https://docs.google.com/spreadsheets/d/e/2PACX-1vQYpyRZCLhMy_9GpTtDY_EGeyusR18Td38iunmnykoRMgCFLnzLU16cH6VnwUbPUplTzZZZ93GNJRa_/pub?gid=0&single=true&output=csv');
    break;
    case '2':
    var data = csvToArray('https://docs.google.com/spreadsheets/d/e/2PACX-1vRJcC1CZd_5YmWM75pLIsix8HjbVy1BjSA81S5ZvKAsjCxSa8KzYnYL9YHOeMrgp_Cwu-f94cco8C9z/pub?gid=0&single=true&output=csv');
    break;
    case '3':
    var data = csvToArray('https://docs.google.com/spreadsheets/d/e/2PACX-1vQDAciFaCDY7fp16T8cBEhYPqcJxArUntqKmmKTH3E8TwfeW_JKlG9InQUa4HE_hSjFsAbzD40Tel00/pub?gid=0&single=true&output=csv');
    break;
    case '4':
    var data = csvToArray('https://docs.google.com/spreadsheets/d/e/2PACX-1vSdctUU_yebJ_vqUrv84ZcGOJuPm9gD3BleU3U8iy84mS5itiQ40UgXO8F3Z7Pb6wRWjgmhtZEA45pn/pub?gid=0&single=true&output=csv');
    break;
    case '5':
    var data = csvToArray('https://docs.google.com/spreadsheets/d/e/2PACX-1vTq7Sw06BPSG2Ha9ZBNAWiQRMtyi_CWkYnRdnQQh6Y_lx2rJpLql0q_Jyhma83L9oOtqcJ8qT_ASWJG/pub?gid=0&single=true&output=csv');
    break;
    case '6':
    var data = csvToArray('https://docs.google.com/spreadsheets/d/e/2PACX-1vR2_aY7gZIoEpAPBLmXNr2Ryz3AFD43hPd22gAFjOzsJkvHa1RxQ9dz5QOXiS1VA_ZZp4WqBFXNiesO/pub?gid=0&single=true&output=csv');
    break;
    default:
    var data = csvToArray('https://docs.google.com/spreadsheets/d/e/2PACX-1vRYdUc-mpd3Lvy2ZSUd3xyMfB3avzXDv5kbzJU5SwPbhAv0yCqMGHYR4yhJfSFT96Vvc0GgpGcXw3JV/pub?gid=0&single=true&output=csv');
  }
  return data
}

function onButtonClick() {
  document.getElementById("output_message").innerHTML=''
  document.getElementById("result").innerHTML=''
  document.getElementById("note").innerHTML=''
  let ddmenu = document.getElementById('shoplist').value;
  console.log(ddmenu);
    var data = selectshop(ddmenu);
    //console.log(datasort(data,11));
    data=arrayShuffle(data);
    var value=0;
    gachalist=[]
    vcs=[0,0,0]
    var rgy=[0,0,0]
    while(value<500){
      menu=data[getRandomInt(data.length)];
      if(value+parseInt(menu[2])<550){
      value=value+parseInt(menu[2]);
      gachalist.push(menu);
      document.getElementById("output_message").insertAdjacentHTML('beforeend',makecard(menu));
      vcs[0]=vcs[0]+parseInt(menu[2])
      vcs[1]=vcs[1]+parseInt(menu[3])
      vcs[2]=vcs[2]+parseInt(menu[7])
      rgy[0]=rgy[0]+parseFloat(menu[10])
      rgy[1]=rgy[1]+parseFloat(menu[11])
      rgy[2]=rgy[2]+parseFloat(menu[12])
    }
    }
    document.getElementById("result").insertAdjacentHTML('beforeend',makeresult(vcs,rgy));
    document.getElementById("note").insertAdjacentHTML('beforeend','<p class="note">1食の目安　赤2.7点,緑1.0点,黄5.7点</p></br>');
    document.getElementById("note").insertAdjacentHTML('beforeend','<div align="center"><input type="button" class="btn" value="結果をツイートする" onclick="tweet();" /></div></br>');
    
    //'</br>1食の目安　赤2.7点,緑1.0点,黄5.7点'
};

function tweet() {
  var tw_contents="学食500円ガチャを回したよ！"
  for(var i=0;i<gachalist.length;i++){
    tw_contents=tw_contents+"%0a・"+gachalist[i][1];
  }

  tw_contents=tw_contents+"%0a%0a合計："+vcs[0]+"円"+vcs[1]+"kcal%0a"
  tw_contents=tw_contents+"%0a%20%23立命館学食ガチャ%20%0a"
　　var url = "https://yuki1201.github.io/rits_gakushoku_gacha/";
　　window.open().location.href = ("https://twitter.com/share?url=" + url + "&text=" + tw_contents + "&count=none&lang=ja");
};

