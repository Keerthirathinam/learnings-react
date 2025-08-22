const root = ReactDOM.createRoot(document.getElementById("root"));

    

{/* <div id="child">
    <div id = "first">
    <h1>Keerthana</h1>
    <h2>Sibling node</h2>
    </div>
     <div id = "second">
    <h1>Second one</h1>
    <h2>second Sibling node</h2>
    </div>
</div> */}

const nestedChilds = React.createElement("div",{id:"child"},
    [React.createElement("div",{id:"first"},
        [React.createElement("h1",{},"First div"), React.createElement("h2",{},"Sibiling node")]), 
        React.createElement("div",{id:"second"},
        [React.createElement("h1",{},"second div"), React.createElement("h2",{},"Second Sibiling node")])
    ])

    root.render(nestedChilds);
