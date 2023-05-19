<script>
//   var find_button_payment_div = $('.step__footer').find('button');
//   var find_button_payment = find_button_payment_div.attr('data-trekkie-id'); 
//   if(find_button_payment == 'continue_to_shipping_method_button'){
//     setTimeout(function(){
//         $('.field.field--optional').first().html('<div class="field__input-wrapper"><label class="field__label field__label--visible" for="checkout_shipping_address_company">Company Name (Optional)</label><input placeholder="Company Name (Optional)" autocomplete="shipping organization" data-trekkie-id="shipping_company_field" data-backup="company" class="field__input" size="30" type="text" name="checkout[shipping_address][company]" id="checkout_shipping_address_company"></div>');
// 	    $('.field.field--optional').first().after('<div data-address-field="gst_number" data-autocomplete-field-container="true" class="field field--optional"><div class="field__input-wrapper"><label class="field__label field__label--visible" for="checkout_shipping_address_company">GST Number (Optional)</label><input placeholder="GST Number" autocomplete="shipping organization" data-trekkie-id="shipping_gst_number_field" data-backup="gst_number" class="field__input" size="30" type="text" name="checkout[shipping_address][gst_number]" id="checkout_shipping_address_gst_number" maxlength="15"></div></div>');
//     },1000);
//     $('.step__footer').find('button').hide();
//     $('.step__footer').prepend('<button name="button" type="submit" class="step__footer__continue-btn btn " data-trekkie-id="continue_to_shipping_button" id="continue_to_shipping_button" aria-busy="false"><span class="btn__content">Continue to shipping method</span><svg class="icon-svg icon-svg--size-18 btn__spinner icon-svg--spinner-button" aria-hidden="true" focusable="false"> <use xlink:href="#spinner-button"></use> </svg></button>');
// 	gstNumberExist();  	
//   }
  
//   $('body').on('click','#continue_to_shipping_button',function(e){
// 	// e.preventDefault();
//     var gst_number = $('#checkout_shipping_address_gst_number').val();
//     var company_name = $('#checkout_shipping_address_company').val();
//     localStorage.setItem('gst_number',gst_number);
//     localStorage.setItem('company_name',company_name);
//     find_button_payment_div.trigger('click');
//   });
  
//   function gstNumberExist(){
//   	var gst_number = localStorage.getItem('gst_number');
//     var company_name = localStorage.getItem('company_name');
//     setTimeout(function(){
//       $('#checkout_shipping_address_gst_number').val(gst_number);
//       $('#checkout_shipping_address_company').val(company_name);
//     },1000);
//   }
</script>
{% include 'checkout_shipping_script' %}