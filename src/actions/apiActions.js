import actionConstants from './actionTypeConstants';
import config from '../config/default';

const { 
  SUMMONER_DATA_SUCCESS,
  SUMMONER_DATA_FAILURE,
  FETCH_STATIC_SUCCESS,
  CLEAR_SUMMONER_DATA,
  FETCHING_DATA,
} = actionConstants;

const apiUrl = config.apiUrl[process.env.NODE_ENV || 'development'];

const getSummonerData = (name) => {
  return (dispatch) => {
    dispatch(toggleFetching())
    dispatch(clearSummonerAndMatchData())
    return fetch(getRequest(`${apiUrl}/recentMatchData/`, {
      param: name,
    }))
      .then((response) => {
        if(!response.ok) {
          console.log('response', response)
          getErrors(response)
            .then((error) => {
              dispatch(getSummonerFailure(error))
              dispatch(toggleFetching())
            })
        } else {
          getResult(response)
            .then((result) => {
              dispatch(getSummonerSuccess(result))
              dispatch(toggleFetching())
            })
        }
      })
  }
}

const getSummonerSuccess = (result) => ({
  type: SUMMONER_DATA_SUCCESS,
  payload: result,
})

const getSummonerFailure = (error) => ({
  type: SUMMONER_DATA_FAILURE,
  payload: error,
})

const clearSummonerAndMatchData = () => ({
  type: CLEAR_SUMMONER_DATA,
})

const toggleFetching = () => ({
  type: FETCHING_DATA,
})

const fetchStaticData = (name) => {
  return (dispatch) => {
    return fetch(getRequest(`${apiUrl}/static-data/${name}`, {}))
      .then((response) => {
        if(!response.ok) {
          console.log('failed for some reason', response)
        } else {
          getResult(response)
          .then((result) => dispatch(fetchStaticDataSuccess(result, name)))
        }
      })
  }
}

const fetchStaticDataSuccess = (result, name) => ({
  type: FETCH_STATIC_SUCCESS,
  payload: {[name]: result},
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
  fetchStaticData,
};
