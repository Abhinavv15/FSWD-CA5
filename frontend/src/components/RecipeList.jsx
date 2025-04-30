function RecipeList({ recipes, onEdit, onDelete}) {
    return (
        <ul>
            {recipes.map((recipe, index) => (
                <li key={index}>
                    <strong>{recipe.name}</strong> - {recipe.ingredients}
                    <button onClick={() => onEdit(index)}>Edit</button>
                    <button onClick={() => onDelete(index)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default RecipeList