function onButtonClick_staple() {
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
    while(1&&ddmenu!="2"){
      menu=data[getRandomInt(data.length)];
      if(menu[1]=="ライス"||menu[0]=="麺類"||menu[0]=="丼・カレー"||menu[0]=="定食メニュー"){
      value=value+parseInt(menu[2]);
      gachalist.push(menu);
      document.getElementById("output_message").insertAdjacentHTML('beforeend',makecard(menu));
      vcs[0]=vcs[0]+parseInt(menu[2])
      vcs[1]=vcs[1]+parseInt(menu[3])
      vcs[2]=vcs[2]+parseInt(menu[7])
      rgy[0]=rgy[0]+parseFloat(menu[10])
      rgy[1]=rgy[1]+parseFloat(menu[11])
      rgy[2]=rgy[2]+parseFloat(menu[12])
      break;
    }
    }
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
    if(ddmenu=="2"){
        break;
      }
    }
    document.getElementById("result").insertAdjacentHTML('beforeend',makeresult(vcs,rgy));
<<<<<<< HEAD
    document
      .getElementById("note")
      .insertAdjacentHTML(
        "beforeend",
        '<p class="note" style="text-align:left">1食の目安  (1.0点 = 80 kcal)</br>男：赤 2.7点, 緑 1.0点, 黄 5.7点</br>女：赤 2.7点, 緑 1.0点, 黄 3.5点</p></br>'
      );
=======
    document.getElementById("note").insertAdjacentHTML("beforeend",'<p class="note" style="text-align:left">1食の目安  (1.0点 = 80 kcal)</br>男：赤 2.0点, 緑 1.0点, 黄 7.0点</br>女：赤 2.0点, 緑 1.0点, 黄 4.0点以上</p></br>');
>>>>>>> upstream/main
    document.getElementById("note").insertAdjacentHTML('beforeend','<div align="center"><input type="button" class="btn" value="結果をツイートする" onclick="tweet();" /></div></br>');
    
    //'</br>1食の目安　赤2.7点,緑1.0点,黄5.7点'
};

function tweet_staple() {
  var tw_contents="学食主食確定500円ガチャを回したよ！"
  for(var i=0;i<gachalist.length;i++){
    tw_contents=tw_contents+"%0a・"+gachalist[i][1];
  }

  tw_contents=tw_contents+"%0a%0a合計："+vcs[0]+"円"+vcs[1]+"kcal%0a"
  tw_contents=tw_contents+"%0a%20%23立命館学食ガチャ%20%0a"
　　var url = "https://yuki1201.github.io/rits_gakushoku_gacha/";
　　window.open().location.href = ("https://twitter.com/share?url=" + url + "&text=" + tw_contents + "&count=none&lang=ja");
};