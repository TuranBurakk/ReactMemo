import {memo} from 'react'


function AddTodo({submitHandle, todo, onChange}) {
  console.log('AddTodo rendering')  
  
  return(
        <form onSubmit={submitHandle}>
        <input
          type="text"
          value={todo}
          onChange={onChange}
        />
        <button disabled={!todo} type="submit">Ekle</button>
      </form>
    )
    
}

export default memo(AddTodo)