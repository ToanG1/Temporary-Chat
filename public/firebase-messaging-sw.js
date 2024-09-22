// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyAH75oL6P3pk40cuAgfx1mcfMTQqcDPlfg",
  authDomain: "temporary-chat-bc5f6.firebaseapp.com",
  projectId: "temporary-chat-bc5f6",
  storageBucket: "temporary-chat-bc5f6.appspot.com",
  messagingSenderId: "666846599292",
  appId: "1:666846599292:web:db9427f79a8ca920d951f9",
  measurementId: "G-L1MR21KJGY",
};
// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    'Received background message',
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener("message", (event) => {
  const {type, data} = event.data;
  if (type === "showNotification") {
    const {title, body} = data;
    self.registration.showNotification(title, {body});
    self.registration.showNotification(title);
  }
})