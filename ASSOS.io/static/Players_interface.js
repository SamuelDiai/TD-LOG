function drawLife(rayon){
  var h = 100;
  var v = 100;
  var r = 50;
  var diff;
  var arrondi;
  var vie = (rayon/15)*100;
  diff = (vie/100)*Math.PI*2;
  players_ctx.beginPath();
  players_ctx.arc(v,h,r,0,2*Math.PI,false);  // cercle blanc intérieur
  players_ctx.fillStyle='#FFF';
  players_ctx.fill();
  players_ctx.closePath();

  players_ctx.beginPath();  // arc vert
  players_ctx.lineWidth = 15;
  players_ctx.strokeStyle = "#b3cf3c";
  players_ctx.arc(v,h,r,-Math.PI/2,-Math.PI/2+diff,false);
  players_ctx.stroke();
  players_ctx.closePath();

  players_ctx.beginPath();  // arc rouge
  players_ctx.strokeStyle = "#ea1f1f";
  players_ctx.arc(v,h,r,diff-Math.PI/2,3*Math.PI/2,false);
  players_ctx.stroke();
  players_ctx.closePath();

  players_ctx.fillStyle='#000';   // texte intérieur
  players_ctx.textAlign='center';
  players_ctx.font = '10pt Verdana'
  arrondi = Math.round(100*vie)/100;
  players_ctx.fillText(arrondi+'%',h+2,v+6);
}


function drawPixel(x,y,w,h){
  var x_p = w + x*159/1327;
  var y_p = h + y*159/1327;
  players_ctx.beginPath();
  players_ctx.fillStyle = "#FF0000"
  players_ctx.arc(x_p,y_p,3,0,2*Math.PI);
  players_ctx.fill();
  players_ctx.closePath();
}

function drawMiniMap(){
  var x = players_canvas.width-270;
  var y = players_canvas.height-170;
  var img = new Image();
  img.src = "img_mini.png";
  var w = 248;
  var h = 159;

  players_ctx.beginPath();
  players_ctx.fillStyle = "#FFF";
  players_ctx.fillRect(x,y,w,h);
  players_ctx.closePath();

  players_ctx.beginPath();
  players_ctx.strokeStyle = "#d35400";
  players_ctx.lineWidth = 3;
  players_ctx.rect(x,y,w,h);
  players_ctx.stroke();
  players_ctx.closePath();

  var img = document.getElementById("source");
  players_ctx.drawImage(img,x,y);

  var x_p = x + personalX*159/1327;
  var y_p = y + personalY*159/1327;
  players_ctx.beginPath();
  players_ctx.fillStyle = "#01DF01";
  players_ctx.arc(x_p,y_p,3,0,2*Math.PI,false);
  players_ctx.fill();
  players_ctx.closePath();

  for (var id_players in client_players){
    if (id_players != id){
      drawPixel(client_players[id_players]["x"],client_players[id_players]["y"],x,y);
    }
  }
}

function drawPseudo(pseudo){
  var x = players_canvas.width - 150;
  var y = 100;
  players_ctx.beginPath();
  players_ctx.font = "40px Arial";
  players_ctx.fillStyle = "#da6210";
  players_ctx.fillText(pseudo,x,y);
  players_ctx.closePath();

}

function draw_other_pseudo(e){
  if(e.keyCode == 78)
  {
    var x = players_canvas.width - 150;
    var y = 150;
    players_ctx.font = "25px Arial";
    players_ctx.fillStyle = "#e60a0a";
    for (var id_players in client_players){
      if(id_players != id )
      {
        players_ctx.beginPath();
        players_ctx.fillText(client_players[id_players]['pseudo'],x,y);
        players_ctx.closePath();
        y = y + 40;
      }
    }
  }
}
