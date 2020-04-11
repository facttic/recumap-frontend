import React, { useState, useEffect } from 'react';
import { Card, CardContent, Button, CardActions, CardHeader } from '@material-ui/core';

const NodesData = props => {

    const [node, setNode] = useState(props.node);

    useEffect(() => {
        setNode(props.node)
    }, [props.node])

    return (
            <div>
                <Card>
                    <CardHeader title={node.name}>
                     
                    </CardHeader>
                    <CardContent>
                       <span>{node.geo.lat}</span>
                    </CardContent>
                    <CardActions>
                       <Button size="small" color="primary">
                          Edit
                      </Button>
                      <Button size="small" color="primary">
                          Delete
                      </Button>
                   </CardActions>
                </Card>
                
            </div>
        );
    }


export default NodesData;
