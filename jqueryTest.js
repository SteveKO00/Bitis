$(document).ready(function () {


  let api = [], apiCategory = [];

  $.ajax({
    async: false,
    url: "https://my-json-server.typicode.com/truongphba/demo_api/products?fbclid=IwAR2a2XY-GoSqm5pj-3xN2FBBtYHw3gfg6_e2QZVouyaZV6RmR_GjjMhwZQk",
  })
    .done(function (data) {
      console.log(data);
      api = data;
    });


    $(".nav-item").click(function (id) {
      console.log(1111);
      // id = apiCategory.id;
      // api.filter(function(api.id){
      //   return api.id = apiCategory.id;
      // });
    })

  
    
  $.ajax({
    async: false,
    url: "https://my-json-server.typicode.com/truongphba/demo_api/categories?fbclid=IwAR0dhxiyQnWg7bbe83K-wf5D6vHMTwEKUPbnsePj-1hz_PsM7RUQzCBeZMQ",
  })
    .done(function (data) {
      console.log(data);
      apiCategory = data;
    });

  let category = '<li class="nav-item"><a class="nav-link active text-black" aria-current="page" href="#">NAM</a></li>';
  for (const type of apiCategory) {
    category += `
    <li class="nav-item" id="${'navId'+ type.id}">
      <a class="nav-link text-black" >${type.name}</a>
      <div class="d-none" >${type.id}</div>
    </li>
    `
  };
  $(".category").html(category);
  

  
  let iteam = '';
  for (const productIteam of api) {
    let t = productIteam.price;
    let priceString = [];
    let i = 0;
    let price = '';
    while (t > 999) {
      let phanDu = t % 1000;
      t = (t - t % 1000) / 1000;
      priceString[i] = phanDu;
      if (t < 1000) {
         price = t;
         };
      i++;
    };
    
    for (let j = i - 1; j >= 0; j--) {
      if (priceString[j] != 0) {
        price = price + ',' + priceString[j];
      } else {
        price = price + ',' + '000';
      }
    };
    iteam += `
    <div class="item ${productIteam.id}">
     <div class="product-box-img">
              <div class="icon-heart pointer">
                <span class="material-symbols-outlined">
                  favorite
                </span>
              </div>
              <div class="new-item">Mới</div>
              <img class="thumnail"
                src="${productIteam.images[0]}">
              <img class="thumnailHover"
                src="${productIteam.images[1]}">
            </div>
            <div class="product-box position-relative">
              <div class="size-color">
                <p class="type">+7 size</p>
                <p class="type">+3 màu sắc</p>
              </div>
              <p class="name ">${productIteam.name}</p>
              <p class="price">${price}</p>
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

  };



  $(".product-list").html(iteam);


  let changeColor = false;
  $(".icon-heart").click(function () {
    if (!changeColor) {
      $(this).css("color", "red");
      changeColor = true;
    } else {
      $(this).css("color", "black");
      changeColor = false;
    };

  });



});
