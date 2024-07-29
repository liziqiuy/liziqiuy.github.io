let line1Echarts=echarts.init(document.getElementById('line1'));<!--进行初始化-->
		//步骤4.准备配置项（关键）****
		let line1option={
			
			xAxis:{//x轴
			type:'category',//对应的项
			data:['1月','3月','5月','7月','9月','11月'],//对应的数据
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
				{name:'新增游客',
				type:'line',//显示什么图是根据这个显示的}//一个系列以一个对象体现
				data:[2100,1230,1056,950,2388,2560],
				smooth:true
				},
				
				{name:'新增粉丝',
				type:'line',//显示什么图是根据这个显示的}//一个系列以一个对象体现
				data:[1510,886,1140,980,2400,1300],
				smooth:true
				}
			],//分数（才是真正的配置）配置具体的值  数组的形式
			//加入图例
			color:[
				'orange',
				'red'
			],
			legend:{
				data:['新增游客','新增粉丝'],
				textStyle:{
					color: '#999'
				}
			}
		};
		//步骤5.将配置项设置给echarts对象
		line1Echarts.setOption(line1option);