function listViewC() {
    var listView = Qt.createQmlObject ('import QtQuick 2.4; ListView {anchors.fill: parent}', root);
    var model = Qt.createQmlObject('import QtQuick 2.4; ListModel {}', root);
    var myloader = Qt.createQmlObject('import QtQuick 2.4; Loader {source : "zone.qml"}', root);
    var comp = Qt.createQmlObject('import QtQuick 2.4; Component { Text { text: "(" + index + ") " +name + " " + cost } }', root); //Problem 1 same as you said, Problem 3: index only in delgate, Problem 4: Just the only way I know
    model.append({"cost": 15.95, "name":"Pizza"});
    model.append({"cost": 3.95, "name":"Doughnut"});
    listView.model = model;
    listView.delegate = comp;

    console.log(listView.model.get(0).name) //Problem 4: I hope :)
    console.log(listView.headerPositioning) //Problem 2
}

function logindex(){
    //listTest.currentIndex = model.index;
    console.log();
}
function newpage(mypage){
    var mypagestr = 'import QtQuick 2.4; Loader {source : "' + mypage + '"}';
    console.log(mypagestr);
 var myloader = Qt.createQmlObject(mypagestr, root);
}
