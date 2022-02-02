import React, {
    useState,
    useEffect,
    useRef
} from 'react';
import Amplify, {
    Auth,
    API,
    graphqlOperation
} from 'aws-amplify';
import awsExports from '../aws-exports';
import {
    Stage,
    Layer,
    Line,
    Text,
    Rect,
    Group,
    Image
} from 'react-konva';
import head from "../img/head.png"
import useImage from 'use-image';
import * as queries from '../graphql/queries';
Amplify.configure(awsExports);

export function Canvas() {

    const url = "https://amplify-imggenerator-dev-193407-deployment.s3.amazonaws.com/doodle6_0018_Head.png";

    const [image] = useImage(url);
    //Refs
    const stageRef = useRef(null);
    const containerRef = useRef();
    //Stage Width
    const [stageWidth, setStageWidth] = useState(window.innerWidth);
    //Stage height
    const [stageHeight, setStageHeight] = useState(window.innerHeight);
    
    const headHeight = 500
    const headWidth = 700

    const fetchPhotos = async () => {
        try {
            const photosData = await API.graphql({ query: queries.listPhotos });
            console.log("PHOTOS: ", photosData)
        } catch (e) {
            console.log("Error: ", e)
        }
    }

    useEffect(() => {
        fetchPhotos()

    }, [])

    return(
        <div id="container" ref={containerRef}>
            <Stage
                width={stageWidth}
                height={stageHeight}
                ref={stageRef}
                container = 'container'
            >
                <Layer>
                    <Image
                        x = {200}
                        y = {50}
                        image = {image}
                        width = {headHeight}
                        height = {headWidth}
                    />
                </Layer>
                
            </Stage>
        </div>
    )
}

export default Canvas;