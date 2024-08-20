const fs = require('fs')

function addAccount(e) {
    ACCOUNT_COUNT ++
    const account = document.createElement('ul')
    account.classList = ['account', `account${ACCOUNT_COUNT}`]
    account.innerHTML =`<img src="/assets/sq.svg" style="border-radius: 100%;" alt="" /><p>Acc ${ACCOUNT_COUNT}</p>`
    addAccountContainer.before(account)
    pubKey = getTrimedKey()
    main.innerHTML = `
    <!--send request to server of ammount in a publicKey-->
    <h1 id="ammount">${getCryptoCurrency(pubKey)}</h1>
    <p>Public key</p>
    <div>
    <!--Get public key from DB and mnemonic-->

        <p>${pubKey}</p>
        <img src="" alt="" />
    </div>`
    console.log(main)
}
function getCryptoCurrency(pubKey) {
    const CONST_POWER = 100000000000000000
    let crypto = 500000000000000
    let currency = "ETH"
    return `${crypto/CONST_POWER} ${currency}`
}
function getTrimedKey() {
    let key = "0xe89cD449b97aF83E0419587b4fd4dCCF7e42916F"
    return key.slice(0, 4) + "..." + key.slice(38)
}
// function verifyPassword(password) {
//     fs.readFile('KeysDB.json', 'utf-8', (err, data) => {
//         if (!err) {
//             return data.localPassword == password ? true : false //how to get val of a key in JSON
//         }
//         else {reject(err)}
//     })
// }

verifyPassword('Hii')
ACCOUNT_COUNT = 1

const main = document.getElementById('main')
console.log(main.innerHTML)
const accountManager = document.getElementById('account_manager');
const addAccountContainer = document.getElementById('add_account_container');
const currencies = document.getElementsByClassName('currencies');

for(i=0; i <= currencies.length; i++) {
    currencies[i].addEventListener('click', addAccount)
}