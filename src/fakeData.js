import Highcharts, { color } from 'highcharts';
import variablePie from 'highcharts/modules/variable-pie';
import { TeamOutlined ,PieChartOutlined,CloseCircleOutlined,BookOutlined,ClockCircleOutlined} from '@ant-design/icons';

// Initialize the variable pie module
variablePie(Highcharts);

export let dashboardCards = [
    { 
        id:1,
        color:'#fff',
        background_color:'#0091d4',
        min_height:'116px',
        icon: <TeamOutlined  style={{ fontSize: '30px' }}  />,
        title: 'Registered Users VS Active Tenants',
        value: '4976/2435',

    },
    { 
        id:2,
        color:'#fff',
        background_color:'#b79bff',
        min_height:'116px',
        icon: <PieChartOutlined  style={{ fontSize: '30px' }}  />,
        title: 'Total Cases',
        value: '3546',
    },
    { 
        id:3,
        color:'#fff',
        background_color:'#fe8081',
        min_height:'116px',
        icon: <CloseCircleOutlined  style={{ fontSize: '30px' }}  />,
        title: 'Closed Cases',
        value: '3546',
    },
    { 
        id:4,
        color:'#fff',
        background_color:'#21405c',
        min_height:'116px',
        icon:<BookOutlined  style={{ fontSize: '30px' }}  />,
        title: 'Open Cases',
        value: '6786',
    },
    { 
        id:5,
        color:'#fff',
        background_color:'#0ab7a4',
        min_height:'116px',
        icon:<ClockCircleOutlined   style={{ fontSize: '30px',marginRight:'4px' }} />,
        title: 'Scheduled Cases',
        value: '9806',
    }             

]


export const pieOptionss = {
  chart: {
    type: 'variablepie',
  },
  title: {
    text: 'Simple Pie Chart',
  },
  tooltip: {
    useHTML: true,
    formatter: function() {
      console.log(this,'this.series.color')
        return '<div class="custom-tooltip" style="background-color:' +  this.series.color + ';">' +
               '<strong>' + this.point.name + '</strong>: ' + this.y + '</div>';
    }
},
  series: [
    {
      name: 'Share',
      data: [
        { name: 'Chrome', y: 61.41 },
        { name: 'Internet Explorer', y: 11.84 },
        { name: 'Firefox', y: 10.85 },
        { name: 'Edge', y: 4.67 },
        { name: 'Safari', y: 4.18 },
        { name: 'Sogou Explorer', y: 1.64 },
        { name: 'Opera', y: 1.6 },
        { name: 'QQ', y: 1.2 },
        { name: 'Other', y: 2.61 },
      ],
    },
  ],
};


export const lineOptions = {
  title: {
    text: 'Simple Line Chart',
    align: 'left'
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
   
  },
  yAxis: {
    title: {
      text: 'Values',
    },
  },
  tooltip: {
    useHTML: true,
    backgroundColor: null,
    borderWidth: 0,
    shadow: false,
    formatter: function(){
        return '<div style="background-color:' + this.series.color +' "class="tooltip custom-tool-tip"> ' +
                this.series.name + ' ' + this.key + ' ' + this.y +
            '</div>';
    }
},
  series: [
    {
      // name: 'My Data',
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      color:'#21405C'
    },
  ],
};




 export const columnOptions =  {
  chart: {
    type: 'column',  // bar chart with horizontal bars
  },
  title: {
    text: 'Simple Horizontal Bar Chart',
    align: 'left'
  },
  xAxis: {
    categories: ['Apples', 'Bananas', 'Oranges'],
    title: {
      text: null,
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Fruit eaten',
      align: 'high',
    },
  },
  tooltip: {
    useHTML: true,
    backgroundColor: null,
    borderWidth: 0,
    shadow: false,
    formatter: function() {
      return '<div style="background-color:' + this.point.color + '" class="tooltip custom-tool-tip"> ' +
        this.series.name + ' ' + this.key + ' ' + this.y +
        '</div>';
    }
},
  plotOptions: {
    column: {
      pointWidth: 30,
      borderRadius: 20, // Rounded corners
      colorByPoint: true, // Different colors for each column
      colors: [
        'rgba(33, 64, 92, 1)',
        'rgba(16, 139, 125, 1)',
        'rgba(254, 128, 129, 1)',
        'rgba(40, 218, 198, 1)',
        'rgba(167, 105, 154, 1)',
        'rgba(131, 106, 249, 1)',
        'rgba(41, 154, 255, 1)'
      ],
    },
  },
  // legend: {
  //   layout: 'vertical',
  //   align: 'right',
  //   verticalAlign: 'top',
  //   x: -40,
  //   y: 40,
  //   floating: true,
  //   borderWidth: 1,
  //   backgroundColor:
  //     Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
  //   shadow: true,
  // },
  credits: {
    enabled: true,
  },
  series: [
    {
      name: 'Year 2020',
      data: [107, 31, 635],
    },
    {
      name: 'Year 2021',
      data: [133, 156, 947],
    },
  ],
};



export const pieOptions = {
  chart: {
     type: 'variablepie'
  },
  title: {
    text: 'Countries compared by population density and total area, 2022.',
    align: 'left'
  },
 
  tooltip: {
    useHTML:true,
    borderWidth:0,
    padding: 0,
    borderRadius:20,
    headerFormat: '',
    formatter: function() {
      return '<div style="background-color:' + this.point.color + '" class="tooltip custom-tool-tip"> ' +
        this.series.name + ' ' + this.key + ' ' + this.y +
        '</div>';
    },
    pointFormat: '<span style="background-color:{point.color}">\u25CF</span> <b> ' +
        '{point.name}</b><br/>' +
        'Area (square km): <b>{point.y}</b><br/>' +
        'Population density (people per square km): <b>{point.z}</b><br/>'
  },
  
  series: [{
    minPointSize: 10,
    innerSize: '20%',
    zMin: 0,
    name: 'countries',
    borderRadius: 5,
    data: [{
        name: 'Spain',
        y: 505992,
        z: 92
    }, {
        name: 'France',
        y: 551695,
        z: 119
    }, {
        name: 'Poland',
        y: 312679,
        z: 121
    }, {
        name: 'Czech Republic',
        y: 78865,
        z: 136
    }, {
        name: 'Italy',
        y: 301336,
        z: 200
    }, {
        name: 'Switzerland',
        y: 41284,
        z: 213
    }, {
        name: 'Germany',
        y: 357114,
        z: 235
    }],
    colors: [
        '#21405C',
        '#836AF9',
        '#28DAC6',
        '#108B7D',
        '#299AFF',
        '#00e887',
        '#FE8081'
    ]
  }]
};

export const donutOptions  = {
  chart: {
    type: 'pie',
    renderTo: 'container'
  },
  title: {
     verticalAlign: 'middle',
    floating: true,
     text: 'Browser usage'
  },
  plotOptions: {
    pie: {
      innerSize: '70%'
    }
  },
  tooltip: {
    useHTML:true,
    borderWidth:0,
    padding: 0,
    borderRadius:20,
    headerFormat: '',
    formatter: function() {
      return '<div style="background-color:' + this.point.color + '" class="tooltip custom-tool-tip"> ' +
        this.series.name + ' ' + this.key + ' ' + this.y +
        '</div>';
    },
    pointFormat: '<span style="background-color:{point.color}">\u25CF</span> <b> ' +
        '{point.name}</b><br/>' +
        'Area (square km): <b>{point.y}</b><br/>' +
        'Population density (people per square km): <b>{point.z}</b><br/>'
  },
  series: [{
    data: [
      ['Firefox', 44.2],
      ['IE7', 26.6],
      ['IE6', 20],
      ['Chrome', 3.1],
      ['Other', 5.4]
    ]
  }],
  colors: [
    '#21405C',
    '#836AF9',
    '#28DAC6',
    '#108B7D',
    '#299AFF',
    '#00e887',
    '#FE8081'
]
};


export const braOptions = {
  chart: {
    type: 'bar'
  },
  title: {
    text: 'Historic World Population by Region',
    align: 'left'
  },

  xAxis: {
    categories: ['Africa', 'America', 'Asia', 'Europe'],
    title: {
        text: null
    },
    gridLineWidth: 1,
    lineWidth: 0
  },
 
  tooltip: {
    useHTML: true,
    backgroundColor: null,
    borderWidth: 0,
    shadow: false,
    formatter: function() {
      return '<div style="background-color:' + this.point.color + '" class="tooltip custom-tool-tip"> ' +
        this.series.name + ' ' + this.key + ' ' + this.y +
        '</div>';
    }
},
  plotOptions: {
    bar: {
        borderRadius: '50%',
        dataLabels: {
            enabled: true
        },
        groupPadding: 0.1
    }
  },

  credits: {
    enabled: false
  },
  series: [{
    name: 'Year 1990',
    data: [631, 727, 3202, 721]
  }, {
    name: 'Year 2000',
    data: [814, 841, 3714, 726]
  }, {
    name: 'Year 2018',
    data: [1276, 1007, 4561, 746]
  }],
  colors: [
    '#21405C',
   
]
};

// ========================== > Echart Options 
export const ElineOptions = {
  title: {
    text: 'Simple Line Chart (E-Charts)',
    align: 'left'
  },
  xAxis: {
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
  yAxis: {
    title: {
      text: 'Values',
    },
  },
  tooltip: {
    trigger: 'item',
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderRadius:20,
    padding: 0, // Remove padding around the tooltip content
    textStyle: {
      color: '#fff',
    },
    formatter: function (params) {
      const color = params.color;
      return `
        <div 
          style=
          "
          width:'400px';
          background-color: ${color};
          padding: 10px;
          border-radius: 15px;
          
        "

        >
         ${params.name}: ${params.value}
        </div>
      `;
    }
  },
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 20
    },
    {
      start: 0,
      end: 20
    }
  ],
  series: [
    {
      // name: 'My Data',
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
     type:'line'
    },
  ],
  color: ['#21405C'] // Custom colors
}


// const donut chart option for echarts

export const eDountoption = {
  tooltip: {
    trigger: 'item',
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderRadius:20,
    padding: 0, // Remove padding around the tooltip content
    textStyle: {
      color: '#fff',
    },
    formatter: function (params) {
      const color = params.color;
      return `
        <div 
          style=
          "
          width:'400px';
          background-color: ${color};
          padding: 10px;
          border-radius: 15px;
          
        "

        >
         ${params.name}: ${params.value}
        </div>
      `;
    }
  },
  title: {
    text: 'Simple Donut Chart (E-Charts)',
    align: 'left'
  },
  legend: {
    bottom: '5%',
    left: 'center'
  },
  
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      padAngle: 5,
      itemStyle: {
        borderRadius: 10
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
     
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
};

//  for column chart 

const generateData = (count) => {
  const categories = [];
  const data = [];
  let colors=  [
    'rgba(33, 64, 92, 1)',
    'rgba(16, 139, 125, 1)',
    'rgba(254, 128, 129, 1)',
    'rgba(40, 218, 198, 1)',
    'rgba(167, 105, 154, 1)',
    'rgba(131, 106, 249, 1)',
    'rgba(41, 154, 255, 1)'
  ]
  for (let i = 0; i < count; i++) {
    categories.push(`Category ${i + 1}`);
    data.push({
      value: Math.floor(Math.random() * 1000),
      itemStyle: {
        color: colors[i % colors.length] ,
        borderRadius: 20,
      }
    });
  }
  return { categories, data };
};

const { categories, data } = generateData(50);


export const getHorizontalOption = () => {
  return {
    title: {
      text: 'Column  (E-Charts)'
    },
    tooltip: {
      trigger: 'item',
      backgroundColor: 'transparent',
      borderWidth: 0,
      borderRadius:20,
      padding: 0, // Remove padding around the tooltip content
      textStyle: {
        color: '#fff',
      },
      formatter: function (params) {
        const color = params.color;
        return `
          <div 
            style=
            "
            width:'400px';
            background-color: ${color};
            padding: 10px;
            border-radius: 15px;
            
          "
  
          >
           ${params.name}: ${params.value}
          </div>
        `;
      }
    },
  
    dataZoom: [
      {
        type: 'slider', // Specify 'slider' type for an external zoom slider
        orient: 'vertical', // Set orientation to 'vertical' for a horizontal bar chart
        start: 0,
        end: 20
      }
    ],
    xAxis: {
      type: 'value',
    
      axisLabel: {
        interval: 0, // Show all labels, may need adjustment for very large datasets
        rotate: 45 // Rotate labels for better readability
      }
    },
    yAxis: {
      type: 'category',
      data: categories,
    },
    series: [
      {
        name: 'Value',
        type: 'bar',
        data: data,
        // barWidth: '100%'
      }
    ]
  };
};

export const getOption = () => {
  return {
    title: {
      text: 'Column  (E-Charts)'
    },
  
    tooltip: {
      trigger: 'item',
      backgroundColor: 'transparent',
      borderWidth: 0,
      borderRadius:20,
      padding: 0, // Remove padding around the tooltip content
      textStyle: {
        color: '#fff',
      },
      formatter: function (params) {
        const color = params.color;
        return `
          <div 
            style=
            "
            width:'400px';
            background-color: ${color};
            padding: 10px;
            border-radius: 15px;
            
          "
  
          >
           ${params.name}: ${params.value}
          </div>
        `;
      }
    },
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 20
      },
      {
        start: 0,
        end: 20
      }
    ],
    xAxis: {
      type: 'category',
      data: categories,
      axisLabel: {
        interval: 0, // Show all labels, may need adjustment for very large datasets
        rotate: 45 // Rotate labels for better readability
      }
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Value',
        type: 'bar',
        data: data
      }
    ]
  };
};


// echart pie chart options

export const getPieOption = () => {
  return {
    title: {
      text: 'ECharts Pie Chart with Large Dataset'
    },
    // legend: {
    //   bottom: '5%',
    //   left: 'center'
    // },
    
    tooltip: {
      trigger: 'item',
      backgroundColor: 'transparent',
      borderWidth: 0,
      borderRadius:20,
      padding: 0, // Remove padding around the tooltip content
      textStyle: {
        color: '#fff',
      },
      formatter: function (params) {
        const color = params.color;
        return `
          <div 
            style=
            "
            width:'400px';
            background-color: ${color};
            padding: 10px;
            border-radius: 15px;
            
          "
  
          >
           ${params.name}: ${params.value}
          </div>
        `;
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [50, 150],
        center: ['50%', '50%'],
      
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: [
          { value: 40, name: 'rose 1' },
          { value: 38, name: 'rose 2' },
          { value: 32, name: 'rose 3' },
          { value: 30, name: 'rose 4' },
          { value: 28, name: 'rose 5' },
          { value: 26, name: 'rose 6' },
          { value: 22, name: 'rose 7' },
          { value: 18, name: 'rose 8' }
        ]
      }
    ]
  };
};