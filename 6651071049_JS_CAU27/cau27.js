// Xóa dòng chứa nút "Xóa" vừa được nhấn
function xoaDong(nut) {
  var dong = nut.parentNode.parentNode;
  dong.parentNode.removeChild(dong);
}

// Tự cập nhật cột Tổng khi sửa số lượng / đơn giá
function tinhTong(o) {
  var dong = o.parentNode.parentNode;
  var inputs = dong.getElementsByTagName("input");
  var sl = Number(inputs[0].value);
  var dg = Number(inputs[1].value);
  inputs[2].value = (isNaN(sl) || isNaN(dg)) ? "" : sl * dg;
}
