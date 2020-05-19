import Breadcrumb from 'react-bootstrap/Breadcrumb'

function BreadCrumb (props) {
    return(<>
           <Breadcrumb>
              <Breadcrumb.Item href= "/" >HOME</Breadcrumb.Item>
              { props.link.length == 1 ? <Breadcrumb.Item active href= {`/products/${decodeURIComponent(props.link[0])}`} >
                 {decodeURIComponent(props.link[0]).toUpperCase()}
              </Breadcrumb.Item> : <Breadcrumb.Item active href= {`/products/${decodeURIComponent(props.link[0])}`} >
                 {decodeURIComponent(props.link[0]).toUpperCase()}
              </Breadcrumb.Item> }
              { props.link.length == 2 ? <Breadcrumb.Item active href = {`/products/${decodeURIComponent(props.link[0])}-${decodeURIComponent(props.link[1])}`}>{decodeURIComponent(props.link[1]).toUpperCase()}</Breadcrumb.Item>: 
               <Breadcrumb.Item  href = {`/products/${decodeURIComponent(props.link[0])}-${decodeURIComponent(props.link[1])}`}>{ props.link[1] ? decodeURIComponent(props.link[1]).toUpperCase() : ""}</Breadcrumb.Item>}
              { props.link.length == 3 ? <Breadcrumb.Item active >{decodeURIComponent(props.link[2]).toUpperCase()}</Breadcrumb.Item>: null}
          </Breadcrumb>
          </>)
  }
  export default BreadCrumb;