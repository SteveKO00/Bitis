  let api = [], apiCategory = [];



  $(document).ready(function () {


  $.ajax({
    async: false,
    url: "https://my-json-server.typicode.com/truongphba/demo_api/products?fbclid=IwAR2a2XY-GoSqm5pj-3xN2FBBtYHw3gfg6_e2QZVouyaZV6RmR_GjjMhwZQk",
  })
    .done(function (data) {
      console.log(data);
      api = data;
    });


    
  $.ajax({
    async: false,
    url: "https://my-json-server.typicode.com/truongphba/demo_api/categories?fbclid=IwAR0dhxiyQnWg7bbe83K-wf5D6vHMTwEKUPbnsePj-1hz_PsM7RUQzCBeZMQ",
  })
    .done(function (data) {
      console.log(data);
      apiCategory = data;
    });

  callItem(api);

  let category = '<li class="nav-item"><a class="nav-link active text-black" aria-current="page" href="#">NAM</a></li>';
  for (const type of apiCategory) {
    category += `
    <li class="nav-item pointer" id="${'navId'+ type.id}">
      <a class="nav-link text-black" onclick="filterCategory(${type.id})">${type.name}</a>
      <div class="d-none" >${type.id}</div>
    </li>
    `
  };
  $(".category").html(category);
  



// thay đổi màu khi kích vào trái tim 
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

//gọi item từ api
function callItem(data){
  let iteam = '';
  for (const productIteam of data) {
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
              <p class="price">${formatPrice(productIteam.price)}</p>
              <div class="bot w-100 bg-white position-absolute">
                <div class="style-and-buy ">
                  <div class="img-small pointer">
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
}


//thêm dấu phẩy cho giá giày
function formatPrice(inputPrice){
  let t = inputPrice;//chia t den khi t<1000 thi dung
  let priceString = [];
  let i = 0; // i la bien dem cua mang priceString
  let priceOutput = '';
  while (t > 999) {
    let mod = t % 1000;
    t = (t - t % 1000) / 1000;
    priceString[i] = mod;
    if (t < 1000) {
      priceOutput = t;
       };
    i++;
  };
  //Ghép từng phần tử để được chuỗi số có dấu phẩy
  for (let j = i - 1; j >= 0; j--) {//đảo ngược vị trí mảng nên ghép từ cuối lên
    if (priceString[j] != 0) {
      priceOutput = priceOutput + ',' + priceString[j];
    } else {
      priceOutput = priceOutput + ',' + '000';
    }
  };
  priceOutput = priceOutput + '₫';
  return priceOutput; 
}

  // thay đổi category theo ID
  let filteredApi;
  function filterCategory(categoryId){
    console.log(categoryId);
    filteredApi = api.filter(function(api){        
          return api.categoryId == categoryId;
        });
          console.log(filteredApi);
          callItem(filteredApi);
  };

//sắp xếp gia tăng dần
$('select').on('change', function() {
  if (value=1){
    data = filteredApi.sort(function(api1,api2){

      return api1.price-api2.price;
    })
  }
  console.log(data);
});
  