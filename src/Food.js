import { useState } from "react";

function Food(props) {

    const newAddLikes = () => {
        var likeCopy = [...props.likeCount];
        likeCopy[props.index] = likeCopy[props.index] + 1;
        props.setLikeCount(likeCopy);
    }

    return <div class="food-container">
        <h3 class="food-item">{props.name}</h3>
        <h4 id="likeCount" class="food-item"> Likes: {props.likeCount[props.index]} </h4>
        <button class="my-button food-button" onClick={newAddLikes}>Like Me</button>
    </div>
}
export default Food;