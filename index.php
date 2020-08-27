<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="A sample PWA app">
	<!-- CODELAB: Add iOS meta tags and icons -->
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta name="apple-mobile-web-app-title" content="PWA">
	<!-- CODELAB: Add meta theme-color -->
	<meta name="theme-color" content="#2F3BA2" />
	<link rel="apple-touch-icon" href="/images/icon-152x152.png">
	
	<!-- manifest.jsonファイル追加 -->
	<link rel="manifest" href="./manifest.json">
	<script type="text/javascript" src="main.js"></script>
	<title>PWA基礎</title>
</head>
<body>


	<h1>PWA</h1>
	<p>PWA is ...</p>
	<img src="/images/icon-152x152.png" alt="">
	<div id="install-button" hidden>
		<img src="/images/download.jpg" alt="" width="50">
	</div>

<!-- Firebase App (the core Firebase SDK) is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js"></script>
<script>
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

	// Firebase Messaging object 初期化
	function IntitalizerFireBaseMessaging() {
		messaging
			.requestPermission()
			.then(function () {
				console.log('Notification Permission');
			})
			.then(function (token) {
				console.log('Token : ' + token);
				document.getElementById('token').innerHTML=token;
			})
			.catch(function (reason) {
				console.log(reason);
			});
	}

	// メッセージイベントリスナー
	messaging.onMessage(function (payload) {
		console.log(payload);
	});

	// トークンリフレッシュリスナー
	// 新しいトークンが生成されたら呼び出される
	messaging.onTokenRefresh(function () {  
		messaging.getToken()
			.then(function (newToken) {
				console.log('New Token : ' + newToken);
			})
			.catch(function (reason) {
				console.log(reason);
			})
	});

	IntitalizerFireBaseMessaging();
</script>
	<script type="text/javascript" src="install.js"></script>
</body>
</html>