const menuList=[
    {
        title:'首页',
        key:'/home',
        icon:'home',
        public: true
    },
    {
        title:'商品',
        key:'/products',
        icon:'pic-left',
        children:[
            {
                title:'品类管理',
                key:'/category',
                icon:'bars'
            },
            {
                title:'商品管理',
                key:'/product',
                icon:'tool'
            },
        ]
    },
    {
        title:'用户管理',
        key:'/user',
        icon:'user'
    },
    {
        title:'角色管理',
        key:'/role',
        icon:'branches'
    },
    {
        title:'图形图表',
        key:'/charts',
        icon:'dot-chart',
        children:[
            {
                title:'线形图',
                key:'/charts/line',
                icon:'line-chart'
            },
            {
                title:'柱状图',
                key:'/charts/bar',
                icon:'bar-chart'
            },
            {
                title:'饼状图',
                key:'/charts/pie',
                icon:'pie-chart'
            },
        ]
    }

]
export default menuList