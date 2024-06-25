function oauthSignIn() {
    var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
  
    var form = document.createElement('form');
    form.setAttribute('method', 'GET');
    form.setAttribute('action', oauth2Endpoint);
  
    var params = {
        'client_id': '317786722302-agdppgabcqfuebmenmg55ebq5u308gg3.apps.googleusercontent.com',
        'redirect_uri': 'http://127.0.0.1:5500/index.html',
        'response_type': 'token',
        'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
        'include_granted_scopes': 'true',
        'state': 'pass-through value'
    };
  
    for (var p in params) {
        var input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', p);
        input.setAttribute('value', params[p]);
        form.appendChild(input);
    }
  
    document.body.appendChild(form);
    form.submit();
}

function getTokenFromUrl() {
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    return hashParams.get('access_token');
}

function saveTokenToLocalStorage(token) {
    localStorage.setItem('access_token', token);
}

function removeTokenFromUrl() {
    history.pushState("", document.title, window.location.pathname + window.location.search);
}

function removeTokenFromUrl() {
    history.pushState("", document.title, window.location.pathname + window.location.search);
}

function logout() {
    localStorage.removeItem('access_token');
    location.href = 'http://127.0.0.1:5500/getstarted.html';
}