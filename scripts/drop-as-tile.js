Hooks.once("ready", () => {
  if (!game.user.isGM) return;

  canvas.stage.on("drop", async (event) => {
    event.preventDefault();
    const dt = event.dataTransfer;
    const image = dt?.getData("text/plain");

    if (!image || !image.endsWith(".png") && !image.endsWith(".webp") && !image.endsWith(".jpg")) return;

    const dropPosition = event.data.getLocalPosition(canvas.tokens);

    await TileDocument.create({
      img: image,
      x: dropPosition.x,
      y: dropPosition.y,
      width: 256,
      height: 256,
      z: 100
    });
  });
});
