$.each($(".radiobutton__item"),(function(e,i){1==$(this).find("input").prop("checked")&&$(this).addClass("active")})),$(document).on("click",".radiobutton__item",(function(e){for(child of(allRadio=$(this).parents()[0].children,Object.values(allRadio)))$(child).removeClass("active"),child.firstElementChild.checked=!1;return $(this).toggleClass("active"),$(this).find("input").prop("checked",!0),!1})),$("#selectvalue").click((function(e){$("#selectvalue").toggleClass("active")}));