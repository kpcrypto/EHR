const EHR = artifacts.require("EHR");

contract("EHR", (accounts) => {
  it("should put EHR in the first account", async () => {
    const EHRInstance = await EHR.deployed();
    const doctor = await EHRInstance.viewDoctor.call(accounts[0]);

    assert.equal(doctor.valueOf(), "MD", "MD wasn't in the first account");
  });
})