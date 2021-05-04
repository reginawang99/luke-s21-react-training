import { useState } from "react";

function Food(props) {
    const removeFood = () => {
        const foodCopy = [...props.foodList.splice(0, props.index), ...props.foodList.splice(props.index + 1)];
        props.setFoodList(foodCopy);
    }

    const [likes, setLikes] = useState(0);

    const addLikes = () => {
        setLikes(likes + 1);
    }

    return <div>
        <h3>{props.name}</h3>
        <h4 id="likeCount"> Likes: {likes} </h4>
        <button onClick={addLikes}>Like Me</button>
        <button onClick={removeFood}>Remove Me</button>
    </div>
}
export default Food;