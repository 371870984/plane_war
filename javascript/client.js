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
  socket.on("login success", function(obj) {
    console.log("login success: ", obj);
    socket.userId = obj.userId;
    socket.emit("join room", {
      userId: socket.userId,
      userName: socket.userName
    });
  });
  //新用户登陆
  socket.on("new user login", obj => {
    console.log("new user login: ", obj);
  });
  //加入房间成功
  socket.on("a new user has joined the room", obj => {
    console.log("a new user has joined the room: ", obj);
  });

  socket.on("reconnect", attemptNumber => {
    console.log("reconnect: ", attemptNumber);
  });
})();
