const canvas = document.getElementById('bannerCanvas');
const ctx = canvas.getContext('2d');

// Input refs
const nameInput = document.getElementById('nameInput');
const titleInput = document.getElementById('titleInput');
const stackInput = document.getElementById('stackInput');
const fontSelect = document.getElementById('fontSelect');
const accentColorInput = document.getElementById('accentColor');
const textColorInput = document.getElementById('textColor');
const downloadBtn = document.getElementById('downloadBtn');
const styleBtns = document.querySelectorAll('.style-btn');

// State
let currentStyle = 'modern';
const defaultData = {
    name: "Dante Rodríguez",
    title: "Técnico Programador",
    stack: ".NET • PYTHON • UNITY2D"
};

// --- Drawing Logic ---

function drawBanner() {
    // Clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const name = nameInput.value.trim() || defaultData.name;
    const title = titleInput.value.trim() || defaultData.title;
    const stack = stackInput.value.trim() || defaultData.stack;
    const accent = accentColorInput.value;
    const textCol = textColorInput.value;
    const font = fontSelect.value;

    // Draw Background based on Style
    drawBackground(currentStyle, accent);

    // Draw Geometric Shapes
    if (currentStyle === 'modern') {
        drawModernShapes(accent);
    } else if (currentStyle === 'terminal') {
        drawTerminalShapes(accent);
    } else if (currentStyle === 'abstract') {
        drawAbstractShapes(accent);
    } else if (currentStyle === 'geometric') {
        drawGeometricShapes(accent);
    } else if (currentStyle === 'cyberpunk') {
        drawCyberpunkShapes(accent);
    } else if (currentStyle === 'brutalist') {
        drawBrutalistShapes(accent);
    } else if (currentStyle === 'retro') {
        drawRetroShapes(accent);
    } else if (currentStyle === 'corporate') {
        drawCorporateShapes(accent);
    } else if (currentStyle === 'glass') {
        drawGlassShapes(accent);
    }
    // 'minimal' has no extra shapes

    // Draw Text
    drawTextContent(name, title, stack, textCol, font, accent);
}


function drawBackground(style, accent) {
    let gradient;
    switch (style) {
        case 'modern':
            // High-end tech gradient (Dark Purple to Blue)
            gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
            gradient.addColorStop(0, '#1e1b4b'); // Indigo 950
            gradient.addColorStop(1, '#4c1d95'); // Violet 900
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            break;
        case 'minimal':
            // Solid clean light or slight off-white
            ctx.fillStyle = '#f8fafc';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            // Minimal needs a border usually or it blends too much
            ctx.strokeStyle = '#e2e8f0';
            ctx.lineWidth = 2;
            ctx.strokeRect(0, 0, canvas.width, canvas.height);
            break;
        case 'terminal':
            // Hacker green/black
            ctx.fillStyle = '#0f172a'; // Slate 900
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            break;
        case 'abstract':
            // Complex multi-stop gradient
            gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, '#be185d'); // Pink 700
            gradient.addColorStop(1, '#0f172a'); // Slate 900
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            break;
        case 'geometric':
            // Dark elegant background
            ctx.fillStyle = '#111827'; // Gray 900
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            break;
        case 'cyberpunk':
            // Deep black/blue
            ctx.fillStyle = '#050505';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            break;
        case 'brutalist':
            // Paper-like off-white or raw concrete
            ctx.fillStyle = '#f0f0f0';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            break;
        case 'retro':
            // Sunset Gradient
            gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, '#2e0249'); // Deep Purple
            gradient.addColorStop(0.5, '#a91079'); // Magenta
            gradient.addColorStop(1, '#ffc700'); // Sunset Yellow
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            break;
        case 'corporate':
            // Professional Blue/Grey
            ctx.fillStyle = '#f3f4f6'; // Light grey bg
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            // Add a side bar
            ctx.fillStyle = '#1e3a8a'; // Dark Blue sidebar
            ctx.fillRect(0, 0, 100, canvas.height);
            break;
        case 'glass':
            // Colorful mesh gradient background
            gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, '#f472b6'); // Pink
            gradient.addColorStop(1, '#60a5fa'); // Blue
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            break;
    }
}

function drawModernShapes(accent) {
    // Left side large geometric "Cube" wireframe idea from user image
    ctx.save();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 15;
    ctx.lineJoin = 'round';

    // Fake 3D Cube Hexagon
    const cx = 300, cy = 200, size = 150;

    // Hexagon outline
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6;
        const x = cx + size * Math.cos(angle);
        const y = cy + size * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();

    // Inner Y shape for cube effect
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx, cy - size);

    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + size * Math.cos(Math.PI / 6), cy + size * Math.sin(Math.PI / 6));

    ctx.moveTo(cx, cy);
    ctx.lineTo(cx - size * Math.cos(Math.PI / 6), cy + size * Math.sin(Math.PI / 6));
    ctx.stroke();

    // Subtle accent glow on the right
    const glow = ctx.createRadialGradient(1400, 100, 0, 1400, 100, 200);
    glow.addColorStop(0, accent + '40'); // Transparent accent
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow;
    ctx.fillRect(800, 0, 784, 396);

    ctx.restore();
}

function drawTerminalShapes(accent) {
    ctx.fillStyle = 'rgba(0, 255, 0, 0.05)';
    ctx.font = '20px monospace';
    // Binary rain effect simplified
    for (let i = 0; i < 40; i++) {
        ctx.fillText('1 0 1 0 0 1', Math.random() * 800, Math.random() * 300 + 50);
    }

    // Command prompt symbol
    ctx.fillStyle = accent;
    ctx.font = 'bold 200px monospace';
    ctx.fillText('>', 100, 280);
}

function drawAbstractShapes(accent) {
    // Circles
    ctx.fillStyle = accent + '30'; // semi transparent
    ctx.beginPath();
    ctx.arc(200, 396, 300, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffffff10';
    ctx.beginPath();
    ctx.arc(1400, 0, 200, 0, Math.PI * 2);
    ctx.fill();
}

function drawGeometricShapes(accent) {
    ctx.save();
    ctx.globalAlpha = 0.1;
    ctx.strokeStyle = accent;
    ctx.lineWidth = 2;

    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height - (i * 50));
        ctx.lineTo(canvas.width, (i * 100));
        ctx.stroke();
    }
    
    // Some triangles
    ctx.fillStyle = accent;
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(200, 300);
    ctx.lineTo(300, 100);
    ctx.fill();

    ctx.restore();
}

function drawCyberpunkShapes(accent) {
    ctx.save();
    
    // Grid floor
    ctx.strokeStyle = '#0ff'; // Cyan
    ctx.lineWidth = 1;
    ctx.beginPath();
    for(let i=0; i<canvas.width; i+=40) {
        ctx.moveTo(i, 300);
        ctx.lineTo(i - 200, 400); // perspective
    }
    for(let i=300; i<400; i+=20) {
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
    }
    ctx.stroke();

    // Glitch text effect decoration
    ctx.fillStyle = '#ff00ff';
    ctx.fillRect(50, 50, 20, 100);
    ctx.fillStyle = '#00ffff';
    ctx.fillRect(60, 60, 20, 100);
    
    ctx.restore();
}

function drawBrutalistShapes(accent) {
    ctx.save();
    // Harsh black borders
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 8;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

    // Hard solid shadow box
    ctx.fillStyle = '#000000';
    ctx.fillRect(100, 100, 200, 200);
    ctx.fillStyle = accent; 
    ctx.fillRect(80, 80, 200, 200); // Offset
    ctx.strokeRect(80, 80, 200, 200); // Border for box

    ctx.restore();
}

function drawRetroShapes(accent) {
    ctx.save();
    
    // Sun
    const sunGradient = ctx.createLinearGradient(0, 100, 0, 300);
    sunGradient.addColorStop(0, '#ffcc00');
    sunGradient.addColorStop(1, '#ff6600');
    ctx.fillStyle = sunGradient;
    ctx.beginPath();
    ctx.arc(300, 300, 150, 0, Math.PI*2);
    ctx.fill();

    // Scanlines over sun
    ctx.fillStyle = '#2e0249'; // Background color lines
    for(let i=150; i<450; i+=10) {
        ctx.fillRect(150, i, 300, 2);
    }
    
    ctx.restore();
}

function drawCorporateShapes(accent) {
    ctx.save();
    
    // Diagonal clean cut
    ctx.fillStyle = accent; 
    ctx.beginPath();
    ctx.moveTo(400, 0);
    ctx.lineTo(600, 0);
    ctx.lineTo(500, canvas.height);
    ctx.lineTo(300, canvas.height);
    ctx.fill();

    // Second faint line
    ctx.fillStyle = accent + '40'; 
    ctx.beginPath();
    ctx.moveTo(600, 0);
    ctx.lineTo(800, 0);
    ctx.lineTo(700, canvas.height);
    ctx.lineTo(500, canvas.height);
    ctx.fill();
    
    ctx.restore();
}

function drawGlassShapes(accent) {
    ctx.save();
    
    // Glass Card
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = 1;
    
    // Rounded rect manually or use roundRect if supported (recent browsers)
    // Fallback: regular rect
    const x=100, y=50, w=400, h=300;
    ctx.fillRect(x,y,w,h);
    ctx.strokeRect(x,y,w,h);
    
    // Shine
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+w, y);
    ctx.lineTo(x+w - 100, y+h);
    ctx.lineTo(x-100, y+h);
    ctx.fill();

    ctx.restore();
}


function drawTextContent(name, title, stack, color, font, accent) {
    // Special handling for Minimal theme (needs dark text usually)
    let finalColor = color;
    if (currentStyle === 'minimal' && color === '#ffffff') {
        finalColor = '#1e293b'; // Auto-fix text color for light bg
    }

    ctx.textAlign = 'right';

    // 1. NAME
    ctx.fillStyle = finalColor;
    ctx.font = `bold 80px ${font}, sans-serif`;
    ctx.fillText(name, 1500, 180);

    // 2. TITLE
    // Uses opacity for hierarchy or accent color? let's stick to white/base but smaller
    ctx.font = `400 40px ${font}, sans-serif`;
    // If minimal, keep dark, otherwise slight transparency
    ctx.fillStyle = currentStyle === 'minimal' ? finalColor : finalColor + 'dd';
    ctx.fillText(title, 1500, 250);

    // 3. STACK (Pill or styled text)
    if (stack) {
        ctx.font = `600 24px ${font}, sans-serif`;
        const textWidth = ctx.measureText(stack).width;
        const pillX = 1500 - textWidth / 2; // Center relative to text end... wait, we are right aligned.
        // Let's just draw text for now, maybe with a accent underline

        ctx.fillStyle = accent;
        ctx.fillText(stack.toUpperCase(), 1500, 310);

        // Optional decoration line
        ctx.beginPath();
        ctx.strokeStyle = accent;
        ctx.lineWidth = 3;
        ctx.moveTo(1500, 325);
        ctx.lineTo(1500 - 100, 325); // Small underscore
        ctx.stroke();
    }
}


// --- Events ---
const inputs = [nameInput, titleInput, stackInput, accentColorInput, textColorInput];
inputs.forEach(el => el.addEventListener('input', drawBanner));
fontSelect.addEventListener('change', drawBanner);

// Style Switching
styleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Remove active class from all
        styleBtns.forEach(b => b.classList.remove('active'));
        // Add to clicked
        e.target.classList.add('active');
        // Update state
        currentStyle = e.target.dataset.style;
        // Redraw
        drawBanner();
    });
});

// Download
downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'LinkBanner-AI.png';
    link.href = canvas.toDataURL();
    link.click();
});

// Init
document.fonts.ready.then(() => drawBanner());
