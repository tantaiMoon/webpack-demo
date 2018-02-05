import css from './css/index.css';
import less from './css/black.less';
import sass from './css/main.scss';
import $ from 'jquery';
import Vue from 'vue';
import model from './model';


{
    document.getElementById('app').innerHTML = '<h1>webapck test</h1><h3>My Webapck Demo</h3><div>' +
        '<div id="css"><div id="css1">webpack 开始配置到基础文件配置</div></div>' +
        '</div>';


    let a = 7;
    let b = 8;
    var sum = (a, b) => {
        console.log((a + b));
        return a + b;
    };

    let tempItem = id => ({id: id, name: 'temp'});
}

{
    model();
    let str = '<div>' +
        '<div style="width: 400px;height: 400px;background: #3c16ff;">' +
        '<h3>webpack 开始配置到基础文件配置</h3>' +
        '</div>' +
        '</div>';
    $('#css1').html(str);
}

