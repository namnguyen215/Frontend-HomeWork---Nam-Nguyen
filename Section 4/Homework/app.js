//Cau 1
console.log("Cau 1");
let products = [{
        name: "Xiaomi portable charger 20000mah",
        price: 428,
        brand: "Xiaomi",
        category: "Charger",
        color: "White",
    },
    {
        name: "VSmart Active 1",
        price: 5487,
        brand: "VSmart",
        category: "Phone",
        color: "Black",
    },
    {
        name: "IPhone X",
        price: 21490,
        brand: "Apple",
        category: 'Phone',
        color: "Gray",
    },
    {
        name: "Samsung Galaxy A9",
        price: 8490,
        brand: "Samsung",
        category: "Phone",
        color: "Blue",
    }
];
//1.1
console.log("1.1");
for (let i = 0; i < products.length; i++) {
    console.log("------------------------------");
    console.log(`Name: ${products[i].name}`);
    console.log(`Price: ${products[i].price}`);
}

//1.2
console.log("1.2");
for (let i = 0; i < products.length; i++) {
    console.log(`#${i+1}. ${products[i].name}`);
    console.log(`Price: ${products[i].price}`);
}
let productPosition = Number(prompt('Enter product position:'));
console.table(products[productPosition - 1]);

//1.3
console.log('1.3');
let productCategory = prompt('Enter your category?');
productCategory = productCategory.charAt(0).toUpperCase() + productCategory.slice(1);
console.log(productCategory);
for (let i = 0; i < products.length; i++) {
    if (products[i].category == productCategory) {
        console.log("------------------------------");
        console.log(`Name: ${products[i].name}`);
        console.log(`Price: ${products[i].price}`);
    }
}

//1.4
console.log('1.4');
products[0]["provider"] = "Phukienzero dientuccc";
products[1]["provider"] = "Tgdd";
products[2]["provider"] = "Tgdd";
products[3]["provider"] = "Tgdd";
for (let i = 0; i < products.length; i++) {
    console.log(`#${i+1}. ${products[i].name}`);
    console.log(`Price: ${products[i].price}`);
    console.log(`Providers: ${products[i].provider}`);
}

//Cau 2
console.log('Cau 2');
let roadmap = [{
        name: "HTML",
        status: "false",
    },
    {
        name: "CSS",
        status: "false",
    }, {
        name: "Basics of Javascript",
        status: "false",
    }, {
        name: "Node Package Manager (npm)",
        status: "false",
    },
    {
        name: "Git",
        status: "false",
    }
];
console.log('Hi there, this is yout learning tasks to front-end developer career');

function logAll() {
    for (let i = 0; i < roadmap.length; i++) {
        console.log(`${i+1}. ${roadmap[i].name}`);
        console.log(`   Complete: ${roadmap[i].status}`);
    }
    console.log('---------------------------------------------');

};
logAll();

//2.2

while (1) {
    let userCommand = prompt('Enter your command(New, Delete, Update, Complete)');
    if (userCommand == 'new') {
        let newTask = prompt(`Enter new task:`);
        let obj = {};
        obj['name'] = newTask;
        obj['status'] = 'false';
        roadmap.push(obj);
        logAll();
    } else if (userCommand == 'update') {
        let updatePosition = Number(prompt(`Enter position:`));
        let updateTitle = prompt(`Enter new title:`);
        roadmap[updatePosition - 1].name = updateTitle;
        logAll();
    } else if (userCommand == 'complete') {
        let completePosition = Number(prompt('Enter position:'));
        roadmap[completePosition - 1].status = 'true';
        logAll();
    } else if (userCommand == 'delete') {
        let deletePosition = Number(prompt('Enter position:'));
        roadmap.splice(deletePosition - 1, 1);
        logAll();
    } else {
        break;
    }
}