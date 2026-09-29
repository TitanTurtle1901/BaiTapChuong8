function tinhLuong() {
  var luong = document.getElementById("luong").value.trim();
  var heso = parseFloat(document.getElementById("heso").value);
  var o = document.getElementById("luongThang");

  if (luong === "" || isNaN(Number(luong)) || Number(luong) < 0) {
    o.innerText = "Lương không hợp lệ!";
    return;
  }
  o.innerText = Math.round(Number(luong) * heso);
}
