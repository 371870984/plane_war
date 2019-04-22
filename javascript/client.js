(function() {
  socket.userName = ranNum(0, 100);
  //发送登陆用户名
  socket.emit("user", {
    type: "login",
    userName: socket.userName
  });
  //登陆成功返回，加入房间
  socket.on("user", function(data) {
    if (data.type == "login_success") {
      console.log("登陆成功: ", data);
      socket.userId = data.userId;
      userObj = {
        userName: data.userName,
        userId: data.userId
      };
      $("#userInfo").html(`用户: ${data.userName},ID: ${data.userId}`);
    }else if(data.type == "new_user_login"){
      console.log("其他用户登陆成功: ", data);
    }

    // socket.emit("create_room",{roomName:"新房间"});
    // socket.emit("join_room", { roomId: 1000 });
  });

  //用户断开连接
  socket.on("other_disconnect", data => {
    console.log("other_disconnect: ", socket, data);
  });
  socket.on("reconnect", attemptNumber => {
    console.log("reconnect: ", attemptNumber);
  });
})();
