//  实现：文件系统的写入、读取
const fs = require("fs");
// 同步写入
function writeSyncTest() {
  console.log("文件开始写入...");
  let content = "Hello world";
  fs.writeFileSync("./temp2.txt", content);
  console.log("程序执行完毕");
}
// 执行
// writeSyncTest();

// 异步写入
function writeTest() {
  console.log("文件开始写入...");
  let content = "Hello world";
  fs.writeFile("./temp1.txt", content, (err) => {
    if (err) {
      console.log("err:" + err);
    }
    console.log("文件写入完毕");
  });
  console.log("程序执行完毕");
}
// 执行
// writeTest();

// 异步读取
function readTest() {
  console.log("开始读取...");
  fs.readFile("./temp1.txt", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log("err:" + err);
    }
    console.log("文件内容为:" + data);
  });
  console.log("程序执行完毕!!!");
}
// 执行
// readTest();

// 同步读取
function readSyncTest() {
  console.log("开始读取...");
  let data = fs.readFileSync("./temp2.txt", "utf-8");
  console.log("文件内容为:" + data);
  console.log("程序执行完毕!!!");
}
// 执行
readSyncTest();