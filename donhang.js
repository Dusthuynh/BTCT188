var soLuong = document.getElementsByClassName('soluong')
var gia = document.getElementsByClassName('gia')
var thanhTien = document.getElementsByClassName('thanhtien')
var tongThanhTien = document.getElementsByClassName('tongthanhtien')
var chietKhau = document.getElementsByClassName('chietkhau')
var thue = document.getElementsByClassName('thue')
var tongDonHang = document.getElementsByClassName('tongdonhang')

//------ tạo thẻ tr và td
var tr = document.createElement('tr')
var tdImg = document.createElement('td') //var img = document.createElement('img') // img.src='/data/images/sanpham/blackberry.jpg' //tdImg.append(img)
var tdName = document.createElement('td') //tdName.innerText= 'Black berry'
var tdSL = document.createElement('td')
var tdThanhTien = document.createElement('td')
var tdDel = document.getElementsByClassName('delButton')

//------- cho thẻ td vào trong thẻ tr
tr.append(tdImg) 
tr.append(tdName)
tr.append(tdSL)
tr.append(tdThanhTien)
tr.append(tdDel)

//------- cho thẻ tr vào thẻ tbody
var tablebody = document.getElementsByClassName('donhang-body')[0]
tablebody.append(tr)




