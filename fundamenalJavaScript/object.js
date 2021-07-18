//object declaration

var student1 = {id: 1026, name: 'Farid', phone: '0175'};
var student2 = {id: 1023, name: 'Niloy', phone: '013627'};
console.log(student1, student2);

// we can get value from object in 3 way

// 1st way

var name = student2.name;
console.log(name);

// 2nd way
var name1 = student1['name'];
console.log(name1);

// 3rd way
var student2Name = 'name'; 
name3 = student2[student2Name];
console.log(name3);


// we can set value from object in 3 way

student1.phone = 0173493;
console.log(student1);

student1['phone'] = 98763;
console.log(student1);

var setValue = 'phone';
student1[setValue] = 76876;
console.log(student1);


// added property in existing object

student1.address = 'Uttara';
console.log(student1)
