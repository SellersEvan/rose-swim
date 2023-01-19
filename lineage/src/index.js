

function generateNode(data) {
    return {
        "text": {
            "name": data["name"],
            "year": (data["year"].length != 0) ? data["year"].join("-") : "N/A",
        },
        "children": [],
    };
}


function generateLine(node, fatherID, lineage) {
    if (lineage[fatherID]["sons"].length != 0) {
        lineage[fatherID]["sons"].forEach((sonID) => {
            let sonNode = generateNode(lineage[sonID]);
            node["children"].push(generateLine(sonNode, sonID, lineage));
        });
    }
    return node;
}


function generateChart(lineage) {
    let nodes = { "children": [] };
    NEW_LINES.forEach((fatherID) => {
        let fatherNode = generateNode(lineage[fatherID]);
        nodes["children"].push(generateLine(fatherNode, fatherID, lineage));
    });
    return nodes;
};



const CONFIG = {
    chart: {
        container: "#LineageChart",
        rootOrientation:  "NORTH",
        hideRootNode: true,
        siblingSeparation: 40,
        subTeeSeparation: 30,
        connectors: {
            "type": "curve",
            "style": {
                "stroke": "#EF1897",
                "stroke-width": "2"
            }
        },
    },
    nodeStructure: generateChart(DATA)
};

