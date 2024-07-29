//步骤1：基于准备好的dom，初始化echarts实例
var mapecharts = echarts.init(document.getElementById('mapchart'));
//步骤2：指定图表的配置项和数据
//城市地理坐标
var geoCoordMap = {
  "Haimen": [121.15, 31.89],
  "Eerduosi": [109.781327, 39.608266],
  "Zhaoyuan": [120.38, 37.35],
  "Zhoushan": [122.207216, 29.985295],
  "Qiqihaer": [123.97, 47.33],
  "Yancheng": [120.13, 33.38],
  "Chifeng": [118.87, 42.28],
  "Qingdao": [120.33, 36.07],
  "Rushan": [121.52, 36.89],
  "Jinchang": [102.188043, 38.520089],
  "Quanzhou": [118.58, 24.93],
  "Laixi": [120.53, 36.86],
  "Rizhao": [119.46, 35.42],
  "Jiaonan": [119.97, 35.88],
  "Nantong": [121.05, 32.08],
  "Lasa": [91.11, 29.97],
  "Yunfu": [112.02, 22.93],
  "Meizhou": [116.1, 24.55],
  "Wendeng": [122.05, 37.2],
  "Shanghai": [121.48, 31.22],
  "Panzhihua": [101.718637, 26.582347],
  "Weihai": [122.1, 37.5],
  "Chengde": [117.93, 40.97],
  "Xiamen": [118.1, 24.46],
  "Shanwei": [115.375279, 22.786211],
  "Chaozhou": [116.63, 23.68],
  "Dandong": [124.37, 40.13],
  "Taicang": [121.1, 31.45],
  "Qujing": [103.79, 25.51],
  "Yantai": [121.39, 37.52],
  "Fuzhou": [119.3, 26.08],
  "Wafangdian": [121.979603, 39.627114],
  "Jimo": [120.45, 36.38],
  "Fushun": [123.97, 41.97],
  "Yuxi": [102.52, 24.35],
  "Zhangjiakou": [114.87, 40.82],
  "Yangquan": [113.57, 37.85],
  "Laizhou": [119.942327, 37.177017],
  "Huzhou": [120.1, 30.86],
  "Shantou": [116.69, 23.39],
  "Kunshan": [120.95, 31.39],
  "Ningbo": [121.56, 29.86],
  "Zhanjiang": [110.359377, 21.270708],
  "Jieyang": [116.35, 23.55],
  "Rongcheng": [122.41, 37.16],
  "Lianyungang": [119.16, 34.59],
  "Huludao": [120.836932, 40.711052],
  "Changshu": [120.74, 31.64],
  "Dongguan": [113.75, 23.04],
  "Heyuan": [114.68, 23.73],
  "Huaian": [119.15, 33.5],
  "Taizhou": [119.9, 32.49],
  "Nanning": [108.33, 22.84],
  "Yingkou": [122.18, 40.65],
  "Huizhou": [114.4, 23.09],
  "Jiangyin": [120.26, 31.91],
  "Penglai": [120.75, 37.8],
  "Shaoguan": [113.62, 24.84],
  "Jiayuguan": [98.289152, 39.77313],
  "Guangzhou": [113.23, 23.16],
  "Yanan": [109.47, 36.6],
  "Taiyuan": [112.53, 37.87],
  "Qingyuan": [113.01, 23.7],
  "Zhongshan": [113.38, 22.52],
  "Kunming": [102.73, 25.04],
  "Shouguang": [118.73, 36.86],
  "Panjin": [122.070714, 41.119997],
  "Changzhi": [113.08, 36.18],
  "Shenzhen": [114.07, 22.62],
  "Zhuhai": [113.52, 22.3],
  "Suqian": [118.3, 33.96],
  "Xianyang": [108.72, 34.36],
  "Tongchuan": [109.11, 35.09],
  "Pingdu": [119.97, 36.77],
  "Foshan": [113.11, 23.05],
  "Haikou": [110.35, 20.02],
  "Jiangmen": [113.06, 22.61],
  "Zhangqiu": [117.53, 36.72],
  "Zhaoqing": [112.44, 23.05],
  "Dalian": [121.62, 38.92],
  "Linfen": [111.5, 36.08],
  "Wujiang": [120.63, 31.16],
  "Shizuishan": [106.39, 39.04],
  "Shenyang": [123.38, 41.8],
  "Suzhou": [120.62, 31.32],
  "Maoming": [110.88, 21.68],
  "Jiaxing": [120.76, 30.77],
  "Changchun": [125.35, 43.88],
  "Jiaozhou": [120.03336, 36.264622],
  "Yinchuan": [106.27, 38.47],
  "Zhangjiagang": [120.555821, 31.875428],
  "Sanmenxia": [111.19, 34.76],
  "Jinzhou": [121.15, 41.13],
  "Nanchang": [115.89, 28.68],
  "Liuzhou": [109.4, 24.33],
  "Sanya": [109.511909, 18.252847],
  "Zigong": [104.778442, 29.33903],
  "Jilin": [126.57, 43.87],
  "Yangjiang": [111.95, 21.85],
  "Luzhou": [105.39, 28.91],
  "Xining": [101.74, 36.56],
  "Yibin": [104.56, 29.77],
  "Huhehaote": [111.65, 40.82],
  "Chengdu": [104.06, 30.67],
  "Datong": [113.3, 40.12],
  "Zhenjiang": [119.44, 32.2],
  "Guilin": [110.28, 25.29],
  "Zhangjiajie": [110.479191, 29.117096],
  "Yixing": [119.82, 31.36],
  "Beihai": [109.12, 21.49],
  "Xian": [108.95, 34.27],
  "Jintan": [119.56, 31.74],
  "Dongying": [118.49, 37.46],
  "Mudanjiang": [129.58, 44.6],
  "Zunyi": [106.9, 27.7],
  "Shaoxing": [120.58, 30.01],
  "Yangzhou": [119.42, 32.39],
  "Changzhou": [119.95, 31.79],
  "Weifang": [119.1, 36.62],
  "Chongqing": [106.54, 29.59],
  "Taizhou": [121.420757, 28.656386],
  "Nanjing": [118.78, 32.04],
  "Binzhou": [118.03, 37.36],
  "Guiyang": [106.71, 26.57],
  "Wuxi": [120.29, 31.59],
  "Benxi": [123.73, 41.3],
  "Kelamayi": [84.77, 45.59],
  "Weinan": [109.5, 34.52],
  "Maanshan": [118.48, 31.56],
  "Baoji": [107.15, 34.38],
  "Jiaozuo": [113.21, 35.24],
  "Jurong": [119.16, 31.95],
  "Beijing": [116.46, 39.92],
  "Xuzhou": [117.2, 34.26],
  "Hengshui": [115.72, 37.72],
  "Baotou": [110, 40.58],
  "Mianyang": [104.73, 31.48],
  "Wulumuqi": [87.68, 43.77],
  "Zaozhuang": [117.57, 34.86],
  "Hangzhou": [120.19, 30.26],
  "Zibo": [118.05, 36.78],
  "Anshan": [122.85, 41.12],
  "Liyang": [119.48, 31.43],
  "Kuerle": [86.06, 41.68],
  "Anyang": [114.35, 36.1],
  "Kaifeng": [114.35, 34.79],
  "Jinan": [117, 36.65],
  "Deyang": [104.37, 31.13],
  "Wenzhou": [120.65, 28.01],
  "Jiujiang": [115.97, 29.71],
  "Handan": [114.47, 36.6],
  "Linan": [119.72, 30.23],
  "Lanzhou": [103.73, 36.03],
  "Cangzhou": [116.83, 38.33],
  "Linyi": [118.35, 35.05],
  "Nanchong": [106.110698, 30.837793],
  "Tianjin": [117.2, 39.13],
  "Fuyang": [119.95, 30.07],
  "Taian": [117.13, 36.18],
  "Zhuji": [120.23, 29.71],
  "Zhengzhou": [113.65, 34.76],
  "Haerbin": [126.63, 45.75],
  "Liaocheng": [115.97, 36.45],
  "Wuhu": [118.38, 31.33],
  "Tangshan": [118.02, 39.63],
  "Pingdingshan": [113.29, 33.75],
  "Xingtai": [114.48, 37.05],
  "Dezhou": [116.29, 37.45],
  "Jining": [116.59, 35.38],
  "Jingzhou": [112.239741, 30.335165],
  "Yichang": [111.3, 30.7],
  "Yiwu": [120.06, 29.32],
  "Lishui": [119.92, 28.45],
  "Luoyang": [112.44, 34.7],
  "Qinhuangdao": [119.57, 39.95],
  "Zhuzhou": [113.16, 27.83],
  "Shijiazhuang": [114.48, 38.03],
  "Laiwu": [117.67, 36.19],
  "Changde": [111.69, 29.05],
  "Baoding": [115.48, 38.85],
  "Xiangtan": [112.91, 27.87],
  "Jinhua": [119.64, 29.12],
  "Yueyang": [113.09, 29.37],
  "Changsha": [113, 28.21],
  "Quzhou": [118.88, 28.97],
  "Langfang": [116.7, 39.53],
  "Heze": [115.480656, 35.23375],
  "Hefei": [117.27, 31.86],
  "Wuhan": [114.31, 30.52],
  "Daqing": [125.03, 46.58]
};
var YWData = [
	[{name:'Yiwu'},{name:'Beijing',value:100}],		//坐标点的大小
	[{name:'Yiwu'},{name:'Benxi',value:100}],
	[{name:'Yiwu'},{name:'Shanghai',value:100}],
	[{name:'Yiwu'},{name:'Hefei',value:100}],
	[{name:'Yiwu'},{name:'Changsha',value:100}]
];
var WHData = [
	[{name:'Wuhan'},{name:'Heze',value:100}],
	[{name:'Wuhan'},{name:'Shenyang',value:100}],
	[{name:'Wuhan'},{name:'Wulumuqi',value:100}]
	
];
var LZData = [
	[{name:'Lanzhou'},{name:'Zhangjiakou',value:100}],
	[{name:'Lanzhou'},{name:'Lianyungang',value:100}]
];
//航线上的飞机模型的矢量图
var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
//航线从哪到哪
var convertData = function(data){		//处理飞行数据获得起点和终点坐标起点和终点
	var res = [];	
	for(var i = 0;i<data.length;i++){
		var dataItem = data[i];
		var fromCoord = geoCoordMap[dataItem[0].name];
		var toCoord = geoCoordMap[dataItem[1].name];
		if(fromCoord && toCoord){
			res.push({
				fromName:dataItem[0].name,
				toName:dataItem[1].name,
				coords:[fromCoord,toCoord],
				value:dataItem[1].value
			})
		}
	}
	console.log(res);
	return res;
};
var color= ['#fff','#fff','#fff'];
var series = [];
[
	['Yiwu',YWData],
	['Wuhan',WHData],
	['Lanzhou',LZData]
].forEach(function(item, i) {		//配置折线line和散点
    series.push(
      {
        name: item[0] + " Top3",
        type: "lines",
        zlevel: 1,
        effect: {		// 配置线和尾迹的配置
          show: true,
          period: 10,	// 特效动画的时间 S
          trailLength: 0.1,	//特效尾迹长度[0,1]值越大，尾迹越长重
          color: "red", //arrow箭头的颜色		 symbol: 'arrow', //箭头图标
          symbolSize: 3	//小红点大小
        },
        lineStyle: {		/*尾迹线的样式*/
          normal: {
            color: color[i],		
            width: 0,	//尾迹线条宽度
            curveness: 0.2	//尾迹线条曲直度（小红点的弧度）
          }
        },
        data: convertData(item[1])
      },
      {
        name: item[0] + " Top3",
        type: "lines",
        zlevel: 2,
        symbol: ["none", "arrow"],	//线两端的标记类型，可以是一个数组分别指定两端
        symbolSize: 10,				//牵头的大小
        effect: {
          show: true,
          period: 6,			//飞机的飞行时间
          trailLength: 0,		//飞机有无影子0.1
          symbol: planePath,
          symbolSize: 15		//飞机大小
        },
        lineStyle: {			//飞行线的配置
          normal: {
            color: color[i],
            width: 1,
            opacity: 0.6,
            curveness: 0.2		//飞行线的弧度，跟上面尾迹必须一致
          }
        },
        data: convertData(item[1])
      },
      {
        name: item[0] + " Top3",		//配置散点---目标点
        type: "effectScatter",			//散点图形
        coordinateSystem: "geo",		//地图做标签
        zlevel: 2,
        rippleEffect: {
          brushType: "stroke"			//目标点波纹绘制方式 stroke, fill
        },
        label: {
          normal: {
            show: true,
            position: "right",
			formatter: "{b}"		//散点图（气泡）图 : {a}（系列名称），{b}（数据名称），{c}（数值数组）, {d}（无）
          }	
        },
        symbolSize: function(val) {		//目标点大小
          return val[2] / 8;
        },
        itemStyle: {		//设置目标点的颜色
            color: color[i]
        },
        data: item[1].map(function(dataItem) {		//绑定目标点对应的数据
          return {
            name: dataItem[1].name,
            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
          };
        })
      }
    );
  });
  
  
var option7 = {
 tooltip: {
      trigger: "item",			//点击触发
      formatter: function(params, ticket, callback) {
        if (params.seriesType == "effectScatter") {
          return "Lines：" + params.data.name ;//+ "" + params.data.value[2];
        } else if (params.seriesType == "lines") {
          return (
            params.data.fromName +
            ">" +
            params.data.toName /*+
            "<br />" +
            params.data.value*/
          );
        } else {
          return params.name;
        }
      }
    },
//真正引入地图的
    geo: {
      map: "china",

      //roam: false,		//设置为false,不启动roam就无所谓缩放拖曳同步了
      //   放大我们的地图
      zoom: 1,
      itemStyle: {
        normal: {
          areaColor: "rgba(43, 196, 243, 0.42)",
          borderColor: "rgba(43, 196, 243, 1)",
          borderWidth: 1
        },
        emphasis: {
          areaColor: "#2B91B7" //点击省份触发颜色
        }
      }
    },
    series: series
}
//步骤3：使用刚指定的配置项和数据显示图表。
mapecharts.setOption(option7);