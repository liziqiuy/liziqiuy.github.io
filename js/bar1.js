let myEcharts=echarts.init(document.getElementById('bar1'));<!--进行初始化-->
		//步骤4.准备配置项（关键）****
		let option={
			
			xAxis:{//x轴
			type:'category',//对应的项
			data:['C','C++','PHP','C#','Java','Python'],//对应的数据
			axisLabel:{
				fontSize:'10px',
				interval: 0
			},
			axisLine:{
				show:false
			}
			},
			yAxis:{//y轴
			type:'value',//对应的值
			splitLine:{
				lineStyle:{
					color:'#333'
				}
			}
			},
			series:[
				{name:'2022',
				type:'bar',//显示什么图是根据这个显示的}//一个系列以一个对象体现
				data:[100,123,156,95,88,256],
				
				},
				
				{name:'2023',
				type:'bar',//显示什么图是根据这个显示的}//一个系列以一个对象体现
				data:[110,88,140,98,400,300],
				}
			],//分数（才是真正的配置）配置具体的值  数组的形式
			//加入图例
			legend:{
				data:['2022','2023'],
				textStyle:{
					color: '#999'
				}
			}
		};
		//步骤5.将配置项设置给echarts对象
		myEcharts.setOption(option);