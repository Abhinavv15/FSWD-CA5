import React, { useState } from 'react'
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({ name: '', ingredients: ''});

  const handleAddorUpdate = () => {
    if (editingIndex !== null) {
      const updated = [...recipes]
      updated[editingIndex]= formData
      setRecipes(updated);
      setEditingIndex(null);
    } else {
      setRecipes([...recipes, formData])
    }
    setFormData({ name: '', ingredients:''})
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setFormData(recipes[index])
  }

  const handleDelete = (index) => {
    setRecipes(recipes.filter((_,i)=> i !== index));
    if(editingIndex == index){
      setFormData({name:'',ingredients:''})
      setEditingIndex(null);
    }
  }

  return (
    <div>
      <h1>Recipe Manager</h1>
      <RecipeForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleAddorUpdate}
        isEditing={editingIndex !== null}
      />
      <RecipeList
        recipes={recipes}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )

}

export default App;