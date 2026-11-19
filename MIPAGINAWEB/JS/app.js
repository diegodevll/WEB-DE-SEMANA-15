const NOMBRE_PROYECTO = "RIOD GAMES";
const LIMITE_TITULO = 50;
const HORAS_SEMANA = 24 * 7;
let totalEventos = 0;           // let: su valor cambia

function registrarEvento(texto) {
    totalEventos++;
    console.log(`[Evento #${totalEventos}] ${texto}`);
}

function demoVariables() {
    const pi = 3.1416;
    console.group("Demo de variables (F12)");
    console.log("pi:", pi, typeof pi, "| '5' + 3 =", "5" + 3, "| Number('5') + 3 =", Number("5") + 3);
    try {
        pi = 3;
    } catch (error) {
        console.log("Resultado esperado (una const no se reasigna):", error.message);
    }
    console.groupEnd();
}

const ESTADOS = {
    progreso: { texto: "En Progreso", clase: "badge-progreso" },
    completado: { texto: "Completado", clase: "badge-completado" },
    backlog: { texto: "Pendiente (Backlog)", clase: "badge-backlog" },
    abandonado: { texto: "Abandonado", clase: "badge-backlog" }
};
const PLATAFORMAS = {
    steam: { nombre: "Steam", msg: "Se registrará como biblioteca de PC en Steam." },
    epic: { nombre: "Epic Games", msg: "Se registrará como juego de Epic Games Store." },
    playstation: { nombre: "PlayStation", msg: "Se registrará como juego de PlayStation Network." },
    xbox: { nombre: "Xbox", msg: "Se registrará como juego de Xbox Game Pass / Store." },
    nintendo: { nombre: "Nintendo", msg: "Se registrará como juego de Nintendo eShop." },
    fisico: { nombre: "Copia física", msg: "Se registrará como copia física." }
};

const juegos = [
    { id: "cyberpunk-2077", titulo: "Cyberpunk 2077", imagen: "Cyberpunk_2077.png", genero: "RPG / Acción", estado: "progreso", plataformas: ["PC", "PlayStation 5", "Xbox Series X"], desarrollador: "CD Projekt Red", esrb: "M (Mature 17+)" },
    { id: "zelda", titulo: "The Legend of Zelda: Tears of the Kingdom", imagen: "zelda.png", genero: "Aventura / Acción", estado: "completado", plataformas: ["Nintendo Switch"], desarrollador: "Nintendo EPD", esrb: "E10+ (Everyone 10+)" },
    { id: "elden-ring", titulo: "Elden Ring", imagen: "eldenring.png", genero: "Soulslike / RPG", estado: "backlog", plataformas: ["PC", "PlayStation 4/5", "Xbox One/Series X"], desarrollador: "FromSoftware", esrb: "M (Mature 17+)" },
    { id: "god-of-war", titulo: "God of War Ragnarök", imagen: "god of war ragnarok.jpeg", genero: "Acción / Aventura", estado: "completado", plataformas: ["PC", "PlayStation 4", "PlayStation 5"], desarrollador: "Santa Monica Studio", esrb: "M (Mature 17+)" },
    { id: "red-dead-redemption-2", titulo: "Red Dead Redemption 2", imagen: "red dead redemption 2.jpeg", genero: "Mundo Abierto / Acción", estado: "progreso", plataformas: ["PC", "PlayStation 4", "Xbox One"], desarrollador: "Rockstar Games", esrb: "M (Mature 17+)" },
    { id: "hollow-knight", titulo: "Hollow Knight", imagen: "hollow knight.jpeg", genero: "Metroidvania / Indie", estado: "backlog", plataformas: ["PC", "Nintendo Switch", "PS4", "Xbox One"], desarrollador: "Team Cherry", esrb: "E10+ (Everyone 10+)" },
    { id: "ea-sports-fc-24", titulo: "EA SPORTS FC 24", imagen: "ea sport 2024.jpeg", genero: "Deportes / Simulación", estado: "progreso", plataformas: ["PC", "PS4/PS5", "Xbox One/Series X", "Switch"], desarrollador: "EA Vancouver / EA Romania", esrb: "E (Everyone)" },
    { id: "gta-v", titulo: "Grand Theft Auto V", imagen: "gta v.jpeg", genero: "Mundo Abierto / Acción", estado: "completado", plataformas: ["PC", "PlayStation 4/5", "Xbox One/Series X"], desarrollador: "Rockstar North", esrb: "M (Mature 17+)" },
    { id: "minecraft", titulo: "Minecraft", imagen: "micrefat.jpeg", genero: "Sandbox / Supervivencia", estado: "progreso", plataformas: ["PC", "Consolas", "Móviles"], desarrollador: "Mojang Studios", esrb: "E10+ (Everyone 10+)" },
    { id: "resident-evil-4", titulo: "Resident Evil 4 Remake", imagen: "resident 4 remake.jpeg", genero: "Survival Horror / Acción", estado: "backlog", plataformas: ["PC", "PlayStation 4/5", "Xbox Series X"], desarrollador: "Capcom", esrb: "M (Mature 17+)" }
];

const equipo = [
    { nombre: "JANAMPA JAULIS DIEGO", rol: "Arquitectura Web & Coordinación", icono: "🧭", detalle: "Define la estructura de las páginas y coordina el trabajo del equipo." },
    { nombre: "JIMENEZ MORENO SEBASTIAN", rol: "Diseño CSS & Estilos Globales", icono: "🎨", detalle: "Responsable de la hoja de estilos, los colores y las animaciones." },
    { nombre: "LLANQUE VERASTEGUI AYRTON", rol: "Ficha Técnica & Multimedia", icono: "🎬", detalle: "Encargado de las fichas técnicas y de los tráileres integrados." },
    { nombre: "CALDERON HUAMAN ABEL", rol: "Formularios & UI", icono: "🧩", detalle: "Diseña el formulario de registro y los elementos de la interfaz." },
    { nombre: "ITALO ALCEDO ASCA", rol: "QA & Documentación", icono: "✅", detalle: "Revisa el funcionamiento del sitio y documenta el proyecto." }
];
const consejos = [
    "Empieza por los juegos más cortos de tu backlog para sentir avance.",
    "Termina lo que tienes en progreso antes de comprar algo nuevo.",
    "Anota tus impresiones apenas termines un juego: se olvidan rápido.",
    "Revisa la clasificación ESRB antes de comprar un título.",
    "Fija un máximo de horas por semana para jugar sin descuidar tus estudios."
];
const juegosRegistrados = [];   

const $ = (selector) => document.querySelector(selector);
const btnMenu = $("#btnMenu"), menu = $("#menu"), ventana = $("#ventana");
const btnSaludar = $("#btnSaludar"), btnHoras = $("#btnHoras"), btnConsejo = $("#btnConsejo");
const tablaJuegos = $("#tabla-juegos"), cuerpoTabla = $("#cuerpo-tabla"), buscador = $("#buscador");
const filtroEstado = $("#filtro-estado"), btnLimpiarFiltros = $("#btnLimpiarFiltros");
const form = $("#form-registro"), campoTitulo = $("#titulo"), campoPlataforma = $("#plataforma"), campoFecha = $("#fecha");
const campoPrecio = $("#precio"), campoHoras = $("#horas"), campoRating = $("#rating"), campoEstado = $("#estado");
const campoLogros = $("#logros"), grupoLogros = $("#grupo-logros"), btnLimpiar = $("#btnLimpiar");
const btnQuitarUltimo = $("#btnQuitarUltimo"), btnVaciar = $("#btnVaciar");
const listaRegistrados = $("#lista-registrados"), barraProgreso = $("#barra-progreso");

function setTexto(id, valor) {
    const elemento = $("#" + id);
    if (elemento) {
        elemento.textContent = valor;
    }
}

function normalizarEstado(valor) {
    switch (valor) {
        case "jugando": return "progreso";
        case "completado": return "completado";
        case "abandonado": return "abandonado";
        default: return "backlog";
    }
}

function crearInsignia(estado) {
    const insignia = document.createElement("span");
    insignia.classList.add("badge", ESTADOS[estado].clase);
    insignia.textContent = ESTADOS[estado].texto;
    return insignia;
}

function crearListaDatos(pares) {
    const lista = document.createElement("ul");
    for (const [etiqueta, valor] of pares) {
        const item = document.createElement("li");
        const negrita = document.createElement("strong");
        negrita.textContent = etiqueta + ": ";
        item.append(negrita, valor);
        lista.appendChild(item);
    }
    return lista;
}

function abrirVentana(titulo, contenidos, enlaceHref) {
    setTexto("tituloVentana", titulo);
    const cuerpo = $("#cuerpoVentana");
    cuerpo.textContent = "";                 // vacía el contenido anterior
    cuerpo.append(...contenidos);
    const enlace = $("#enlaceVentana");
    if (enlace && enlaceHref) {
        enlace.setAttribute("href", enlaceHref);
    }
    ventana.showModal();
}

function alternarMenu() {
    const abierto = menu.classList.toggle("abierto");          
    btnMenu.setAttribute("aria-expanded", abierto);
    btnMenu.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
    btnMenu.textContent = abierto ? "✕" : "☰";
    registrarEvento("Menú " + (abierto ? "abierto" : "cerrado"));
}

function cerrarMenu() {
    menu.classList.remove("abierto");
    btnMenu.setAttribute("aria-expanded", false);
    btnMenu.setAttribute("aria-label", "Abrir menú");
    btnMenu.textContent = "☰";
}

function cerrarVentana() {
    ventana.close();
}

function cerrarVentanaSiClicFuera(evento) {
    if (evento.target === ventana) {
        ventana.close();
    }
}

if (btnMenu && menu) {
    btnMenu.addEventListener("click", alternarMenu);          
    for (const enlace of menu.querySelectorAll("a")) {        
        enlace.addEventListener("click", cerrarMenu);
    }
}

if (ventana) {
    for (const boton of ventana.querySelectorAll("[data-cerrar]")) {
        boton.addEventListener("click", cerrarVentana);
    }
    ventana.addEventListener("click", cerrarVentanaSiClicFuera);
}

let ultimoConsejo = -1;

function saludar() {
    registrarEvento("Clic en 'Saludar'");
    let nombre = prompt("¿Cómo te llamas?", "Gamer");
    while (nombre !== null && nombre.trim() === "") {          
        nombre = prompt("El nombre no puede estar vacío. ¿Cómo te llamas?");
    }
    if (nombre === null) {                                     // canceló
        alert("No hay problema, puedes presentarte cuando quieras.");
        return;
    }
    const saludo = $("#saludo");
    saludo.textContent = `¡Hola, ${nombre.trim()}! Bienvenido a ${NOMBRE_PROYECTO}.`;
    saludo.classList.add("mensaje-ok");
    if (confirm(`${nombre.trim()}, ¿quieres ver el catálogo ahora?`)) {
        window.location.href = "listado.html";
    }
}

function calcularHoras() {
    registrarEvento("Clic en 'Calcular horas'");
    let entrada = prompt("¿Cuántas horas juegas por semana?");
    if (entrada === null) {
        return;
    }
    let horas = Number(entrada);                               // prompt siempre devuelve texto
    while (entrada.trim() === "" || isNaN(horas) || horas < 0 || horas > HORAS_SEMANA) {
        entrada = prompt(`Dato no válido. Escribe un número entre 0 y ${HORAS_SEMANA}:`);
        if (entrada === null) {
            return;
        }
        horas = Number(entrada);
    }
    let nivel;
    if (horas === 0) {
        nivel = "Hoy descansas de los videojuegos.";
    } else if (horas <= 7) {
        nivel = "Juegas poco: ideal para ponerte al día con el backlog.";
    } else if (horas <= 21) {
        nivel = "Juegas de forma moderada.";
    } else {
        nivel = "Juegas mucho: no olvides descansar.";
    }
    const resultado = $("#resultado-horas");
    resultado.textContent = `${horas} h por semana = ${(horas / 7).toFixed(2)} h por día. ${nivel}`;
    resultado.classList.add("mensaje-ok");
}

function mostrarConsejo() {
    let indice;
    do {
        indice = Math.floor(Math.random() * consejos.length);
    } while (indice === ultimoConsejo);                       
    ultimoConsejo = indice;
    setTexto("consejo-texto", consejos[indice]);
}

if (btnSaludar && btnHoras && btnConsejo) {
    btnSaludar.addEventListener("click", saludar);
    btnHoras.addEventListener("click", calcularHoras);
    btnConsejo.addEventListener("click", mostrarConsejo);
}

function crearCelda(texto) {
    const celda = document.createElement("td");
    celda.textContent = texto;
    return celda;
}

function crearFila(juego) {
    const fila = document.createElement("tr");
    fila.dataset.estado = juego.estado;

    const celdaImagen = document.createElement("td");
    const imagen = document.createElement("img");
    imagen.src = "img/" + juego.imagen;
    imagen.alt = "Carátula de " + juego.titulo;
    imagen.loading = "lazy";
    imagen.classList.add("img-circular");
    celdaImagen.appendChild(imagen);

    const celdaTitulo = document.createElement("th");
    celdaTitulo.scope = "row";
    const negrita = document.createElement("strong");
    negrita.textContent = juego.titulo;
    celdaTitulo.appendChild(negrita);

    const celdaEstado = document.createElement("td");
    celdaEstado.appendChild(crearInsignia(juego.estado));

    const enlace = document.createElement("a");
    enlace.href = "detalle.html#" + juego.id;
    enlace.classList.add("btn-tabla");
    enlace.textContent = "Ver Ficha Técnica";
    const vista = document.createElement("button");
    vista.type = "button";
    vista.classList.add("btn-secondary", "btn-mini");
    vista.textContent = "Vista rápida";
    vista.addEventListener("click", () => verVistaRapida(juego.id));
    const celdaAccion = document.createElement("td");
    celdaAccion.append(enlace, document.createElement("br"), vista);

    fila.append(celdaImagen, celdaTitulo, crearCelda(juego.plataformas.join(", ")),
                crearCelda(juego.genero), celdaEstado, celdaAccion);
    return fila;
}

function generarCatalogo() {
    for (const juego of juegos) {
        cuerpoTabla.appendChild(crearFila(juego));
    }
}

function obtenerFamilia(plataforma) {
    if (plataforma.includes("PlayStation") || plataforma.includes("PS")) {
        return "PlayStation";
    } else if (plataforma.includes("Xbox")) {
        return "Xbox";
    } else if (plataforma.includes("Switch") || plataforma.includes("Nintendo")) {
        return "Nintendo";
    }
    return plataforma === "PC" ? "PC" : "Otras";
}

function actualizarResumen() {
    const cuenta = { progreso: 0, completado: 0, backlog: 0 };    
    const familias = [];                                          
    let mayor = juegos[0];                                         

    for (const juego of juegos) {
        cuenta[juego.estado]++;
        for (const plataforma of juego.plataformas) {
            const familia = obtenerFamilia(plataforma);
            if (!familias.includes(familia)) {
                familias.push(familia);
            }
        }
        if (juego.plataformas.length > mayor.plataformas.length) {
            mayor = juego;
        }
    }

    setTexto("total-juegos", juegos.length);
    setTexto("total-progreso", cuenta.progreso);
    setTexto("total-completado", cuenta.completado);
    setTexto("total-backlog", cuenta.backlog);
    setTexto("porcentaje-completado", Math.round((cuenta.completado / juegos.length) * 100) + "%");
    setTexto("info-plataformas", `Plataformas en el catálogo: ${familias.join(", ")}.`);
    setTexto("info-maximo", `Juego disponible en más plataformas: ${mayor.titulo} (${mayor.plataformas.length}).`);
}

function aplicarFiltros() {
    const texto = buscador.value.trim().toLowerCase();
    const filas = tablaJuegos.querySelectorAll("tbody tr");
    let visibles = 0;

    for (const fila of filas) {
        const coincideTexto = fila.querySelector("th").textContent.toLowerCase().includes(texto);
        const coincideEstado = filtroEstado.value === "todos" || fila.dataset.estado === filtroEstado.value;
        const mostrar = coincideTexto && coincideEstado;
        fila.classList.toggle("oculto", !mostrar);
        if (mostrar) {
            visibles++;
        }
    }
    setTexto("contador-resultados", `Mostrando ${visibles} de ${filas.length} juegos`);
    $("#sin-resultados").classList.toggle("oculto", visibles > 0);
}

function limpiarFiltros() {
    buscador.value = "";
    filtroEstado.value = "todos";
    aplicarFiltros();
}

function verVistaRapida(id) {
    registrarEvento("Vista rápida de: " + id);
    const juego = juegos.find((candidato) => candidato.id === id);
    if (!juego) {
        console.log("Juego no encontrado:", id);
        return;
    }
    abrirVentana(juego.titulo, [
        crearInsignia(juego.estado),
        crearListaDatos([
            ["Género", juego.genero],
            ["Plataformas", juego.plataformas.join(", ")],
            ["Desarrollador", juego.desarrollador],
            ["Clasificación ESRB", juego.esrb]
        ])
    ], "detalle.html#" + juego.id);
}

function iniciarCatalogo() {
    generarCatalogo();
    actualizarResumen();
    aplicarFiltros();
}

if (tablaJuegos && cuerpoTabla && buscador && filtroEstado && btnLimpiarFiltros) {
    document.addEventListener("DOMContentLoaded", iniciarCatalogo);
    buscador.addEventListener("input", aplicarFiltros);
    filtroEstado.addEventListener("change", aplicarFiltros);
    btnLimpiarFiltros.addEventListener("click", limpiarFiltros);
}

function alternarTrailer(boton) {
    const contenedor = $("#" + boton.dataset.video);
    const iframe = contenedor.querySelector("iframe");
    const estabaOculto = contenedor.classList.contains("oculto");

    if (estabaOculto) {
        iframe.src = iframe.dataset.src;           
    } else {
        iframe.dataset.src = iframe.src;           
        iframe.src = "about:blank";                
    }
    contenedor.classList.toggle("oculto", !estabaOculto);
    boton.textContent = estabaOculto ? "Ocultar tráiler" : "Mostrar tráiler";
}

for (const boton of document.querySelectorAll(".btn-trailer")) {
    boton.addEventListener("click", () => alternarTrailer(boton));
}


function revisar(campo, idError, mensaje) {
    campo.classList.toggle("error", mensaje !== "");
    setTexto(idError, mensaje);
    return mensaje === "";
}

function existeTitulo(titulo) {
    const titulos = [];
    for (const juego of [...juegos, ...juegosRegistrados]) {
        titulos.push(juego.titulo.toLowerCase());
    }
    return titulos.includes(titulo.toLowerCase());
}

function validarFormulario() {
    const titulo = campoTitulo.value.trim();
    const horas = parseInt(campoHoras.value, 10);
    const precio = parseFloat(campoPrecio.value);
    let errorTitulo = "";
    let errorFecha = "";

    if (titulo.length < 2 || titulo.length > LIMITE_TITULO) {
        errorTitulo = `El título debe tener entre 2 y ${LIMITE_TITULO} caracteres.`;
    } else if (existeTitulo(titulo)) {
        errorTitulo = "Ese juego ya está en el catálogo o en tu lista.";
    }
    if (campoFecha.value === "") {
        errorFecha = "Elige la fecha de adquisición.";
    } else if (new Date(campoFecha.value) > new Date()) {
        errorFecha = "La fecha no puede ser futura.";
    }

    const resultados = [
        revisar(campoTitulo, "error-titulo", errorTitulo),
        revisar(campoPlataforma, "error-plataforma", campoPlataforma.value === "" ? "Elige una plataforma." : ""),
        revisar(campoFecha, "error-fecha", errorFecha),
        revisar(campoHoras, "error-horas", isNaN(horas) || horas < 0 || horas > 9999 ? "Escribe un número de horas entre 0 y 9999." : ""),
        revisar(campoPrecio, "error-precio", campoPrecio.value !== "" && (isNaN(precio) || precio < 0) ? "El precio debe ser un número mayor o igual a 0." : "")
    ];
    return !resultados.includes(false);
}

function actualizarContadorTitulo() {
    setTexto("contador-titulo", `${campoTitulo.value.length}/${LIMITE_TITULO} caracteres`);
    campoTitulo.classList.remove("error");
}

function validarTituloAlSalir() {
    const largo = campoTitulo.value.trim().length;
    if (largo > 0 && (largo < 2 || largo > LIMITE_TITULO)) {
        revisar(campoTitulo, "error-titulo", `El título debe tener entre 2 y ${LIMITE_TITULO} caracteres.`);
    }
}

function elegirPlataforma() {
    const elegida = PLATAFORMAS[campoPlataforma.value];
    setTexto("msg-plataforma", elegida ? elegida.msg : "");
    revisar(campoPlataforma, "error-plataforma", "");
}

function quitarErrorFecha() {
    revisar(campoFecha, "error-fecha", "");
}

function actualizarRating() {
    const nota = Number(campoRating.value);
    let texto = "Excelente";
    if (nota <= 3) {
        texto = "Mala";
    } else if (nota <= 6) {
        texto = "Regular";
    } else if (nota <= 8) {
        texto = "Buena";
    }
    setTexto("rating-valor", nota);
    setTexto("rating-texto", texto);
}

function calcularCostoPorHora() {
    const precio = parseFloat(campoPrecio.value);
    const horas = parseInt(campoHoras.value, 10);
    let mensaje = "Ingresa el precio y las horas para calcular el costo por hora.";

    if (precio > 0 && horas > 0) {
        const costo = precio / horas;
        mensaje = `Costo por hora: S/ ${costo.toFixed(2)} ` + (costo <= 5 ? "(¡buen valor!)" : "(aún puedes sacarle más provecho)");
    }
    setTexto("msg-costo", mensaje);
}

function cambiarEstado() {
    const completado = campoEstado.value === "completado";
    grupoLogros.classList.toggle("oculto", !completado);
    if (!completado) {
        campoLogros.checked = false;
    }
}

function actualizarEstadisticas() {
    let totalHoras = 0;
    let completados = 0;
    let mejor = null;

    for (const juego of juegosRegistrados) {
        totalHoras += juego.horas;
        if (juego.estado === "completado") {
            completados++;
        }
        if (mejor === null || juego.nota > mejor.nota) {
            mejor = juego;
        }
    }
    const total = juegosRegistrados.length;
    const porcentaje = total > 0 ? Math.round((completados / total) * 100) : 0;

    setTexto("contador-registrados", total);
    setTexto("total-horas", totalHoras);
    setTexto("mejor-juego", mejor === null ? "—" : `${mejor.titulo} (${mejor.nota}/10)`);
    setTexto("total-completados", `${completados} de ${total}`);
    setTexto("porcentaje-progreso", porcentaje + "%");
    barraProgreso.style.width = porcentaje + "%";
    $("#vacio-registrados").classList.toggle("oculto", total > 0);
}

function quitarJuego(juego, li) {
    if (confirm(`¿Quitar "${juego.titulo}" de la lista?`)) {
        juegosRegistrados.splice(juegosRegistrados.indexOf(juego), 1);   
        li.remove();                                                      
        actualizarEstadisticas();
    }
}

function agregarItemRegistrado(juego) {
    const li = document.createElement("li");
    const texto = document.createElement("span");
    texto.textContent = `${juego.titulo} · ${PLATAFORMAS[juego.plataforma].nombre} · ${juego.horas} h · nota ${juego.nota}/10 `;

    const quitar = document.createElement("button");
    quitar.type = "button";
    quitar.classList.add("btn-secondary", "btn-mini");
    quitar.textContent = "Quitar";
    quitar.addEventListener("click", () => quitarJuego(juego, li));

    li.append(texto, crearInsignia(juego.estado), quitar);
    listaRegistrados.appendChild(li);
}

function guardarJuego(evento) {
    evento.preventDefault();                       
    registrarEvento("Envío del formulario de registro");
    setTexto("msg-exito", "");
    if (!validarFormulario()) {
        console.log("Formulario con errores: revisa los mensajes en rojo.");
        return;
    }

    const nuevo = {
        titulo: campoTitulo.value.trim(),
        plataforma: campoPlataforma.value,
        fecha: campoFecha.value,
        horas: parseInt(campoHoras.value, 10),
        nota: Number(campoRating.value),
        estado: normalizarEstado(campoEstado.value),
        logros: campoLogros.checked
    };

    if (nuevo.estado === "backlog" && nuevo.horas > 0 &&
        !confirm("Marcaste el juego como pendiente pero con horas jugadas. ¿Guardarlo así?")) {
        return;
    }
    if (!confirm(`¿Guardar "${nuevo.titulo}" en tu bitácora?`)) {
        return;
    }

    juegosRegistrados.push(nuevo);
    agregarItemRegistrado(nuevo);
    actualizarEstadisticas();
    setTexto("msg-exito", `¡"${nuevo.titulo}" se guardó en tu bitácora!`);
    abrirVentana("¡Juego guardado!", [
        crearInsignia(nuevo.estado),
        crearListaDatos([
            ["Título", nuevo.titulo],
            ["Plataforma", PLATAFORMAS[nuevo.plataforma].nombre],
            ["Fecha de adquisición", nuevo.fecha],
            ["Horas", String(nuevo.horas)],
            ["Calificación", `${nuevo.nota}/10`],
            ["100% de logros", nuevo.logros ? "Sí" : "No"]
        ])
    ]);
    form.reset();
}

function quitarUltimo() {
    setTexto("msg-lista", "");
    if (juegosRegistrados.length === 0) {
        setTexto("msg-lista", "No hay juegos para quitar.");
    } else if (confirm("¿Quitar el último juego registrado?")) {
        juegosRegistrados.pop();                   
        listaRegistrados.lastElementChild.remove();
        actualizarEstadisticas();
    }
}

function vaciarLista() {
    setTexto("msg-lista", "");
    if (juegosRegistrados.length === 0) {
        setTexto("msg-lista", "La lista ya está vacía.");
    } else if (confirm("¿Eliminar todos los juegos registrados en esta sesión?")) {
        juegosRegistrados.length = 0;
        while (listaRegistrados.firstChild) {
            listaRegistrados.firstChild.remove();
        }
        actualizarEstadisticas();
    }
}

function confirmarLimpiar(evento) {
    if (confirm("¿Seguro que quieres limpiar el formulario?")) {
        setTexto("msg-exito", "");
    } else {
        evento.preventDefault();
    }
}

function restaurarVistas() {
    actualizarContadorTitulo();
    setTexto("msg-plataforma", "");
    actualizarRating();
    cambiarEstado();
    calcularCostoPorHora();
    const campos = [campoTitulo, campoPlataforma, campoFecha, campoPrecio, campoHoras];
    const errores = ["error-titulo", "error-plataforma", "error-fecha", "error-precio", "error-horas"];
    for (let i = 0; i < campos.length; i++) {
        revisar(campos[i], errores[i], "");
    }
}

function restaurarVistasDespues() {
    setTimeout(restaurarVistas, 0);
}

if (form) {
    form.addEventListener("submit", guardarJuego);
    form.addEventListener("reset", restaurarVistasDespues);
    campoTitulo.addEventListener("input", actualizarContadorTitulo);
    campoTitulo.addEventListener("blur", validarTituloAlSalir);
    campoPlataforma.addEventListener("change", elegirPlataforma);
    campoFecha.addEventListener("change", quitarErrorFecha);
    campoPrecio.addEventListener("input", calcularCostoPorHora);
    campoHoras.addEventListener("input", calcularCostoPorHora);
    campoRating.addEventListener("input", actualizarRating);
    campoEstado.addEventListener("change", cambiarEstado);
    btnLimpiar.addEventListener("click", confirmarLimpiar);
    btnQuitarUltimo.addEventListener("click", quitarUltimo);
    btnVaciar.addEventListener("click", vaciarLista);

    restaurarVistas();
    actualizarEstadisticas();
}


function verIntegrante(indice) {
    const persona = equipo[indice];
    if (!persona) {
        console.log("No existe el integrante con índice", indice);
        return;
    }
    const icono = document.createElement("p");
    icono.classList.add("card-icon");
    icono.textContent = persona.icono;
    const rol = document.createElement("p");
    rol.classList.add("role-badge");
    rol.textContent = persona.rol;
    const detalle = document.createElement("p");
    detalle.textContent = persona.detalle;
    abrirVentana(persona.nombre, [icono, rol, detalle]);
}

for (const tarjeta of document.querySelectorAll(".team-card")) {
    tarjeta.addEventListener("click", () => verIntegrante(Number(tarjeta.dataset.indice)));
}
setTexto("stat-juegos", juegos.length);
setTexto("stat-integrantes", equipo.length);

function avisarCarga() {
    console.log("La página terminó de cargar (evento load).");
}

console.log(`%c${NOMBRE_PROYECTO}`, "color:#00adb5; font-size:18px; font-weight:bold;");
console.info("Prueba en la consola: escribe  juegos  o  equipo  y presiona Enter.");
demoVariables();
window.addEventListener("load", avisarCarga);
