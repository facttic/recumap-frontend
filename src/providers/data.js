// import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';
// const httpClient = fetchUtils.fetchJson;
// console.log('http client', httpClient)

import axios from 'axios'

export default (baseUrl) => {
  return {
    getList: (resource, params) => {
      const { page, perPage } = params.pagination;
      const { field, order } = params.sort;
      const query = {
        sort: JSON.stringify([field, order]),
        range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
        filter: JSON.stringify(params.filter),
      };
      const url = `${baseUrl}/${resource}?${stringify(query)}`;
      const { token } = localStorage.getItem('token')
      const headers = {
        'Authorization': token,
        // 'Access-Control-Expose-Headers': 'X-Total-Count'
      }
      console.log(resource, params)
      
      return axios.get(url, { headers })
      .then(res => {
        console.log('GET LIST :: ', res)
        return {
          data: res.data.data,
          total: 1,
        }
      })
      
      // return httpClient(url, { headers })
      // .then(({ headers, json }) => ({
      //   data: json,
      //   total: parseInt(headers.get('X-Total-Count').split('/').pop(), 10),
      // }));
    },
    
    getOne: (resource, params) => {
      const url = `${baseUrl}/${resource}/${params.id}`
      const token = localStorage.getItem('token')
      const headers = {
        'Authorization': token
      }
      return axios.get(url, headers)
      .then(res => {
        console.log('GET ONE :: ', res)
        return { data: res.data.data }
      })
    },
    
    
    getMany: (resource, params) => {
      const query = {
        filter: JSON.stringify({ id: params.ids }),
      };
      const url = `${baseUrl}/${resource}?${stringify(query)}`;
      const token = localStorage.getItem('token')
      const headers = {
        'Authorization': token,
        // 'Access-Control-Expose-Headers': 'X-Total-Count'
      }
      // return httpClient(url).then(({ json }) => ({ data: json }));
      return axios.get(url, { headers })
      .then(res => {
        console.log('GET MANY :: ', res)
        return { data: res.data }
      })
    },
    
    getManyReference: (resource, params) => {
      const { page, perPage } = params.pagination;
      const { field, order } = params.sort;
      const query = {
        sort: JSON.stringify([field, order]),
        range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
        filter: JSON.stringify({
          ...params.filter,
          [params.target]: params.id,
        }),
      };
      const url = `${baseUrl}/${resource}?${stringify(query)}`;
      
      // return httpClient(url).then(({ headers, json }) => ({
      //   data: json,
      //   total: parseInt(headers.get('content-range').split('/').pop(), 10),
      // }));
      return axios.get(url)
      .then(res => {
        console.log('GET MANY REFERENCE :: ', res)
        return {
          data: res.data,
          // FIXME
          total: 1
        }
      })
    },
    
    update: (resource, params) => {
      const url = `${baseUrl}/${resource}/${params.id}`;
      // httpClient(`${baseUrl}/${resource}/${params.id}`, {
      //   method: 'PUT',
      //   body: JSON.stringify(params.data),
      // }).then(({ json }) => ({ data: json })),
      axios.put(url, { data: JSON.stringify(params.data) })
      .then(res => {
        console.log('UPDATE :: ', res)
        return { data: res.data }
      })
    },
    
    updateMany: (resource, params) => {
      const query = {
        filter: JSON.stringify({ id: params.ids}),
      };
      const url = `${baseUrl}/${resource}?${stringify(query)}`
      // return httpClient(`${baseUrl}/${resource}?${stringify(query)}`, {
      //   method: 'PUT',
      //   body: JSON.stringify(params.data),
      // }).then(({ json }) => ({ data: json }));
      return axios(url)
      .then(res => {
        console.log('UPDATE MANY :: ', res)
        return { data: res.data }
      })
    },
    
    create: (resource, params) => {
      const url = `${baseUrl}/${resource}`
      const token = localStorage.getItem('token')
      const headers = {
        Authorization: token
      }
      return axios({
        method: 'POST',
        url,
        headers,
        data: { resource: params.data }
      })
      .then(res => {
        console.log('CREATE :: ', res)
        return { data: res.data.data }
      })
    },
    
    delete: (resource, params) => {
      const url = `${baseUrl}/${resource}/${params.id}`
      // httpClient(`${baseUrl}/${resource}/${params.id}`, {
      //   method: 'DELETE',
      // }).then(({ json }) => ({ data: json })),
      axios.delete(url)
      .then(res => {
        console.log('DELETE :: ', res)
        return { data: res.data }
      })
    },
    
    deleteMany: (resource, params) => {
      const query = {
        filter: JSON.stringify({ id: params.ids}),
      };
      const url = `${baseUrl}/${resource}?${stringify(query)}`
      // return httpClient(`${baseUrl}/${resource}?${stringify(query)}`, {
      //   method: 'DELETE',
      //   body: JSON.stringify(params.data),
      // }).then(({ json }) => ({ data: json }));
      axios.delete(url, {
        data: JSON.stringify(params.data)
      })
      .then(res => {
        console.log('DELETE MANY :: ', res)
        return { data: res.data }
      })
    }
  };
}
