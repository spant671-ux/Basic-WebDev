// ==================== Project: Keyboard Key Code Checker ====================

/*
Key Concepts:
- Keyboard Events: 'keydown' triggers whenever any key on the keyboard is pressed down.
- Listening on 'window' ensures key presses are detected anywhere on the document.
- Event Object Properties:
  1. e.key     : The value of the key pressed (e.g. "a", "Enter", " ").
  2. e.keyCode : The numeric identification code of the key (legacy standard, e.g. 32 for space).
  3. e.code    : The physical key position on the keyboard layout (e.g. "KeyA", "Space").
*/

// Select the container element where the dynamically generated table will be inserted:
const insert = document.getElementById('insert');

// Listen for keydown events across the entire window:
window.addEventListener('keydown', (e) => {
    // Dynamically generate an HTML table displaying the key details:
    insert.innerHTML = `
    <div class='color'>
    <table>
      <tr>
        <th>Key</th>
        <th>Keycode</th>
        <th>Code</th>
      </tr>
      <tr>
        <td>${e.key === " " ? 'Space' : e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
      </tr>
    </table>
    </div>
    `;
});