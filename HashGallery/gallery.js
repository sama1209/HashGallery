//翻面控制
function turn(ele) {
    var cln=ele.className;
    if (/photo-front/.test(cln)){ cln=cln.replace(/photo-front/,'photo-back')}
    else {cln=cln.replace(/photo-back/,'photo-front')}
    return ele.className=cln;
}
//通用函数，有点模拟jQ的意思，get('.wrap')、get('#wrap')，把$换成了get;
function get(selector) {
    var method=selector.substr(0,1)=='.'?'getElementsByClassName':'getElementById';
    return document[method](selector.substr(1));//这个方括号是什么姿势？obj[method]();
}
//通用函数，随机数，range=[min,max]
function random(range) {
    var max=Math.max(range[0],range[1]);
    var min=Math.min(range[0],range[1]);
    var diff=max-min;
    var number=Math.random()*diff;
    return parseInt(number);
}
//输出所有海报
function addPhotos() {
    var template=get('#wrap').innerHTML;
    var html=[];
    for(var i in data){
        var _html=template
            .replace('{{index}}',i)
            .replace('{{caption}}',data[i].caption)
            .replace('{{img}}',data[i].img)
            .replace('{{desc}}',data[i].desc)
        html.push(_html)
    }
    get('#wrap').innerHTML=html.join('');
    resort(random([0,data.length]));
}
addPhotos();
//排序所有海报
function resort(n){
    var photo_center=get('#photo_'+n);
    photo_center.className+='photo-center';
}
//巴拉巴拉