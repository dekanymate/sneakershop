import BrandController from './BrandController.js'

$(function() {
    console.log("main.js")
    new BrandController();
    $.each(data, function(index, brand) {
        $('#brand-list').append('<li>' + brand.brand + '</li>');
      });
  
});