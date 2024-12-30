document.getElementById('start').addEventListener('click', () => {
    const interval = parseInt(document.getElementById('interval').value) * 60000;
    let sending = chrome.runtime.sendMessage({ action: 'start', interval });
    window.close();
  });