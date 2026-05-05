const menuSections = [
  {
    id: "desayuno",
    category: "Desayuno",
    shortLabel: "Desayuno",
    items: [
      {
        id: "desayuno-tradicional",
        title: "Desayuno tradicional",
        price: "6,50 €",
        description: "Café o té/infusión + zumo + tostada a elegir: aceite, mermelada, tomate, mantequilla o bollería.",
        image: "assets/desayuno-tradicional.png"
      },
      {
        id: "desayuno-supreme",
        title: "Desayuno Supreme",
        price: "9,00 €",
        description: "Café o té/infusión + zumo + tostada a elegir: tostada de jamón con tomate, salmón y aguacate, o atún con tomate.",
        note: "Hasta las 12:00 h.",
        image: "assets/desayuno-supreme.png"
      }
    ]
  },
  {
    id: "picar",
    category: "Aperitivo y picar",
    shortLabel: "Picar",
    items: [
      {
        id: "frutos-secos",
        title: "Frutos secos",
        price: "2,00 €",
        description: "Aperitivo clásico para acompañar la bebida.",
        image: "assets/tarta.png"
      },
      {
        id: "papas",
        title: "Papas",
        price: "2,50 €",
        description: "Patatas chips crujientes.",
        image: "assets/pasta.png"
      },
      {
        id: "aceitunas",
        title: "Aceitunas",
        price: "3,00 €",
        description: "Aceitunas servidas como aperitivo.",
        image: "assets/ensalada.png"
      },
      {
        id: "edamame",
        title: "Edamame",
        price: "4,00 €",
        description: "Vainas de soja al vapor, ligeras y sabrosas.",
        image: "assets/ensalada.png"
      },
      {
        id: "barqueta-mini-fuets",
        title: "Barqueta de mini fuets",
        price: "6,00 €",
        description: "Mini fuets servidos en barqueta.",
        image: "assets/bruschetta.png"
      },
      {
        id: "papas-mejillones",
        title: "Papas con mejillones",
        price: "9,00 €",
        description: "Papas acompañadas de mejillones.",
        image: "assets/salmon.png"
      },
      {
        id: "papas-boquerones",
        title: "Papas con boquerones",
        price: "9,00 €",
        description: "Papas acompañadas de boquerones.",
        image: "assets/salmon.png"
      },
      {
        id: "papas-limon-berberechos",
        title: "Papas fresquitas con limón y berberechos",
        price: "12,00 €",
        description: "Papas con toque fresco de limón y berberechos.",
        image: "assets/salmon.png"
      }
    ]
  },
  {
    id: "tapas",
    category: "Tapas",
    shortLabel: "Tapas",
    items: [
      {
        id: "pulpo-pimenton",
        title: "Pulpo al pimentón",
        price: "9,00 €",
        description: "Pulpo con pimentón, servido al estilo tradicional.",
        image: "assets/pulpo-al-pimenton.png"
      },
      {
        id: "ajo-arriero",
        title: "Ajo arriero",
        price: "8,00 €",
        description: "Tapa tradicional de ajo arriero.",
        image: "assets/ajo-arriero.png"
      },
      {
        id: "nachos-verano",
        title: "Nachos de verano",
        price: "10,00 €",
        description: "Nachos con crema agria, guacamole y salsa mexicana.",
        image: "assets/nachos-verano.png"
      },
      {
        id: "nachos-tartar-atun",
        title: "Nachos con tartar de atún",
        price: "12,00 €",
        description: "Nachos con tartar de atún, alga wakame y salsa tártara.",
        image: "assets/nachos-tartar-atun.png"
      },
      {
        id: "tabla-jamon-iberico-duroc",
        title: "Tabla jamón ibérico duroc",
        price: "13,00 €",
        description: "Tabla de jamón ibérico duroc.",
        image: "assets/tabla-jamon-iberico-duroc.png"
      },
      {
        id: "tabla-quesos-valencianos",
        title: "Tabla quesos valencianos",
        price: "12,00 €",
        description: "Selección de quesos valencianos.",
        image: "assets/tabla-quesos.png"
      },
      {
        id: "tortilla-jamon",
        title: "Tortilla con jamón",
        price: "10,00 €",
        description: "Tortilla acompañada de jamón.",
        image: "assets/tortilla-jamon.png"
      },
      {
        id: "mejillones-vapor-limon",
        title: "Mejillones al vapor con limón",
        price: "12,00 €",
        description: "Mejillones al vapor con un toque de limón.",
        image: "assets/salmon.png"
      },
      {
        id: "servicio-pan",
        title: "Servicio de pan",
        price: "2,00 €",
        description: "Pan para acompañar.",
        image: "assets/bruschetta.png"
      },
      {
        id: "servicio-picos-pan-adicional",
        title: "Servicio de picos y pan adicional",
        price: "2,00 €",
        description: "Picos y pan extra.",
        image: "assets/bruschetta.png"
      },
      {
        id: "salsa-adicional",
        title: "Salsa adicional",
        price: "2,00 €",
        description: "Salsa extra a elección del cliente.",
        image: "assets/ensalada.png"
      }
    ]
  },
  {
    id: "bocadillos",
    category: "Bocadillos",
    shortLabel: "Bocatas",
    items: [
      {
        id: "bocadillo-escalivada",
        title: "Bocadillo escalivada",
        price: "11,00 €",
        description: "Bocadillo de escalivada.",
        image: "assets/bruschetta.png"
      },
      {
        id: "magro-tomate",
        title: "Magro con tomate",
        price: "11,00 €",
        description: "Bocadillo de magro con tomate.",
        image: "assets/bruschetta.png"
      },
      {
        id: "lomo-ajos-tiernos",
        title: "Lomo con ajos tiernos",
        price: "11,00 €",
        description: "Bocadillo de lomo con ajos tiernos.",
        image: "assets/bruschetta.png"
      }
    ]
  },
  {
    id: "pizzas",
    category: "Pizzas",
    shortLabel: "Pizzas",
    items: [
      {
        id: "margarita",
        title: "Margarita",
        price: "14,00 €",
        description: "Pizza clásica con tomate, mozzarella y albahaca.",
        image: "assets/pasta.png"
      },
      {
        id: "tartufata",
        title: "Tartufata",
        price: "14,00 €",
        description: "Pizza con crema o toque de trufa.",
        image: "assets/pasta.png"
      },
      {
        id: "jamon-queso",
        title: "Jamón y queso",
        price: "14,00 €",
        description: "Pizza de jamón y queso.",
        image: "assets/pasta.png"
      },
      {
        id: "cuatro-quesos",
        title: "4 quesos",
        price: "14,00 €",
        description: "Pizza con mezcla de cuatro quesos.",
        image: "assets/pasta.png"
      },
      {
        id: "peperoni",
        title: "Peperoni",
        price: "14,00 €",
        description: "Pizza con peperoni.",
        image: "assets/pasta.png"
      },
      {
        id: "canibal",
        title: "Caníbal",
        price: "14,00 €",
        description: "Pizza intensa con ingredientes cárnicos.",
        image: "assets/pasta.png"
      }
    ]
  },
  {
    id: "platos",
    category: "Platos preparados",
    shortLabel: "Platos",
    items: [
      {
        id: "ensalada-boniato",
        title: "Ensalada boniato",
        price: "10,00 €",
        description: "Ensalada con boniato.",
        image: "assets/ensalada.png"
      },
      {
        id: "pollo-asado-patatas",
        title: "Pollo asado con patatas",
        price: "10,00 €",
        description: "Pollo asado acompañado de patatas.",
        image: "assets/risotto.png"
      },
      {
        id: "costillas-barbacoa",
        title: "Costillas a la barbacoa",
        price: "12,00 €",
        description: "Costillas con salsa barbacoa.",
        image: "assets/risotto.png"
      },
      {
        id: "salmon-teriyaki",
        title: "Salmón Teriyaki",
        price: "10,00 €",
        description: "Salmón con salsa teriyaki.",
        image: "assets/salmon.png"
      },
      {
        id: "pollo-curry",
        title: "Pollo al curry",
        price: "10,00 €",
        description: "Pollo cocinado con salsa curry.",
        image: "assets/risotto.png"
      },
      {
        id: "macarrones-bolonesa",
        title: "Macarrones Boloñesa",
        price: "10,00 €",
        description: "Macarrones con salsa boloñesa.",
        image: "assets/pasta.png"
      },
      {
        id: "paella-valenciana",
        title: "Paella Valenciana",
        price: "10,00 €",
        description: "Paella valenciana tradicional.",
        image: "assets/risotto.png"
      }
    ]
  }
];

const topTabs = document.querySelector("#topTabs");
const bottomTabs = document.querySelector("#bottomTabs");
const menuList = document.querySelector("#menuList");
const dishPreview = document.querySelector("#dishPreview");
const imageFrame = document.querySelector("#imageFrame");
const dishImage = document.querySelector("#dishImage");
const dishCategory = document.querySelector("#dishCategory");
const dishTitle = document.querySelector("#dishTitle");
const dishPrice = document.querySelector("#dishPrice");
const dishDescription = document.querySelector("#dishDescription");
const dishNote = document.querySelector("#dishNote");
const dishStatus = document.querySelector("#dishStatus");
const imageLightbox = document.querySelector("#imageLightbox");
const imageLightboxImg = document.querySelector("#imageLightboxImg");
const imageLightboxClose = document.querySelector("#imageLightboxClose");

let activeSectionId = menuSections[0].id;
let lastFocusedElement = null;
let lastTapAt = 0;
let imageDragState = null;
let activeDragReturn = null;
let previewUpdateToken = 0;

const imagePreloadCache = new Map();

function getActiveSection() {
  return menuSections.find((section) => section.id === activeSectionId) || menuSections[0];
}

function createTab(section, placement) {
  const button = document.createElement("button");
  button.className = placement === "bottom" ? "tab-button category-chip" : "tab-button";
  button.type = "button";
  button.dataset.category = section.id;
  button.setAttribute("aria-controls", "menuList");
  button.setAttribute("aria-pressed", "false");
  button.setAttribute("aria-label", `Ver sección ${section.category}`);

  if (placement === "bottom") {
    const label = document.createElement("span");

    label.className = "category-label";
    label.textContent = section.shortLabel;
    button.append(label);
  } else {
    button.textContent = section.category;
  }

  button.addEventListener("click", () => setActiveSection(section.id));

  return button;
}

function renderTabs() {
  const topFragment = document.createDocumentFragment();
  const bottomFragment = document.createDocumentFragment();

  menuSections.forEach((section) => {
    topFragment.append(createTab(section, "top"));
    bottomFragment.append(createTab(section, "bottom"));
  });

  topTabs.append(topFragment);
  bottomTabs.append(bottomFragment);
}

function createDishButton(item, sectionName) {
  const button = document.createElement("button");
  button.className = "dish";
  button.type = "button";
  button.dataset.dish = item.id;
  button.setAttribute("aria-controls", "dishPreview");
  button.setAttribute("aria-pressed", "false");
  button.setAttribute("aria-label", `${item.title}, ${sectionName}, ${item.price}`);

  const text = document.createElement("span");
  const title = document.createElement("strong");
  const description = document.createElement("small");
  const price = document.createElement("b");

  title.textContent = item.title;
  description.textContent = item.description;
  price.textContent = item.price;

  text.append(title, description);

  if (item.note) {
    const note = document.createElement("em");
    note.className = "dish-note-inline";
    note.textContent = item.note;
    text.append(note);
  }

  button.append(text, price);
  button.addEventListener("click", () => showDish(item, sectionName));

  return button;
}

function renderActiveSection() {
  const section = getActiveSection();
  const sectionBlock = document.createElement("div");
  const heading = document.createElement("div");
  const eyebrow = document.createElement("p");
  const title = document.createElement("h2");
  const count = document.createElement("span");

  menuList.textContent = "";
  sectionBlock.className = "menu-section active-section";
  heading.className = "section-heading";
  eyebrow.className = "section-eyebrow";
  title.id = "activeCategoryTitle";
  count.className = "section-count";

  eyebrow.textContent = "Sección";
  title.textContent = section.category;
  count.textContent = `${section.items.length} productos`;

  heading.append(eyebrow, title, count);
  sectionBlock.append(heading);

  section.items.forEach((item) => {
    sectionBlock.append(createDishButton(item, section.category));
  });

  menuList.append(sectionBlock);
  menuList.setAttribute("aria-labelledby", "activeCategoryTitle");
  showDish(section.items[0], section.category);
}

function updateActiveTabs() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    const isSelected = button.dataset.category === activeSectionId;

    button.classList.toggle("is-active", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

function setActiveSection(sectionId) {
  if (sectionId === activeSectionId) return;

  activeSectionId = sectionId;
  renderActiveSection();
  updateActiveTabs();
}

function preloadImage(src) {
  if (imagePreloadCache.has(src)) {
    return imagePreloadCache.get(src);
  }

  const preload = new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => {
      if (typeof image.decode === "function") {
        image.decode().catch(() => undefined).then(() => resolve(src));
        return;
      }

      resolve(src);
    };

    image.onerror = reject;
    image.src = src;
  });

  imagePreloadCache.set(src, preload);
  preload.catch(() => imagePreloadCache.delete(src));
  return preload;
}

async function showDish(selectedDish, sectionName) {
  const updateToken = ++previewUpdateToken;

  resetImageDrag();
  dishPreview.classList.add("is-changing");

  document.querySelectorAll(".dish").forEach((button) => {
    const isSelected = button.dataset.dish === selectedDish.id;

    button.classList.toggle("is-active", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });

  try {
    await preloadImage(selectedDish.image);
  } catch (error) {
    console.warn("No se pudo cargar la imagen:", selectedDish.image);
  }

  if (updateToken !== previewUpdateToken) return;

  dishImage.src = selectedDish.image;
  dishImage.alt = selectedDish.title;
  dishCategory.textContent = sectionName;
  dishTitle.textContent = selectedDish.title;
  dishPrice.textContent = selectedDish.price;
  dishDescription.textContent = selectedDish.description;
  dishStatus.textContent = `Plato seleccionado: ${selectedDish.title}.`;

  if (selectedDish.note) {
    dishNote.textContent = selectedDish.note;
    dishNote.classList.remove("is-hidden");
  } else {
    dishNote.textContent = "";
    dishNote.classList.add("is-hidden");
  }

  requestAnimationFrame(() => {
    if (updateToken === previewUpdateToken) {
      dishPreview.classList.remove("is-changing");
    }
  });
}

function openImageLightbox() {
  lastFocusedElement = document.activeElement;
  imageLightboxImg.src = dishImage.currentSrc || dishImage.src;
  imageLightboxImg.alt = dishImage.alt;
  imageLightbox.classList.add("is-open");
  imageLightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
  imageLightboxClose.focus({ preventScroll: true });
}

function closeImageLightbox() {
  imageLightbox.classList.remove("is-open");
  imageLightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus({ preventScroll: true });
  }
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function resetImageDrag() {
  if (imageDragState?.preview) {
    imageDragState.preview.remove();
  }

  clearActiveDragReturn();
  imageFrame.classList.remove("is-drag-source", "is-liquid-settle");
  imageDragState = null;
}

function clearActiveDragReturn({ settle = false } = {}) {
  const runningReturn = activeDragReturn;

  if (!runningReturn) return false;

  if (runningReturn.animation) {
    runningReturn.animation.cancel();
  }

  if (runningReturn.preview) {
    runningReturn.preview.remove();
  }

  activeDragReturn = null;
  imageFrame.classList.remove("is-drag-source");

  if (settle) {
    runImageFrameSettle();
  }

  return true;
}

function beginImageDrag(event) {
  if (!event.isPrimary || imageLightbox.classList.contains("is-open")) return;

  imageFrame.classList.remove("is-liquid-settle");

  imageDragState = {
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    rect: imageFrame.getBoundingClientRect(),
    preview: null,
    isDragging: false,
    scale: 1
  };

  imageFrame.setPointerCapture(event.pointerId);
}

function updateImageDrag(event) {
  if (!imageDragState || imageDragState.pointerId !== event.pointerId) return;

  const deltaX = event.clientX - imageDragState.startX;
  const deltaY = event.clientY - imageDragState.startY;
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  if (distance < 3) return;

  event.preventDefault();
  imageDragState.isDragging = true;

  if (!imageDragState.preview) {
    imageDragState.preview = createImageDragPreview(imageDragState.rect);
    imageFrame.classList.add("is-drag-source");
  }

  updateImageDragPreview(imageDragState, deltaX, deltaY, distance);
}

function finishImageDrag(event) {
  if (!imageDragState || imageDragState.pointerId !== event.pointerId) return;

  const wasDragging = imageDragState.isDragging;
  const dragState = imageDragState;

  if (imageFrame.hasPointerCapture(event.pointerId)) {
    imageFrame.releasePointerCapture(event.pointerId);
  }

  imageDragState = null;

  if (wasDragging) {
    lastTapAt = 0;
    animateImageDragBack(dragState);
    return;
  }

  if (event.pointerType === "touch") {
    const now = Date.now();

    if (now - lastTapAt < 320) {
      event.preventDefault();
      lastTapAt = 0;
      openImageLightbox();
    } else {
      lastTapAt = now;
    }
  }
}

function cancelImageDrag(event) {
  if (!imageDragState || imageDragState.pointerId !== event.pointerId) return;
  resetImageDrag();
}

function createImageDragPreview(rect) {
  const preview = document.createElement("img");

  preview.className = "image-drag-preview";
  preview.src = dishImage.currentSrc || dishImage.src;
  preview.alt = dishImage.alt;
  preview.style.width = `${rect.width}px`;
  preview.style.height = `${rect.height}px`;
  preview.style.left = `${rect.left}px`;
  preview.style.top = `${rect.top}px`;

  document.body.append(preview);
  return preview;
}

function updateImageDragPreview(state, deltaX, deltaY, distance) {
  const rect = state.rect;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const threshold = viewportHeight * 0.55;
  const progress = Math.min(distance / threshold, 1);
  const eased = progress * progress * (3 - 2 * progress);
  const finalRect = getImageDragFinalRect(rect, viewportWidth, viewportHeight);
  const currentLeft = rect.left + (finalRect.left - rect.left) * eased;
  const currentTop = rect.top + (finalRect.top - rect.top) * eased;
  const currentWidth = rect.width + (finalRect.width - rect.width) * eased;
  const currentHeight = rect.height + (finalRect.height - rect.height) * eased;

  state.left = currentLeft;
  state.top = currentTop;
  state.width = currentWidth;
  state.height = currentHeight;
  state.progress = progress;
  state.preview.style.left = `${currentLeft}px`;
  state.preview.style.top = `${currentTop}px`;
  state.preview.style.width = `${currentWidth}px`;
  state.preview.style.height = `${currentHeight}px`;
}

function getImageDragFinalRect(rect, viewportWidth, viewportHeight) {
  const maxWidth = viewportWidth * 0.9;
  const maxHeight = viewportHeight * (viewportWidth <= 820 ? 0.72 : 0.76);
  const ratio = rect.height / rect.width;
  let width = Math.min(maxWidth, rect.width * (viewportWidth <= 820 ? 4.1 : 2.35));
  let height = width * ratio;

  if (height > maxHeight) {
    height = maxHeight;
    width = height / ratio;
  }

  const left = (viewportWidth - width) / 2;
  const top = clamp((viewportHeight - height) / 2, 20, Math.max(20, viewportHeight - height - 20));

  return { left, top, width, height };
}

function animateImageDragBack(state) {
  const preview = state.preview;
  const rect = state.rect;

  if (!preview) {
    imageFrame.classList.remove("is-drag-source");
    return;
  }

  const fromLeft = state.left ?? rect.left;
  const fromTop = state.top ?? rect.top;
  const fromWidth = state.width ?? rect.width;
  const fromHeight = state.height ?? rect.height;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || typeof preview.animate !== "function") {
    imageFrame.classList.remove("is-drag-source");
    window.setTimeout(() => preview.remove(), 180);
    return;
  }

  imageFrame.classList.remove("is-drag-source");

  const returnDuration = 400;
  const returnAnimation = preview.animate(
    [
      {
        left: `${fromLeft}px`,
        top: `${fromTop}px`,
        width: `${fromWidth}px`,
        height: `${fromHeight}px`,
        transform: "scale(1, 1)",
        opacity: 1,
        filter: "saturate(1)",
        offset: 0
      },
      {
        left: `${rect.left}px`,
        top: `${rect.top}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        transform: "scale(1, 1)",
        opacity: 1,
        filter: "saturate(1)",
        offset: 1
      }
    ],
    {
      duration: returnDuration,
      easing: "cubic-bezier(0.25, 1, 0.5, 1)",
      fill: "forwards"
    }
  );

  activeDragReturn = { animation: returnAnimation, preview };

  returnAnimation.onfinish = () => {
    if (activeDragReturn?.preview !== preview) return;

    activeDragReturn = null;
    preview.remove();
    runImageFrameSettle();
  };

  returnAnimation.oncancel = () => {
    if (activeDragReturn?.preview === preview) {
      activeDragReturn = null;
    }
  };
}

function runImageFrameSettle() {
  imageFrame.classList.remove("is-liquid-settle");
  void imageFrame.offsetWidth;
  imageFrame.classList.add("is-liquid-settle");
}

imageFrame.addEventListener("animationend", (event) => {
  if (event.animationName === "imageLiquidSettle") {
    imageFrame.classList.remove("is-liquid-settle");
  }
});

window.addEventListener(
  "scroll",
  () => {
    clearActiveDragReturn({ settle: true });
  },
  { passive: true }
);

renderTabs();
renderActiveSection();
updateActiveTabs();

imageFrame.addEventListener("pointerdown", beginImageDrag);
imageFrame.addEventListener("pointermove", updateImageDrag);
imageFrame.addEventListener("pointerup", finishImageDrag);
imageFrame.addEventListener("pointercancel", cancelImageDrag);

imageFrame.addEventListener("dblclick", (event) => {
  event.preventDefault();
  openImageLightbox();
});

imageFrame.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openImageLightbox();
  }
});

imageLightboxClose.addEventListener("click", closeImageLightbox);

imageLightbox.addEventListener("click", (event) => {
  if (event.target === imageLightbox) {
    closeImageLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && imageLightbox.classList.contains("is-open")) {
    closeImageLightbox();
  }
});
