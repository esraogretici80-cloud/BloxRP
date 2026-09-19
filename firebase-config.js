/**
 * BloxRP - Firebase Realtime Database & Auth Bağlantı Modülü
 */

// Firebase Konsolundan aldığın API Key ve Proje bilgileri
const firebaseConfig = {
    apiKey: "AIzaSyAlSiONrQgPMaO9zsoo25UVeaSap0e2xm0",
    authDomain: "bloxrp-51423.firebaseapp.com",
    // DÜZELTİLEN KISIM: Konsol linki yerine gerçek veritabanı adresi yazıldı
    databaseURL: "https://bloxrp-51423-default-rtdb.firebaseio.com",
    projectId: "bloxrp-51423",
    storageBucket: "bloxrp-51423.firebasestorage.app",
    appId: "1:398726018775:android:b933141cd1d03610176292",
};

// Firebase SDK'sının mükerrer başlatılmasını önleyerek başlat
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Uygulama genelinde kullanılacak Auth ve Realtime Database referansları
const auth = firebase.auth();
const db = firebase.database();

// Diğer JS dosyalarında (app.js vb.) kullanılabilmesi için pencereye bağla
window.auth = auth;
window.db = db;
