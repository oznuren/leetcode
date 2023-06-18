/**
 * @param {number[][]} accounts
 * @return {number}
 */

let maximumWealth = function(accounts) {
    let maxWealth = 0;
    accounts.forEach((customer) => {
        let currentWealth = 0;
        customer.forEach((bank) => {
            currentWealth += bank;
        })
        maxWealth = Math.max(maxWealth, currentWealth)
    })
    return maxWealth;
};