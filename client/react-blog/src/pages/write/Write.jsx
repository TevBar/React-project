import "./write.css"

export default function Write() {
  return (
    <div className = "write ">
        <img className ="writeImg"
        src="https://plus.unsplash.com/premium_photo-1674984909531-7b3ac0035e60?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D" 
        alt="" 
        />
        <form className = " writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className ="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id= " fileInput" style = {{display: "none"}} />
                <input type="text" placeholder="Title" className =" writeInput" autoFocus = {true} />
            </div>
            <div className="writeFormGroup">
                <textarea 
                placeholder = "Let us know how you feel" 
                type =" text" className ="writeInput writeText"></textarea>
            </div>
            <button className ="writeSubmit">Publish</button>
        </form>
    </div>
  )
}

