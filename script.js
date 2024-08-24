// const fs = require('fs');

function addAccount(currency) {
    ACCOUNT_COUNT ++
    const account = document.createElement('ul')
    account.classList = `account_card account${ACCOUNT_COUNT}`
    account.innerHTML =`<div class="account_card_display">
                    <img class="${currency}" src="/assets/icons/${currency}.svg" alt="" />
                    <p>${currency}</p>
                </div>
                <div class="account_card_info">
                    <p>5.0 ${currency}</p>
                </div>`
    addAccountContainer.previousElementSibling.before(account)
    // const pubKey = getTrimedKey()
    // main.innerHTML = `
    // <!--send request to server of ammount in a publicKey-->
    // <h1 id="ammount">${getCryptoCurrency(pubKey)}</h1>
    // <p>Public key</p>
    // <div>
    // <!--Get public key from DB and mnemonic-->

    //     <p>${pubKey}</p>
    //     <img src="" alt="" />
    // </div>`
}
function getCryptoCurrency(pubKey) {
    const CONST_POWER = 100000000000000000
    let crypto = 500000000000000
    let currency = "ETH"
    return `${crypto/CONST_POWER} ${currency}`
}
function getTrimedKey() {
    let key = "0xe89cD449b97aF83E0419587b4fd4dCCF7e42916F";
    return key.slice(0, 4) + "..." + key.slice(38);
}
// function verifyPassword(password) {
//     fs.readFile('KeysDB.json', 'utf-8', (err, data) => {
//         if (!err) {
//             return data.localPassword == password ? true : false //how to get val of a key in JSON
//         }
//         else {reject(err)}
//     })
// }

ACCOUNT_COUNT = 1;

const accountManager = document.getElementById('account_manager');
const passwordContainer = document.getElementById('password_container');
const unlockBtn = document.getElementById('unlock');

const main = document.getElementById('main');
const addAccountContainer = document.getElementById('add_account_container');
const addAccountDiv = document.querySelectorAll('.add_account_div');

// verifyPassword('Hii')

unlockBtn.addEventListener('click', () => {
    document.getElementsByTagName('body')[0].removeChild(passwordContainer);
})

addAccountDiv.forEach(ele => {
    ele.addEventListener('click', () => {
        console.log(ele.lastElementChild.innerHTML)
        addAccount(ele.lastElementChild.innerHTML)
    })
})