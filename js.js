document.querySelector('.sidebar').hidden = true;
function getmenu(){
    let doc = document.querySelector('.sidebar');
    if (doc.hidden === true) { doc.hidden = false
    } else { doc.hidden = true}
}
const itemsSourse = [
    ["Vostok precision class", "Urss", 1965, "Wristwatch", "Wostok 2809", "Wostok", "Swiss", "Manual","0"],
    ["Volna", "Urss", 1960, "Wristwatch", "Wostok 2809A", "ChChZ", "Swiss", "Manual","1"],
    ["Roamer Jubile", "Swiss", 1958, "Wristwatch", "MST 402", "Roamer", "Swiss", "Manual","2"],
    ["Cylindre 4 rubis", "France", 1890, "Pocket watch", "38mm", "Remontoir","Cylinder", "Key","3"],
    ["Vostok precision class", "Urss", 1962, "Wristwatch", "Wostok 2809A", "Wostok", "Swiss", "Manual","4"],
    ["Volna", "Urss", 1960, "Wristwatch", "Wostok 2809A", "ChChZ", "Swiss", "Manual","1"],
    ["Volna", "Urss", 1960, "Wristwatch", "Wostok 2809A", "ChChZ", "Swiss", "Manual","1"],
    ["Volna", "Urss", 1960, "Wristwatch", "Wostok 2809A", "ChChZ", "Swiss", "Manual","1"],
    ["Volna", "Urss", 1960, "Wristwatch", "Wostok 2809A", "ChChZ", "Swiss", "Manual","1"],
    ["Volna", "Urss", 1960, "Wristwatch", "Wostok 2809A", "ChChZ", "Swiss", "Manual","1"],
    ["Volna", "Urss", 1960, "Wristwatch", "Wostok 2809A", "ChChZ", "Swiss", "Manual","1"],
    ["Volna", "Urss", 1960, "Wristwatch", "Wostok 2809A", "ChChZ", "Swiss", "Manual","1"],
    ["Vostok precision class", "Urss", 1965, "Wristwatch", "Wostok 2809", "Wostok", "Swiss", "Manual","0"],
    ["Volna", "Urss", 1960, "Wristwatch", "Wostok 2809A", "ChChZ", "Swiss", "Manual","1"],
    ["Roamer Jubile", "Swiss", 1958, "Wristwatch", "MST 402", "Roamer", "Swiss", "Manual","2"],
    ["Cylindre 4 rubis", "France", 1890, "Pocket watch", "38mm", "Remontoir","Cylinder", "Key","3"],
    ["Vostok precision class", "Urss", 1962, "Wristwatch", "Wostok 2809A", "Wostok", "Swiss", "Manual","4"],    ["Vostok precision class", "Urss", 1965, "Wristwatch", "Wostok 2809", "Wostok", "Swiss", "Manual","0"],
    ["Volna", "Urss", 1960, "Wristwatch", "Wostok 2809A", "ChChZ", "Swiss", "Manual","1"],
    ["Roamer Jubile", "Swiss", 1958, "Wristwatch", "MST 402", "Roamer", "Swiss", "Manual","2"],
    ["Cylindre 4 rubis", "France", 1890, "Pocket watch", "38mm", "Remontoir","Cylinder", "Key","3"],
    ["Vostok precision class", "Urss", 1962, "Wristwatch", "Wostok 2809A", "Wostok", "Swiss", "Manual","4"],
    ["Volna", "Urss", 1960, "Wristwatch", "Wostok 2809A", "ChChZ", "Swiss", "Manual","1"],
    ["Volna", "Urss", 1960, "Wristwatch", "Wostok 2809A", "ChChZ", "Swiss", "Manual","1"],
    ["Volna", "Urss", 1960, "Wristwatch", "Wostok 2809A", "ChChZ", "Swiss", "Manual","1"]];
const sourseOrder = {'Year' : 2};

var itemsOrder = [];
for (var i = 0; i <= itemsSourse.length-1; i++) {
   itemsOrder.push(i);
}

function assignItems(){
    let items = document.querySelector('.items');
    items.innerHTML = "";
if (items != null) {
    for (var itemId = 0;  itemId<itemsSourse.length; itemId++) {
    items.insertAdjacentHTML("beforeend",
    '<div class="collection-item"><img src="images/watches/'+itemsSourse[itemsOrder[itemId]][8]+'.jpg" alt="watch"><table><caption><a href="'+itemsSourse[itemsOrder[itemId]][8]+'.html"><h3>'+itemsSourse[itemsOrder[itemId]][0]+
    '</h3></caption><tbody><tr><td>Manufacturer</td><td>'+itemsSourse[itemsOrder[itemId]][1]+
    '</td></tr><tr><td>Production year</td><td>'+itemsSourse[itemsOrder[itemId]][2]+
    '</td></tr><tr><td>Type</td><td>'+itemsSourse[itemsOrder[itemId]][3]+
    '</td></tr><tr><td>Caliber</td><td>'+itemsSourse[itemsOrder[itemId]][4]+
    '</td></tr><tr><td>Brand</td><td>'+itemsSourse[itemsOrder[itemId]][5]+
    '</td></tr><tr><td>Escapement</td><td>' +itemsSourse[itemsOrder[itemId]][6]+
    '</td></tr><tr><td>Winding</td><td>'+itemsSourse[itemsOrder[itemId]][7]+'</td></tr></tbody></table></div>'
    );
}
}
}
assignItems();
function filter(s){
    let cont = document.getElementById("filter"+s);
    console.log(cont.innerHTML);
    switch(cont.innerHTML) {
        case s:
            cont.innerHTML = s+" ↓";
            var temp = 0;
            for (var x = 0;  x<itemsSourse.length; x++) 
                for (var y = itemsSourse.length-1; y>x; y--){
                    if (itemsSourse[itemsOrder[y]][sourseOrder[s]]>itemsSourse[itemsOrder[y-1]][sourseOrder[s]]){
                        temp = itemsOrder[y];
                        itemsOrder[y] = itemsOrder[y-1];
                        itemsOrder[y-1] = temp;
                    }
                }
                console.log(itemsOrder);
                assignItems();
        break;
        case s+" ↓":
            cont.innerHTML = s+" ↑";
            var temp = 0;
            for (var x = 0;  x<itemsSourse.length; x++) 
                for (var y = itemsSourse.length-1; y>x; y--){
                    if (itemsSourse[itemsOrder[y]][sourseOrder[s]]<itemsSourse[itemsOrder[y-1]][sourseOrder[s]]){
                        temp = itemsOrder[y];
                        itemsOrder[y] = itemsOrder[y-1];
                        itemsOrder[y-1] = temp;
                    }
                }
                console.log(itemsOrder);
                assignItems();

        break;
        case s+" ↑":
            cont.innerHTML = s;
            itemsOrder = [];
            for (var i = 0; i <= itemsSourse.length-1; i++) {
                itemsOrder.push(i);
             }
            assignItems();
        break;
    }
}



