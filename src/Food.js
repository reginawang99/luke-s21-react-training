import { useState } from "react";

function Food(props) {
    const removeFood = () => {
        const foodCopy = [...props.foodList.splice(0, props.index), ...props.foodList.splice(props.index + 1)];
        const likeCopy = [...props.likes.splice(0, props.index), ...props.likes.splice(props.index + 1)];
        props.setFoodList(foodCopy);
        props.setLikes(likeCopy);
    }

    const addLikes = () => {
        var obj = {...props.likes};
        obj[props.index] = 'a';
        props.setLikes({obj});
    }

    return <div>
        <h3>{props.name}</h3>
        <h4 id="likeCount"> Likes: {props.likes[props.index]} </h4>
        <button onClick={addLikes}>Like Me</button>
        <button onClick={removeFood}>Remove Me</button>
    </div>
}
export default Food;