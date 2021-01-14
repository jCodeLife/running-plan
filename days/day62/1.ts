type User = {
    name: string;
    age?: number;
}

let user: User;
user = {
    name: 'Alice'
}

function show(obj: User) {
    console.log(obj.name)
}
show(user);