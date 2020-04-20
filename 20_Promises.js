// console.log("before timer");
// function f(){
//     console.log("hello world");
//            }
// setTimeout(f,3000);
// console.log("after timer ")

// var result=0;
// for (i =0;i<10999999999999999999999;i++){
//     result = result +1;
// }

// console.log(result);
// var  promise = new Promise(function(resolve, reject) {
//     // executor (the producing code, "singer")
// });

//
// var p = new Promise(function (resolve, reject) {
//     var a = 2 + 3;
//     if (a == 5) {
//         resolve("success");
//     } else {
//         reject("failed");
//     }
//
// })
// //
// p.then(function (message){
//     console.log(message);
// }).catch(function (message) {
//     console.log(" rejected" +message);
//
// })
// #################################

//
// const userleft = false;
// const userwatching = true;
//
// function watchtutorialcallback() {
//
//     return new Promise(function (resolve, reject) {
//         if (userleft) {
//             reject({
//                 name: "user left",
//                 message: ":("
//             })
//         } else if (userwatching) {
//             reject({
//                 name: " user watching cate meme",
//                 message: " web dev simple life < cat"
//             })
//         } else {
//             resolve("Thumbs up and subscribe")
//         }
//     })
// }
//
// watchtutorialcallback().then(function (message) {
//     console.log(message);
// }).catch(function (message) {
//     console.log("error is " + message);
//
// })
// ##############################3
// Multiple promises
// const recordVideoOne = new Promise(function (resolve, reject) {
//
//     resolve("video one recorded");
//
// })
// const recordVideoTwo = new Promise(function (resolve, reject) {
//
//     resolve("video two recorded");
//
// })
//
// const recordVideoThree = new Promise(function (resolve, reject) {
//
//     resolve("video three recorded");
//
// })
//
// Promise.all([recordVideoOne,
//     recordVideoTwo, recordVideoThree]).then(function (message){
//     console.log(message);
// })
// ##########################################3
// # which one executed first
const recordVideoOne = new Promise(function (resolve, reject) {

    resolve("video one recorded");

})
const recordVideoTwo = new Promise(function (resolve, reject) {

    resolve("video two recorded");

})

const recordVideoThree = new Promise(function (resolve, reject) {

    resolve("video three recorded");

})

Promise.race([recordVideoOne,
    recordVideoTwo, recordVideoThree]).then(function (message){
    console.log(message);
})