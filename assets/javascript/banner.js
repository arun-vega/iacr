
let onlineDiv = document.getElementById('online');
let offlineDiv = document.getElementById('offline');

let onlineButton = document.getElementById('onlineButton');
let offlineButton = document.getElementById('offlineButton');

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



let onlineDiv1 = document.getElementById('online1');
let offlineDiv1 = document.getElementById('offline1');

let modelOnlineButton = document.getElementById('modelOnlineButton');
let modelOfflineButton = document.getElementById('modelOfflineButton');

modelOnlineButton.style.display = 'inline-block';
document.querySelector('.clicked i').style.display = 'inline';

onlineDiv1.addEventListener('click', function () {
    modelOnlineButton.style.display = 'inline-block';
    modelOfflineButton.style.display = 'none';

    onlineDiv1.classList.add('clicked');
    offlineDiv1.classList.remove('clicked');
    onlineDiv1.querySelector('i').style.display = 'inline'; // Display tick icon
    offlineDiv1.querySelector('i').style.display = 'none';
});

offlineDiv1.addEventListener('click', function () {
    modelOfflineButton.style.display = 'inline-block';
    modelOnlineButton.style.display = 'none';

    offlineDiv1.classList.add('clicked');
    onlineDiv1.classList.remove('clicked');
    offlineDiv1.querySelector('i').style.display = 'inline'; // Display tick icon
    onlineDiv1.querySelector('i').style.display = 'none';
});