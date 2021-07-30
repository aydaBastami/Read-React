const Welcome = () => {
return(
  <h1> Welcome to react world </h1>  
) 
}

const NameSite = (props) => {
    return(
        <div>
<Welcome />
<h2 onClick={props.Handler}>{props.firstName} Bastami </h2>
        </div>
    )
}

export default NameSite;