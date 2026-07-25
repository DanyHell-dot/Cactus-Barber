// Importamos las librerías de Firebase para que el trabajador las pueda usar en segundo plano
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Tu configuración real de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBBVbW-DrxmA1xr-SVivwJseD1u0VKUqSk",
  authDomain: "cactus-barberia.firebaseapp.com",
  projectId: "cactus-barberia",
  storageBucket: "cactus-barberia.firebasestorage.app",
  messagingSenderId: "502779012185",
  appId: "1:502779012185:web:483b1375f0e6a8291f7d48",
  measurementId: "G-8WRS9859T4"
};

// Inicializamos la app en el Service Worker
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Esta parte se encarga de recibir y mostrar el mensaje cuando la página está cerrada o minimizada
messaging.onBackgroundMessage(function(payload) {
    console.log('Mensaje recibido en segundo plano: ', payload);

    const notificationTitle = payload.notification?.title || 'Cactus Barbería';
    const notificationOptions = {
        body: payload.notification?.body || 'Tienes una nueva notificación.',
        icon: '/favicon.ico', 
        badge: '/favicon.ico'
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});
