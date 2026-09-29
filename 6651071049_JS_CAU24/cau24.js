// Tạo danh sách tháng 1 - 12 cho thẻ select
(function () {
  var sel = document.getElementById("thang");
  for (var i = 1; i <= 12; i++) {
    var op = document.createElement("option");
    op.value = i;
    op.text = i;
    sel.add(op);
  }
})();

function xuatThu() {
  var ngay = document.getElementById("ngay").value.trim();
  var thang = document.getElementById("thang").value;
  var nam = document.getElementById("nam").value.trim();
  var kq = document.getElementById("kq");

  if (!/^\d+$/.test(ngay) || !/^\d+$/.test(nam)) {
    kq.innerText = "Vui lòng nhập ngày và năm là số nguyên dương!";
    return;
  }
  ngay = parseInt(ngay);
  thang = parseInt(thang);
  nam = parseInt(nam);

  var d = new Date(nam, thang - 1, ngay);
  d.setFullYear(nam); // tránh lỗi năm 0 - 99 bị hiểu thành 19xx
  // Kiểm tra ngày có hợp lệ không (vd: 31/2 sẽ bị nhảy sang tháng 3)
  if (d.getFullYear() !== nam || d.getMonth() !== thang - 1 || d.getDate() !== ngay) {
    kq.innerText = "Ngày " + ngay + " tháng " + thang + " năm " + nam + " không hợp lệ!";
    return;
  }

  var thu = d.getDay() === 0 ? "Chủ nhật" : "Thứ " + (d.getDay() + 1);
  kq.innerText = thu + " Ngày " + ngay + " tháng " + thang + " năm " + nam;
}
