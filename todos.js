let input = prompt('add a thing to do');
const todos = ['colect the trash', 'clean litter box'];
while( input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('********');
        for(let i = 0; i < todos.length; i ++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('********');
    } else if (input == 'new') {
        const newTodo = prompt('Ok, type in a new task');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    } else if (input === 'delete') {
        const index = parseInt(prompt('OK, enter an item number to delete:'));

        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`item ${deleted} removed`);
        } else {
            console.log(`type in a valid number`);
        }
        
    }
    input = prompt('add a thing to do');

}
console.log('thanks for quitting!');

//methods
const mathFunk = {
    myPi: 3.13159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}