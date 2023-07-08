let isEven: boolean = false;
let num: number = 5; 

type User = {
	name: string;
	age: number;
};

const peshoUser = {
	name: "pesho",
	age: 21,
} as User;

interface AnotherUser {
	firstName: string;
	id: number;
	getUserName: () => string;
}

class AnotherUserClass implements AnotherUser {
	firstName: string;
	id: number;
	getUserName: () => string;
}

const anotherUserList = [
	{ firstName: "Ivan", id: 1 },
	{ firstName: "Mitko", id: 2 },
	{ firstName: "Kiril", id: 3 },
] as AnotherUser[];

anotherUserList.forEach(({ firstName, id }) => {
	console.log(`${id}: ${firstName} `);
});
