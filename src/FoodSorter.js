//Code for some the same functionaly used in multiple places.

function sortJSONtoArray(sortPref){
    let jsonArray = Object.values(require("./FoodItems.json"));

    //Sort the Array
    if (sortPref === "HP")
        jsonArray.sort(HPcompare);
    else if (sortPref === "STAM")
        jsonArray.sort(STAMcompare);
    else if (sortPref === "SUM")
        jsonArray.sort(SUMcompare);
    else if (sortPref === "NAME")
        jsonArray.sort(NAMEcompare);

    return jsonArray
} export default sortJSONtoArray;


//Sorter helpers
function HPcompare(a, b){
    if(a.HP < b.HP)
        return 1;
    if(a.HP > b.HP)
        return -1;
    return 0;
}

//Sort by Stamina
function STAMcompare(a, b){
    if(a.STAM < b.STAM)
        return 1;
    if(a.STAM > b.STAM)
        return -1;
    return 0;
}

//Sort by HP + Stamina
function SUMcompare(a, b){
    let aSum = a.HP + a.STAM;
    let bSum = b.HP + b.STAM;

    if(aSum < bSum)
        return 1;
    if(aSum > bSum)
        return -1;
    return 0;
}

//Sort by Name
function NAMEcompare(a, b){
    if(a.Name < b.Name)
        return -1;
    if(a.Name > b.Name)
        return 1;
    return 0;
}
