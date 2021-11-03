function addCart(code){
            var number = parseInt(document.getElementById(code).value);
            if (typeof localStorage[code] === "undefined") {    
                window.localStorage.setItem(code,number);
            } else {
                var current = parseInt(localStorage[code]);
                if (current+number > 100) {
                    window.localStorage.setItem(code,100);
                    alert(`Số lượng sản phẩm đặt hàng của bạn lớn hơn 100`);
                } else {
                    window.localStorage.setItem(code,current + number);
                }
            }
            console.log(localStorage);
        }
