const receiveEmail = "zion0425@naver.com";
const mailsender = require("./emailsender");
const userName = "Hoyoung";

//create a server object:

let emailParam = {
  toEmail: receiveEmail,
  subject: "fuck u",
  text: "content test",
  html:
    "<p><b>Hello</b> to Hoyoung </p>" +
    '<a href="https://github.com/zion0425/note_memo">node-memo 살펴보기</a>'
};
mailsender.sendGmail(emailParam);
