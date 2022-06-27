const arr = ['a', 'b', 'c'];
arr.forEach(function (elem) {
    html = '<option value="'+elem+'">'+elem+'</option>'
    console.log(html);
});

html = '';
arr.forEach(function (elem) {
    html += '<option value="'+elem+'">'+elem+'</option>'
});
console.log(html)

//1. select 옵션 선택 시 이벤트 실행하기

//2. api에 선택한 select value값 전달하여 값 가져오기

//3. api에서 전달받은 response 값으로 select option 추가하기


//changeSelect();
function changeSelect(){
    var selectWidth = $("#width option:selected").val();
    var selectRatio = $("#ratio option:selected").val();

    $("#ratio").find("option").remove();
    $("#ratio").append("<option value=''>편병비 선택</option>")
    $("#rim").find("option").remove();
    $("#rim").append("<option value=''>림직경 선택</option>")

    $.ajax({
        type: 'GET',
        url: 'http://api.i-gsmbizrental.com/list.php',
        data: {
            depth: 1,
            width: 165
        },
        success: function (result) {
            if (!result) return;

            var arr = result.result;

            arr.forEach(function (elem) {
                html = '<option value="'+ elem +'">'+ elem +'</option>'
                console.log(html);
            });
            $("#ratio").empty();
            $("#ratio").append(html)
            //배열 result.result 배열 반복문 append

        },
        error: function () {
          alert("검색 결과가 없습니다.")
        },
      });
}

// $("#width").on("change", function(){
//     $(this).val();
//     $("option:selected", this).attr("value");
// })

// var selectWidth = document.getElementById("width");
//     var selectValue = selectWidth.options[selectWidth.selectedIndex].value;
//     var selectText = selectWidth.options[selectWidth.selectedIndex].text;