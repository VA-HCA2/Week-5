"use strict";
$(function () {


    $("#categoryContainer").hide();

    $.getJSON('/api/categories/', function (categories) {

        $.each(categories, function (index, category) {
            $('#categoryList').append($('<a/>')
                .attr('class', 'dropdown-item')
                .text(category.Category)
                .attr('href', '#')
                .on('click', function (e) {
                    e.preventDefault();
                    $('#categoryName').text(category.Category);
                    getProducts(category.Value);
                }));
        });
    });


    $('#viewCategories').on("click", function () {
        $("#categoryContainer").show();
        $('#viewCategories').prop('disabled', true);
    });
});

function getProducts(category) {
    $('#productCard').hide('');
    $("#productList").html('');

    $.getJSON(`/api/products/bycategory/${category}`, (products)=> {
        $.each(products, (index, product) => {
            $('#productList').append($('<li />')
                .text(product.ProductName)
                .attr("class", "list-group-item list-group-item-action")
                .on('click', function (e) {
                    e.preventDefault();
                    getProduct(product.ProductID);
                }));
        });
    });
    $('#productsContainer').show();
}

function getProduct(productid) {
    $.getJSON(`/api/products/${productid}`,(product) => {
        $('#cardTitle').html("Product ID:" + product.ProductID);
        $('#cardText1').html(product.ProductName);
        $('#cardText2').html("$" + Number(product.UnitPrice).toFixed(2));
        $('#productCard').show();
    });
}

