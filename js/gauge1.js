let gauge1Echarts=echarts.init(document.getElementById('gauge1'));<!--进行初始化-->
		//步骤4.准备配置项（关键）****
let gauge1option = {
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%'
  },
  series: [
    {
      name: 'Pressure',
      type: 'gauge',
      progress: {
        show: true
      },
      detail: {
        valueAnimation: true,
        formatter: '{value}'
      },
      data: [
        {
          value: 80,
          name: 'SCORE'
        }
      ]
    }
  ]
};
gauge1Echarts.setOption(gauge1option);