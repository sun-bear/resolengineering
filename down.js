const CSS = `body { color: black; }`;
const HTML = `
<!DOCTYPE html>
<html>
<title>Template.Maintenance</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<style>
body,h1 {font-family: "Raleway", sans-serif}
body, html {height: 100%}
.bgimg {
  background-image: url('https://raw.githubusercontent.com/sun-bear/resolengineering/main/files/images/skyline.mountain-bridge.unknown.jpg');
  min-height: 100%;
  background-position: center;
  background-size: cover;
}
</style>
<body>

<div class="bgimg w3-display-container w3-animate-opacity w3-text-white">
  <div class="w3-display-topleft w3-padding-large w3-xlarge">
    Logo
  </div>
  <div class="w3-display-middle">
    <h1 class="w3-jumbo w3-animate-top">TEMPORARY MAINTENANCE</h1>
    <hr class="w3-border-grey" style="margin:auto;width:40%">
    <p class="w3-large w3-center">Site under maintenance. Please check back soon.</p>
  </div>
  <div class="w3-display-bottomleft w3-padding-large">
    Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a>
  </div>
</div>

</body>
</html>

<article> 
  <div class="background">
    <div class="content">
      <h1>We&rsquo;ll be right back!</h1>
        <p>You can use <span style="color: #000000;"><strong><a style="color: #000000;" href="https://cachedview.com/">https://cachedview.com/</a></strong></span> in the mean time.</p>
        <p>&mdash; <B>GilbN</B></p>
    </div>
  </div>
</article>
`;

async function handleRequest(request) {
  // If request is for test.css, serve the raw CSS
  if (/test\.css$/.test(request.url)) {
    return new Response(CSS, {
      headers: {
        'content-type': 'text/css',
      },
    });
  } else {
    // Serve raw HTML using HTTP/2 for the CSS file
      new Response(HTML, {
      headers: {
        'Content-Type': 'text/html',
        'Pragma': 'no-cache',
        'Link': '<https://www.w3schools.com/w3css/4/w3.css>; rel=preload; as=style',
      },
    });
  }
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});
