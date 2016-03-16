'use strict';
angular.module('codeSearch')
.controller('detailCtrl',function($scope,$location,$rootScope){
    $scope.codes = [
        {
            name:"html",
            from:"html",
            detail:"	The HTML <html> element (or HTML root element) represents the root of an HTML document. All other elements must be descendants of this element."
        },
        {
            name:"head",
            from:"html",
            detail:"The HTML <head> element provides general information (metadata) about the document, including its title and links to/definitions of scripts and style sheets."
        },
        {
            name:"body",
            from:"html",
            detail:"The HTML <body> Element represents the content of an HTML document. There can be only one <body> element in a document."
        },
        {
            name:"script",
            from:"html",
            detail:"The HTML Script Element (<script>) is used to embed or reference an executable script within an HTML or XHTML document."
        },
        {
            name:"position",
            from:"css",
            detail:"The position CSS property chooses alternative rules for positioning elements, designed to be useful for scripted animation effects."
        },
        {
            name:"font-size",
            from:"css",
            detail:"The font-size CSS property specifies the size of the font. Setting the font size may, in turn, change the size of other items, since it is used to compute the value of the em and ex <length> units."
        },
        {
            name:"alert",
            from:"javascript",
            detail:"pompt up a window with info"
        },
        {
            name:"var",
            from:"javascript",
            detail:"used to define an argument"
        },
        {
            name:"for",
            from:"javascript",
            detail:"a loop"
        },
        {
            name:"if",
            from:"javascript",
            detail:"a judge sentence"
        }
    ];

    $scope.showCodeDetail = function (index,$scope) {
        
        $rootScope.countWhich = index;
        $location.path('/detail');
    }
});