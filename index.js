const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
]

function superbowlWin(arrayOfObjects) {
    let ind = arrayOfObjects.findIndex(obj => {
        if(obj["result"] === "W")
            return true
        else
            return undefined
    })
    if(ind >=0 )
        return arrayOfObjects[ind]["year"]
    else
        return undefined
}

