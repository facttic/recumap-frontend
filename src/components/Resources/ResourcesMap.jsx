import React, { useState, useEffect } from 'react';
import { baseUrl } from '../../providers/index'
import 'leaflet/dist/leaflet.css';
import axios from 'axios'

import { Card, CardHeader, Grid, CardContent } from '@material-ui/core';
import NodesMap from '../Map/Map'

const firstNode = {
    geo: { lat: -34.586018936001786, lng: -58.48846435546876 },
    name: 'name1'
}

const secondNode = {
    geo: { lat: -32.456018936001786, lng: -56.23333215546876 },
    name: 'name1'
}
const thirdNode = {
    geo: { lat: -31.52401321125042334, lng: -52.48846435546876 },
    name: 'name1'
}

const ResourcesMap = props => {
    
    const [resources, setResources] = useState([firstNode, secondNode, thirdNode]);
    const getList = (resource) => {
        const url = `${baseUrl}/${resource}`;
        const { token } = localStorage.getItem('token')
        const headers = {
          'Authorization': token,
          // 'Access-Control-Expose-Headers': 'X-Total-Count'
        }
        console.log(resource)
        
        return axios.get(url, { headers })
        .then(res => {
          console.log('GET LIST :: ', res)
          return {
            data: res.data.data,
            total: 1,
          }
        })
      }

    useEffect(() => {
        const resources = getList('resources');
        setResources(resources)
    }, [])

    return (
            <div>
                <Card>
                    <CardHeader title="Mapa de recursos"/>
                </Card>
                <Grid 
                   container
                   direction="row"
                   justify="center"
                   alignItems="center"
                >
                   <Card>
                       <CardHeader title="Mapa de recursos"/>
                   </Card>
                   <NodesMap nodeList={resources}></NodesMap>
                </Grid>
              
            </div>
        );
    }


export default ResourcesMap;
