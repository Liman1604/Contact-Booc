import AddContakt from "./components/AddContakt";
import AddContaktList from "./components/AddContaktList";
import {useState} from "react";
import EditModel from "./components/EditModel";

function App() {
    const [allCont,setAllCont] = useState([])
    let [modal, setModal] = useState(false);
    let [editTodo, setEditTodo] = useState({});
    function newContact(data){
         setAllCont([...allCont,data])
    }
function deleteCont(id){
        let arr=[...allCont]
        arr=arr.filter((item)=>{
           return  item.id!==id
        })
    setAllCont(arr)
}

    function editContact(index) {
        setModal(true);
        setEditTodo(allCont[index]); // передал все данные в edit
    }

    function handleSaveContact(newContact) {
        let newArr = allCont.map((item) => {
            if (item.id === newContact.id) {
                return newContact;
            } else return item;
        });
        setAllCont(newArr);
        console.log(newArr, newContact)
        handleCloseModal();
    }


    function handleCloseModal() {
        setModal(false);
    }

  return (
      <>
          <div className="App">

              <div className="container">
                  {
                  modal ? (<EditModel
                      setEditTodo={setEditTodo}
                      allContacts={allCont}
                      editTodo={editTodo}
                      handleSave={handleSaveContact}/>): null
              }
                  <AddContakt newContact={newContact}/>
                  <AddContaktList newCont={allCont} deleteCont={deleteCont} editContact={editContact} handleCloseModal={handleCloseModal}
                  />


              </div>
          </div>
      </>

  );
}

export default App;
