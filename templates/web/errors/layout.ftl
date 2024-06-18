<#macro layout
  pageTitle=""
  errorCode=""
  errorTitle=pageTitle
  errorMessage=""
>
  <!DOCTYPE html>
  <html>
  <head>
    <title>${pageTitle}</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300, 400,700|Inconsolata:400,700" rel="stylesheet">
    <link rel="stylesheet" href="/static-assets/css/bootstrap.css">
    <link rel="stylesheet" href="/static-assets/css/style.css">
    <style>
        .wrap {
            height: 100vh;
            text-align: center;
            padding-top: 8rem;
            padding-bottom: 8rem;
        }
        .title {
            font-size: 60px;
        }
        @media (max-width: 992px) {
            .title {
                font-size: 40px;
            }
        }
    </style>
  </head>
  <body>
  <div class="wrap">
    <p>${errorCode}</p>
    <h1 class="title">${errorTitle}</h1>
    <p>${errorMessage}</p>
    <a href="/" class="btn btn-primary rounded">Go back home</a>
  </div>
  </body>
  </html>
</#macro>
