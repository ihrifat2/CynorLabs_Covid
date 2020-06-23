import fetch from 'isomorphic-fetch';

const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    OPTIONS: '',
};

export function post(url, data) {
    return fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
    }).then(response => response);
}

export function get(url) {
    return fetch(url, {
        method: 'GET',
        headers,
    }).then(response => {
        const r = response.json();
        console.log(r)
        return r;
    });
}

export function getFormData(url) {
    return fetch(url, {
        method: 'GET',
        headers,
    })
    .then(res => res.json())
    .then(res => {
        const r = JSON.parse(res.post).task_data
        return r;
    });
}

export function put(url, data) {
    return fetch(url, {
        method: 'PUT',
        headers,
        body: JSON.stringify(data),
    }).then(response => response);
}
