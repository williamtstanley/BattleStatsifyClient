import actionConstants from './actionTypeConstants';
import config from '../config/default';

const { 
  SUMMONER_DATA_SUCCESS,
  SUMMONER_DATA_FAILURE,
} = actionConstants;

const apiUrl = config.apiUrl[process.env.NODE_ENV || 'development'];

const getSummonerData = (name) => {
  return (dispatch) => {
    return fetch(getRequest(`${apiUrl}/recentMatchData/`, {
      param: name,
    }))
      .then((response) => {
        if(!response.ok) {
          console.log('response', response)
          getErrors(response)
            .then((error) => dispatch(getSummonerFailure(error)))
        } else {
          getResult(response)
            .then((result) => dispatch(getSummonerSuccess(result)))
        }
      }).catch((err) => {
        console.log('error on front', err)
      })
  }
}

const getSummonerSuccess = (result) => {
  console.log(result)
  return {
    type: SUMMONER_DATA_SUCCESS,
    payload: result,
  }
}

const getSummonerFailure = (error) => ({
  type: SUMMONER_DATA_FAILURE,
  payload: error,
})

//HELPERS BELOW

const getRequest = (url, opts) => {
	const req = {
		method: opts.type ? opts.type : 'GET',
		headers: getHeaders(),
		credentials: 'same-origin',
	};

  if (opts.body) req.body = opts.body;

  if (opts.param) url = `${url}${opts.param}`;

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
  headers.append('Authorization', 'Basic ' + encodeBase64(`${appName}:${apiKey}`));
	return headers;
};

const encodeBase64 = (string) => {
  const buffer = new Buffer(string);
  return buffer.toString('base64');
}

const getErrors = (response) => {
	return response.json()
		.then(resultJson => {
      return resultJson.error
    });
};

const getResult = (response) => response.json();

export default {
  getSummonerData,
};
