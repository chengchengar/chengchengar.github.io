function ShowImg() {
    // 创建图片元素
    const img = document.createElement('img');
    img.className = 'img2';
    img.src = './t1.png';


    // 向元素内添加图片
    var v = document.getElementById('biaoti');
    v.append(img);
}

function OutImg() {
    var v = document.getElementById('biaoti');
    var imgs = v.querySelectorAll('.img2');
    for (const img of imgs) {
        img.remove();
    }


    // 获取需要添加图片的元 素
    var targetElement = document.getElementById('img2');

    // 创建图片元素
    var imgElement = document.createElement('img');
    imgElement.src = './t1.png';
    imgElement.alt = 'Image';

}


const switchingImg = document.getElementById("switching-img");

const imgArray = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png"];    // 存储要切换的图片路径

let currentIndex = 0;    //存储当前图片的索引

setInterval(function () {   //使用定时器，每隔一段时间就切换一次图片
    currentIndex = (currentIndex + 1) % imgArray.length;   // 循环更新图片索引

    switchingImg.src = imgArray[currentIndex];   // 更新图片路径
}, 91);   // 每隔3000毫秒（3秒）执行一次



let x = 0;    //存储x坐标
let y = 140;    //存储y坐标

document.addEventListener("keydown", function (event) {  //监听键盘事件
    switch (event.key) {   //判断按下的键
        case "w":
            y = y - 35;   //向上移动10个像素
            switchingImg.style.top = y + "px";   //将y坐标设置为图片的top属性
            break;
        case "a":
            x = x - 35;   //向左移动10个像素
            switchingImg.style.left = x + "px";   //将x坐标设置为图片的left属性
            break;
        case "s":
            y = y + 35;   //向下移动10个像素
            switchingImg.style.top = y + "px";   //将y坐标设置为图片的top属性
            break;
        case "d":
            x = x + 35;   //向右移动10个像素
            switchingImg.style.left = x + "px";   //将x坐标设置为图片的left属性
            break;
    }
});