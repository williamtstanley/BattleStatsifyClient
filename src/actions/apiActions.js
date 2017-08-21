import actionConstants from './actionTypeConstants';
import config from '../config/default';

const apiUrl = config.apiUrl[process.env.NODE_ENV || 'development'];

const getSummonerData = (name) => {
  return (dispatch) => {
    return fetch(getRequest(name, `${apiUrl}/summoner/`, {
      param: name,
    }))
      .then((response) => {
        if(!response.ok) {
          getErrors(response)
            .then((error) => dispatch(getSummonerFailure(error))
        } else {
          getResponse(response)
            .then((result) => dispatch(getSummonerSuccess(result)))
        }
      })
  }
}


  
//HELPERS BELOW

const getRequest = (url, opts) => {
	const req = {
		method: opts.type ? opts.type : 'GET',
		headers: getHeaders(),
		credentials: 'same-origin',
	};

  if (opts.body) req.body = opts.body;

  if (opts.param) url = `${url}${queryItem}`;

	return new Request(
		url,
		req
	);
};

const getHeaders = () => {
  let appName = config.appData.appName;
  let apiKey = config.apiKey[process.env.NODE_ENV || 'development'];
	let headers = new Headers();

	headers.append('Accept', 'application/json');
	headers.append('Content-Type', 'application/json');
  headers.append('Authorization', 'Basic ' + base64.encode(`${appName}:${apiKey}`));
	return headers;
};

const getErrors = (response) => {
	return response.json()
		.then(resultJson => resultJson.error);
};

const getResult = (response) => response.json();

export default {
  getSummonerData,
};
