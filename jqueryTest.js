$(document).ready(function () {


  let api =[];

  $.ajax({
    async: false,
    url: "https://my-json-server.typicode.com/truongphba/demo_api/products?fbclid=IwAR2a2XY-GoSqm5pj-3xN2FBBtYHw3gfg6_e2QZVouyaZV6RmR_GjjMhwZQk",
  })
  .done(function( data ) {
    console.log(data);
    api = data;
    });



  let iteam = '';
  for (const productIteam of api) {
    iteam += `
    <div class="item ${productIteam.id}">
     <div class="product-box-img">
              <div class="icon-heart">
                <span class="material-symbols-outlined">
                  favorite
                </span>
              </div>
              <div class="new-item">Mới</div>
              <img class="thumnail"
                src="${productIteam.images[0]}">
            </div>
            <div class="product-box position-relative">
              <div class="size-color">
                <p class="type">+7 size</p>
                <p class="type">+3 màu sắc</p>
              </div>
              <p class="name">${productIteam.name}</p>
              <p class="price">${productIteam.price}</p>
              <div class="bot w-100 bg-white position-absolute">
                <div class="style-and-buy ">
                  <div class="img-small">
                    <img
                      src="${productIteam.images[0]}"
                      width="50" height="50">
                    <img
                      src="${productIteam.images[1]}"
                      width="50" height="50">
                    <img
                      src="${productIteam.images[2]}"
                      width="50" height="50">
                  </div>
                  <div>
                    <button class="buy">Mua ngay</button>
                  </div>
                </div>
              </div>
            </div>
      </div>
    `

  }



  $(".product-list").html(iteam)

  $(".icon-heart").click(function () {
    $(this).css("color", "red");
  });

});
