import { generateContractors }
from "./contractor_generator.js";
import { CONTRACTOR_COUNT }
from "./config.js";
let contractors = [];

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
    await typeLine("HELP");
    await typeLine("LIST");
    await typeLine("VIEW <ID>");
    await typeLine("ABOUT");
    await typeLine("CLEAR");
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

async function listContractors(){

    await typeLine("");

    await typeLine("[SYS] Accessing contractor registry...","system");
    await wait(300);
    
    contractors = generateContractors();
    
    await typeLine("[SYS] Verifying personnel status...","system");
    await wait(300);

    await typeLine("[SYS] Cross-checking disciplinary records...","system");
    await wait(300);
    
    await typeLine(`[SYS] ${CONTRACTOR_COUNT} records returned.`,"system");
    await typeLine("");
    await typeLine("");
    await typeLine("ID  CALLSIGN               PROFESSION      WARNING");
    await typeLine("--  ---------------------  --------------  ----------------");
 for(const c of contractors){

    const id         = String(c.id).padStart(2,"0");
    const callsign   = c.callsign.padEnd(21);
    const profession = c.profession.padEnd(14);

    await typeLine(
        `${id}  ${callsign}  ${profession}  ${c.warning}`
    );
}
    
}

function viewContractor(id){

    const c = contractors.find(x=>x.id===id);

    if(!c){

        addLine("Contractor not found.","error");
        return;
    }

    const wrapper = document.createElement("div");

    wrapper.className = "dossier";

wrapper.innerHTML = `
<div class="dossier-header">

    <span class="callsign">${c.callsign}</span>

    <span class="separator">|</span>

    <span class="profession">${c.profession}</span>

    <span class="separator">|</span>

    <span class="warning-tag">${c.warning}</span>

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
            DISCIPLINARY NOTES
        </div>

        <div class="section-content">
            Subject warning flag: ${c.warning}
            <br><br>
            ${c.warningDescription}
        </div>

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

async function execute(command){

    await typeLine(`FG:// ${command}`,"user");

    const parts = command.trim().split(" ");

    const cmd = parts[0].toUpperCase();

    switch(cmd){

        case "HELP":
            await help();
            break;

        case "LIST":
            await listContractors();
            break;

        case "VIEW":
            viewContractor(parseInt(parts[1]));
            break;

        case "ABOUT":
            await about();
            break;

        case "CLEAR":
            output.innerHTML="";
            break;

        default:
            await typeLine("Unknown command.","error");
            await typeLine("Type HELP for command list.","warning");
    }

    scrollBottom();
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
