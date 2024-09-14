
function handleForm(event){
    // When we will submit our form then given staement will be printed on console for some milli seconds and then our console page will be refreshed and all the data present and console will be empty now.This is due default action associated with formSubmit so to prevent this default action of event we can get this event as an argument and then write a method event.preventDefault and this will make our code free from this type of functionality of event.
    event.preventDefault();
    console.log("Form has been submitted succefully");
}
export default function Event(){

    return(
        <>
            <form onSubmit={handleForm}>
                <input type="text" placeholder="Enter you text here" />
                <button>Submit</button>
        
            </form>
        </>
    );
} 