importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Tus credenciales exactas
firebase.initializeApp({
  apiKey: "AIzaSyBBVbW-DrxmA1xr-SVivwJseD1u0VKUqSk",
  authDomain: "cactus-barberia.firebaseapp.com",
  projectId: "cactus-barberia",
  storageBucket: "cactus-barberia.firebasestorage.app",
  messagingSenderId: "502779012185",
  appId: "1:502779012185:web:483b1375f0e6a8291f7d48",
  measurementId: "G-8WRS9859T4"
});

const messaging = firebase.messaging();

// Esta función atrapa la notificación cuando la página está cerrada o en segundo plano
messaging.onBackgroundMessage(function(payload) {
  console.log('Mensaje recibido en segundo plano: ', payload);
  const notificationTitle = payload.notification.title || '¡Nueva Cita!';
  const notificationOptions = {
    body: payload.notification.body || 'Tienes una nueva reserva en Cactus Barbería.',
    icon: '/icono.png' // Asegúrate de tener un icono.png en tu carpeta principal
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
