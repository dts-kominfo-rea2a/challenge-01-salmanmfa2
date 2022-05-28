// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca\

const colorArrayFirst = [ 
    "Yellow", "Pink","White","Purple"
];

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
const restoArrayFirst = [
    "Bento",
    "Sushi",
    "Pancake",
    "Tempura",
    "Bento",
    "Eggy",
    "Padang",
    "Tteok",
    "Sushi",
    "Sushi"

];
restoSetFirst.add(restoArrayFirst);



const firstUser = {
    name : "Monica",
    gender : "Female",
    age : 17,
    email :"monica@dingdong.com",
    favoriteColor : colorArrayFirst,
    isHavePet : "Yes",
    education : eduSetFirst,
    favoriteResto : restoSetFirst

};

const colorArraySecond = [
    "Blue","Black","Grey"
];

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
const restoArraySecond =[
    "Tempura",
    "Bento",
    "Sushi",
    "Pancake",
    "Padang",
    "Katsu",
    "Geprek",
    "Pancake",
    "Eggy"
];
restoSetSecond.add(restoArraySecond);

const secondUser = {
    name : "Wendy",
    gender : "Male",
    age: 23,
    email : "wendy@dingdong.com",
    favoriteColor : colorArraySecond,
    isHavePet : "No",
    education : eduSetSecond,
    favoriteResto : restoSetSecond,
};





// TODO: Masukkan hasil akhir dari kedua user di sini.
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