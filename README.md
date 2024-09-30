# Klasifikasi Gambar Outfit Fashion

Proyek ini bertujuan untuk membangun model Convolutional Neural Network (CNN) untuk mengklasifikasikan jenis pakaian fashion. Dataset yang digunakan bersumber dari Kaggle:

[Fashion Outfit Items Dataset](https://www.kaggle.com/datasets/kritanjalijain/fashionoutfititems)

## Persiapan Data

*   Dataset dimuat dan dibersihkan.
*   Gambar diubah ukurannya dan dinormalisasi.
*   Dataset dibagi menjadi set pelatihan dan pengujian.

## Pemodelan

*   Model CNN dibangun menggunakan TensorFlow dan Keras.
*   Model dilatih menggunakan set pelatihan dan dievaluasi pada set pengujian.

## Evaluasi

*   Kinerja model dievaluasi menggunakan metrik seperti akurasi dan loss.
*   Visualisasi seperti plot akurasi, plot loss, dan matriks konfusi digunakan untuk menganalisis kinerja model.

## Penyimpanan Model

*   Model yang dilatih disimpan dalam format berikut:
    *   SavedModel
    *   TF-Lite
    *   TFJS

## Inference
* Untuk melakukan inference, gunakan python -m server.http di folder inference
* sebelum menjalankan inference, gunakan symlink dengan menggunakan powershell
* Masuk terlebih dahulu ke folder inference di terminal PS kemudian jalankan perintah New-Item -ItemType SymbolicLink -Path "tfjs_model" -Target "..\tfjs_model"
* Jika sudah selesai, jalankan server dengan menggunakan python -m http.server di dalam folder inference

## Jika anda membutuhkan jawaban atas pertanyaan anda, silahkan kontak saya atau koment di issue.

Terima kasih
Rusdiana
