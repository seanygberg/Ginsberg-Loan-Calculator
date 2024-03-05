describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function() {
        billAmtInput.value = 50;
        tipAmtInput.value = 10;
    });

    it ("should add a payment", function() {
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        let testPayment = allPayments['payment1'];
        expect(testPayment.billAmt).toEqual('50');
        expect(testPayment.tipAmt).toEqual('10');
        expect(testPayment.tipPercent).toEqual(20);
    });

    it ("should not add a payment", function() {
        billAmtInput.value = '';
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0);
    });

    it("should create a new payment", function() {
        let expected = {
            billAmt: '50',
            tipAmt: '10',
            tipPercent: 20
        };
        expect(createCurPayment()).toEqual(expected);
    });

    it("should update payment table", function() {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
        appendPaymentTable(curPayment);
        let curTable = document.querySelectorAll('#paymentTable tbody tr td');
        let billAmount = curTable[0];
        let tipAmount = curTable[1];
        let tipPercentage = curTable[2];
        let deleteBtn = curTable[3];

        expect(curTable.length).toEqual(4);
        expect(billAmount.innerHTML).toEqual("$50");
        expect(tipAmount.innerHTML).toEqual("$10");
        expect(tipPercentage.innerHTML).toEqual("20%");
        expect(deleteBtn.innerHTML).toEqual("X");
    });

    it("should update summary correctly", function() {
        let curPayment = createCurPayment();
        submitPaymentInfo();
        billAmtInput.value = 20;
        tipAmtInput.value = 5;
        submitPaymentInfo();
        updateSummary();
    
        expect(summaryTds[0].innerHTML).toEqual('$70');
        expect(summaryTds[1].innerHTML).toEqual('$15');
        expect(summaryTds[2].innerHTML).toEqual('23%');
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
    });
});