import SessionsManager from "./sessionsManager";
import { ApiUrl } from "./url";
import axios from 'axios';

export const postFetch = (config) => {
  var pathName = config.pathname
  var data = config.data
  var dataFunction = config.dataFunction
  var errorFunction = config.errorFunction

  if(dataFunction === undefined) {
    dataFunction = () => {}
  }

  if(errorFunction === undefined) {
    errorFunction = () => {}
  }

  document.querySelector("#loading-page").classList.remove('hide')

  var formData = new FormData();
  formData = createFormData(formData, data)

  axios.post(
    (ApiUrl + pathName), 
    formData,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Content-Type": "multipart/form-data",
        ...SessionsManager.getHeaders()
      }
    }
  ).then(response => {
    console.log(response)
    if (response.status === 200) {
      SessionsManager.setHeaders(response)

      let data = response.data
      if(data.constructor === Object){
        document.querySelector("#loading-page").classList.add('hide')
        dataFunction(data)
      }
    }else if (response.status === 401) {
      SessionsManager.destroyHeaders()
      return window.location.href = `/sign_in`
    }else{
      throw new Error('Something went wrong');
    }
  }).catch(error => {
    console.log(error)
    document.querySelector("#loading-page").classList.add('hide')
    errorFunction(error)
  });
}

export const putFetch = (config) => {
  var pathName = config.pathname
  var data = config.data
  var dataFunction = config.dataFunction
  var errorFunction = config.errorFunction

  if(dataFunction === undefined) {
    dataFunction = () => {}
  }

  if(errorFunction === undefined) {
    errorFunction = () => {}
  }

  document.querySelector("#loading-page").classList.remove('hide')

  var formData = new FormData();
  formData = createFormData(formData, data)

  axios.put(
    (ApiUrl + pathName), 
    formData,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Content-Type": "multipart/form-data",
        ...SessionsManager.getHeaders()
      }
    }
  ).then(response => {
    console.log(response)
    if (response.status === 200) {
      SessionsManager.setHeaders(response)

      let data = response.data
      if(data.constructor === Object){
        document.querySelector("#loading-page").classList.add('hide')
        dataFunction(data)
      }
    }else if (response.status === 401) {
      SessionsManager.destroyHeaders()
      return window.location.href = `/sign_in`
    }else{
      throw new Error('Something went wrong');
    }
  }).catch(error => {
    console.log(error)
    document.querySelector("#loading-page").classList.add('hide')
    errorFunction(error)
  });
}

export const deleteFetch = (config) => {
  var pathName = config.pathname
  var data = config.data
  var dataFunction = config.dataFunction
  var errorFunction = config.errorFunction

  if(dataFunction === undefined) {
    dataFunction = () => {}
  }

  if(errorFunction === undefined) {
    errorFunction = () => {}
  }

  document.querySelector("#loading-page").classList.remove('hide')

  var formData = new FormData();
  formData = createFormData(formData, data)

  axios.delete(
    (ApiUrl + pathName), 
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Content-Type": "multipart/form-data",
        ...SessionsManager.getHeaders()
      },
      formData
    }
  ).then(response => {
    console.log(response)
    if (response.status === 200) {
      SessionsManager.setHeaders(response)

      let data = response.data
      if(data.constructor === Object){
        document.querySelector("#loading-page").classList.add('hide')
        dataFunction(data)
      }
    }else if (response.status === 401) {
      SessionsManager.destroyHeaders()
      return window.location.href = `/sign_in`
    }else{
      throw new Error('Something went wrong');
    }
  }).catch(error => {
    console.log(error)
    document.querySelector("#loading-page").classList.add('hide')
    errorFunction(error)
  });
}

export const getFetch = (config) => {
  var pathName = config.pathname
  var data = config.data
  var dataFunction = config.dataFunction
  var errorFunction = config.errorFunction

  if(dataFunction === undefined) {
    dataFunction = () => {}
  }

  if(errorFunction === undefined) {
    errorFunction = () => {}
  }

  if(data === undefined) {
    data = {}
  }

  // data to string
  data = Object.keys(data).map( (key,_) => {
    return `${key}=${data[key]}`
  }).join("&")

  document.querySelector("#loading-page").classList.remove('hide')
  fetch((ApiUrl + pathName + "?" + data),{
    headers: SessionsManager.getHeaders()
  }).then(response => {
      if (response.ok) {
        return response.json();
      }else if (response.status === 401) {
        SessionsManager.destroyHeaders()
        return window.location.href = `/sign_in`
      }else{
        throw new Error('Something went wrong');
      }
    })
    .then(data => {
      if(data.constructor === Object){
        document.querySelector("#loading-page").classList.add('hide')
        dataFunction(data)
      }
    })
    .catch(error => {
      document.querySelector("#loading-page").classList.add('hide')
      console.log("Error:", error)
      errorFunction(error)
    });
}

const createFormData = (formData, data) => {
  for (const property in data) {
    if(data[property].constructor === Array){
      data[property].forEach(element => {
        if(element.constructor === Object){
          for (const elementProperty in element) {
            formData.append(
              (property + `[]${elementProperty}`), element[elementProperty]
            )
          }
        }else{
          formData.append(
            (property + "[]"), element
          )
        }
      });
    }else if(data[property].constructor === Object){
      formData.append(
        property, createFormData(data[property])
      )
    }else{
      formData.append(
        property, data[property]
      )
    }
  }

  return formData
}