$(function() {
  //创建房间
  $(".createRoom").click(function() {
    var roomName = prompt("Please enter room name", "");
    if (!!roomName) {
      socket.emit("create_room", { roomName: roomName });
    }
  });
  //创建房间
  socket.on("create_room_success", obj => {
    console.log("创建房间成功: ", obj);
  });
  //加入房间
  $(".joinRoom").click(function() {
    $("#menu").hide();
    $("#roomList").show();
    socket.emit("get_room_list");
  });
});
