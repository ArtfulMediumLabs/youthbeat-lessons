import { parseHTML } from './utils.js';

export const constructModal = (message) => {
  const styles = `
    <style>
    .modal {
      background: rgba(0,0,0,0.8);
      position: fixed;
      z-index: 1;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      left: 0;
      backdrop-filter: blur(6px);
    }

    .modal__content {
      background: #fefefe;
      padding: 40px;
      border-radius: 4px;
      font-family: Verdana, sans-serif;
    }
    </style>
  `;

  return parseHTML(
    `
      <div class="modal">
        <div class="modal__content">
          ${message}
        </div>
      </div>
      ${styles}
      
    `,
  );
};
