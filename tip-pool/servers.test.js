describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server', function() {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should update the server table', function() {
    submitServerInfo();
    updateServerTable();

    let curTable = document.querySelectorAll('#serverTable tbody tr td');
    let name = curTable[0].innerText;
    let tip = curTable[1].innerText;
    let deleteBtn = curTable[2].innerText;
    expect(curTable.length).toEqual(3);
    expect(name).toEqual("Alice");
    expect(tip).toEqual("$0.00");
    expect(deleteBtn).toEqual("X");
  });

  afterEach(function() {
    // teardown logic
    serverTbody.innerHTML = "";
    serverId = 0;
    allServers = {};
  });
});
