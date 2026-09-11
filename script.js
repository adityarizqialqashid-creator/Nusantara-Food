let cart = [];


// TAMBAH PRODUK
function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCart();

    alert(name + " berhasil ditambahkan ke keranjang!");
}


// UPDATE KERANJANG
function updateCart() {

    const count =
        document.getElementById("cart-count");

    const items =
        document.getElementById("cart-items");

    const total =
        document.getElementById("cart-total");


    count.textContent = cart.length;


    if (cart.length === 0) {

        items.innerHTML =
            '<p class="empty">Keranjang masih kosong.</p>';

        total.textContent = "Rp0";

        return;
    }


    items.innerHTML = "";


    let totalPrice = 0;


    cart.forEach((item, index) => {

        totalPrice += item.price;

        items.innerHTML += `
            <div class="cart-item">
                <span>${item.name}</span>

                <strong>
                    Rp${item.price.toLocaleString("id-ID")}
                </strong>
            </div>
        `;

    });


    total.textContent =
        "Rp" + totalPrice.toLocaleString("id-ID");
}


// BUKA CART
function openCart() {

    document.getElementById("cart")
        .style.display = "flex";

}


// TUTUP CART
function closeCart() {

    document.getElementById("cart")
        .style.display = "none";

}


// CHECKOUT
function checkout() {

    if (cart.length === 0) {

        alert("Keranjang masih kosong!");

        return;
    }

    alert(
        "Pesanan berhasil dibuat! " +
        "Terima kasih sudah membeli."
    );

    cart = [];

    updateCart();

    closeCart();
}


// FILTER PRODUK
function filterFood(category) {

    const cards =
        document.querySelectorAll(".card");


    cards.forEach(card => {

        if (
            category === "all" ||
            card.classList.contains(category)
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}