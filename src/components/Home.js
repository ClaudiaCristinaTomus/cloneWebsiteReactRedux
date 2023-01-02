import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
  return (
    <Container>
        <Section
            title="Model S"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />
        <Section
            title="Model X"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />
        <Section
            title="Model Y"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
            
        />
        <Section
            title="Model S"
            description="Order Online for Touchless Delivery"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />  
          <Section
            title="Model S"
            description="Order Online for Touchless Delivery"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />
          <Section
            title="Model S"
            description="Order Online for Touchless Delivery"
            backgroundImg="accessories.jpg"
            leftBtnText="Custom order"
           
        />
    </Container>
  )
}

export default Home

const Container =styled.div`
    height:100vh;
`