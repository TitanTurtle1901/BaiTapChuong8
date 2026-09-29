function dinhDangTien(so) {
  return so.toLocaleString("vi-VN");
}

// Lấy các món được chọn từ thẻ select (cho phép chọn nhiều)
function layMonDaChon(idSelect) {
  var sel = document.getElementById(idSelect);
  var ds = [];
  for (var i = 0; i < sel.options.length; i++) {
    if (sel.options[i].selected) {
      ds.push({ ten: sel.options[i].text, gia: parseInt(sel.options[i].value) });
    }
  }
  return ds;
}

function tinhTien() {
  var mon = layMonDaChon("thucan").concat(layMonDaChon("nuocuong"));
  var kq = document.getElementById("kq");

  if (mon.length === 0) {
    kq.innerText = "Vui lòng chọn ít nhất một món!";
    return;
  }

  var html = '<table id="hoadon"><tr><th>Các món đã dùng</th><th>Tiền</th></tr>';
  var tong = 0;
  for (var i = 0; i < mon.length; i++) {
    html += "<tr><td>" + mon[i].ten + '</td><td class="phai">' + dinhDangTien(mon[i].gia) + "</td></tr>";
    tong += mon[i].gia;
  }

  var banDem = document.querySelector('input[name="thoidiem"]:checked').value === "dem";
  if (banDem) {
    var phuThu = tong * 0.1;
    html += "<tr><td>Phụ thu ban đêm (10%)</td><td class=\"phai\">" + dinhDangTien(phuThu) + "</td></tr>";
    tong += phuThu;
  }

  html += "<tr><td><b>Tổng tiền</b></td><td class=\"phai\"><b>" + dinhDangTien(tong) + " đồng</b></td></tr></table>";
  kq.innerHTML = html;
}
