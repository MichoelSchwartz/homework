(function () {
    'use strict';
    function accountCreator(initialBalance) {
        return {
            balance: initialBalance,
            //hw question a:
            /*performTransaction: function (transactionAmount) {
                this.balance = transactionAmount + this.balance;
            }*/
        };
    }
    //hw question b:
    function performTransaction(transactionAmount) {
        this.balance = transactionAmount + this.balance;
    }
    const account1 = accountCreator(100);
    const account2 = accountCreator(200);

    //hw question a:
    //account1.performTransaction(10);
    //account2.performTransaction(50);

    //hw question b:
    performTransaction.call(account1, 50);
    performTransaction.call(account2, 30);
    console.log(account1.balance); // 150
    console.log(account2.balance); // 230

    //hw question c:
    const depositFiftyInAccount1 = performTransaction.bind(account1, 50);
    depositFiftyInAccount1();
    console.log(account1.balance); // 200

}());
