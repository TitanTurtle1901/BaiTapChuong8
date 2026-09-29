function layHaiSo() {
  var a = document.getElementById("so1").value.trim();
  var b = document.getElementById("so2").value.trim();
  if (!/^-?\d+$/.test(a) || !/^-?\d+$/.test(b)) {
    return null;
  }
  return [parseInt(a), parseInt(b)];
}

function xuat(noiDung) {
  document.getElementById("ketqua").innerText = noiDung;
}

function nhan() {
  var s = layHaiSo();
  if (s === null) { xuat("Vui lòng nhập hai số nguyên!"); return; }
  xuat(s[0] * s[1]);
}

function chia() {
  var s = layHaiSo();
  if (s === null) { xuat("Vui lòng nhập hai số nguyên!"); return; }
  if (s[1] === 0) { xuat("Không thể chia cho 0!"); return; }
  xuat(s[0] / s[1]);
}
