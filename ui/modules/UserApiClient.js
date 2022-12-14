import axios from "axios";

const UserApiClient = function () {
    return {
        addMartialArt: async function (address, martialArt, martialArtShortName, rank) {
            var user = null;
            console.log("Address " + address);

            await axios.get(`api/user/${address}`)
                .then(r => user = r.data)
                .catch(e => console.log(e.message));
            if (user == null)
                return createEmptyUser(address, martialArt, martialArtShortName, rank);
            else
                return addIfNotThere(user, address, martialArt, martialArtShortName, rank);
        },
        getUser: async function (address) {
            var user = null;
            console.log("Address " + address);

            await axios.get(`api/user/${address}`)
                .then(r => user = r.data)
                .catch(e => console.log(e.message));

            return user;
        }
    };
    async function createEmptyUser(address, martialArt, martialArtShortName, rank) {
        const result = {};
        await axios.post('api/user', {
            address,
            martialArts: [{ martialArt, rank, martialArtShortName, certified: false }]
        })
            .then((response) => {
                if (response.status == 200) { 
                    result.success = true;
                    result.message = `Martial Art ${martialArt} and rank ${rank} added.`;
                }
                else {
                    result.success = false;
                    result.message = response.statusText
                }
            })
            .catch((error) => {
                result.success = false;
                result.message = error.message;
            });

        return result;
    };
    async function addIfNotThere(user, address, martialArt, martialArtShortName, rank) {
        var found = false;
        const result = {};
        if (!user.martialArts) {
            user.martialArts = [];
        }
        for (var i = 0; i < user.martialArts?.length; i++) {
            if (user.martialArts[i].martialArt == martialArt) {
                found = true;
            }
        }
        if (!found) {
            user.martialArts.push({ martialArt, rank, martialArtShortName, certified: false });
        }
        else {
            result.success = false;
            result.message = `Martial Art ${martialArt} already added, you can only get promoted by a qualifed instructor.`;
            return result;
        }

        await axios.put(`api/user/${address}`, user)
            .then((response) => {
                if (response.status == 200) { 
                    result.success = true;
                    result.message = `Martial Art ${martialArt} and rank ${rank} added.`;
                }
                else {
                    result.success = false;
                    result.message = response.statusText
                }
            })
            .catch((error) => {
                result.success = false;
                result.message = error.message;
            });

        return result;
    };
};

export default UserApiClient;