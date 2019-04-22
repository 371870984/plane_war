// $(function() {
//   socket.on("get_room_userList_success", obj => {
//     console.log("获取房间用户列表成功", obj);
//     var htmlStr = "";
//     for (var i = 0; i < obj.userList.length; i++) {
//       htmlStr += `<li data=${obj.userList[i].userId}>用户名：${obj.userList[i].userName}<br>用户Id:${
//         obj.userList[i].userId
//       }</li>`;
//     }
//     $("#room ul").html(htmlStr);
//   });
//   //其他用户加入房间成功
//   socket.on("other_joined_room", obj => {
//     console.log("新用户加入房间: ", obj);
//     var oLi = document.createElement("li");
//     oLi.innerHTML = `用户名：${obj.userName}<br>用户Id:${obj.userId}`;
//     $("#room ul").append(oLi);
//   });
//   //用户离开房间成功
//   socket.on("leave_room_success", obj => {
//     console.log("离开房间成功: ", obj);
//   });
//   //其他用户离开房间成功
//   socket.on("other_leave_room_success", obj => {
//     console.log($("#room ul li"))
//     console.log("其他用户离开房间成功: ", obj);
//   });
// });

$(function() {
  
});
