const PASSWORD = "1234"; // ضع الباسورد هنا

// العناصر
const screens = document.querySelectorAll(".screen");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("error");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");

// دالة لتفعيل الشاشة
function showScreen(screen) {
  screens.forEach(s => s.classList.remove("active"));
  screen.classList.add("active");
}

// فحص الباسورد
function checkPassword() {
  const input = passwordInput.value.trim();
  if(input === PASSWORD){
    errorMsg.textContent = "";
    showScreen(screen2);
  } else {
    errorMsg.textContent = "الباسورد غلط 😢";
  }
}

// الانتقال لشاشة الصور
function goToGallery() {
  showScreen(screen3);
}