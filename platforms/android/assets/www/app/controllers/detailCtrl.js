'use strict';
angular.module('codeSearch')
.controller('detailCtrl',function($scope,$location,$rootScope){
    $scope.codes = [
        {
            name:"html",
            from:"html",
            detail:"此元素可告知浏览器其自身是一个 HTML 文档。<html> 与 </html> 标签限定了文档的开始点和结束点，在它们之间是文档的头部和主体。正如您所了解的那样，文档的头部由 <head> 标签定义，而主体由 <body> 标签定义。",
            exp:"\n<html>\n\t//这里是网页的主体\n</html>"
        },
        {
            name:"head",
            from:"html",
            detail:"<head> 标签用于定义文档的头部，它是所有头部元素的容器。<head> 中的元素可以引用脚本、指示浏览器在哪里找到样式表、提供元信息等等。\n文档的头部描述了文档的各种属性和信息，包括文档的标题、在 Web 中的位置以及和其他文档的关系等。绝大多数文档头部包含的数据都不会真正作为内容显示给读者。下面这些标签可用在 head 部分：<base>, <link>, <meta>, <script>, <style>, 以及 <title>。<title> 定义文档的标题，它是 head 部分中唯一必需的元素。",
            exp:"\n<html>\n\t<head>\n\t\t<title>\n\t\t\t文档的标题\n\t\t</title>\n\t</head>\n</html>"
        },
        {
            name:"body",
            from:"html",
            detail:"body 元素包含文档的所有内容",
            exp:"\n<html>\n\t<body>\n\t\t文档的内容...\n\t</body>\n</html>"
        },
        {
            name:"script",
            from:"html",
            detail:"<script> 标签用于定义客户端脚本，比如 JavaScript。script 元素既可以包含脚本语句，也可以通过 src 属性指向外部脚本文件。",
            exp:"\n<script type='text/javascript'>\n\tdocument.write('Hello World!')\n</script>"
        },
        {
            name:"position",
            from:"css",
            detail:"position 属性规定元素的定位类型。",
            exp:"\nh2\n{\n\tposition:absolute;\n\tleft:100px;\n\ttop:150px;\n}"
        },
        {
            name:"font-size",
            from:"css",
            detail:"font-size 属性可设置字体的尺寸。",
            exp:"\nh1 {font-size:250%;}\nh2 {font-size:200%;}/np {font-size:100%}"
        },
        {
            name:"alert",
            from:"javascript",
            detail:"alert() 方法用于显示带有一条指定消息和一个 OK 按钮的警告框。",
            exp:"\nalert(message)"
        },
        {
            name:"var",
            from:"javascript",
            detail:"在 JavaScript 中创建变量通常称为“声明”变量。我们使用 var 关键词来声明变量。",
            exp:"\nvar carname;"
        },
        {
            name:"for",
            from:"javascript",
            detail:"如果您希望一遍又一遍地运行相同的代码，并且每次的值都不同，那么使用循环是很方便的。",
            exp:"\nfor (var i=0;i<cars.length;i++)\n{\n\tdocument.write(cars[i] + '<br>');\n}"
        },
        {
            name:"if",
            from:"javascript",
            detail:"只有当指定条件为 true 时，该语句才会执行代码。",
            exp:"\nif (条件)\n{\n\t只有当条件为 true 时执行的代码\n}"
        }
    ];

    $scope.showCodeDetail = function (index,$scope) {
        
        $rootScope.countWhich = index;
        $location.path('/detail');
    }
});