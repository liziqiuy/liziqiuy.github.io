let scatter1Echarts=echarts.init(document.getElementById('scatter1'));<!--进行初始化-->
		//步骤4.准备配置项（关键）****
let scatter1option = {
  xAxis: {},
  yAxis: {},
  series: [
    {
	
      symbolSize: 10,
      data: [
        [40, 12],
        [38, 8],
        [33, 13],
        [39, 20],
        [33,13],
        [22, 1],
        [33, 6],
        [28, 6],
        [45, 20],
        [46, 26],
		[24,2],
		[40,20],
		[42,23],
		[45,20]
      ],
      type: 'scatter',
	  
    }
  ]
};
scatter1Echarts.setOption(scatter1option);