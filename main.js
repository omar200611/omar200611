// جلب الطلبات من localStorage أو إنشاء مصفوفة جديدة
let orders = JSON.parse(localStorage.getItem('orders')) || [];

// تحديث عرض الطلبات
function displayOrders() {
    const ordersList = document.getElementById("ordersList");
    ordersList.innerHTML = '';
    orders.forEach((o, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${o.name} طلب: ${o.order} - رقم الهاتف: ${o.phone}`;
        ordersList.appendChild(li);
    });
}

// إرسال الطلب
document.getElementById("orderBtn").addEventListener("click", () => {
    const name = document.getElementById("customerName").value;
    const phone = document.getElementById("customerPhone").value;
    const order = document.getElementById("customerOrder").value;

    if(name === "" || phone === "") {
        alert("من فضلك املأ الاسم ورقم الهاتف 📌");
        return;
    }

    const newOrder = { name, phone, order };
    orders.push(newOrder);

    // حفظ في localStorage
    localStorage.setItem('orders', JSON.stringify(orders));

    // تحديث العرض
    displayOrders();

    // مسح الحقول
    document.getElementById("customerName").value = '';
    document.getElementById("customerPhone").value = '';
});

// عرض الطلبات عند تحميل الصفحة
displayOrders();
