export default function(options={}, type){
  return new Promise((resolve, reject)=>{
    const xhr = new XMLHttpRequest();


    set_params();
    xhr.open(options.method, options.url);
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    set_headers();

    xhr.onload = () =>{
      if(xhr.status >= 400){ reject(xhr.response) }
      else{
        if(!type) resolve(xhr.response);
        if(type == 'xhr') resolve(xhr);
        if(type == 'url') resolve(xhr.responseURL)
      }
    }

    xhr.onerror = () =>{ reject(xhr.response) }

    if(options.body){ xhr.send(JSON.stringify(options.body)) }
    else{xhr.send()}


  // funcs

  function set_params(){
    if(options.params && _type(options.params) == '[object Object]'){
      options.url += '?';
      let params_arr = [];
      ADD_params_to_arr();
      options.url += params_arr.join('&');

      function ADD_params_to_arr(){
        for(let key in options.params){
          let param = `${key}=${options.params[key]}`;
          params_arr.push(param);
        }
      }
    }
  }
  function set_headers(){
    if(options.headers && _type(options.headers) == '[object Object]'){
      for(let key in options.headers){
        xhr.setRequestHeader(`${key}`, `${options.headers[key]}`);
      }
    }
  }
  function _type(event){
    return Object.prototype.toString.call(event);
  }

  })
}
