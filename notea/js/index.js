document.getElementById("lbjm").onclick=lbjm;
document.getElementById("sy").onclick=sykz;
document.getElementById("xy").onclick=xykz;
document.getElementById("cstc").onclick=wm_cstc;

//判断数组数
var szs=htsj.length;
var gnsj=szs%10;var gnsj2=szs-gnsj;
var gnsj3=gnsj2/10+1;

//初始化_判断显示或隐藏功能栏
if(sessionStorage.getItem("lbjmxs1")==1){
document.getElementById("lb").style.display="block";
localStorage.clear("lbjmxs1");
sessionStorage.setItem("lbjmxs1",1);
}else if(sessionStorage.getItem("lbjmxs1")==0||sessionStorage.getItem("lbjmxs1")==null){
document.getElementById("lb").style.display="none";
localStorage.clear("lbjmxs1");
sessionStorage.setItem("lbjmxs1",0);}
//判断显示或隐藏功能栏
function lbjm(){
if(sessionStorage.getItem("lbjmxs1")==0||sessionStorage.getItem("lbjmxs1")==null){
document.getElementById("lb").style.display="block";
localStorage.clear("lbjmxs1");
sessionStorage.setItem("lbjmxs1",1);
}else if(sessionStorage.getItem("lbjmxs1")==1){
document.getElementById("lb").style.display="none";
localStorage.clear("lbjmxs1");
sessionStorage.setItem("lbjmxs1",0);
}}

if(sessionStorage.getItem("gnlb1")==null){
sessionStorage.setItem("gnlb1",1);
document.getElementById("ys").innerHTML='第 '+sessionStorage.getItem("gnlb1")+' 页';
}else if(sessionStorage.getItem("gnlb1")>=1){
document.getElementById("ys").innerHTML='第 '+sessionStorage.getItem("gnlb1")+' 页';
}


//初始化列表判断
if(sessionStorage.getItem("gnlb1")==1||sessionStorage.getItem("gnlb1")==null){
if(szs==0){
document.getElementById("lbg").innerHTML+='<div class="zdy_txt">列表为空</div>';
}else if(szs<=10) {
for(var i=0;i<szs;i++){
document.getElementById("lbg").innerHTML+='<a href="'+htsj[i][1]+'"><div class="an">'+htsj[i][0]+'</div></a>';}
}else{
for(var i=0;i<10;i++) {
document.getElementById("lbg").innerHTML+='<a href="'+htsj[i][1]+'"><div class="an">'+htsj[i][0]+'</div></a>';}
}}else if(sessionStorage.getItem("gnlb1")>1){
xykz();
}else if(sessionStorage.getItem("gnlb1")>1){
if(sessionStorage.getItem("gnlb1")<gnsj3-1) {
let lslb=sessionStorage.getItem("gnlb1");lslb++;
localStorage.clear("gnlb1");
sessionStorage.setItem("gnlb1", lslb);
document.getElementById("ys").innerHTML='第 '+sessionStorage.getItem("gnlb1")+' 页';lbzqk();lbzkz();
}else if(sessionStorage.getItem("gnlb1")==gnsj3-1){
lbzqk();lbfkz();
}else if(sessionStorage.getItem("gnlb1")==gnsj3){
lbzqk();
var xslbnf=sessionStorage.getItem("gnlb1")*10;var xslbnf2=xslbnf-10;
var xslbnf3=szs-xslbnf2;
for(var v0=0;v0<xslbnf3;v0++) {
document.getElementById("lbg").innerHTML+='<a href="'+htsj[xslbnf2][1]+'"><div class="an">'+htsj[xslbnf2][0]+'</div></a>';xslbnf2++;}
document.getElementById("lbg").innerHTML+='<div class="zdy_txt">=》最后一页《=</div>';
}else{lbzqk();
document.getElementById("lbg").innerHTML+='<div class="zdy_txt">=》数据错误《=</div>';}
if(szs==0){document.getElementById("lbg").innerHTML+='<div class="zdy_txt">列表为空</div>';}
}


//上一页
function sykz(){
if(sessionStorage.getItem("gnlb1")==1||sessionStorage.getItem("gnlb1")==null){lbzqk();
document.getElementById("lbg").innerHTML+='<div class="zdy_txt">=》是第一页《=</div>';
if(szs==0){
document.getElementById("lbg").innerHTML+='<div class="zdy_txt">列表为空</div>';
}else if(szs<=10) {
for(var i=0;i<szs;i++){
document.getElementById("lbg").innerHTML+='<a href="'+htsj[i][1]+'"><div class="an">'+htsj[i][0]+'</div></a>';}
}else{
for(var i0=0;i0<10;i0++) {
document.getElementById("lbg").innerHTML+='<a href="'+htsj[i0][1]+');"><div class="an">'+htsj[i0][0]+'</div></a>';}
}
}else{
let lslb=sessionStorage.getItem("gnlb1");lslb--;
localStorage.clear("gnlb1");
sessionStorage.setItem("gnlb1", lslb);
document.getElementById("ys").innerHTML='第 '+sessionStorage.getItem("gnlb1")+' 页';lbzqk();lbzkz();}
}

//下一页
function xykz(){
if(sessionStorage.getItem("gnlb1")<gnsj3-1) {
let lslb=sessionStorage.getItem("gnlb1");lslb++;
localStorage.clear("gnlb1");
sessionStorage.setItem("gnlb1", lslb);
document.getElementById("ys").innerHTML='第 '+sessionStorage.getItem("gnlb1")+' 页';lbzqk();lbzkz();
}else if(sessionStorage.getItem("gnlb1")==gnsj3-1){
lbzqk();lbfkz();
}else if(sessionStorage.getItem("gnlb1")==gnsj3){
lbzqk();
var xslbnf=sessionStorage.getItem("gnlb1")*10;var xslbnf2=xslbnf-10;
var xslbnf3=szs-xslbnf2;
for(var v0=0;v0<xslbnf3;v0++) {
document.getElementById("lbg").innerHTML+='<a href="'+htsj[xslbnf2][1]+'"><div class="an">'+htsj[xslbnf2][0]+'</div></a>';xslbnf2++;}
document.getElementById("lbg").innerHTML+='<div class="zdy_txt">=》最后一页《=</div>';
}else{lbzqk();
document.getElementById("lbg").innerHTML+='<div class="zdy_txt">=》数据错误《=</div>';}
if(szs==0){document.getElementById("lbg").innerHTML+='<div class="zdy_txt">列表为空</div>';}
}

//功能列表主控
function lbzkz(){
var xslbn=sessionStorage.getItem("gnlb1")*10;
var xslbn2=xslbn-10;
for(var v0=0;v0<10;v0++) {
document.getElementById("lbg").innerHTML+='<a href="'+htsj[xslbn2][1]+'"><div class="an">'+htsj[xslbn2][0]+'</div></a>';xslbn2++;}
}
//功能列表副控
function lbfkz(){
var xslbnf=sessionStorage.getItem("gnlb1")*10;var xslbnf2=xslbnf-10;
var xslbnf3=szs-xslbnf2;
if(xslbnf3==10){
var xslbnf=sessionStorage.getItem("gnlb1")*10;var xslbnf2=xslbnf-10;
var xslbnf3=szs-xslbnf2;
for(var v0=0;v0<xslbnf3;v0++) {
document.getElementById("lbg").innerHTML+='<a href="'+htsj[xslbnf2][1]+'"><div class="an">'+htsj[xslbnf2][0]+'</div></a>';xslbnf2++;}
document.getElementById("lbg").innerHTML+='<div class="zdy_txt">=》最后一页《=</div>';
}else if(xslbnf3>10){
let lslb=sessionStorage.getItem("gnlb1");lslb++;
localStorage.clear("gnlb1");
sessionStorage.setItem("gnlb1", lslb);
document.getElementById("ys").innerHTML='第 '+sessionStorage.getItem("gnlb1")+' 页';
lbzqk();lbzkz();}
}

//功能列表清空
function lbzqk(){document.getElementById("lbg").innerHTML="";}

//弹窗插件调用
wm_tcxskz();
var wm_tc_bt=document.getElementById("wm_tc_bt");
var wm_tc_nr=document.getElementById("wm_tc_nr");

function wm_cstc(){
wm_tc_bt.innerHTML="- 关于 -";
wm_tc_nr.innerHTML="开发团队∶无名传世阁<br/>QQ交流群∶暂无";wm_gbtc();
}

//按钮控制弹窗插件
function cszxc(){
wm_tc_nr.innerHTML="亲，这个功能暂时未开发，请耐心等待哦~";wm_gbtc();
}

