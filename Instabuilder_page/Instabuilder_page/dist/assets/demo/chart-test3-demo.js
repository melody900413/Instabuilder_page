var ctx = document.getElementById("TEST3").getContext("2d");

                var data = {
                    labels: ["貼文1", "貼文2", "貼文3", "貼文4", "貼文5", "貼文6", "貼文7", "貼文8"],
                    datasets: [
                        {
                            label: "留言",
                            backgroundColor: "#c3d6f2",
                            data: [3, 7, 4,8,3,7,2,5],
                        },
                        {
                            label: "珍藏",
                            backgroundColor: "#789cce",
                            data: [4, 3, 5,5,3,8,3,5]
                        },
                        {
                            label: "分享",
                            backgroundColor: "d1eaf5",
                            data: [7, 2, 6,4,3,7,1,7]
                        },
                    ]
                };

                var myBarChart = new Chart(ctx, {
                    type: 'bar',
                    data: data,
                    options: {
                        barValueSpacing: 20,
                        scales: {
                            yAxes: [{
                                    ticks: {
                                        min: 0,
                                    }
                                }]
                        }
                    }

                });