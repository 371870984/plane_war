$(function() {
  socket.userName = ranNum(0, 100);
  //发送登陆用户名
  socket.emit("user", {
    type: "login",
    userName: socket.userName
  });
  //处理user指令
  socket.on("user", function(data) {
    console.log("收到服务器指令>", data);
    switch (data.type) {
      case "login_success":
        socket.userId = data.userId;
        socket.userName = data.userName;
        userObj = {
          userName: data.userName,
          userId: data.userId
        };
        $("#userInfo").html(`用户: ${data.userName},ID: ${data.userId}`);
        break;
      case "other_user_login":
        console.log("其他用户登陆成功: ", data);
        break;

      default:
        break;
    }
  });
});
