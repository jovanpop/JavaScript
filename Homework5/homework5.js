    let fruits = ['Apple', 'Banana', 'Orange'];
    let students = [
        {
            firstName: 'John',
            lastName: 'Doe',
            index: 20201
        },
        {
            firstName: 'Jane',
            lastName: 'Doe',
            index: 20202
        },
        {
            firstName: 'David',
            lastName: 'Vinoth',
            index: 20203
        },
        {
            firstName: 'Divya',
            lastName: 'Ishitha',
            index: 20204
        },
        {
            firstName: 'Thomas',
            lastName: 'Edgardson',
            index: 20205
        }
    ];

    for(let i=0; i<fruits.length;i++){
        console.log('Fruit:',fruits[i]);
        console.log("i =",i);
    };
/*     for(let ind=0; ind<students.length; ind++){
       console.log(ind);
       console.log(students[ind]);
    } */
    let counter=0;
    while (counter<10){
        counter++;
        console.log(counter);
    }
    counter=0;
    do {
        counter+=2;
        console.log(counter);
    }
    while(counter<20);
    counter=1;
    do{
        counter+=2;
        console.log(counter);
    }while(counter<21);





