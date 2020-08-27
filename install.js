// ポップアップオブジェクト
let deferredInstallPrompt = null;

// ボタンオブジェクト
let installButton = null;

// ページがロードされた時
window.addEventListener('load', () => {
	installButton = document.getElementById('install-button');
	installButton.addEventListener('click', installPWA);
});

// CODELAB: Add event listener for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(event) {
	// CODELAB: Add code to save event & show the install button.
	deferredInstallPrompt = event;
	// hidden 属性を削除
	installButton.removeAttribute('hidden');
}

function installPWA() {
	// CODELAB: Add code show install prompt & hide the install button.
	deferredInstallPrompt.prompt();
	// Hide the install button, it can't be called twice.
	event.srcElement.setAttribute('hidden', true);

	installButton.remove();

	// CODELAB: Log user response to prompt.
	deferredInstallPrompt.userChoice
		.then((choice) => {
		if (choice.outcome === 'accepted') {
			console.log('User accepted the A2HS prompt', choice);
		} else {
			console.log('User dismissed the A2HS prompt', choice);
		}
		deferredInstallPrompt = null;
    });
}