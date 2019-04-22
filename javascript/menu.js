$(function() {
  //创建房间
  $(".createRoom").click(function() {
    var roomName = prompt("Please enter room name", "");
    if (!!roomName) {
      socket.emit("room", { type: "create_room", roomName: roomName });
    } else {
      roomName = prompt("Please enter room name", "");
    }
  });
  //加入房间
  $(".joinRoom").click(function() {
    $("#menu").hide();
    $("#roomList").show();
    socket.emit("room", { type: "get_room_list" });
  });

  socket.on("room", data => {
    console.log("收到服务器指令>", data);
    switch (data.type) {
      //创建房间成功
      case "create_room_success":
        socket.emit("room", {
          type: "join_room",
          roomId: data.roomId,
          userName: socket.userName,
          userId: socket.userId
        });
        break;
      case "join_room_success":
        $("#menu").hide();
        $("#roomList").hide();
        $("#room").show();
        socket.emit("room", { type: "get_room_userList", roomId: data.roomId });
        break;
      case "get_room_list_success":
        var htmlStr = "";
        for (var i in data.roomList) {
          htmlStr += `<li data=${data.roomList[i].roomId}>房间名称：${
            data.roomList[i].roomName
          }<br>房间Id:${data.roomList[i].roomId}<br>房间人数: ${
            data.roomList[i].userList.length
          }</li>`;
        }
        $("#roomList ul").html(htmlStr);
        //绑定点击房间事件
        $("#roomList ul").on("click", "li", function() {
          // console.log($(this).attr("data"));
          socket.emit("room", {
            type: "join_room",
            roomId: $(this).attr("data")
          });
        });
        break;
      case "get_room_userList_success":
        var htmlStr = "";
        for (var i = 0; i < data.userList.length; i++) {
          htmlStr += `<li data=${data.userList[i].userId}>用户名：${
            data.userList[i].userName
          }<br>用户Id:${data.userList[i].userId}</li>`;
        }
        $("#room ul").html(htmlStr);
        break;
      case "user_join_room_success":
        var oLi = document.createElement("li");
        oLi.innerHTML = `用户名：${data.userName}<br>用户Id:${data.userId}`;
        $("#room ul").append(oLi);
        break;

      default:
        break;
    }
  });
});
