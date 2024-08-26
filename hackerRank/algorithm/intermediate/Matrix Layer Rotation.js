// 문제 링크: https://www.hackerrank.com/challenges/matrix-rotation-algo/problem?isFullScreen=true
// 히든 테케 몇개에서 타임아웃 뜸
function getNextCoordinate(cx, cy, index, rows, columns, r) {
  let nx = cx,
    ny = cy;
  for (let i = 0; i < r; i++) {
    if (nx === index) {
      if (ny === index) {
        nx++;
      } else {
        ny--;
      }
    } else if (ny === index) {
      if (nx === rows - index - 1) {
        ny++;
      } else {
        nx++;
      }
    } else if (nx === rows - index - 1) {
      if (ny === columns - index - 1) {
        nx--;
      } else {
        ny++;
      }
    } else if (ny === columns - index - 1) {
      if (nx === index) {
        ny--;
      } else {
        nx--;
      }
    }
  }
  return [nx, ny];
}

function matrixRotation(matrix, r) {
  // Write your code here
  const rows = matrix.length;
  const columns = matrix[0].length;
  const rotatedMatrix = Array.from({ length: rows }, () =>
    Array(columns).fill(0)
  );
  let index = 0;

  while (index < columns / 2) {
    for (let j = index; j < columns - index; j++) {
      const coordinate1 = getNextCoordinate(index, j, index, rows, columns, r);
      const coordinate2 = getNextCoordinate(
        rows - index - 1,
        j,
        index,
        rows,
        columns,
        r
      );
      rotatedMatrix[coordinate1[0]][coordinate1[1]] = matrix[index][j];
      rotatedMatrix[coordinate2[0]][coordinate2[1]] =
        matrix[rows - index - 1][j];
    }
    for (let i = index + 1; i < rows - index - 1; i++) {
      const coordinate1 = getNextCoordinate(i, index, index, rows, columns, r);
      const coordinate2 = getNextCoordinate(
        i,
        columns - index - 1,
        index,
        rows,
        columns,
        r
      );
      rotatedMatrix[coordinate1[0]][coordinate1[1]] = matrix[i][index];
      rotatedMatrix[coordinate2[0]][coordinate2[1]] =
        matrix[i][columns - index - 1];
    }
    index++;
  }

  for (let i = 0; i < rows; i++) {
    const result = [];
    for (let j = 0; j < columns; j++) {
      result.push(rotatedMatrix[i][j]);
    }
    console.log(result.join(' '));
  }
}

// GPT 답안
// 1. 레이어 쪼개기
// 2. 행렬 상태에서 돌리는게 아니라 배열에 넣어서 조작하면 됨
// 3. r번 다 돌릴 필요 없다!! r % 현재 레이어 원소 수 만 돌리면 됨 ㅠㅠ
function matrixRotation(matrix, r) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  const rotatedMatrix = Array.from({ length: rows }, () =>
    Array(columns).fill(0)
  );

  let numLayers = Math.min(rows, columns) / 2;

  for (let layer = 0; layer < numLayers; layer++) {
    const elements = [];

    // Extract the layer's elements
    for (let i = layer; i < columns - layer; i++) {
      elements.push(matrix[layer][i]);
    }
    for (let i = layer + 1; i < rows - layer; i++) {
      elements.push(matrix[i][columns - layer - 1]);
    }
    for (let i = columns - layer - 2; i >= layer; i--) {
      elements.push(matrix[rows - layer - 1][i]);
    }
    for (let i = rows - layer - 2; i > layer; i--) {
      elements.push(matrix[i][layer]);
    }

    // Calculate the effective rotations needed
    const effectiveRotations = r % elements.length;
    const rotatedElements = elements
      .slice(effectiveRotations)
      .concat(elements.slice(0, effectiveRotations));

    let index = 0;

    // Place rotated elements back into the rotatedMatrix
    for (let i = layer; i < columns - layer; i++) {
      rotatedMatrix[layer][i] = rotatedElements[index++];
    }
    for (let i = layer + 1; i < rows - layer; i++) {
      rotatedMatrix[i][columns - layer - 1] = rotatedElements[index++];
    }
    for (let i = columns - layer - 2; i >= layer; i--) {
      rotatedMatrix[rows - layer - 1][i] = rotatedElements[index++];
    }
    for (let i = rows - layer - 2; i > layer; i--) {
      rotatedMatrix[i][layer] = rotatedElements[index++];
    }
  }

  // Print the rotated matrix
  for (let i = 0; i < rows; i++) {
    console.log(rotatedMatrix[i].join(' '));
  }
}
