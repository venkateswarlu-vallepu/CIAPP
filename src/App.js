
import './App.css';
import Batch from './classes/Batch';
import Education from './classes/Education';
import PersonalDetails from './classes/Personal Details';

function App() {

let BRN = new Batch();
 console.log(`Batch Name : ${BRN.batchName}`);
 console.log(`Batch Code : ${BRN.batchCode}`);


 console.log("#---------------------------------------#");

 let venkatesh = new PersonalDetails();
 console.log(`Full Name : ${venkatesh.fullName}`);
 console.log(`Sur Name : ${venkatesh.surName}`);
 console.log(`Date of Birth : ${venkatesh.DOB}`);
 console.log(`Gender : ${venkatesh.gender}`);
 venkatesh.goals();


 let venkateshAcademics = new Education();
 console.log(`Qualification : ${venkateshAcademics.qualification}`);
 console.log(`Course : ${venkateshAcademics.course}`);
 venkateshAcademics.place();
 venkateshAcademics.grade();








  return (
    <div className="App">
      <h1>Venkatesh</h1>
     <h3>Check in console</h3>
     

    </div>
  );
}

export default App;
