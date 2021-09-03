jQuery(document).ready(function ($){
    $("#paypal_ec_button_product input").click(function(){
        var my_pp__gatewayaction = $(this).data('action');
        $('form.cart').attr( 'action', my_pp__gatewayaction );
        $(this).attr('disabled', 'disabled');
        $('form.cart').submit();
        $(".angelleyeOverlay").show();
        return false;
    });
    $(".paypal_checkout_button").click(function(){
        $(".angelleyeOverlay").show();
        return true;
    });
});