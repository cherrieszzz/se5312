import React from 'react';

class addNew extends React.Component {
    state = {}
    render() {
        return ( 
            <form>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Example label</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" /> 
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Another label</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" />
                </div>
                <button className='btn btn-primary'>添加</button>
            </form>
        );
    }
}

export default addNew;