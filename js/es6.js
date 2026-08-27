// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let hrs = 2;
// let min = 25;
// let sec = 13;

// console.log("Hrs: " + hrs + "."+ sdff + " Min: " + min + " Sec: " + sec);

// console.log(`Hrs: ${hrs} . asdlfjjafk asldjkf jasd ${min} akjsdlfjas`);

// const arr = [1, 2, 34, 34, 3, 3, 54];
// const [a, b, c, d, ...other] = arr;

// console.log(other);

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 0];

// const arr3 = [...arr1, ...arr2];

// console.log(arr3);

// console.log([...arr]);

// console.log(a);

// const obj = {
//   name: "jhon",
//   email: "jhon@gmail.com",
//   address: "Itahari",
//   password: "1234567890",
//   isActive: true,
// };
// const { password, ...res } = obj;
// console.log(res);

// const { name, email } = obj;

// console.log(name);
// const myFun = ({ name, email, address, password, isActive }) => {
//   console.log(`Your name is ${name}`);
// };
// myFun(obj);p
// const arr1 = [1, 2, 3, 4, 5];

// const a = "1";

// console.log(parseInt(a));

// JSON.stringify(api);
// JSON.parse(api);

const api = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
];

api.map((item, index) => {
  console.log(item.userId);
  console.log(item.id);
  console.log(item.title);
  console.log(item.body);
  console.log("========================================");
});
