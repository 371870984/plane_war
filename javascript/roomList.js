$(function() {
  socket.on("get_room_list_success", obj => {
    console.log("获取房间列表成功: ", obj);
    var htmlStr = "";
    for (var i in obj.roomList) {
      htmlStr += `<li data=${obj.roomList[i].roomId}>房间名称：${
        obj.roomList[i].roomName
      }<br>房间Id:${obj.roomList[i].roomId}<br>房间人数: ${
        obj.roomList[i].userList.length
      }</li>`;
    }
    $("#roomList ul").html(htmlStr);
    //绑定点击房间事件
    $("#roomList ul").on("click", "li", function() {
      console.log($(this).attr("data"));
      socket.emit("join_room", { roomId: $(this).attr("data") });
    });
  });
  socket.on("join_room_success", obj => {
    console.log("加入房间成功: ", obj);
    $("#menu").hide();
    $("#roomList").hide();
    $("#room").show();
    socket.emit("get_room_userList", { roomId: obj.roomId });
  });
});
