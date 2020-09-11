{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.13.0/moment.min.js"></script>
        <script> */}

// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';  
            // y 軸的顯示
            var yAxis = [];
            // 資料集合，之後只要更新這個就好了。
            var datas = [];
            var ctx = document.getElementById('TEST').getContext('2d');
            var lineChart = new Chart(ctx, {
                //Type 改成 Bar
                type: 'bar',
                data: {
                    labels: yAxis,
                    datasets: [{
                            label: '測試資料',
                            data: datas,
                            backgroundColor: "#E283A0"
                        }]
                }
            });

            //時間格式
            var timeFormat = 'HH:mm:ss';

            function appendData()
            {
                //超過10 個，就把最早進來的刪掉
                if (yAxis.length > 10) {
                    yAxis.shift();
                    datas.shift();
                }
ww
                //推入y 軸新的資料 
                yAxis.push(new moment().format(timeFormat));

                //推入一筆亂數進資料 10~100
                datas.push(Math.floor(Math.random() * 100) + 10);

                //更新線圖
                lineChart.update();
            }

            //每半秒做一次
            setInterval(appendData, 1000);
        // </script>