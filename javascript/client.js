(function() {
  var socket = io.connect("ws://10.2.10.46:3000");

  function ranNum(min = 0, max = 100) {
    return Math.round(Math.random() * (max - min) + min);
  }
  socket.userName = ranNum(0, 100);
  //发送登陆用户名
  socket.emit("login", {
    userName: socket.userName
  });
  //登陆成功返回，加入房间
  socket.on("login_success", function(obj) {
    console.log("登陆成功: ", obj);
    socket.userId = obj.userId;
    // socket.emit("create_room",{roomName:"新房间"});
    socket.emit("join_room", { roomId: 1000 });
  });
  //新用户登陆
  socket.on("other_user_login", obj => {
    console.log("其他用户登陆成功: ", obj);
  });
  //创建房间
  socket.on("create_room_success", obj => {
    console.log("创建房间成功: ", obj);
  });
  //加入房间
  socket.on("join_room_success", obj => {
    console.log("加入房间成功: ", obj);
  });
  //离开房间
  socket.on("leave_room_success", obj => {
    console.log("离开房间成功: ", obj);
  });
  //用户断开连接
  socket.on("other_disconnect", obj => {
    console.log("other_disconnect: ", obj);
  });
  //加入房间成功
  socket.on("other_joined_room", obj => {
    console.log("a new user has joined the room: ", obj);
  });

  socket.on("reconnect", attemptNumber => {
    console.log("reconnect: ", attemptNumber);
  });
})();
