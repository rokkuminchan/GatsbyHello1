import React from "react";

import {Title, Subtitle} from './ContentRow.styles'
import StopIcon from '@material-ui/icons/Stop';

function ContentRow (props) {
    const {title, subtitle} = props.item
    
    return (
        <React.Fragment>
            <Title><StopIcon /><p>{title}</p></Title>
            <Subtitle>
                {
                    subtitle.map((item, index)=>{
                        return (
                            <p key = {index}>{item}</p>
                        )
                    })
                }
            </Subtitle>
        </React.Fragment>    
    )
}

  export default ContentRow