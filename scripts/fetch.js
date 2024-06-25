function fetchToken(){
    return localStorage.getIten('access_token');
}

function fetchData(){
    const access_token = fetchToken();

    if (!access_token) {
        console.error('Could not fetch Access Token!')
        return;
    }

    const files = 'https://www.googleapis.com/auth/drive.file'

    fetch(files, {
        method:'GET',
        headers:{
            'Authorization': 'Bearer' + access_token
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

}


function generateCards(notebooks) {
    const container = document.getElementById('notebooks-container');
    container.innerHTML = ''; // Clear any existing content

    notebooks.forEach(notebook => {
        const card = document.createElement('div');
        card.className = 'card';

        const title = document.createElement('h2');
        title.textContent = notebook.name; // Adjust according to the actual data structure
        card.appendChild(title);

        // const description = document.createElement('p');
        // description.textContent = notebook.description || 'No description available'; // Adjust if description is available
        // card.appendChild(description);

        container.appendChild(card);
    });
}

