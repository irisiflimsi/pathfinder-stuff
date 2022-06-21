var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

var locked = false;
function cycle(o) {
  o.innerHTML = Math.max(0, val(o) + (locked ? -1 : 1));
  redo();
}
function lock() {
  locked = !locked;
  redo();
}
function redo() {
  for (let i = 0; i <= 1100; i++) {
    var el = document.getElementById(i);
    if (el) {
      var td = el.parentElement;
      td.style.display = (locked && val(el) < 1) ? "none" : "table-cell";
      document.cookie = "id" + i + "=" + val(el);
      if (td.previousElementSibling) {
        td.parentElement.style.display = (td.previousElementSibling.style.display == "none" && td.style.display == "none") ? "none" : "table-row";
      }
      else if (td.nextElementSibling) {
        td.parentElement.style.display = (td.nextElementSibling.style.display == "none" && td.style.display == "none") ? "none" : "table-row";
      }
      else {
        td.parentElement.style.display = (td.style.display == "none") ? "none" : "table-row";
      }
    }
  }
}
function doload() {
  for (let i = 0; i <= 1100; i++) {
    var el = document.getElementById(i);
    if (el) {
      var j = document.cookie.indexOf("id" + i + "=");
      if (j != -1) {
        el.innerHTML = document.cookie.substr(j + ("id" + i + "=").length).replace(/[^\d]+.*/, '');
      }
    }
  }
}
function val(o) { return parseInt(o.innerHTML); }


/* Tobias' Teil */
//bei Sonderwünschen für Zauber oder Gegenstände einfach die "Monster beschwören" if-Verzweigung nachahmen


var page_counter = 0;
function makeTable(){
  let tbl = $('<table id="table_target">');
  let tbl_hdr = '<tr class="head" onclick="lock()"><th colspan="2">  9 Dailies / 1 Fokus </th></tr>';
  $(tbl_hdr).appendTo(tbl);
  return($(tbl));
}

function appendDailies(tbl_hdr, dailies){
  let dailies_body = '';
  $.each(dailies, function(index, item){
    if(index % 2 == 0){
      dailies_body += '<tr><td><a href="'+item.reference+'">'+item.name+'</a><span id="'+item.id+'" onclick="cycle(this)">0</span></td>';
    }
    else{
      dailies_body += '<td><a href="'+item.reference+'">'+item.name+'</a><span id="'+item.id+'" onclick="cycle(this)">0</span></td></tr>';
    }
  })
  $(tbl_hdr).append(dailies_body);
  return($(tbl_hdr));
}

function appendLevelZero(crnt_tbl, zeroes){
  let zero_body = '';
  spell_count = 0;
  $.each(zeroes, function(index, item){
    if(index % 2 == 0){
      zero_body += '<tr><td><a href="'+item.reference+'">'+item.name+'</a><span id="'+item.id+'" onclick="cycle(this)">0</span></td>';
    }
    else{
      zero_body += '<td><a href="'+item.reference+'">'+item.name+'</a><span id="'+item.id+'" onclick="cycle(this)">0</span></td></tr>';
    }
    spell_count++;
  })
  page_counter += spell_count*1;
  let zero_head = '<tr class="head" onclick="lock()"><th colspan="2"> 4 Zauber der Stufe 0 ('+(spell_count)+' Zauber = '+(spell_count*1)+' Seiten, Σ '+page_counter+' Seiten) </th></tr>';
  $(crnt_tbl).append(zero_head);
  $(crnt_tbl).append(zero_body);
  return($(crnt_tbl));
}

function appendLevelOne(crnt_tbl, ones){
  let one_body = '';
  let spell_count = 0;
  $.each(ones, function(index, item){
    if(index % 2 == 0){
      if(item.name === "Monster herbeizaubern I"){
        one_body += '<tr><td><a href="'+item.reference+'">'+item.name+'</a><a href="best-monster.html" style="font-size:18px;">(Hilfe)</a><span id="'+item.id+'" onclick="cycle(this)">0</span></td>';
      }
      else
        one_body += '<tr><td><a href="'+item.reference+'">'+item.name+'</a><span id="'+item.id+'" onclick="cycle(this)">0</span></td>';
    }
    else{
      if(item.name === "Monster herbeizaubern I"){
        one_body += '<td><a href="'+item.reference+'">'+item.name+'</a><a href="best-monster.html" style="font-size:18px;">(Hilfe)</a><span id="'+item.id+'" onclick="cycle(this)">0</span></td></tr>';
      }
      else
        one_body += '<td><a href="'+item.reference+'">'+item.name+'</a><span id="'+item.id+'" onclick="cycle(this)">0</span></td></tr>';
    }
    spell_count++;
  })
  page_counter += (spell_count)*1;
  let one_head = '<tr class="head" onclick="lock()"><th colspan="2"> 6 Zauber der Stufe 1 ('+(spell_count)+' Zauber = '+((spell_count)*1)+' Seiten, Σ '+page_counter+' Seiten) </th></tr>';
  $(crnt_tbl).append(one_head);
  $(crnt_tbl).append(one_body);
  return($(crnt_tbl));
}

function appendLevelTwo(crnt_tbl, twos){
  let two_body = '';
  let spell_count = 0;
  $.each(twos, function(index, item){
    if(index % 2 == 0){
      if(item.name === "Monster herbeizaubern II"){
        two_body += '<tr><td><a href="'+item.reference+'">'+item.name+'</a><a href="best-monster.html" style="font-size:18px;">(Hilfe)</a><span id="'+item.id+'" onclick="cycle(this)">0</span></td>';
      }
      else
        two_body += '<tr><td><a href="'+item.reference+'">'+item.name+'</a><span id="'+item.id+'" onclick="cycle(this)">0</span></td>';
    }
    else{
      if(item.name === "Monster herbeizaubern II"){
        two_body += '<td><a href="'+item.reference+'">'+item.name+'</a><a href="best-monster.html" style="font-size:18px;">(Hilfe)</a><span id="'+item.id+'" onclick="cycle(this)">0</span></td></tr>';
      }
      else
        two_body += '<td><a href="'+item.reference+'">'+item.name+'</a><span id="'+item.id+'" onclick="cycle(this)">0</span></td></tr>';
    }
    spell_count++;
  })
  page_counter += (spell_count)*2;
  let two_head = '<tr class="head" onclick="lock()"><th colspan="2"> 6 Zauber der Stufe 2 ('+(spell_count)+' Zauber = '+((spell_count)*2)+' Seiten, Σ '+page_counter+' Seiten) </th></tr>';
  $(crnt_tbl).append(two_head);
  $(crnt_tbl).append(two_body);
  return($(crnt_tbl));
}

function appendLevelThree(crnt_tbl, threes){
  let three_body = '';
  let spell_count = 0;
  $.each(threes, function(index, item){
    if(index % 2 == 0){
      if(item.name === "Monster herbeizaubern III"){
        three_body += '<tr><td><a href="'+item.reference+'">'+item.name+'</a><a href="best-monster.html" style="font-size:18px;">(Hilfe)</a><span id="'+item.id+'" onclick="cycle(this)">0</span></td>';
      }
      else if(item.name === "Metallmacht"){
        three_body += '<tr><td><a href="'+item.reference+'">'+item.name+'</a><a style="font-size:18px;">(100/20/20 GM)</a><span id="'+item.id+'" onclick="cycle(this)">0</span></td>';
      }
      else
        three_body += '<tr><td><a href="'+item.reference+'">'+item.name+'</a><span id="'+item.id+'" onclick="cycle(this)">0</span></td>';
    }
    else{
      if(item.name === "Monster herbeizaubern III"){
        three_body += '<td><a href="'+item.reference+'">'+item.name+'</a><a href="best-monster.html" style="font-size:18px;">(Hilfe)</a><span id="'+item.id+'" onclick="cycle(this)">0</span></td></tr>';
      }
      else if(item.name === "Metallmacht"){
        three_body += '<td><a href="'+item.reference+'">'+item.name+'</a><a style="font-size:18px;">(100/20/20 GM)</a><span id="'+item.id+'" onclick="cycle(this)">0</span></td></tr>';
      }
      else
        three_body += '<td><a href="'+item.reference+'">'+item.name+'</a><span id="'+item.id+'" onclick="cycle(this)">0</span></td></tr>';
    }
    spell_count++;
  })
  page_counter += (spell_count)*3;
  let three_head = '<tr class="head" onclick="lock()"><th colspan="2"> 4 Zauber der Stufe 3 ('+(spell_count)+' Zauber = '+((spell_count)*3)+' Seiten, Σ '+page_counter+' Seiten) </th></tr>';
  $(crnt_tbl).append(three_head);
  $(crnt_tbl).append(three_body);
  return($(crnt_tbl));
}

function appendLevelFour(crnt_tbl, fours){
  let four_body = '';
  let spell_count = 0;
  $.each(fours, function(index, item){
    if(index % 2 == 0){
      if(item.name === "Monster herbeizaubern IV"){
        four_body += '<tr><td><a href="'+item.reference+'">'+item.name+'</a><a href="best-monster.html" style="font-size:18px;">(Hilfe)</a><span id="'+item.id+'" onclick="cycle(this)">0</span></td>';
      }
      else if(item.name === "Ausspähung"){
        four_body += '<tr><td><a href="'+item.reference+'">'+item.name+'</a><a style="font-size:18px;">(1000 GM)</a><span id="'+item.id+'" onclick="cycle(this)">0</span></td>';
      }
      else
        four_body += '<tr><td><a href="'+item.reference+'">'+item.name+'</a><span id="'+item.id+'" onclick="cycle(this)">0</span></td>';
    }
    else{
      if(item.name === "Monster herbeizaubern IV"){
        four_body += '<td><a href="'+item.reference+'">'+item.name+'</a><a href="best-monster.html" style="font-size:18px;">(Hilfe)</a><span id="'+item.id+'" onclick="cycle(this)">0</span></td></tr>';
      }
      else if(item.name === "Ausspähung"){
        four_body += '<td><a href="'+item.reference+'">'+item.name+'</a><a style="font-size:18px;">(1000 GM)</a><span id="'+item.id+'" onclick="cycle(this)">0</span></td></tr>';
      }
      else
        four_body += '<td><a href="'+item.reference+'">'+item.name+'</a><span id="'+item.id+'" onclick="cycle(this)">0</span></td></tr>';
    }
    spell_count++;
  })
  page_counter += (spell_count)*4;
  let four_head = '<tr class="head" onclick="lock()"><th colspan="2"> 3 Zauber der Stufe 4 ('+(spell_count)+' Zauber = '+((spell_count)*4)+' Seiten, Σ '+page_counter+' Seiten) </th></tr>';
  $(crnt_tbl).append(four_head);
  $(crnt_tbl).append(four_body);
  return($(crnt_tbl));
}

function appendLevelFive(crnt_tbl, fives){
  let five_body = '';
  let spell_count = 0;
  $.each(fives, function(index, item){
    if(index % 2 == 0){
      if(item.name === "Monster herbeizaubern V"){
        five_body += '<tr><td><a href="'+item.reference+'">'+item.name+'</a><a href="best-monster.html" style="font-size:18px;">(Hilfe)</a><span id="'+item.id+'" onclick="cycle(this)">0</span></td>';
      }
      else
        five_body += '<tr><td><a href="'+item.reference+'">'+item.name+'</a><span id="'+item.id+'" onclick="cycle(this)">0</span></td>';
    }
    else{
      if(item.name === "Monster herbeizaubern V"){
        five_body += '<td><a href="'+item.reference+'">'+item.name+'</a><a href="best-monster.html" style="font-size:18px;">(Hilfe)</a><span id="'+item.id+'" onclick="cycle(this)">0</span></td></tr>';
      }
      else
        five_body += '<td><a href="'+item.reference+'">'+item.name+'</a><span id="'+item.id+'" onclick="cycle(this)">0</span></td></tr>';
    }
    spell_count++;
  })
  page_counter += (spell_count)*5;
  let five_head = '<tr class="head" onclick="lock()"><th colspan="2"> 2 Zauber der Stufe 5 ('+(spell_count)+' Zauber = '+((spell_count)*5)+' Seiten, Σ '+page_counter+' Seiten) </th></tr>';
  $(crnt_tbl).append(five_head);
  $(crnt_tbl).append(five_body);
  return($(crnt_tbl));
}

function appendMagicItems(crnt_tbl, mgcitms){
  let magic_body = '';
  let spell_count = 0;
  $.each(mgcitms, function(index, item){
    if(index % 2 == 0){
      magic_body += '<tr><td><a href="'+item.reference+'">'+item.name+'</a><span id="'+item.id+'" onclick="cycle(this)">'+item.vorrat+'</span></td>';
    }
    else{
      magic_body += '<td><a href="'+item.reference+'">'+item.name+'</a><span id="'+item.id+'" onclick="cycle(this)">'+item.vorrat+'</span></td></tr>';
    }
    spell_count++;
  })
  let magic_head = '<tr class="head" onclick="lock()"><th colspan="2"> Magische Gegenstände </th></tr>';
  $(crnt_tbl).append(magic_head);
  $(crnt_tbl).append(magic_body);
  return($(crnt_tbl));
}

$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "/static/json/json_selgenthil_dailies.json",
    dataType: 'json',
    success: function(dailies) {
      $.ajax({
        type: "GET",
        url: "/static/json/json_selgenthil_grad_0.json",
        dataType: 'json',
        success: function(zeroes) {
          $.ajax({
            type: "GET",
            url: "/static/json/json_selgenthil_grad_1.json",
            dataType: 'json',
            success: function(ones) {
              $.ajax({
                type: "GET",
                url: "/static/json/json_selgenthil_grad_2.json",
                dataType: 'json',
                success: function(twos) {
                  $.ajax({
                    type: "GET",
                    url: "/static/json/json_selgenthil_grad_3.json",
                    dataType: 'json',
                    success: function(threes) {
                      $.ajax({
                        type: "GET",
                        url: "/static/json/json_selgenthil_grad_4.json",
                        dataType: 'json',
                        success: function(fours) {
                          $.ajax({
                            type: "GET",
                            url: "/static/json/json_selgenthil_grad_5.json",
                            dataType: 'json',
                            success: function(fives) {
                              $.ajax({
                                type: "GET",
                                url: "/static/json/json_selgenthil_magic-items.json",
                                dataType: 'json',
                                success: function(mgcitms) {
                                  $("#table_target").replaceWith(
                                   appendMagicItems(
                                     appendLevelFive(
                                       appendLevelFour(
                                         appendLevelThree(
                                           appendLevelTwo(
                                             appendLevelOne(
                                                appendLevelZero(
                                                 appendDailies(
                                                   makeTable()
                                                 ,dailies)
                                               ,zeroes)
                                              ,ones)
                                            ,twos)
                                          ,threes)
                                        ,fours)
                                      ,fives)
                                    ,mgcitms));
                                }
                              })
                            }
                          })
                        }
                      })
                    }
                  })
                }
              })
            }
          })
        }
      })
    }
  })
});