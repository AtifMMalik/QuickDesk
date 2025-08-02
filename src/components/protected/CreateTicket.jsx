import Header from "../Header"
import "./style.css";

const CreateTicket = () => {
  return (
    <>
        <Header/>

        <div className="createTicketContainer">
            <form action="">
                <h1>Create ticket.</h1>

                <input type="text" name="title" id="" placeholder="Complaint Title" />
                <textarea name="" id="" >
                    Complaint Description...
                </textarea>
                <input type="text" name="tags" id="" placeholder="Tags;" />

                <input type="file" />

                <button type="submit">Submit</button>
            </form>
        </div>
    </>
  )
}

export default CreateTicket