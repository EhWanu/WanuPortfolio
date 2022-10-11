const boxContainer = document.querySelector(
	".boxContainer"
);

// for loop creating 365 boxes
for (let i = 0; i < 365; i++) {
	const el = document.createElement("div");
	el.classList = "box";
	boxContainer.appendChild(el);
}
