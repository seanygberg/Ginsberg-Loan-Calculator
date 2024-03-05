describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(function() {
        billAmtInput.value = 50;
        tipAmtInput.value = 10;
        submitPaymentInfo();
    });

    it ("should sum total tip", function() {
        expect(sumPaymentTotal('tipAmt')).toEqual(10);
        billAmtInput.value = 50;
        tipAmtInput.value = 10;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
    });

    it ("should sum total bill", function() {
        expect(sumPaymentTotal('billAmt')).toEqual(50);
        billAmtInput.value = 50;
        tipAmtInput.value = 10;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(100);
    });

    it ("should calculate tip percentage", function() {
        expect(calculateTipPercent(100, 15)).toEqual(15);
        expect(calculateTipPercent(10, 15)).toEqual(150);
    });

    it ("should add new td to the table", function() {
        let myTr = document.createElement('tr');
        
        appendTd(myTr, "first");
        appendTd(myTr, "second");
        
        expect(myTr.children.length).toEqual(2);
        expect(myTr.firstChild.innerHTML).toEqual('first');
        expect(myTr.firstChild.nextSibling.innerHTML).toEqual('second');

    });

    afterEach(function() {
        billAmtInput.value = 0;
        tipAmtInput.value = 0;
        allPayments = {};
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
    })
})