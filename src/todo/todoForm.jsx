import React from 'react'
import Grid from '../template/grid'
import Icon from '../template/iconButton'
import iconButton from '../template/iconButton'

export default props => (
    <div role='form' className='todoForm'>

        <Grid cols='12 9 10'>
            <input id='description' className='form-control'
                placeholder='Adiocione uma tarefa'
                onChange={props.handleChange}
                value={props.description}></input>
        </Grid>

        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus'
                onClick={props.handleAdd} />
            <IconButton style='info' icon='search'
                 onChange={props.handleSearch} />  
        </Grid> 
    </div>
)
