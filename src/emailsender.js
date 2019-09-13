// nodemailer 모듈 요청
const nodemailer = require("nodemailer");
const emailSender = "";
const emailSenderPass = "";

// 메일발송 객체
const mailSender = {
  // 메일발송 함수
  sendGmail: function(param) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      prot: 587,
      host: "smtp.gmail.com",
      secure: false,
      requireTLS: true,
      auth: {
        user: emailSender,
        pass: emailSenderPass
      }
    });
    // 메일 옵션
    const mailOptions = {
      from: "Sion <" + emailSender + ">",
      to: param.toEmail, // 수신할 이메일
      subject: param.subject, // 메일 제목
      text: param.text, // 메일 내용
      html: param.html
    };
    // 메일 발송
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }
};

module.exports = mailSender;
