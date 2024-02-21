import menu from "./db.js";
const menuItem = document.getElementById("menu-item");
const gonder = document.getElementById("coto");
// sayfa yüklendiği anda elemanları gösteren fonksiyon
document.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
});

function displayMenuItems(menuItems) {
  let displayItem = menuItems.map(
    (items) => `
  
  <div id="card" class="menu-list d-flex gap-3 flex-column flex-md-row"  >
          <img src="${items.img}" class=" shadow rounded" />
          <div>
            <div class="d-flex justify-content-between my-2">
              <h5>${items.title}</h5>
              <p>${items.price}₺</p>
            </div>
            <p class="lead">
              ${items.desc}
            </p>
          </div>
        </div>
  `
  );
  displayItem = displayItem.join("");
  menuItem.innerHTML = displayItem;
}

const filterBtn = document.querySelectorAll(".filter-btn");
filterBtn.forEach((btn) => {
  btn.addEventListener("click", handleFilter);
});

function handleFilter(e) {
  // tıklanılan butornun kategori değerini alma
  const category = e.target.dataset.id;
  //elemanları kategori değerine göre filtreleme
  const filteredItems = menu.filter((menuItemss) => {
    if (menuItemss.category === category) return menuItemss;
  });

  //hepsi seçiliyse tamamını göster değilse filtrelenmiş diziyi
  if (category === "all") {
    displayMenuItems(menu);
  } else {
    displayMenuItems(filteredItems);
  }
}
