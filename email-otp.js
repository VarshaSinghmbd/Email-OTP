function sendOTP() {
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpverify')[0];

    let otp_val = Math.floor(Math.random() * 10000);

      let emailbody = `<h2>Your OTP is <h2>${otp_val}`;
      Email.send({
      SecureToken : "c15da249-79c4-424b-a29d-f03afc35eb40 ",
      To : email.value,
      From : "varshasingh2042@gmail.com",
      Subject : "Email OTP using javascript",
      Body : emailbody,
  }).then(

      message => {
        if (message === "OK") {
          alert("OTP sent to your email" + email.value);

          otpverify.style.display = "flex";
          const otp_inp = document.getElementById('otp_inp');
          const otp_btn = document.getElementById('otp-btn');

          otp_btn.addEventListener('click',() => {
            if (otp_inp.value == otp_val) {
              alert("Email address verified....");
          }
          else {
            alert("Invalid OTP");
          }
        })
      }
      }
    );
}