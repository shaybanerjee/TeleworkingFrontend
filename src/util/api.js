import _ from 'lodash';
import axios from 'axios';
import Cookies from 'js-cookie';

export const endpoints = {
    createUser: () => 'http://localhost:8080/user'
}

const makeQueryParamSuffix = params => {
    return !params ? '' : '?' + Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');
};

const formPropsToData = props => {
    let formData = new FormData();
    _.forEach(props, (value, key) => {
        formData.append(key, value);
    });
    return formData;
};

const axiosFailureRegex = /Request failed with status code (\d+)/;
export const extractAxiosRequestFailureCode = error => {
    const matches = error.message.match(axiosFailureRegex);
    const statusCode = matches[1];
    return statusCode;
};

// wrap error in consistent envelope for client handling
const handleRequestError = (error) => {
    throw { type: 'http', error }; // eslint-disable-line no-throw-literal
};

export const apiCore = (endpointKey, opts) => {
    const {
        method = 'get',
        urlParams = {},
        body,
        form,
        queryParams,
        responseType,
        headers = {},
    } = opts || {};

    const makeUrlFromParams = endpoints[endpointKey];
    const url = makeUrlFromParams(urlParams) + makeQueryParamSuffix(queryParams);

    const data = form || body;
    const isGet = method === 'get';

    let automaticHeaders = {};
    if (form) {
        automaticHeaders['Content-Type'] = 'multipart/form-data;';
    }

    if (!isGet) {
        automaticHeaders['X-CSRFToken'] = Cookies.get('csrftoken');
    }

    const headerConfig = {
        headers: Object.assign({}, automaticHeaders, headers),
    };
    const responseConfig = responseType ? {
        responseType,
    } : {};
    const config = Object.assign({}, headerConfig, responseConfig);

    return isGet
        ? axios[method](url, config)
        : axios[method](url, data, config);
};

export const requestToBackend = (endpointKey, opts = {}) => {
    const {
        formProps,
        ...otherOptions
    } = opts;
    const revisedOpts = ('formProps' in opts) ? {
        ...otherOptions,
        form: formPropsToData(formProps),
    }
        : opts;
    const promise = apiCore(endpointKey, revisedOpts);

    return promise
        .catch(handleRequestError)
        .then(response => {
            const backendPayload = response.data;
            if ('error' in backendPayload) {
                // wrap error in consistent envelope for client handling
                throw { type: 'api', error: new Error(backendPayload.error) }; // eslint-disable-line no-throw-literal
            } else {
                return backendPayload.data;
            }
        });
};