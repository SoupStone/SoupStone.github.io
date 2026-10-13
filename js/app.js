import { generateContractors }
from "./contractor_generator.js";
import { CONTRACTOR_COUNT }
from "./config.js";
let contractors = [];
let currentContractor = null;

const output = document.getElementById("output");
const input = document.getElementById("command");
const cursor = document.querySelector(".block-cursor");

const history = [];
let historyIndex = -1;

function moveCursor(){

    cursor.style.left =
        Math.max(4, input.value.length * 13) + "px";
}

input.addEventListener("input", moveCursor);

function addLine(text="", cls=""){

    const div = document.createElement("div");

    div.className = `line ${cls}`;
    div.textContent = text;
    
    output.appendChild(div);

    scrollBottom();
    
    return div;
}

async function typeLine(text = "", cls = "") {

    const div = document.createElement("div");

    div.className = `line ${cls}`;

    output.appendChild(div);

    for (let i = 0; i < text.length; i++) {

        div.textContent += text[i];

        await wait(8);
    }

    scrollBottom();

    return div;
}

function scrollBottom(){

    window.scrollTo({
        top:document.body.scrollHeight,
        behavior:"smooth"
    });
}

function wait(ms){

    return new Promise(resolve=>setTimeout(resolve,ms));
}

async function boot(){

    await typeLine("[SYS] Secure link established.","system");
    await typeLine("[SYS] Contractor registry available.","system");
    await typeLine("[SYS] Type HELP for command list.","system");
    await typeLine("");
}

async function help(){

    await typeLine("");

    await typeLine("AVAILABLE COMMANDS","system");
    await typeLine("");
    await typeLine("HELP - see this again");
    await typeLine("SEARCH - generate a list of contractors");
    await typeLine("LIST - display your list of contractors");
    await typeLine("VIEW <ID> - view a spesific contractors details");
    await typeLine("SAVE - save currently viewed contractor as a text file");
    await typeLine("ABOUT - Display a short message from Franko-Grace");
    await typeLine("CLEAR - Wipe the screen");
    await typeLine("");
}

async function about(){

    await typeLine("");

    await typeLine("FRANKO-GRACE SECURITY SOLUTIONS","system");

    await typeLine("Flexible contractor acquisition");
    await typeLine("for hostile environments.");
    await typeLine("Franco-Grace has been supplying expert personel to the front line of the STROM gate since XXXX ");
    await typeLine("");
}

async function searchContractors(){

    await typeLine("");

    await typeLine("[SYS] Accessing contractor registry...","system");
    await wait(300);

    contractors = generateContractors();

    await typeLine("[SYS] Verifying personnel status...","system");
    await wait(300);

    await typeLine("[SYS] Cross-checking disciplinary records...","system");
    await wait(300);

    await typeLine(`[SYS] ${CONTRACTOR_COUNT} records returned.`,"system");

    await displayContractors();
}

async function displayContractors(){

    if(contractors.length === 0){

        await typeLine("[SYS] No contractor registry loaded.","warning");
        await typeLine("[SYS] Run SEARCH first.","warning");
        return;
    }

    await typeLine("");
    await typeLine("");

    await typeLine("ID  CALLSIGN               PROFESSION      EDGE");
    await typeLine("--  ---------------------  --------------  ----------------");

    for(const c of contractors){

        const id         = String(c.id).padStart(2,"0");
        const callsign   = c.callsign.padEnd(21);
        const profession = c.profession.padEnd(14);

        await typeLine(
            `${id}  ${callsign}  ${profession}  ${c.edge}`
        );
    }
}
    


function buildStatsTable(stats, skills) {
    const grades = {
        "-1": "-",
        "0": "D",
        "1": "C",
        "2": "B",
        "3": "A"
    };

    const skillValue = value =>
        value === undefined || value === null
            ? "-"
            : grades[value] ?? "-";

    const statGrade = value =>
        grades[value] ?? "-";

    const row = (a, b, c) =>
        `${a.padEnd(24)}| ${b.padEnd(24)}| ${c.padEnd(24)}`;

    const skillsRows = [
        ["TRADE", "WILLPOWER", "SCIENCE"],
        ["DRIVE", "XENOTECH", "ENGINEERING"],
        ["INSTINCT", "SHADOW", "BUREAUCRACY"],
        ["PHYSIQUE", "SURVIVAL", "ENCYCLOPAEDIA"],
        ["ELECTRONICS", "VOIDCRAFT", "MEDICARE"]
    ];

    const skillTable = skillsRows
        .map(([a, b, c]) =>
            row(
                `${a} ${skillValue(skills[a.toLowerCase()])}`,
                `${b} ${skillValue(skills[b.toLowerCase()])}`,
                `${c} ${skillValue(skills[c.toLowerCase()])}`
            )
        )
        .join("\n");

    const equipmentSkills = [
        ["GUNS", skills.guns],
        ["CQC", skills.cqc],
        ["EXPLOSIVES", skills.explosives],
        ["TOUGHNESS", skills.toughness]
    ];

    const equipmentRow = equipmentSkills
        .map(([name, value]) =>
            `${name} ${skillValue(value)}`
        )
        .join("  |  ");

    return `
<pre class="stat-block">
MAJOR STATS
${"=".repeat(80)}
${equipmentRow}

CHARACTER SKILLS
${"=".repeat(80)}
${row(
    `OPERATIONS (${statGrade(stats.operations)})`,
    `ADAPTATION (${statGrade(stats.adaptation)})`,
    `EXPERTISE (${statGrade(stats.expertise)})`
)}
${"-".repeat(80)}
${skillTable}
</pre>`;
}


function viewContractor(id){

    const c = contractors.find(x=>x.id===id);

    if(!c){

        addLine("Contractor not found.","error");
        return;
    }
    currentContractor = c;
    const wrapper = document.createElement("div");

    wrapper.className = "dossier";

wrapper.innerHTML = `
<div class="dossier-header">

    <span class="callsign">${c.callsign}</span>

    <span class="separator">|</span>

    <span class="profession">${c.profession}</span>

    <span class="separator">|</span>

    <span class="edge-tag">${c.edge}</span>

</div>

<div class="dossier-body">

    <div class="dossier-text">

        <div class="section-title">
            BACKGROUND
        </div>

        <div class="section-content">
            ${c.bio}
        </div>

        <div class="section-title">
            NOTES
        </div>

        <div class="section-content">
            Subject edge flag: ${c.edge}
            <br><br>
            ${c.edgeDescription}
        </div>
    ${buildStatsTable(c.stats, c.skills)}
    </div>

    <div class="portrait">

    <img
        src="${c.portrait}"
        alt="${c.callsign}"
    >
    </div>

</div>
`;
    output.appendChild(wrapper);
    addLine("");
}


async function execute(command) {
    await typeLine(`FG:// ${command}`, "user");

    const parts = command.trim().split(/\s+/);
    const cmd = parts[0].toUpperCase();

    switch (cmd) {
        case "HELP":
            await help();
            break;

        case "SEARCH":
            await searchContractors();
            break;

        case "LIST":
            await displayContractors();
            break;

        case "VIEW": {
            if (!parts[1]) {
                await typeLine("Usage: VIEW <ID>", "warning");
                break;
            }

            const id = Number(parts[1]);

            if (!Number.isInteger(id)) {
                await typeLine("Invalid contractor ID.", "error");
                break;
            }

            viewContractor(id);
            break;
        }

        case "SAVE":
            saveContractor(currentContractor);
            break;

        case "ABOUT":
            await about();
            break;

        case "CLEAR":
            output.innerHTML = "";
            break;

        default:
            await typeLine("Unknown command.", "error");
            await typeLine("Type HELP for command list.", "warning");
    }

    scrollBottom();
}

function saveContractor(c) {
  if (!c) {
    addLine("Use VIEW <ID> first.", "error");
    return;
  }

  const grade = value => ({
    "-1": "-",
    "0": "D",
    "1": "C",
    "2": "B",
    "3": "A"
  })[value] ?? value ?? "-";

  const skill = name => grade(c.skills[name] ?? -1);

  const row = (a, b, d) =>
    `${a.padEnd(24)} | ${b.padEnd(24)} | ${d}`;

  const text = `
FRANKO-GRACE CONTRACTOR DOSSIER
================================================================================

CALLSIGN: ${c.callsign}
PROFESSION: ${c.profession}
EDGE: ${c.edge}

BACKGROUND
--------------------------------------------------------------------------------
${c.bio}

NOTES
--------------------------------------------------------------------------------
${c.edgeDescription}

MAJOR STATS
================================================================================
GUNS: ${skill("guns")}  |  CQC: ${skill("cqc")}  |  EXPLOSIVES: ${skill("explosives")}  |  TOUGHNESS: ${skill("toughness")}

CHARACTER SKILLS
================================================================================
${row("OPERATIONS (" + grade(c.stats.operations) + ")", "ADAPTATION (" + grade(c.stats.adaptation) + ")", "EXPERTISE (" + grade(c.stats.expertise) + ")")}
${"-".repeat(80)}
${row("TRADE: " + skill("trade"), "WILLPOWER: " + skill("willpower"), "SCIENCE: " + skill("science"))}
${row("DRIVE: " + skill("drive"), "XENOTECH: " + skill("xenotech"), "ENGINEERING: " + skill("engineering"))}
${row("INSTINCT: " + skill("instinct"), "SHADOW: " + skill("shadow"), "BUREAUCRACY: " + skill("bureaucracy"))}
${row("PHYSIQUE: " + skill("physique"), "SURVIVAL: " + skill("survival"), "ENCYCLOPAEDIA: " + skill("encyclopaedia"))}
${row("ELECTRONICS: " + skill("electronics"), "VOIDCRAFT: " + skill("voidcraft"), "MEDICARE: " + skill("medicare"))}


================================================================================
FRANKO-GRACE INTERNAL PERSONNEL RECORD
`;

  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = `${c.callsign}.txt`;

  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(url);
}


input.addEventListener("keydown", async e=>{

    if(e.key==="Enter"){

        const cmd = input.value.trim();

        if(!cmd) return;

        history.push(cmd);
        historyIndex = history.length;

        input.value="";
        moveCursor();

        await execute(cmd);
    }

    if(e.key==="ArrowUp"){

        e.preventDefault();

        if(historyIndex>0){

            historyIndex--;

            input.value = history[historyIndex];
            moveCursor();
        }
    }

    if(e.key==="ArrowDown"){

        e.preventDefault();

        if(historyIndex < history.length-1){

            historyIndex++;

            input.value = history[historyIndex];
        }
        else{

            historyIndex = history.length;
            input.value = "";
        }

        moveCursor();
    }
});

const spinnerFrames = ["|","/","-","\\"];
let frame = 0;

setInterval(()=>{

    frame++;
    
    const spin = spinnerFrames[frame % spinnerFrames.length];

    document.getElementById("spinner1").textContent = spin;
    document.getElementById("spinner2").textContent = spin;

},150);

boot();
