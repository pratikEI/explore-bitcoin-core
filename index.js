const Client = require('bitcoin-core');
// const client = new Client({ network: 'regtest' });
// const client = new Client({ port: 28332 });
const client = new Client(
    // {
    //     ssl: {
    //     enabled: true,
    //     strict: false
    //     }
    // }, 
    { network: "regtest" , 
     port: "5000" ,
     host: "18.219.17.189", 
     password: "somepass",
     username: "someuser"
    // , 
    // { headers: true }
    }
);

console.log("Hello");

    function getBalance(accountAddress){
            client.getBalance(accountAddress, (error, help) => {
            if (error){
                console.log(error);
                return error;
            }
            var bal = help;
            console.log('getBalance: ');
            console.log(help);
            return help;
        });
    }

    function getWalletInfo(){
        client.getWalletInfo((error, help) => {
            if (error){
                console.log(error);
                return error;
            }
            var bal = help;
            console.log('getWalletInfo: ');
            console.log(help);
            // console.log(help.walletname);
            return help;
        });
    }

    function getTransaction(transId){
        client.getTransaction(transId, (error, help) => {
            if (error){
                console.log(error);
                return error;
            }
            var bal = help;
            console.log("getTransaction: ");
            console.log(help);
            return help;
        });
    }

    function listAccounts(){    
        client.listAccounts((error, help) => {
            if (error){
                console.log(error);
                return error;
            }
            var bal = help;
            console.log("listAccounts: ");
            console.log(help);
            return help;
        });
    }

    function getAccountAddress(account){    
        client.getAccountAddress(account, (error, help) => {
            if (error){
                console.log(error);
                return error;
            }
            var bal = help;
            console.log("getAccountAddress: ");
            console.log(help);
            return help;
        });
    }

    
    function listWallets(){    
        client.listWallets((error, help) => {
            if (error){
                console.log(error);
                return error;
            }
            var bal = help;
            console.log("listWallets: ");
            console.log(help);
            return help;
        });
    }

    function listReceivedByAccount(){    
        client.listReceivedByAccount((error, help) => {
            if (error){
                console.log(error);
                return error;
            }
            var bal = help;
            console.log("listReceivedByAccount: ");
            console.log(help);
            return help;
        });
    }

    function getReceivedByAddress(accountAddress){    
        client.getReceivedByAddress(accountAddress, (error, help) => {
            if (error){
                console.log(error);
                return error;
            }
            var bal = help;
            console.log("getReceivedByAddress: ");
            console.log(help);
            return help;
        });
    }

    function getReceivedByAccount(accountAddress){    
        client.getReceivedByAccount(accountAddress, (error, help) => {
            if (error){
                console.log(error);
                return error;
            }
            var bal = help;
            console.log("getReceivedByAccount: ");
            console.log(help);
            return help;
        });
    }

    function getUnconfirmedBalance(){    
        client.getUnconfirmedBalance((error, help) => {
            if (error){
                console.log(error);
                return error;
            }
            var bal = help;
            console.log("getUnconfirmedBalance: ");
            console.log(help);
            return help;
        });
    }

    function sendToAddress(account, amount){    
        client.sendToAddress(account, amount, (error, help) => {
            if (error){
                console.log(error);
                return error;
            }
            var bal = help;
            console.log("sendToAddress: ");
            console.log(help);
            return help;
        });
    }


    function listTransactions(){    
        client.listTransactions((error, help) => {
            if (error){
                console.log(error);
                return error;
            }
            var bal = help;
            console.log("listTransactions: ");
            console.log(help);
            return help;
        });
    }

    function listReceivedByAccount(){    
        client.listReceivedByAccount((error, help) => {
            if (error){
                console.log(error);
                return error;
            }
            var bal = help;
            console.log("listTransactions: ");
            console.log(help);
            return help;
        });
    }

    function listReceivedByAddress(){    
        client.listReceivedByAddress((error, help) => {
            if (error){
                console.log(error);
                return error;
            }
            var bal = help;
            console.log("listReceivedByAddress: ");
            console.log(help);
            return help;
        });
    }

    function setAccount(){    
        client.setAccount((error, help) => {
            if (error){
                console.log(error);
                return error;
            }
            var bal = help;
            console.log("setAccount: ");
            console.log(help);
            return help;
        });
    }

    function getBlockchainInfo(){    
        client.getBlockchainInfo((error, help) => {
            if (error){
                console.log(error);
                return error;
            }
            var bal = help;
            console.log("getBlockchainInfo: ");
            console.log(help);
            return help;
        });
    }

    function listAddressGroupings(){    
        client.listAddressGroupings((error, help) => {
            if (error){
                console.log(error);
                return error;
            }
            var bal = help;
            console.log("listAddressGroupings: ");
            console.log(help);
            return help;
        });
    }
    
    function getNewAddress(acc){    
        client.getNewAddress(acc, (error, help) => {
            if (error){
                console.log(error);
                return error;
            }
            var bal = help;
            console.log("getNewAddress: ");
            console.log(help);
            return help;
        });
    }
    
    function sendFrom(account, accountAddress, amount){    
        client.sendFrom(account, accountAddress, amount, (error, help) => {
            if (error){
                console.log(error);
                return error;
            }
            var bal = help;
            console.log("sendFrom: ");
            console.log(help);
            return help;
        });
    }

    function getAccount(accountAddress){    
        client.getAccount(accountAddress, (error, help) => {
            if (error){
                console.log(error);
                return error;
            }
            var bal = help;
            console.log("getAccount: ");
            console.log(help);
            return help;
        });
    }

    var accountAddress = "2N2A3cACRtvEEddx1LAgtuq3QfM6f2n6GkQ";
    var accountAddress1 = "2MvQqtVSgqwNrYeKcGqBmzX2BBUyAaqvEjs";  
    getBalance("2N6qsH9yV5ewb6KfmsQXEAQ2yjEB8FbgGEc");
    getWalletInfo();
    var transId = "8b998f85bec4bcaa08846a5651e15669bf17ea635ed651adcf82a48fa12bce8a";
    var transId1 = "e4d2214b7c65b370aecd7d26a323a1e539f0e9590806dcdcbed80a22bc6cfacc";
    var transId2 = "dcea6cfc3d13434c189f0b859e2bbfac80cc6d0e1e6c715bece4218284438285";
    var transId3 = "7aa1992374af43a5825e5918ce8510e22451209346d638feb998e90f9a34a80a";
    // getTransaction(transId3);
    listAccounts();
    var account = "2MybrR5pFy7oYmAESUCxdT96avdPQs8qeRB";
    var account1 = "2N6qsH9yV5ewb6KfmsQXEAQ2yjEB8FbgGEc";
    getAccountAddress("ABCas");
    listWallets();
    // listReceivedByAccount();

    var amount = "0.01";
    // sendToAddress(accountAddress1, amount);

    // getReceivedByAddress("2NBVBPg2Y8KLSSgHAkBtAGrgMpdQyP2qC6N");
    // getReceivedByAccount("");
    // listReceivedByAccount();
    // listReceivedByAddress();

    // getBlockchainInfo();

    // setAccount();

    // listAddressGroupings();

    // getUnconfirmedBalance();
    // listTransactions();
    
    // getNewAddress(account2);
//     getNewAddress:
// 2N24d9UunSBWvUaDTYVQodzxwxUdvTirpdd
// 2Muz3BhxkZAFmc9CJ1PYp9LLQLKUrmSb6GM

    // sendFrom("", "2Mtx94Z4WzKQ5FfBWW7D8KVrytppVqXstjC", amount);
    // getAccount("2Mtx94Z4WzKQ5FfBWW7D8KVrytppVqXstjC");

    console.log("end");
//   };
