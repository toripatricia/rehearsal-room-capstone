import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

const createAdmin = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/admin.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      const setcode = { firebaseKey: data.name };
      fetch(`${dbUrl}/admin/${setcode.firebaseKey}.json`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(setcode),
      }).then(resolve);
    })
    .catch(reject);
});

const updateAdmin = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/admin/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getProductionsAdmin = (pFBK) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/admin.json?orderBy="productionId"&equalTo="${pFBK}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const deleteAdmin = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/admin/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSingleAdmin = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/admin/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  createAdmin, updateAdmin, deleteAdmin, getProductionsAdmin, getSingleAdmin,
};