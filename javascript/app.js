/***********
  Making placeholder star specifically red 
  plz include: https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
  ****************/
function updatePlaceHolderFromById(id_dom) {
    $(id_dom + ' .palceholder').click(function () {
        $(this).siblings('input').focus();
    });
    $(id_dom + ' .form-control').focus(function () {
        $(this).siblings('.palceholder').hide();
    });
    $(id_dom + ' .form-control').change(function () {
        $(this).siblings('.palceholder').hide();
    });
    $(id_dom + ' .form-control').blur(function () {
        var $this = $(this);
        if ($this.val().length == 0) {
            $(this).siblings('.palceholder').show();
        }
    });
    $(id_dom + ' .form-control').blur();
}
updatePlaceHolderFromById("#container");