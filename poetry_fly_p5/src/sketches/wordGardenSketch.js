function flattenPoem(lines) {
  return lines.flatMap((line) => {
    if (!Array.isArray(line) || line.length === 0) {
      return [{ text: '', spacer: true }];
    }
    return line.map((word) => ({ text: word, spacer: false }));
  });
}

export function createWordGardenSketch({ getMode, getSeed, poemCollection }) {
  const poem = poemCollection.poems[0];
  const tokens = flattenPoem(poem.lines);
  const points = [];
  let seedCache = null;

  return (p) => {
    p.setup = () => {
      const canvas = p.createCanvas(p.windowWidth, p.windowHeight - 88);
      canvas.style('display', 'block');
      p.textFont('Georgia');
      p.textSize(30);
      p.noStroke();
      initializePoints();
    };

    p.draw = () => {
      if (seedCache !== getSeed()) {
        initializePoints();
      }

      p.background(248, 251, 255);
      p.fill(7, 33, 76);
      drawTitle();

      const mode = getMode();
      for (const point of points) {
        if (point.spacer) {
          continue;
        }

        if (mode === 'drift') {
          const wobbleX = p.sin(p.frameCount * 0.02 + point.phase) * 6;
          const wobbleY = p.cos(p.frameCount * 0.016 + point.phase) * 4;
          p.text(point.text, point.x + wobbleX, point.y + wobbleY);
        } else {
          p.text(point.text, point.x, point.y);
        }
      }

      if (mode !== 'drift') {
        p.fill(7, 33, 76, 160);
        p.textSize(20);
        p.text('Mode placeholder: ' + mode, 46, p.height - 40);
        p.textSize(30);
      }
    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight - 88);
      initializePoints();
    };

    function initializePoints() {
      seedCache = getSeed();
      p.randomSeed(seedCache);
      points.length = 0;

      const marginX = 44;
      const startY = 116;
      const lineHeight = 44;
      let x = marginX;
      let y = startY;

      tokens.forEach((token) => {
        if (token.spacer) {
          x = marginX;
          y += lineHeight * 0.75;
          return;
        }

        const text = token.text + ' ';
        const width = p.textWidth(text);
        if (x + width > p.width - marginX) {
          x = marginX;
          y += lineHeight;
        }

        points.push({
          text,
          x,
          y,
          phase: p.random(0, p.TWO_PI),
          spacer: false,
        });
        x += width;
      });
    }

    function drawTitle() {
      p.fill(7, 33, 76, 160);
      p.textSize(14);
      p.text(poem.title, 46, 48);
      p.textSize(30);
      p.fill(7, 33, 76);
    }
  };
}
