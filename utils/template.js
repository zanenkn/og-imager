const templateHTML = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <style>
        * {
          box-sizing: border-box;
        }
        
        :root {
          font-family: Helvetica, sans-serif;
          color: white;
        }
        
        .upper {
          background-color: #C90C61;
          width: 1200px;
          height: 420px;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          padding: 73px;
        }
        
        .lower {
          background-color: #d8d8d8;
          width: 1200px;
          height: 210px;
          display: flex;
          justify-content: flex-end;
        }
        
        .wrapper {
          position: relative;
          width: 1200px;
          height: 630px;
        }

        img {
          width: 537px;
          height: 537px;
          border-radius: 100%;
          position: absolute;
          left: 64px;
          top: 46px;
        }

        h1 {
          margin: 0;
          font-family: 'Helvetica';
          font-style: normal;
          font-weight: 700;
          font-size: 60px;
          line-height: 69px;
          word-wrap: break-word;
        }

        p {
          margin: 0;
          font-family: 'Helvetica';
          font-style: normal;
          font-weight: 400;
          font-size: 40px;
          line-height: 46px;
        }

        .text-wrapper {
          width: 445px;
        }

        .flex {
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 518px;
          margin-bottom: 40px;
        }

        h2 {
          font-size: 78px;
          color: #C90C61;
          margin-left: 18px;
        }
      </style>
    </head>
    <body id="body">
      <div class="wrapper">
        <img src={{avatar}} />
        <div class="upper">
          <div class="text-wrapper">
            <h1>{{name}}<h1>
            <p>{{location}}</p>
          </div>
        </div>
        <div class="lower">
          <div class="flex">
            <svg xmlns='http://www.w3.org/2000/svg' width=115 viewBox='0 0 300 300'>
              <path
                fill='#C90B61'
                d='M150,300L150,300C67.16,300,0,232.84,0,150l0,0C0,67.16,67.16,0,150,0h0c82.84,0,150,67.16,150,150v0
            C300,232.84,232.84,300,150,300z'
              />
              <path
                fill='#FFFFFF'
                d='M104.91,100.15l-35.49,28.06c-1.41,1.12-3.5,0.11-3.5-1.69V84.71c0-3.55,3.51-6.03,6.84-4.84l31.82,16.68
              C105.95,97.27,106.13,99.18,104.91,100.15z'
              />
              <path
                fill='#FFFFFF'
                d='M234.08,84.71v41.85c0,1.8-2.08,2.81-3.5,1.69l-35.52-28.07c-1.23-0.97-1.05-2.88,0.33-3.6l31.82-16.71
              C230.57,78.68,234.08,81.16,234.08,84.71z'
              />
              <path
                fill='#FFFFFF'
                d='M234.07,162.74v50.98c0,3.7-3,6.71-6.7,6.71h-35.23v-40c0-1.84-1.49-3.33-3.33-3.33h-35.6
                c-1.84,0-3.33,1.49-3.33,3.33v40H72.62c-3.7,0-6.7-3-6.7-6.71v-50.98c0-2.02,0.04-4.26,2.53-6.76l77.38-61.15
                c1.21-0.99,2.65-1.45,4.15-1.45c1.45,0,2.89,0.46,4.1,1.45l77.38,61.15C234.05,158.56,234.07,160.72,234.07,162.74z'
              />
            </svg>
            <h2>KattBNB<h2>
          </div>
        </div>
      </div>
    </body>
  </html>
`;


module.exports = { templateHTML };