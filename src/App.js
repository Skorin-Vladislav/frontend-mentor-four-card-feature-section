import "./App.css";
import Card from "./components/Card";
import supervisor from "./images/icon-supervisor.svg";
import team_builder from "./images/icon-team-builder.svg";
import karma from "./images/icon-karma.svg";
import calculator from "./images/icon-calculator.svg";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Reliable, efficient delivery</h1>
        <h1>Powered by Technology</h1>
        <p>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
      <Card
        heading="Supervisor"
        subText="Monitors activity to identify project roadblocks"
        imgSrc={supervisor}
        brdrColor="cyan"
      />

      <Card
        heading="Team Builder"
        subText="Scans our talent network to create the optimal team for your project"
        imgSrc={team_builder}
        brdrColor="red"
      />

      <Card
        heading="Karma"
        subText="Regulaly evaluates our talent to ensure quality"
        imgSrc={karma}
        brdrColor="orange"
      />

      <Card
        heading="Calculator"
        subText="Uses data from past projects to provide better delivery estimates"
        imgSrc={calculator}
        brdrColor="blue"
      />
    </div>
  );
}

export default App;
