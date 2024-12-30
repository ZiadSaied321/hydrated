chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'start') {
      const interval = request.interval;
      let timerId;
  
      const notify = () => {
        chrome.notifications.create('hydration reminder', {
          type: 'basic',
          title: 'Drink Water!',
          message: 'Time to hydrate!',
          iconUrl: 'icon.png'
        });
      };
  
      const startTimer = () => {
        timerId = setInterval(notify, interval);
      };
  
      startTimer();
    }}
)