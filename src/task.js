import { type } from "@testing-library/user-event/dist/type";

function Task({data}){
    return(
        <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{data.title}</h5>
            <h6 className="card-price text-center">${data.month}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              {
                data.features.map((list)=>{
                  return <li className={list.boju ? "": "text-muted"}>
                    <span className="fa-li">
                  <i className={list.icontype}>
                  </i></span>{list.name}
                  </li>
                })
              }
            
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    

    )
}

export default Task;