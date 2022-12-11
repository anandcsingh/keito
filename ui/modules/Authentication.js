
const Authentication = {
    loggedIn: false,
    zkClient: null,
    setZkClient: function(client) {
        this.zkClient = client;
    },
    login: async function () {
        const mina = window.mina;
        this.address = (await mina.requestAccounts())[0];
        this.loggedIn = true;
        return true;
    },
    address: '',
    getShortAddress: function () {
        return this.address.substring(0, 5) + "..." + this.address.substring(this.address.length - 5, this.address.length);
    }
}

export default Authentication;