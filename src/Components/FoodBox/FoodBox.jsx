import React, {useState} from 'react'
import { Card, Col, Button } from 'antd';


function FoodBox(props) {
    return (
      <Col>
        <Card
          title={props.dish.name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={props.dish.image} height={60} alt="food" />
          <p>Calories: {props.dish.calories}</p>
          <p>Servings: {props.dish.servings}</p>
          <p>
            <b>Total Calories: {props.dish.calories * props.dish.servings} </b> kcal
          </p>
          <Button type="primary" onClick={() => props.delete(props.dish.id)}> Delete </Button>
        </Card>
      </Col>
    );
  }

export default FoodBox