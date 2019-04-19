(function() {
  socket.userName = ranNum(0, 100);
  //发送登陆用户名
  socket.emit("login", {
    userName: socket.userName
  });
  //登陆成功返回，加入房间
  socket.on("login_success", function(obj) {
    console.log("登陆成功: ", obj);
    socket.userId = obj.userId;
    userObj = {
      userName: socket.userName,
      userId: socket.userId
    };
    $("#userInfo").html(`用户: ${socket.userName},ID: ${socket.userId}`);
    // socket.emit("create_room",{roomName:"新房间"});
    // socket.emit("join_room", { roomId: 1000 });
  });
  //新用户登陆
  socket.on("other_user_login", obj => {
    console.log("其他用户登陆成功: ", obj);
  });

  //用户断开连接
  socket.on("other_disconnect", obj => {
    console.log("other_disconnect: ", socket, obj);
  });
  socket.on("reconnect", attemptNumber => {
    console.log("reconnect: ", attemptNumber);
  });
})();
