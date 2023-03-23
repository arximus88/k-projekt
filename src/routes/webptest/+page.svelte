<svelte:head>
	<title>WEBP</title>
	<meta name="description" content="WebP Test" />
</svelte:head>


  <h2>WebP Img</h2>
  <img src="/images/projects-bg/vhs.webp" alt="VHS project background" />
  
  <h2>WebP Picture</h2>
<picture>
  <source srcset="/images/projects-bg/vhs.webp" type="image/webp" />
  <img src="/images/projects-bg/vhs.jpg" alt="VHS project background" />
</picture>

<h2>WebP Picture double source</h2>
<picture>
	<source srcset="/images/projects-bg/vhs.webp" type="image/webp" />
	<source srcset="/images/projects-bg/vhs.jpg" type="image/jpeg" />
	<img src="/images/projects-bg/vhs.jpg" alt="VHS project background" />
  </picture>