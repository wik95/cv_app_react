import "./App.css";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

import save from "./assets/save.svg";
import github from "./assets/github.svg";
import idcard from "./assets/idcard.svg";
import workpic from "./assets/work.svg";
import skillpic from "./assets/skills.svg";
import edupic from "./assets/education.svg";
import contactpic from "./assets/contact.svg";
import cat from "./assets/cat.jpg";
import trash from "./assets/trash.svg";

import PersonalData from "./components/PersonalData";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

import { useState } from "react";

function App() {
  const [data, setData] = useState({
    firstName: "" || "Casper",
    lastName: "" || "the Cat",
    titleName: "" || "Professional Mouse Catcher",
    text:
      "" ||
      "From the moment I saw a mouse, I knew I was hooked into the world of mice catching. But mice catching is not 'just a job' for me, it's offered an engaging challenge to continually learn and improve my skills in protecting my home. It became a full-fledged passion that only gets more exciting with time. Below you'll find more information about my skills and education.",
    position: "" || "Senior Mouse Catcher",
    company: "" || "My new home",
    startDate: "" || "04.04.2022",
    endDate: "" || "current date",
    text2:
      "" ||
      "The moment I arrived at my new family's house, I decided to repay them by being the best guardian they could have ever wished for. I patrol the house daily, and since I've arrived here, I've managed to completely rid their house of mice. ",
    position2: "" || "Junior Mouse Catcher",
    company2: "" || "Animal Shelter",
    startDate2: "" || "01.03.2021",
    endDate2: "" || "04.04.2022",
    text3:
      "" ||
      "It all started when one day I noticed a mouse skirting across my enclosure. I decided to give chase immediately. Needless to say, the hunt was a huge success. I earned a delicious lunch, the title of 'mouse hunter' among my friends and discovered my new passion.",
    school: "" || "University of Catnip",
    degree: "" || "Master's Degree",
    adress: "" || "Warsaw, Poland",
    email: "" || "casperthecat@gmail.com",
    phoneNumber: "" || "123-456-789",
    portfolio: "" || "lookatthemiceicaught.com",
  });
  function handleSubmit(e) {
    e.preventDefault();
  }
  const [file, setFile] = useState();
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const [formValues, setFormValues] = useState([{}]);
  let handleValues = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
    console.log(formValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, {}]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };
  function removeDef() {
    const element = document.getElementById("defaultImg");
    element.remove();
    const element1 = document.getElementById("sk1");
    element1.remove();
    const element2 = document.getElementById("sk2");
    element2.remove();
    const element3 = document.getElementById("sk3");
    element3.remove();
  }
  function handleFill() {
    console.log("clicked");
    setData("");
    removeDef();
  }
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Your CV",
    onAfterPrint: () => console.log("Printed PDF successfully!"),
  });

  return (
    <div className="app">
      <div>
        {/* HEADER */}
        <div className="head">
          <div className="upper">
            <h1>CV Maker</h1>
            <div>
              <button onClick={handlePrint}>
                <img className="svg" src={save} alt="save" />
                Save
              </button>
              <button id="clear" onClick={handleFill}>
                <img className="svg" src={trash} alt="trash" />
                Clear Example
              </button>
            </div>
          </div>
          <div className="lower">
            Created by
            <div className="creator">
              <a href="https://github.com/wik95">
                <img className="svg" src={github} alt="" />
                wik95
              </a>
            </div>
          </div>
        </div>
        {/* PERSONAL DATA */}
        <div className="personal">
          <h2 className="title">
            <img className="idcard" src={idcard} alt="idcard" /> Personal Data
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="nameholder">
              <input
                onChange={(e) =>
                  setData({ ...data, firstName: e.target.value })
                }
                type="text"
                placeholder="First Name"
                maxLength="15"
                autoComplete="off"
                value={data.firstName ?? ""}
              ></input>
              <input
                onChange={(e) => setData({ ...data, lastName: e.target.value })}
                type="text"
                placeholder="Last Name"
                maxLength="15"
                autoComplete="off"
                value={data.lastName ?? ""}
              ></input>
            </div>
            <label htmlFor="file">Choose Image</label>
            <input
              id="file"
              type="file"
              onChange={handleChange}
              placeholder="Upload Image"
            />
            <input
              onChange={(e) => setData({ ...data, titleName: e.target.value })}
              type="text"
              placeholder="Job Title"
              maxLength="26"
              autoComplete="off"
              value={data.titleName ?? ""}
            ></input>
            <textarea
              onChange={(e) => setData({ ...data, text: e.target.value })}
              placeholder="Write something about yourself..."
              maxLength="520"
              autoComplete="off"
              value={data.text ?? ""}
            ></textarea>
          </form>
        </div>
        {/* WORK EXPERIENCE */}
        <div className="work">
          {/* WORK EXPERIENCE 1 */}
          <h2 className="title">
            <img className="workpic" src={workpic} alt="workpic" />
            Work Experience 1
          </h2>
          <form>
            <input
              onChange={(e) => setData({ ...data, position: e.target.value })}
              type="text"
              placeholder="Position"
              maxLength="50"
              autoComplete="off"
              value={data.position ?? ""}
            ></input>
            <input
              onChange={(e) => setData({ ...data, company: e.target.value })}
              type="text"
              placeholder="Company"
              maxLength="15"
              autoComplete="off"
              value={data.company ?? ""}
            ></input>
            <input
              onChange={(e) => setData({ ...data, startDate: e.target.value })}
              type="text"
              placeholder="Start date of employment"
              maxLength="26"
              autoComplete="off"
              value={data.startDate ?? ""}
            ></input>
            <input
              onChange={(e) => setData({ ...data, endDate: e.target.value })}
              type="text"
              placeholder="End date of employment"
              maxLength="26"
              autoComplete="off"
              value={data.endDate ?? ""}
            ></input>
            <textarea
              onChange={(e) => setData({ ...data, text2: e.target.value })}
              placeholder="Let us know what your main responsibilities were at the company..."
              maxLength="300"
              autoComplete="off"
              value={data.text2 ?? ""}
            ></textarea>
          </form>
          {/* WORK EXPERIENCE 2*/}
          <h2 className="title">
            <img className="workpic" src={workpic} alt="workpic" />
            Work Experience 2
          </h2>
          <form>
            <input
              onChange={(e) => setData({ ...data, position2: e.target.value })}
              type="text"
              placeholder="Position"
              maxLength="50"
              autoComplete="off"
              value={data.position2 ?? ""}
            ></input>
            <input
              onChange={(e) => setData({ ...data, company2: e.target.value })}
              type="text"
              placeholder="Company"
              maxLength="15"
              autoComplete="off"
              value={data.company2 ?? ""}
            ></input>
            <input
              onChange={(e) => setData({ ...data, startDate2: e.target.value })}
              type="text"
              placeholder="Start date of employment"
              maxLength="26"
              autoComplete="off"
              value={data.startDate2 ?? ""}
            ></input>
            <input
              onChange={(e) => setData({ ...data, endDate2: e.target.value })}
              type="text"
              placeholder="End date of employment"
              maxLength="26"
              autoComplete="off"
              value={data.endDate2 ?? ""}
            ></input>
            <textarea
              onChange={(e) => setData({ ...data, text3: e.target.value })}
              placeholder="Let us know what your main responsibilities were at the company..."
              maxLength="300"
              autoComplete="off"
              value={data.text3 ?? ""}
            ></textarea>
          </form>
        </div>
        {/* SKILLS */}
        <div className="skills">
          <h2 className="title">
            <img className="skillpic" id="sp" src={skillpic} alt="skills pic" />
            Skills
          </h2>
          <form>
            {formValues.map((element, index) => (
              <div className="form-inline" key={index}>
                <input
                  type="text"
                  name="name"
                  placeholder="Skill or language..."
                  value={element.name || ""}
                  onChange={(e) => handleValues(index, e)}
                />
                {index ? (
                  <button
                    type="button"
                    id="removeButton"
                    onClick={() => removeFormFields(index)}
                  >
                    <img className="svg" src={trash} alt="trash" />
                  </button>
                ) : null}
              </div>
            ))}
          </form>
          <div className="button-section">
            <button
              className="button add"
              type="button"
              onClick={() => addFormFields()}
            >
              Add
            </button>
          </div>
        </div>
        {/* EDUCATION */}
        <div className="education">
          <h2 className="title">
            <img className="edupic" src={edupic} alt="education pic" />{" "}
            Education
          </h2>
          <form>
            <input
              onChange={(e) => setData({ ...data, school: e.target.value })}
              type="text"
              placeholder="School"
              maxLength="50"
              autoComplete="off"
              value={data.school ?? ""}
            ></input>
            <input
              onChange={(e) => setData({ ...data, degree: e.target.value })}
              type="text"
              placeholder="Degree"
              maxLength="50"
              autoComplete="off"
              value={data.degree ?? ""}
            ></input>
          </form>
        </div>
        {/* CONTACT */}
        <div className="contact">
          <h2 className="title">
            <img className="contactpic" src={contactpic} alt="contact pic" />
            Contact
          </h2>
          <form>
            <input
              onChange={(e) => setData({ ...data, adress: e.target.value })}
              type="text"
              placeholder="Adress"
              maxLength="30"
              autoComplete="off"
              value={data.adress ?? ""}
            ></input>
            <div className="secondrow">
              <input
                onChange={(e) => setData({ ...data, email: e.target.value })}
                type="text"
                placeholder="Email"
                maxLength="30"
                autoComplete="off"
                value={data.email ?? ""}
              ></input>
              <input
                onChange={(e) =>
                  setData({ ...data, phoneNumber: e.target.value })
                }
                type="text"
                placeholder="Phone number"
                maxLength="20"
                autoComplete="off"
                value={data.phoneNumber ?? ""}
              ></input>
            </div>
            <input
              onChange={(e) => setData({ ...data, portfolio: e.target.value })}
              type="text"
              placeholder="Link to portfolio"
              maxLength="50"
              autoComplete="off"
              value={data.portfolio ?? ""}
            ></input>
          </form>
        </div>
      </div>
      {/* CV PREVIEW */}
      <div className="preview" ref={componentRef}>
        <div className="outline">
          <div className="topRow">
            <PersonalData data={data} file={file} cat={cat} />
          </div>
          <div className="middleRow">
            <WorkExperience data={data} />
          </div>
          <div className="bottomRow">
            <Education data={data} />
            <Skills formValues={formValues} />
          </div>
          <div className="contactRow">
            <Contact data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
