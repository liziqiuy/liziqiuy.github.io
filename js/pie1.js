let pie1Echarts=echarts.init(document.getElementById('pie1'));<!--进行初始化-->
		//步骤4.准备配置项（关键）****
		let pie1option={
			  series: [
			    {
			      name: 'Age Distribution',
			      type: 'pie',
			      radius: ['40%', '70%'],
			      avoidLabelOverlap: false,
			      itemStyle: {
			        borderRadius: 10,
			        borderColor: '#fff',
			        borderWidth: 2
			      },
			      data: [
			        { value: 1048, name: '20-25' },
			        { value: 735, name: '25-30' },
			        { value: 580, name: '30-35' },
			        { value: 484, name: '35-40' },
			        { value: 300, name: '40-45' }
			      ]
			    }
			  ]
			
		};
		//步骤5.将配置项设置给echarts对象
		pie1Echarts.setOption(pie1option);