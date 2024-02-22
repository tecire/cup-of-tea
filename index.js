const teaTypes = ['Green Tea', 'Chai Tea', 'Black Tea', 'Oolong Tea', 'Bubble Tea', 'Matcha Tea', 'Roibos Tea', 'White Tea', 'Herbal Tea', 'Purple Tea', 'Pu-erh Tea', 'Yellow Tea']

function helloTea() {
    let randomIndex = Math.floor(Math.random() * teaTypes.length);
    console.log(`A NEW DAY~ Give yourself a ${teaTypes[randomIndex]}`);
}
module.exports = { helloTea };