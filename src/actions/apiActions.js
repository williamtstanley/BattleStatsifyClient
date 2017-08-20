import actionConstants from './actionTypeConstants';

const submitLogin = (credentials) => {
	return (dispatch) => {
		return fetch(getRequest(credentials, '/api/sign-in'))
			.then((response) => {
				if (!response.ok) {
					getErrors(response).then((error) => dispatch(loginFailed(error)));
				} else {
					getResult(response).then((result) => {
						fetchPayments(dispatch, result);
						dispatch(loginSuccess(result));
					});
				}
			});
	};
};

const toggleModal = () => ({
  type: actionTypes.TOGGLE_MODAL,
});

const loginSuccess = (result) => ({ type: actionTypes.LOGIN_SUCCESS, payload: result });
const loginFailed = (err) => ({ type: actionTypes.LOGIN_FAILED, payload: err });

const getRequest = (credentials, url, type) => {
	const req = {
		method: type ? type : 'POST',
		headers: getHeaders(),
		credentials: 'same-origin',
	};

	if (credentials) req.body = JSON.stringify(Object.assign({}, credentials));

	return new Request(
		url,
		req
	);
};

const getHeaders = () => {
	let headers = new Headers();

	headers.append('Accept', 'application/json');
	headers.append('Content-Type', 'application/json');

	return headers;
};

const getErrors = (response) => {
	return response.json()
		.then(resultJson => resultJson.error);
};

const getResult = (response) => response.json();

export default {
  submitLogin,
  toggleModal,
};
