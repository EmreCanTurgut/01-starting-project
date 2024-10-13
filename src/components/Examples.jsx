import { EXAMPLES } from "../data-with-examples";
import { useState } from "react";
import TabButton from "./TabButton";

export default function Examples(){
    
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(SelectedButton) {
    setSelectedTopic(SelectedButton);
    console.log(selectedTopic);
  }
  //
  console.log(selectedTopic);
    return(

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic==="components"} onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic==="jsx"} onSelect={handleSelect.bind(this, "jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==="props"} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic==="state"} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {!selectedTopic ? (
            <p>please select a topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>

    );
}