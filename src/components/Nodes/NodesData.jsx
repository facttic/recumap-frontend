import React, { useState, useEffect } from 'react';
import { Card, CardContent, Button, CardActions, CardHeader } from '@material-ui/core';

const NodesData = props => {

    const [node, setNode] = useState(props.node);
    const [addressNode, setAddressNode] = useState();
    
    const parser = props.parseAddressFunction;

    useEffect(() => {
        setNode(props.node)
        parser(node, setAddressNode)
    }, [props.node])

    return (
            <div>
                <Card>
                    <CardHeader title={node.name}/>
                    <CardContent>
                      <span>{addressNode}</span>
                    </CardContent>
                </Card>
                
            </div>
        );
    }


export default NodesData;
