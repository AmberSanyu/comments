module.exports = {
 title:'SOME TEST',
 description:'Valine',
 themeConfig:{
     nav:[
         { text:'主页', link:'/'},
         { text:'导航', link:'/guide/val'},
         { text:'百度', link:'http://www.baidu.com/'}
     ],
     sidebar: {
         '/guide/':[
             '',
             'val'
         ]
     }
 }
}
