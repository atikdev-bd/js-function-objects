var soppingCrad = {
    books: 3,
    pen: 5,
    lighter: 10,
    sunglass: 5,
    phone: 1,
    shoes: 2
}
var porartices = Object.keys(soppingCrad)
// console.log(porartices)
var values = Object.values(soppingCrad)
// console.log(values)
for (var i = 0; i < porartices.length; i++) {
    var porarticesName = porartices[i];
    var porarticesValues = soppingCrad[porarticesName];
    console.log(porarticesName, porarticesValues)

}
