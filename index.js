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
            client.getBalance((error, help) => {
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

    var accountAddress = "2N2A3cACRtvEEddx1LAgtuq3QfM6f2n6GkQ";
    getBalance(accountAddress);
    getWalletInfo();
    var transId = "8b998f85bec4bcaa08846a5651e15669bf17ea635ed651adcf82a48fa12bce8a";
    // getTransaction();
    listAccounts();
    var account = "2MybrR5pFy7oYmAESUCxdT96avdPQs8qeRB";
    getAccountAddress(account);
    listWallets();
    listReceivedByAccount();
    console.log("end");
//   };
