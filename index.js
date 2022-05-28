// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

let colorSetFirst = new Set();
colorSetFirst.add("Yellow");
colorSetFirst.add("Pink");
colorSetFirst.add("White");
colorSetFirst.add("Purple");

let eduSetFirst = new Set();
let schoolSetFirst1 = {
    name : "SD 01",
    city : "Jakarta",
    graduate : 2016
};
let schoolSetFirst2 = {
    name : "SMP 02",
    city : "Jakarta",
    graduate : 2019
};
let schoolSetFirst3 = {
    name : "SMA 03",
    city : "Tangerang"
};
eduSetFirst.add(schoolSetFirst1);
eduSetFirst.add(schoolSetFirst2);
eduSetFirst.add(schoolSetFirst3);

let restoSetFirst = new Set();
restoSetFirst.add('Bento');
restoSetFirst.add('Sushi');
restoSetFirst.add('Pancake');
restoSetFirst.add('Eggy');
restoSetFirst.add('Tempura');
restoSetFirst.add('Bento');
restoSetFirst.add('Eggy');
restoSetFirst.add('Padang');
restoSetFirst.add('Tteok');
restoSetFirst.add('Sushi');
restoSetFirst.add('Sushi');


const firstUser = {
    name : "Monica",
    gender : "Female",
    age : 17,
    email :"monica@dingdong.com",
    favoriteColor : colorSetFirst,
    isHavePet : "Yes",
    education : eduSetFirst,
    favoriteResto : restoSetFirst

};

let colorSetSecond = new Set();
colorSetSecond.add("Blue");
colorSetSecond.add("Black");
colorSetSecond.add("Grey");

let eduSetSecond = new Set();
let schoolSetSecond1 = {
    name : "SD 02",
    city : "Jakarta",
    graduate : 2010
};
let schoolSetSecond2 = {
    name : "SMP 03",
    city : "Bogor",
    graduate : 2013
};
let schoolSetSecond3 = {
    name : "SMA 01",
    city : "Surabaya",
    graduate : 2016
};
let schoolSetSecond4 = {
    name : "Universitas Maju",
    city : "Tangerang",
};

eduSetSecond.add(schoolSetSecond1);
eduSetSecond.add(schoolSetSecond2);
eduSetSecond.add(schoolSetSecond3);
eduSetSecond.add(schoolSetSecond4);

let restoSetSecond = new Set();
restoSetSecond.add('Tempura');
restoSetSecond.add('Bento');
restoSetSecond.add('Sushi');
restoSetSecond.add('Pancake');
restoSetSecond.add('Padang');
restoSetSecond.add('Katsu');
restoSetSecond.add('Geprek');
restoSetSecond.add('Pancake');
restoSetSecond.add('Eggy');

const secondUser = {
    name : "Wendy",
    gender : "Male",
    age: 23,
    email : "wendy@dingdong.com",
    favoriteColor : colorSetSecond,
    isHavePet : "No",
    education : eduSetSecond,
    favoriteResto : restoSetSecond,
};





// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};