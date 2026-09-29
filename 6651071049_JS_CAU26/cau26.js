function tinhCanChi() {
  var s = document.getElementById("namDuong").value.trim();
  var loi = document.getElementById("loi");
  var ketQua = document.getElementById("canChi");
  loi.innerText = "";
  ketQua.value = "";

  // Validate giá trị nhập vào của textbox "Năm"
  if (s === "") { loi.innerText = "Vui lòng nhập năm!"; return; }
  if (!/^\d+$/.test(s)) { loi.innerText = "Năm phải là số nguyên dương!"; return; }
  var nam = parseInt(s);
  if (nam < 1 || nam > 9999) { loi.innerText = "Năm phải nằm trong khoảng 1 - 9999!"; return; }

  var can = ["Canh", "Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ"];
  var chi = ["Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi"];
  ketQua.value = can[nam % 10] + " " + chi[nam % 12];
}
