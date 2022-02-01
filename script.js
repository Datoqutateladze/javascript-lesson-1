
// 1 davaleba
let user = {
    firstname: 'giorgi',
    lastname: 'smith',
    age: 25,
    studentstatus: 'active'
  };
  console.log(user.studentstatus);

// 2 davaleba

  let films = ['matrix', 'castaway', 'shawshank', 'truman','pirates'];
  for (let item of films){
      console.log (item);
  }
// 3 davaleba
  let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89]
  for(let i=0; i< numbers.length; i++){
    if(numbers[i] >5){
        console.log(numbers[i]);
    }
}
// 4 davaleba
let users =  [
    {username:'test1', status: false},
    {username:'test2', status: false},
    {username:'test3', status: true}
];

// 5 davaleba
let user = {
    name:'giorgi',
    age: 20,
    studentstatus:'active'
    }

    if (user.age > 18 && user.studentstatus) {
        console.log('hello');
    } else if (user.name === 'giorgi') {
        console.log('hello giorgi');
    } else if (user.age <25 || user.studentstatus){
        console.log('hello world');
    } else {
        console.log('error');
    }
// 6 davaleba
    let array = [watermelon, pear, 10, 45, 50, 'apple', 'ananas'];
    for(let i=0; i< array.length; i++){
        if(numbers[i] >5){
            console.log(numbers[i]);
        }
    }