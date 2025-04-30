
function RecipeForm({onSubmit, formData, setFormData, isEditing}){
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({ ...prev, [name]:value}));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
            />
            <input 
                type="text"
                name="ingredients"
                placeholder="Ingredients"
                value={formData.ingredients}
                onChange={handleChange}
            />
            <button type="submit">{isEditing ? 'Update': 'Add'} Recipe</button>
        </form>
    )
}


export default RecipeForm