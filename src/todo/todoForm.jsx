import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
    <div role="form" className="todoForm">

        <Grid cols="12 9 10">
                <input id="description" className="form-control"
                        placeholder="Adicione uma tarefa"/>
        </Grid>
            
        <Grid className="12 3 2">
                <IconButton style="primary" icon="plus"/>
                <button className="btn btn-primary">
                    <i className="fa fa-plus"></i>
                </button>
        </Grid>
        
    </div>
)