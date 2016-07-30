$(function() {
    $('.paizi').addClass('diaoxia');
    $('.paizi').on('click', function() {
        $('.paizi').removeClass('diaoxia').addClass('huiqu');
        // 创建格子
    for (var i = 0; i < 15; i++) {
        
        for (var j = 0; j < 30; j++) {
            $('<div>')
            .addClass('block')
            // .css({backgroundColor:'red'})
            .appendTo('.changjing')
            .attr('id',i+'_'+j)
        }
    }

    //数据
    var she=[{x:0,y:0},{x:0,y:1},{x:0,y:2}];
   
    var shiwu={x:0,y:5};
    //初始化
     init=function(){
        for(var i=0;i<she.length;i++){
            $('#'+she[i].x+'_'+she[i].y)
            .addClass('she')
        }
        // $('#'+shiwu.x+'_'+shiwu.y)
        // .addClass('shiwu');
        // $('#0_0,#0_1,#0_2').addClass('she');
        // $('#8_8').addClass('shuwu');
       

    }
    init();


    // 随机食物
    function fangshiwu(){
        var a=Math.floor(Math.random()*15);
        var b=Math.floor(Math.random()*30);
        $('#'+a+'_'+b).addClass('shiwu');
        return {x:a,y:b}

    }

     var shiwu=fangshiwu();
     var fangxiang='you';
     move=function(){
        var jiutou=she[she.length-1];
        var xintou={x:jiutou.x,y:jiutou.y+1};
          
        if(xintou.y>30||xintou.y<0||xintou.x>15||xintou.x<0){
            zanting();
            console.log('撞了')
            clearInterval(t)
            clearInterval(k)
            // alert('Game  Over'+'分数：'+aa());
            


            return;
        }
        if(fangxiang=='you'){
            var xintou={x:jiutou.x,y:jiutou.y+1};
           $('#'+xintou.x+'_'+xintou.y).addClass('shetou').removeClass('shetouzuo').removeClass('shetoushang').removeClass('shetouxia');
           $('#'+xintou.x+1+'_'+xintou.y+1).animate({
            width:36,
            height:36,
            opacity:0.5,
           })

        }
        if(fangxiang=='zuo'){
            var xintou={x:jiutou.x,y:jiutou.y-1}
            // $('.shetou').addClass('.shetouzuo')
           $('#'+xintou.x+'_'+xintou.y).addClass('shetouzuo').removeClass('shetou').removeClass('shetoushang').removeClass('shetouxia');


        }
        if(fangxiang=='shang'){
            var xintou={x:jiutou.x-1,y:jiutou.y};
           $('#'+xintou.x+'_'+xintou.y).addClass('shetoushang').removeClass('shetouzuo').removeClass('shetou').removeClass('shetouxia');

        }
        if(fangxiang=='xia'){
            var xintou={x:jiutou.x+1,y:jiutou.y}
           $('#'+xintou.x+'_'+xintou.y).addClass('shetouxia').removeClass('shetouzuo').removeClass('shetoushang').removeClass('shetou');

        }
        she.push(xintou);
     

        console.log(111)
        $('#'+xintou.x+'_'+xintou.y).addClass('she');



        for(var i=0;i<she.length;i++){
           $('#'+she[she.length-1].x+'_'+she[she.length-1].y).addClass('shetou');
           $('#'+she[she.length-2].x+'_'+she[she.length-2].y).addClass('sheshen').removeClass('shetouzuo').removeClass('shetoushang').removeClass('shetou').removeClass('shetouxia');
        
           }
        if(xintou.x===shiwu.x&&xintou.y===shiwu.y){
            console.log(333)
            $('#'+shiwu.x+'_'+shiwu.y).removeClass('shiwu');
            shiwu=fangshiwu();
        }else{
            var weiba=she.shift();
            $('#'+weiba.x+'_'+weiba.y).removeClass('she').removeClass('shetou').removeClass('sheshen');

        }
        // return she.length;

     }
     var i=1;
   var k=setInterval(aa,800)
console.log(she.length);
     function aa(){
        
        i+=1
        $('.fenshu').text(she.length*10+i);
     return ( $('.fenshu').text())
        

     }
     aa()
     

     var timeId;
     kaishi=function(){
        timeId=setInterval(move,200)
     }
     zanting=function(){
        console.log(222)
        clearInterval(timeId)
     }
     $(document).on('keydown',function(e){
         var biao={
            'zuo':37,
            'shang':38,
            'you':39,
            'xia':40
        }
        if(Math.abs(e.keyCode-biao[fangxiang])==2){
            return;
            console.log('不可以')
        }


         e.preventDefault();
         if(e.keyCode===37){
            fangxiang='zuo'
            
            
         }
         if(e.keyCode===39){
            fangxiang='you'

         }
         if(e.keyCode===38){
            fangxiang='shang'
         }
         if(e.keyCode===40){
            fangxiang='xia'

         }
     })

  var t=setInterval(move,300)

     
  var speed=300;
  $('.sudu2').on('focus',function(){
    console.log(6666)
     // speed=$('.sudu2').text()
  })
    $('.sudu2').on('blur',function(){
    console.log(7777)
     speed=$('.sudu2').text()

  })
    console.log(speed)





$('.shetou6').on('click',function(){


         $('.shetou6').addClass('shetouzuo')
    })

    
    })

    


})
