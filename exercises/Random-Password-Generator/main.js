function passGen(num) {
  var password = '';
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()";

  for (i = 0; i < num; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));

  }
  console.log(password);
}
passGen(4);
