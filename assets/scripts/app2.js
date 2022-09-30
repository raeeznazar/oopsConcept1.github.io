class Product {
  // title = "DEFAULT";
  // imageUrl;
  // description;
  // price;

  constructor(title, imageUrl, desc, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.desc = desc;
    this.price = price;
  }
}

class productItem {
  constructor(product) {
    this.product_Item = product;
  }
  renderItem() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
    <div>
    <img src = "${this.product_Item.imageUrl}" alt = "${this.product_Item.title}">
    <div class = "product-item__content">
    <h2>${this.product_Item.title}</h2>
    <h3>\$${this.product_Item.price}</h3>
    <p>${this.product_Item.description}</p>
    <button>Add to Cart</button>
    </div>
    </div>
    
    `;
    return prodEl;
  }
}

class productList {
  Products = [
    new Product(
      "A Pillow",
      "https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg",
      "A soft pillow!",
      19.99
    ),
    new Product(
      "A Carpet",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg",
      "A carpet which you might like - or not.",
      89.99
    ),
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.Products) {
      const ProductItem = new productItem(prod);
      const prodEl = ProductItem.renderItem();

      prodList.append(prodEl);
    }

    renderHook.append(prodList);
  }
}

const ProductList = new productList();
ProductList.render();
