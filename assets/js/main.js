//窗口宽度改变时Sec4&sec1 按钮功能
function resize_window() {
   
    //设置缩小后sec3&sec6变大

    var body_width=parseInt(document.body.getBoundingClientRect().right);
    if(body_width<981){
        document.querySelector("section").className="container-liquid";
       // document.querySelector("nav").className="container-liquid";
       // document.getElementById("sec1").className="container-liquid";
        document.getElementById("sec2").className="container-liquid";
        document.getElementById("sec3").className="container-liquid";
        document.getElementById("sec4").className="container";
        document.getElementById("sec5").className="container";
        document.getElementById("sec6").className="container-liquid";
        document.getElementById("sec7").className="container";
    }else{
        document.querySelector("section").className="container";   
       // document.querySelector("nav").className="container";  
    };

    // 屏幕缩小1200px以后nav中无序列表变成dropdown
    if(document.body.offsetWidth<=1200 && document.body.offsetWidth>=992){
        document.getElementById("nav_sub_dropdown").style="visibility:visible;";
        document.getElementById("nav_sub_lastitem").style="display:none;width:0;";
        document.getElementById("nav_sub_secondlastitem").style="display:none;width:0;";
    }else{
        document.getElementById("nav_sub_dropdown").style.display="none";
        document.getElementById("nav_sub_lastitem").style="visibility:visible;";
        document.getElementById("nav_sub_secondlastitem").style="visibility:visible;";
    };
    
    // 屏幕缩小992px后Search from变化格式
    if(document.body.offsetWidth<992){
        document.getElementById("front_logo").style="display:none;width:0;";
        document.getElementById("form_search").className="col";
      
    }else{
        document.getElementById("front_logo").style="visibility:visible;";
        document.getElementById("front_logo").className="col-2 order-1 pt-2";
        document.getElementById("form_search").className="col-10 order-2 ";
      
    };
   
       
}

function sec1_search(){
  //  document.getElementById("dropdown_menu").style="background-color:red;";
    document.getElementById("nav_back").style="display:none;width:0;";
    document.getElementById("nav_front").style="visibility:visible;";
    
    
    if(document.body.offsetWidth<992){
        console.log(1)
        document.getElementById("front_logo").style="display:none;width:0;";
        document.getElementById("form_search").className="col";
      
    }else{
        document.getElementById("front_logo").className="col-2 order-1 pt-2";
        document.getElementById("form_search").className="col-10 order-2 ";
    };

    
}

