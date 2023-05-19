


function link(){
   window.location.href = "./StudyNote.html"
}

window.onload = function() {
   
   window.scrollTo({
    top: 0, // 将垂直滚动距离设置为 0
    behavior: "smooth" // 使用动画效果平滑滚动
  });
   
   // 获取弹窗框元素
   var modal = document.getElementById("myModal");
 
   // 获取打开弹窗框的按钮元素
   var btn = document.getElementById("myBtn");
 
   // 获取关闭按钮元素
   var span = document.getElementsByClassName("close")[0];
 
   // 点击打开弹窗框的按钮时显示弹窗框
   btn.onclick = function () {
       modal.style.display = "block";
   }
 
   // 点击关闭按钮时隐藏弹窗框
   span.onclick = function () {
       modal.style.display = "none";
   }
 
   // 点击模态背景时隐藏弹窗框
   window.onclick = function (event) {
       if (event.target == modal) {
           modal.style.display = "none";
       }
   }
 } 