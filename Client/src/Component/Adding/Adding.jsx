import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import styled from "styled-components";
import { SimpleDropdown } from "react-js-dropdavn";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Typography } from "@mui/material";
import Row from "react-bootstrap/Row";

// import { FormControl } from "@material-ui/core";

// import "../Adding/Adding.css";
function Adding() {
  const [project, setProject] = useState("");
  const [list, setList] = useState([]);
  // console.log("project : " + project);
  // console.log("listing : " + list);

  const handleChange = (e) => {
    setProject(e.target.value);
  };
  return (
    <>
      <div className="projectInput">
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Project</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={project}
              label="project"
              onChange={handleChange}
            >
              <MenuItem index={1} value={"project1"}>
                project1
              </MenuItem>
              <MenuItem index={2} value={"project2"}>
                project2
              </MenuItem>
              <MenuItem index={3} value={"project3"}>
                project3
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <div className="projectCounter">
          <ProCounter>0:00</ProCounter>
        </div>
      </div>
      <div className="margin20px">
        <button onClick={() => setList([...list, project])}>Add Row</button>
      </div>

      <div>
        {list.map((item, index) => {
          
          return (
            <Row className="projectInput" style={{ marginTop: "100px" }}>
              <Box sx={{ minWidth: 120 }} key={index}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Project</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={item}
                    label="project"
                    onChange={handleChange}
                  >
                    <MenuItem index={1} value={"project1"}>
                      project1
                    </MenuItem>
                    <MenuItem index={2} value={"project2"}>
                      project2
                    </MenuItem>
                    <MenuItem index={3} value={"project3"}>
                      project3
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <div className="projectCounter">
                <ProCounter>0:00</ProCounter>
              </div>
            </Row>
          );
        })}
      </div>
    </>
  );
}

export default Adding;

const ProCounter = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #505558;
  padding-top: 13px;
  padding-left: 29px;
`;

// function Adding() {
//   const [project, setProject] = useState("");
//   const [list, setList] = useState([]);
//   console.log("project : " + project);
//   console.log("listing : " + list);

//   const handleChange = (e) => {
//     setProject(e.target.value);
//   };
//   return (
//     <>
//       <div className="projectInput">
//         <Box sx={{ minWidth: 120 }}>
//           <FormControl fullWidth>
//             <InputLabel id="demo-simple-select-label">Project</InputLabel>
//             <Select
//               labelId="demo-simple-select-label"
//               id="demo-simple-select"
//               value={project}
//               label="project"
//               onChange={handleChange}
//             >
//               <MenuItem value={"project1"}>project1</MenuItem>
//               <MenuItem value={"project2"}>project2</MenuItem>
//               <MenuItem value={"project3"}>project3</MenuItem>
//             </Select>
//           </FormControl>
//         </Box>

//         <div className="margin20px">
//           <button onClick={() => setList([...list, project])}>Add Row</button>
//         </div>
//         {list.map((item, index) => {
//           console.log(item);
//           return (
//             <div className="projectInput" key={index}>
//               <Box sx={{ minWidth: 120 }}>
//                 <FormControl fullWidth>
//                   <InputLabel id="demo-simple-select-label">Age</InputLabel>
//                   <Select
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     value={item}
//                     label="project"
//                     onChange={handleChange}
//                   >
//                     <MenuItem value={"project1"}>project1</MenuItem>
//                     <MenuItem value={"project2"}>project2</MenuItem>
//                     <MenuItem value={"project3"}>project3</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Box>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// function Adding() {
//   const [project, setProject] = useState("");
//   const [list, setList] = useState([]);
//   console.log("project : " + project);
//   console.log("listing : " + list);

//   const handleChange = (e, index) => {
//     const newList = [...list];
//     newList[index] = e.target.value;
//     setList(newList);
//   };

//   const addRow = () => {
//     setList([...list, ""]);
//   };

//   return (
//     <>
//       <div className="projectInput">
//         <Box sx={{ minWidth: 120 }}>
//           <FormControl fullWidth>
//             <InputLabel id="demo-simple-select-label">Project</InputLabel>
//             <Select
//               labelId="demo-simple-select-label"
//               id="demo-simple-select"
//               value={project}
//               label="project"
//               onChange={(e) => setProject(e.target.value)}
//             >
//               <MenuItem value={"project1"}>project1</MenuItem>
//               <MenuItem value={"project2"}>project2</MenuItem>
//               <MenuItem value={"project3"}>project3</MenuItem>
//             </Select>
//           </FormControl>
//         </Box>

//         <div className="margin20px">
//           <button onClick={addRow}>Add Row</button>
//         </div>

//         {list.map((item, index) => {
//           console.log(item);
//           return (
//             <div className="projectInput" key={index}>
//               <Box sx={{ minWidth: 120 }}>
//                 <FormControl fullWidth>
//                   <InputLabel id={`demo-simple-select-label-${index}`}>
//                     Project
//                   </InputLabel>
//                   <Select
//                     labelId={`demo-simple-select-label-${index}`}
//                     id={`demo-simple-select-${index}`}
//                     value={item}
//                     label="project"
//                     onChange={(e) => handleChange(e, index)}
//                   >
//                     <MenuItem value={"project1"}>project1</MenuItem>
//                     <MenuItem value={"project2"}>project2</MenuItem>
//                     <MenuItem value={"project3"}>project3</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Box>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }
