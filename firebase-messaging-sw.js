importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');

	// firebase 初期化
	// Your web app's Firebase configuration
	var firebaseConfig = {
		apiKey: "AIzaSyCmKFpA5UBu3rDWlBpPJn_uWv3CXeOU5gI",
		authDomain: "horseracing-f8ed7.firebaseapp.com",
		databaseURL: "https://horseracing-f8ed7.firebaseio.com",
		projectId: "horseracing-f8ed7",
		storageBucket: "horseracing-f8ed7.appspot.com",
		messagingSenderId: "748149992733",
		appId: "1:748149992733:web:b2c737ad6a9317e68845f4",
		measurementId: "G-WL5Y6F6GBP"
	};
	
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);

	// Firebase Messaging object 取得
	const messaging = firebase.messaging();

	// このハンドラーがBackgroundでNotification をハンドリングする(ブラウザを閉じても通知が立ち上がる)
	messaging.setBackgroundMessageHandler(function(payload) {
		console.log('[firebase-messaging-sw.js] Received background message ', payload);
		const notification = JSON.parse(payload);
		const notificationOptions = {
			body:notification.body,
			icon:notification.icon
		};

		return self.registration.showNotification(payload.notification.title, notificationOptions);
		// Customize notification here
		// const notificationTitle = 'Background Message Title';
		// const notificationOptions = {
		//   body: 'Background Message body.',
		//   icon: '/firebase-logo.png'
		// };
	  
		// return self.registration.showNotification(notificationTitle, notificationOptions);
	});
