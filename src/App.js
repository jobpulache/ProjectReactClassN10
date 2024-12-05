import Baseball from "./components/T02Baseball"
import Car from "./components/T01Car"
import Football from "./components/T02Football"
import Garage from "./components/T01Garage"
import Garden from "./components/T03Garden"
import Goal from "./components/T03Goal"
import Kitchen from "./components/T04Kitchen"
import Library from "./components/T05Library"
import MyForm from "./components/T06MyForm"
import MyFormManyFields from "./components/T07MyFormManyFields"
import MyFormSelect from "./components/T08MyFormSelect"
import MyFormTextArea from "./components/T08MyFormTextArea"
import Timer from "./components/T09Timer"
import Counter from "./components/T10Counter"
import ShowData from "./components/T11ShowData"
import ShowDataCharacters from "./components/T11ShowDataCharacters"
import ShowDataInTable from "./components/T12ShowDataInTable"
import ShowDataInCards from "./components/T12ShowDataInCards"
import T13useContext from "./components/T13useContext"
import T14useRef1 from "./components/T14useRef1.jsx"
import T14useRef2 from "./components/T14useRef2.jsx"
import T14useRef3 from "./components/T14useRef3.jsx"
import T15useReducer1 from "./components/T15useReducer1.jsx"
import T15useReducer2 from "./components/T15useReducer2.jsx"
import T16useCallbackIndex from "./components/T16useCallbackIndex.jsx"
import T17useMemo from "./components/T17useMemo.jsx"
import T18customHooksIndex from "./components/T18customHooksIndex.jsx"

import v_genres from "./data/someData";

function App() {
  const my_cookware = ['Cutting board','Can opener','Measuring spoons'];

  return (
    <div className="container">
      <h1>Tutorial de React</h1>

      <h2 style={{backgroundColor:'lightBlue'}}>1. Props</h2>
      <Car colorCarro="purple" marcaCarro="Toyota" />
      <Garage tamanioGarage="big" />

      <h2 style={{backgroundColor:'lightBlue'}}>2. Props with events (functions)</h2>
      <Football />
      <Baseball />

      <h2 style={{backgroundColor:'lightBlue'}}>3. Props with booleans</h2>
      <Goal esGol={NaN}/>
      <Garden arboles={null}/>

      <h2 style={{backgroundColor:'lightBlue'}}>4. Props with arrays</h2> 
      <Kitchen utensilios={my_cookware} />

      <h2 style={{backgroundColor:'lightBlue'}}>5. Props with "Javascript objects"</h2>
      <Library genres={v_genres} />

      <h2 style={{backgroundColor:'lightBlue'}}>6. useState</h2>
      <MyForm />

      <h2 style={{backgroundColor:'lightBlue'}}>7. useState with "Javascript objects"</h2>
      <MyFormManyFields />

      <h2 style={{backgroundColor:'lightBlue'}}>8. useState with other form elements</h2>
      <MyFormSelect />
      <MyFormTextArea />

      <h2 style={{backgroundColor:'plum'}}>9. useEffect: on initial render</h2>
      <Timer></Timer>

      <h2 style={{backgroundColor:'plum'}}>10. useEffect: dependent on a variable</h2>
      <Counter></Counter>

      <h2 style={{backgroundColor:'plum'}}>11. useEffect: api calling</h2>
      {/*<ShowData></ShowData>*/}
      {/*<ShowDataCharacters></ShowDataCharacters>*/}

      <h2 style={{backgroundColor:'plum'}}>12. Rendering API data</h2>
      {/*<ShowDataInCards></ShowDataInCards>*/}
      {/*<ShowDataInTable></ShowDataInTable>*/}

      <h2 style={{backgroundColor:'plum'}}>13. useContext </h2>
      <T13useContext></T13useContext>

      <h2 style={{backgroundColor:'plum'}}>14. useRef </h2>
      <T14useRef1></T14useRef1>
      <T14useRef2></T14useRef2><br></br>
      <T14useRef3></T14useRef3>

      <h2 style={{backgroundColor:'plum'}}>15. useReducer </h2>
      <T15useReducer1></T15useReducer1>
      <T15useReducer2></T15useReducer2>

      <h2 style={{backgroundColor:'plum'}}>16. useCallback </h2>
      <T16useCallbackIndex></T16useCallbackIndex>

      <h2 style={{backgroundColor:'plum'}}>17. useMemo </h2>
      <T17useMemo></T17useMemo>

      <h2 style={{backgroundColor:'plum'}}>18. Custom Hooks </h2>
      <T18customHooksIndex></T18customHooksIndex>
    </div>
  );
}

export default App;