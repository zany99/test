function get_url_param() {
  let vars = {};

  let parts = window.location.href.replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    function (m, key, value) {
      vars[key] = value;
    }
  );

  return vars;
}

function geoip(json) {
  country_param = get_url_param()["country"];

  if (country_param != null) {
    country_code = country_param;
  } else {
    country_code = json.country_code;
  }

  let price_obj = {
      prices: {
        UA: "./assets/img/flag_ua.png",
        RO: "./assets/img/flag_ro.png",
        DE: "./assets/img/flag_de.png",
      },
      title: {
        UA: "UA Title",
        RO: "RO Title",
        DE: "DE Title",
      },
      company:{
        UA: "Test UA",
        RO: "Test RO",
        DE: "Test DE"
      },
    }

    get_price = price_obj["prices"][country_code];
    get_title = price_obj["title"][country_code];
    get_company = price_obj["company"][country_code];

  if (get_price == null && get_title == null) {
    display_price = "./assets/img/flag_ua.png";
    display_title = price_obj.title.UA
    display_company = price_obj.title.UA
  } else {
    display_price = get_price;
    display_title = get_title;
    display_company = get_company;
  }

  let price_elem = document.querySelector(".header__logo");
  let title_elem = document.querySelector('.article__link');
  let company_elem = document.querySelector(".footer__name")

  price_elem.src = display_price;
  title_elem.innerHTML = display_title;
  company_elem.innerHTML = display_company;
  
}
