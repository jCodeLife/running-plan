// 一、先区域内随机生成飞机

//二、点击方块：
//1.count++
//2.改变背景颜色并判断是否游戏结束，即判断是否点的是飞机弱点或者点击飞机部分>=3时，游戏结束
//(1))如果是飞机部分，变成红色；否则变成灰色
//点击后的部分，将不能再点击
// 三、游戏没结束重复二步骤继续：点击方块，直到游戏结束
//重置



var findPlane = {
    planeOdiv: [],//用于存储飞机各个点位
    // 飞机弱点位可能在的的所有位置
    //这里以"士"的上面交叉点位置为飞机弱点位中心点,x可能是2到8，y可能是3到7
    //这里有个技巧：随机数*（最大值-最小值）+ 最小值；
    weakCenter: [],
    count: 0,//step数
    planeCount : 0,//用于统计点飞机部位第几次了，三次及以上游戏结束。
    self:this,
    init: function () {
        this.count = 0;
        this.weakCenter = [Math.floor(Math.random() * (9 - 2) + 2), Math.floor(Math.random() * (8 - 3) + 3)]
        //根据产生的随机中心弱点位生成飞机
        console.log(this.weakCenter)
        this.plane(this.weakCenter[0], this.weakCenter[1]);
        //点击方块
        this.click();
        //btn重置
        this.reset();

    },
    plane: function (x, y) {
        //根据x，y确定第几个div（这里通过自己找规律得出下面公式)，index表示第几个div
        var index = (x - 1) * 10 + y;
        // 对应找出其他剩余所以飞机部位，一起放在数组中吧
        planeOdiv = [index, index - 10, index - 1, index - 2, index + 1, index + 2, index + 10, index + 20, index + 19, index + 21]
        //给对应div添加属性标识，这里用class

        for (var key in planeOdiv) {
            // 找出对应div
            var tempkey = '.wrap .content div:nth-child(' + planeOdiv[key] + ')'
            var temp = document.querySelector(tempkey);
            temp.setAttribute('class', 'plane')
        }
    },
    click: function () {
        // var self = this;
        //获取元素 
        var content = document.getElementsByClassName("content")[0];     
        //使用事件委托给小区域都绑定click事件
        content.addEventListener("click", this.eventFn, false)

    },
    eventFn: function (e) {
        //每次点击step+1
        self.count++;
        var step = document.getElementsByClassName('count')[0];
        var content = document.getElementsByClassName("content")[0]; 
        // console.log(count)
        step.innerHTML = self.count;
        e = e || window.event;
        // console.log(e)
        var target = e.target || e.srcElement;
        if (target.getAttribute('class') === 'plane') {
            target.classList.add("red");
            self.planeCount++;
            //进一步判断如果是飞机部分，点的是不是飞机弱点
            if (_isWeak()) {
                //是中心弱点，显示所有飞机部分，并结束游戏！
                _showPlaneAll();
                setTimeout(() => {
                    _gameOver();
                }, 0);
            } else {
                //判断是不是累计点击第三个飞机部位
                if (self.planeCount >= 3) {
                    //游戏结束
                    _showPlaneAll();
                    setTimeout(() => {
                        _gameOver();
                    }, 0);
                }
                //否则，没有结束游戏，继续等下一次点击



            };

        } else {
            target.classList.add('blue');
        }
        function _isWeak() {
            // 计算距离父元素content的距离
            // 1.父级容器位置
            // console.log(parseInt(content.offsetLeft));
            // console.log(parseInt(content.offsetTop));
            // 2.点击位置坐标
            // console.log(e.clientX)
            // console.log(e.clientY)
            // 最后得出位置
            var x = parseInt(e.clientX) - parseInt(content.offsetLeft);
            var y = parseInt(e.clientY) - parseInt(content.offsetTop);
            // console.log(x,y);
            // 根据在父元素中的位置，算出点中的元素的位置，从而得出是第几个元素。
            var arr = [Math.ceil(y / 30), Math.ceil(x / 30)];
            // console.log(arr);
            // console.log(self.weakCenter)
            if (arr[0] === self.weakCenter[0] && arr[1] === self.weakCenter[1]) {
                //点中中心啊，显示所有飞机部位
                // console.log('当两个相等时')
                return true;
            } else {
                return false
            }

        }
        function _showPlaneAll() {
            // planeOdiv飞机的所以部位，要显示出来
            for (var key in planeOdiv) {

                var tempkey = '.wrap .content div:nth-child(' + planeOdiv[key] + ')'
                var temp = document.querySelector(tempkey);
                temp.style.backgroundColor = "#f00";
            }
        }
        function _gameOver() {
            alert("游戏结束！所用步数：" + count)
        }
    },
    reset: function () {
        var btn = document.getElementsByClassName('btn')[0];
        var self = this;
        btn.onclick = function () {
            var content = document.getElementsByClassName("content")[0];
            var step = document.getElementsByClassName('count')[0];
            var odiv = document.querySelectorAll('.content div');
            content.removeEventListener('click', self.eventFn, false);
            this.count = 0;
            step.innerHTML = this.count;
            console.log(odiv);
            for (var i = 0; i < odiv.length; i++) {
                odiv[i].className = "";

            }


            self.init();
        }

    }



}
findPlane.init();