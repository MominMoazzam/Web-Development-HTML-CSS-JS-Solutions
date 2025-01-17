<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modal Popup</title>
    <style>
      body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  height: 100vh; /* Force the body to take full viewport height */
  display: flex;
  align-items: center;
  justify-content: center;
}

      /* Trigger Button */
      button {
          padding: 10px 20px;
          border: none;
          background-color: #3498db;
          color: #fff;
          font-size: 18px;
          cursor: pointer;
          transition: background-color 0.2s;
      }

      button:hover {
          background-color: #2980b9;
      }
  

      /* The Modal (background) */
      .modal {
          display: none;
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgba(0, 0, 0, 0.7);
      }

      /* Modal Content */
      .modal-content {
          position: relative;
          background-color: #ffffff;
          margin: 10% auto;
          padding: 20px;
          width: 50%;
          border-radius: 8px;
          box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.3);
      }

      /* The Close Button */
      .close {
          color: #aaaaaa;
          float: right;
          font-size: 28px;
          font-weight: bold;
          cursor: pointer;
          transition: color 0.2s;
      }

      .close:hover,
      .close:focus {
          color: #ff5b5b;
      }

      /* Modal Text */
      p {
          font-size: 18px;
      }
    </style>
</head>

<body>
    <!-- Trigger button -->
    <button id="openModalBtn">Open Modal</button>

    <!-- The Modal -->
    <div id="myModal" class="modal">
        <div class="modal-content">
            <span id="closeModalBtn" class="close">&times;</span>
            <p>Welcome to this beautiful modal! It's designed to catch your attention.</p>
        </div>
    </div>

    <script>
    let btn = document.querySelector('#openModalBtn');
     let modal = document.querySelector('.modal');
     let closeModal = document.querySelector('.close');
    btn.addEventListener('click', function () {
      modal.style.display = 'block';
    });
    closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
    })
    </script>
</body>

</html>
