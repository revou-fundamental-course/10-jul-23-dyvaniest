// script.js
function calculateBMI() {
    // Mengambil nilai berat badan, tinggi badan, jenis kelamin, dan umur dari inputan
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; //Nilai tinggi badan dari cm diubah ke meter
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const age = parseInt(document.getElementById('age').value);
    
    // Memeriksa apakah data yang dimasukkan valid (tidak kosong dan merupakan angka)
    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
      alert('Mohon isi semua data dengan benar.');
      return;
    }
    
    // Menghitung BMI berdasarkan rumus dan nilai yang telah diinput
    const bmi = weight / (height * height);
    
    // Menentukan kategori BMI berdasarkan umur
    let category = '';
    if (age >= 19) {
      if (bmi < 18.5) {
        category = 'Kekurangan Berat Badan (Kurus)';
      } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal (Ideal)';
      } else if (bmi >= 25 && bmi < 30) {
        category = 'Kelebihan Berat Badan (Gemuk)';
      } else {
        category = 'Kegemukan (Obesitas)';
      }
    } else {
      // Kategori BMI untuk anak-anak dapat diatur sesuai kebutuhan.
      category = 'Kategori BMI untuk anak-anak di bawah 19 tahun';
    }
    
    // Menampilkan hasil BMI dan kategori berat badan
    document.getElementById('result').innerHTML = `<p>BMI: <strong>${bmi.toFixed(2)}</strong></p>`;
    document.getElementById('result').innerHTML += `<p>Status Berat Badan: <strong>${category}</strong></p>`;
  
  }