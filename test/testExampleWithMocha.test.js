// const assert = require('assert');
// const ganache = require('ganache-cli');
// const Web3 = require('web3');
// const web3 = new Web3(ganache.provider())
// const { interface, bytecode } = require('../compile');

// class Car {
// 	park() {
// 		return 'stopped';
// 	}
// 	drive() {
// 		return 'vroom';
// 	}
// }

// let car;

// beforeEach(() => {
// 	car = new Car();
// })

// describe('Car', () => {
// 	it('can park', () => {
// 		assert.equal(car.park(), 'stopped');
// 	});

// 	it('can drive', () => {
// 		assert.equal(car.drive(), 'vroom');
// 	});
// });


// // fetching accounts with ganache which uses asynchronous function which produces promise
// beforeEach(() => {
// 	// get a list of all accounts
// 	web3.eth.getAccounts().then(fetchedAccounts => {
// 		// use one of those accounts to deploy the contract
// 		console.log(fetchedAccounts);
// 	});
// });

// describe('Inbox', () => {
// 	it('deploys a contract', () => { })
// });



// // refactoring the above code to use await
// let accounts;
// let inbox;

// beforeEach(async () => {
// 	// get a list of all accounts
// 	accounts = await web3.eth.getAccounts();
// 	// use one of those accounts to deploy the contract
// 	inbox = await new web3.eth.Contract(JSON.parse(interface))
// 		.deploy({ data: bytecode, arguments: ['Hi there!'] })
// 		.send({ from: accounts[0], gas: '1000000' })

// });

// describe('Inbox', () => {
// 	it('deploys a contract', () => {
// 		console.log(inbox);
// 	})
// });

