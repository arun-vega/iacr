
const onlineDiv = document.getElementById('online');
const offlineDiv = document.getElementById('offline');

const onlineButton = document.getElementById('onlineButton');
const offlineButton = document.getElementById('offlineButton');

onlineButton.style.display = 'inline-block';
document.querySelector('.clicked i').style.display = 'inline';

onlineDiv.addEventListener('click', function () {
    onlineButton.style.display = 'inline-block';
    offlineButton.style.display = 'none';

    onlineDiv.classList.add('clicked');
    offlineDiv.classList.remove('clicked');
    onlineDiv.querySelector('i').style.display = 'inline'; // Display tick icon
    offlineDiv.querySelector('i').style.display = 'none';
});

offlineDiv.addEventListener('click', function () {
    offlineButton.style.display = 'inline-block';
    onlineButton.style.display = 'none';

    offlineDiv.classList.add('clicked');
    onlineDiv.classList.remove('clicked');
    offlineDiv.querySelector('i').style.display = 'inline'; // Display tick icon
    onlineDiv.querySelector('i').style.display = 'none';
});


