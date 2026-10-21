let choice;
let orderCode = "";

do {
    let menu = "1. Nhập mã đơn hàng\n2. In hóa đơn\n3. Thoát\nNhập lựa chọn:";
    choice = prompt(menu);

    switch (choice) {
        case "1":
            let input = prompt("Nhập mã (VD: VIP-SHAKER-GLOVES):");
            if (input != null) {
                orderCode = input.trim().toUpperCase();
                if (orderCode.length >= 8) {
                    alert("Nhập thành công!");
                } else {
                    alert("Mã phải từ 8 ký tự trở lên!");
                    orderCode = ""; 
                }
            }
            break;

        case "2":
            if (orderCode == "") {
                alert("Chưa có mã hợp lệ!");
                break;
            }

            let isVip = false;
            let itemsString = "";

            if (orderCode.startsWith("VIP-")) {
                isVip = true;
                itemsString = orderCode.slice(4);
            } else if (orderCode.startsWith("NOR-")) {
                itemsString = orderCode.slice(4);
            } else {
                itemsString = orderCode;
            }

            let items = itemsString.split("-");
            let subTotal = 0;
            let billText = "";

            for (let i = 0; i < items.length; i++) {
                if (items[i] == "SHAKER") {
                    subTotal = subTotal + 120000;
                    billText = billText + "Bình lắc" + "120000".padStart(20, " ") + "\n";
                } else if (items[i] == "GLOVES") {
                    subTotal = subTotal + 180000;
                    billText = billText + "Găng tay" + "180000".padStart(20, " ") + "\n";
                } else if (items[i] == "STRAP") {
                    subTotal = subTotal + 150000;
                    billText = billText + "Dây kéo " + "150000".padStart(20, " ") + "\n";
                }
            }

            let discount = 0;
            if (isVip == true) {
                discount = subTotal * 0.1;
            }
            let totalAmount = subTotal - discount;

            console.log("-".repeat(40));
            console.log("HÓA ĐƠN BÁN LẺ");
            console.log("-".repeat(40));
            console.log("Mã đơn: " + orderCode);
            console.log(billText);
            console.log("-".repeat(40));
            console.log("Tổng tiền:" + subTotal.toString().padStart(20, " "));
            console.log("Giảm VIP: " + discount.toString().padStart(20, " "));
            console.log("Phải trả: " + totalAmount.toString().padStart(20, " "));
            console.log("-".repeat(40));
            
            alert("Đã in hóa đơn ra Console!");
            break;

        case "3":
            alert("Tạm biệt!");
            break;

        default:
            if (choice != null) {
                alert("Vui lòng chọn 1, 2 hoặc 3");
            }
            break;
    }
} while (choice != "3" && choice != null);