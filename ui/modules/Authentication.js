

const Authentication = {
    loggedIn: false,
    login: function() {
        this.loggedIn = true;
    },
    address: 'B62qpzAWcbZSjzQH9hiTKvHbDx1eCsmRR7dDzK2DuYjRT2sTyW9vSpR',
    getShortAddress: function() {
        return this.address.substring(0, 5) + "..." + this.address.substring(this.address.length - 5, this.address.length);
    }
}

export default Authentication;