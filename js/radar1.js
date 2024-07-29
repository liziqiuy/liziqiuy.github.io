let radar1Echarts=echarts.init(document.getElementById('radar1'));<!--进行初始化-->
		//步骤4.准备配置项（关键）****
let radar1option = {
 
  legend: {
    data: ['Female', 'Male']
  },
  
  radar: {
    // shape: 'circle',
    indicator: [
      { name: 'Zhejiang', max: 6500 },
      { name: 'Xinjiang', max: 16000 },
      { name: 'Shanghai', max: 30000 },
      { name: 'Guangdong', max: 38000 },
      { name: 'Beijing', max: 52000 },
      { name: 'Jilin', max: 25000 }
    ]
  },
  series: [
    {
      // name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: 'Female'
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: 'Male'
        }
      ]
    }
  ]
};
radar1Echarts.setOption(radar1option);