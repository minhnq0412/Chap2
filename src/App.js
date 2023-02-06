import { initial } from "lodash";
import { useState } from "react";
import "./App.css";
import DropdownV2 from "./Components/advanced-react/inversion-of-control/DropdownV2";
import { Dropdown } from "./Components/advanced-react/inversion-of-control/index";

const options = [
  { title: "Frontend" },
  { title: "Backend" },
  { title: "Fullstack" },
];

function App() {
  const [job, setJob] = useState();
  const [filter, setFilter] = useState();
  const handleSelectJob = (newJob) => setJob(newJob);
  return (
    <div>
      <DropdownV2
        placeholder={`${job || "Enter your Job"}`}
        onClick={handleSelectJob}
        onChange={(e) => setFilter(e.target.value)}
      >
        <DropdownV2.Search></DropdownV2.Search>
        <div className="options border border-gray-300 rounded">
          {options.map((o) => (
            <DropdownV2.Option key={o.title} val={o.title}>
              <span>{o.title}</span>
              <DropdownV2.IconCheck></DropdownV2.IconCheck>
            </DropdownV2.Option>
          ))}
        </div>
      </DropdownV2>
    </div>
  );
}

export default App;
