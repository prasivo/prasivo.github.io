const prasivoData = {
    "hap-unit1-cell": {
        title: "The Human Cell",
        layers: {
            pass: `
                <div class="layer-badge">PASS LAYER: Exam Essential</div>
                <p>Cell hamari body ki sabse chhoti aur main unit hai. Exam ke liye ye teen cheezein ratt lo:</p>
                <ul>
                    <li><b>Plasma Membrane:</b> Cell ka outer cover (Security Guard).</li>
                    <li><b>Nucleus:</b> Cell ka brain (CEO).</li>
                    <li><b>Mitochondria:</b> Powerhouse (Energy/ATP factory).</li>
                </ul>
                [attachment_0](attachment)
            `,
            power: `
                <div class="layer-badge" style="background:var(--primary)">POWER LAYER: Concept Mastery</div>
                <p><b>Logic:</b> Socho agar hamari body ek factory hai, toh Cell us factory ka ek department hai. Mitochondria ATP (currency) banata hai taaki kaam chalta rahe.</p>
                <p><b>WH Question:</b> Cell ko 'Structural Unit' kyun kehte hain? Kyunki jaise ek-ek eent (brick) se diwar banti hai, waise hi ek-ek cell se hamari body ka har organ banta hai.</p>
                
            `,
            elevation: `
                <div class="layer-badge" style="background:#8b5cf6">ELEVATION: GPAT & Future</div>
                <p><b>Edge Case:</b> Apoptosis yaani 'Programmed Cell Death'. Jab cell budha ho jata hai, toh wo khud ko khatam kar leta hai. Agar aisa na ho, toh wahi cell <b>Cancer</b> ban sakta hai.</p>
            `
        },
        examMode: {
            imp2: ["Define Cell", "What is Homeostasis?", "Function of Ribosomes"],
            imp5: ["Explain Mitochondria with diagram", "Fluid Mosaic Model"],
            imp10: ["Structure and Functions of Cell Organelles in Detail"],
            mistakes: "Diagram hamesha pencil se banayein. Pen se banaya toh marks katenge!",
            expectation: "Examiner dhyan deta hai ki aapne ATP ka naam aur diagram ki labelling sahi ki hai ya nahi."
        }
    }
};
