// HTTP Requests

const BASE_URL = `http://localhost:3000/api/v1`;

const Product = {
	all() {
		return fetch(`${BASE_URL}/products`, { credentials: 'include' }).then(
			(res) => res.json(),
		);
	},
	one(id) {
		return fetch(`${BASE_URL}/products/${id}`, {
			credentials: 'include',
		}).then((res) => res.json());
	},
	create(params) {
		return fetch(`${BASE_URL}/products`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(params),
		}).then((res) => res.json());
	},
	update(id, params) {
		return fetch(`${BASE_URL}/products/${id}`, {
			method: 'PATCH',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(params),
		}).then((res) => res.json());
	},
};

const Session = {
	create(params) {
		return fetch(`${BASE_URL}/session`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(params),
		}).then((res) => res.json());
	},
};

export { Product, Session };
