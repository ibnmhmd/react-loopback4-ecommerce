import Form from 'react-bootstrap/Form';
 
 const FormBuilder = (props) => {
    const formData = props.props;
    if("none" == formData.type) {
        return(<NotesComponent note = { formData }/>);
    }else
     if("select" == formData.type){
        return(
            <Form.Group controlId = {formData.controlId}>
                <Form.Label>{formData.label}</Form.Label>
                   <select className = {formData.class} onChange = {formData.change}  inputref = {formData.controlId} data-formdata = {JSON.stringify(formData)}>
                    {formData.options.map( (opt , i)=> {
                        return <option key = {i} value = {opt.key}>{opt.label}</option>
                    } )}
                  </select>         
           </Form.Group>
        );
     }else
    {
    return(
        <Form.Group controlId = {formData.controlId}>
            <Form.Label>{formData.label}</Form.Label>
            <Form.Control onChange = {formData.change} className = {formData.class} inputref= {formData.controlId} data-formdata = {JSON.stringify(formData)} type = {formData.type} placeholder = {formData.placeholder} />        
            <Loader formData = { formData } /> 
       </Form.Group>
    ); }
}



const NotesComponent = (data) => {
    
    return(<Form.Text className= { data.data && data.data.class ? data.data.class : '' }>
             {data.data && data.data.note ? data.data.note : ""}
          </Form.Text>);
}
const Loader = (formData) => {
    
    return(
          <div className="fa-1x">  
           { formData.formData.note ? <NotesComponent data = { formData.formData }/> : null }                        
           { formData.formData.showLoader ? <i className="fas fa-sync fa-spin" style = {{marginLeft : '2rem'}}></i> :null }                     
         </div>
      );
}
export default FormBuilder;