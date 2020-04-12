// import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';
// const httpClient = fetchUtils.fetchJson;
// console.log('http client', httpClient)

import axios from 'axios'

function getNamespace(resource) {
  const namespaces = {
    users: 'user',
    resources: 'resource',
    houses: 'house',
    orgs: 'org',
  }
  return namespaces[resource]
}

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
      let headers = {}
      if (resource === 'houses') {
        const token = localStorage.getItem('token')
        headers = {
          'Authorization': token,
          // 'Access-Control-Expose-Headers': 'X-Total-Count'
        }
      }
      console.log(resource, params)
      
      return axios.get(url, { headers })
      .then(res => {
        console.log('GET LIST :: ', res)
        return {
          data: res.data.data,
          total: res.data.data.length,
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
      try {
        const query = {
          filter: JSON.stringify({ id: params.ids }),
        };
        const url = `${baseUrl}/${resource}?${stringify(query)}`;
        let headers = {}
        if (resource === 'houses') {
          const token = localStorage.getItem('token')
          headers = {
            'Authorization': token,
            // 'Access-Control-Expose-Headers': 'X-Total-Count'
          }
        }
        return axios.get(url, { headers })
        .then(res => {
          console.log('GET MANY :: ', res)
          return { data: res.data.data, total: res.data.data.length }
        })
      } catch(err) {
        console.error('No permissions to fetch this resource')
      }
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
      
      return axios.get(url)
      .then(res => {
        console.log('GET MANY REFERENCE :: ', res)
        return {
          data: res.data.data,
          total: res.data.data.length
        }
      })
    },
    
    update: (resource, params) => {
      const url = `${baseUrl}/${resource}/${params.id}`;
      const token = localStorage.getItem('token')
      const headers = {
        Authorization: token
      }
      return axios({
        method: 'PUT',
        url,
        headers,
        data: { [getNamespace(resource)]: params.data }
      })
      .then(res => {
        console.log('UPDATE :: ', res)
        return { data: res.data.data }
      })
    },
    
    updateMany: (resource, params) => {
      const query = {
        filter: JSON.stringify({ id: params.ids}),
      };
      const token = localStorage.getItem('token')
      const headers = {
        Authorization: token
      }
      const url = `${baseUrl}/${resource}?${stringify(query)}`
      return axios({
        data: { [getNamespace(resource)]: params.data },
        headers,
        method: 'PUT',
        url
      })
      .then(res => {
        console.log('UPDATE MANY :: ', res)
        return { data: res.data.data }
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
        data: { [getNamespace(resource)]: params.data }
      })
      .then(res => {
        console.log('CREATE :: ', res)
        return { data: res.data.data }
      })
    },
    
    delete: (resource, params) => {
      const url = `${baseUrl}/${resource}/${params.id}`
      const token = localStorage.getItem('token')
      const headers = {
        Authorization: token
      }
      axios({
        method: 'DELETE',
        headers,
        url,
      })
      .then(res => {
        console.log('DELETE :: ', res)
        return { data: res.data.data }
      })
    },
    
    deleteMany: (resource, params) => {
      const query = {
        filter: JSON.stringify({ id: params.ids}),
      };
      const url = `${baseUrl}/${resource}?${stringify(query)}`
      axios.delete(url, {
        data: JSON.stringify(params.data)
      })
      .then(res => {
        console.log('DELETE MANY :: ', res)
        return { data: res.data.data }
      })
    }
  };
}
