  function getParameterByName(name, url) {
                if (!url) url = window.location.href;
                name = name.replace(/[\[\]]/g, "\\$&");
                var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                    results = regex.exec(url);
                if (!results) return null;
                if (!results[2]) return '';
                return decodeURIComponent(results[2].replace(/\+/g, " "));
            }

var mid = getParameterByName("ID", window.location.href);
var varentId = getParameterByName("variant", window.location.href);


let matchV = mainProduct.variants;
let select = matchV.filter(function(item){
  if(item.id == varentId){
    return item;
  }
});


console.log("Variants: ",select);

select.forEach(function(currentElement, index, array){ 


 
  var price__compare = document.querySelector(".price__compare");
  var price__new = document.querySelector(".price__new");
  var price__save = document.querySelector(".price__save-text");
  var side__main_img = document.querySelector(".left-side__main .left-side__main-img.slick-slide.slick-current.slick-active");
 


      console.log(currentElement.id);

      let option1 = document.getElementById(currentElement.option1);
      if(option1 != null){
        option1.checked = true;
      }
    
      let option2 = document.getElementById(currentElement.option2);
   
      if(option2 != null){
        option2.checked = true;
      }
       let option3 = document.getElementById(currentElement.option3);
  
      if(option3 != null){
         option3.checked = true;
      }

      if(side__main_img != null && currentElement.featured_image != null){
        side__main_img.querySelector('img').src = currentElement.featured_image.src;

      }

      if(price__compare != null && currentElement.compare_at_price > currentElement.price ){
        price__compare.innerHTML = `${shopCurrencySign}${(currentElement.compare_at_price / 100).toFixed(2)}`;
      }

      if(price__new != null ){
        price__new.innerHTML = `${shopCurrencySign}${(currentElement.price / 100).toFixed(2)}`;
      }

      if(price__save != null && currentElement.compare_at_price > currentElement.price ){
        price__save.innerHTML = `YOU SAVE  ${shopCurrencySign}${((currentElement.compare_at_price - currentElement.price ) / 100)}`;
      }
    

})

