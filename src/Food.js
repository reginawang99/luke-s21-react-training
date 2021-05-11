function Food(props) {

    const newAddLikes = () => {
        var likeCopy = [...props.likeCount];
        likeCopy[props.index] = likeCopy[props.index] + 1;
        props.setLikeCount(likeCopy);
    }

    const removeFood = () => {    
        const foodCopy = [...props.foodList.splice(0, props.index), ...props.foodList.splice(props.index + 1)];
        if (props.index === foodCopy.length) {
            props.setCurrIndex(0);
        }
        props.setFoodList(foodCopy);

        const likeCopy = [...props.likeCount.splice(0, props.index), ...props.likeCount.splice(props.index + 1)];
        props.setLikeCount(likeCopy);
    }

    const nextFood = () => {
        if (props.index < props.foodList.length - 1) {
            props.setCurrIndex(props.index + 1);
        } else {
            props.setCurrIndex(0);
        }
    }

    return <div className="food-container">
        <h3 className="food-item">{props.name}</h3>
        <h4 id="likeCount" className="food-item"> Likes: {props.likeCount[props.index]} </h4>

        {props.isSingleView &&
            <div>
                <button className="my-button food-button" onClick={newAddLikes}>Like Me</button>
                <button className="my-button food-button" onClick={nextFood}> Pass Me </button>
            </div>
        }

        {!props.isSingleView &&
            <div>
                <button className="my-button food-button" onClick={newAddLikes}>Like Me</button>
            </div>
        }

        <button className="my-button food-button" onClick={removeFood}>Remove Me</button>
    </div>
}
export default Food;