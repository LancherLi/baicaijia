// var aList = document.getElementsByClassName("mui-control-item");


// // for (i = 0; i < liList.length; i++) {
// //     liList[i].onclick = function () {
// //         for (i = 0; i < liList.length; i++) {
// //             liList[i].classList.remove("mui-active");
// //         }
// //         // this.classList.add("active");
// //         // this.className += " active";
// //         this.className = "mui-control-item mui-active";
// //     }

// // }
// for (i = 0; i < aList.length; i++) {
//     aList[i].onclick = function () {
//         for (i = 0; i < aList.length; i++) {
//             aList.classList.add('crd');
//         }
//         this.classList.remove('crd');
//     }
// }
$("gotop").click(function () {
    $("html, body").animate({
        scrollTop: $("#he").offset().top
    }, { duration: 500, easing: "swing" });
    return false;
});







$(function () {
    var mmb = new Manmanbuy();
    mmb.dhla();
    mmb.shangp();
    mmb.reload();
   

})

var Manmanbuy = function () {

}
$('.daohang').on('click','a',function(){
    // console.log(this);
    console.log(this.dataset.api);
    $.ajax({
        url: this.dataset.api,
        success: function (data) {
            console.log(data);
            var html = template('shangpin', data);

            $('.mui-table-view').html(html);
            // document.querySelector('.mui-table-view').innerHTML = html;
        }
    })
})
Manmanbuy.prototype = {
    //获取首页导航数据
    dhla: function () {
        //      // 1. 请求获取首页导航数据的API
        $.ajax({
            url: 'http://localhost:9090/api/getbaicaijiatitle',
            success: function (data) {
                console.log(data);
                //  var html = template('dhl',data);
                var html = template('indexNavTmp', data);

                //  console.log(html)
                $('.daohang').html(html);
            }
        })
    },
    shangp: function () {
        // 1. 请求首页折扣商品列表数据
        $.ajax({
            url: 'http://localhost:9090/api/getbaicaijiaproduct?titleid=0',
            success: function (data) {
                console.log(data);
                var html = template('shangpin', data);

                $('.mui-table-view').html(html);
                // document.querySelector('.mui-table-view').innerHTML = html;
            }
        })
    },
    // reload: function () {
    //     // var dhList = document.getElementsByClassName('mui-control-item');
    //     // console.log(dhList);
    //     // for (var i = 0; i < dhList.length; i++) {
    //     //     console.log(dhList[i]);

    //     // }
    //     $.ajax({
    //         url: 'http://localhost:9090/api/getbaicaijiaproduct?titleid=1',
    //         success: function (data) {
    //             console.log(data);
    //             var html = template('shangpin', data);

    //             $('.mui-table-view').html(html);
    //             // document.querySelector('.mui-table-view').innerHTML = html;
    //         }
    //     })
    // }




}