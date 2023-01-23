

function generateNode(data) {
    return {
        "text": {
            "name": data["name"],
            "year": "Joined " + data["year"],
        },
        "collapsable": true,
        "children": [],
    };
}


function hiddenNode(data, level) {
    if (level <= 0) {
        return data;
    } else {
        return {
            "text": {},
            "drawLineThrough": true,
            "HTMLclass": "node-hidden",
            "children": [hiddenNode(data, level - 1)]
        };
    }
}


function generateLine(node, fatherID, lineage) {
    if (lineage[fatherID]["sons"].length != 0) {
        lineage[fatherID]["sons"].forEach((sonID) => {
            let sonNode = generateNode(lineage[sonID]);
            let diff = lineage[sonID]["year"] - lineage[fatherID]["year"] - 1;
            if (diff > 0) {
                node["children"].push(hiddenNode(generateLine(sonNode, sonID, lineage), diff));
            } else {
                node["children"].push(generateLine(sonNode, sonID, lineage));
            }
        });
    } else {
        if (lineage[fatherID]["year"] + 1 < new Date().getFullYear()) {
            node["HTMLclass"] = "node-dead"
        }
    }
    return node;
}


function generateChart(lineage, mainLines) {
    let nodes = { "children": [] };
    mainLines.forEach((fatherID) => {
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
    nodeStructure: generateChart(LINES, NEW_LINES)
};

