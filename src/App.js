import React from "react";
import ReactDOM from 'react-dom';

const branch=(props)=>{
  return(
   <div>
      {props.title}
   </div>
  )
  }
const department=(props)=>{
return(
 <div>
    {props.name}
 </div>
)}

const withhead =Rapedcomponent=>(props)=>{
return(
  <div>
    
      <h2>{props.children}</h2>
      <Rapedcomponent {...props} />
    </div>
)
}

const HeadingDepartment = withhead(department);
const Second=withhead(branch)

const App= ()=>{
  return(
    <div>
    <HeadingDepartment name='engneer'>departent</HeadingDepartment>
    <Second title='helow'>branch</Second>
    </div>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'))

export default App