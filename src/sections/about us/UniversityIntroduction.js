import React from "react";
import {Wrapper, Title, Description} from "./UniversityIntroduction.styles"

const UniversityIntroduction = (props) => {
    const {subtitle, description} = props.data.introduction
    console.log(subtitle);
    return (
        <Wrapper>
            <Title><h1>{subtitle}</h1></Title>
            <Description>
                {
                    description.map((item, index) => {
                        return <p key = {index}>{item}</p>
                    })
                }
            </Description>
        </Wrapper>
    )
}
export default UniversityIntroduction