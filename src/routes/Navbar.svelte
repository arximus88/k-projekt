<script>
	import { page } from '$app/stores';
	import Icon from "$lib/components/Icons.svelte";

</script>

<header>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a class="nav-link" href="/"><Icon color="var(--tertiary-basic)" name="user-edit" />Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}>
				<a class="nav-link" href="/projects"><Icon color="var(--tertiary-basic)" name="stars" />Projects</a>
			</li>
			<li aria-current={$page.url.pathname === '/cats' ? 'page' : undefined}>
				<a class="nav-link" href="/cats"><Icon color="var(--tertiary-basic)" name="presentation" />Cats</a>
			</li>
			<li aria-current={$page.url.pathname === '/misc' ? 'page' : undefined}>
				<a class="nav-link" href="/misc"><Icon color="var(--tertiary-basic)" name="code-snippet" />Misc</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
	}

	nav {
		display: flex;
		justify-content: center;
		border-radius: 12px;
		background: var(--slight-basic);
		backdrop-filter: blur(6px);
	}

	ul {
		position: relative;
		padding: 12px 24px;
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
	}

	li {
		position: relative;
		height: 100%;
	}

	/* li[aria-current='page']::before {
	} */

	.nav-link {
		color: var(--tertiary-basic);
		text-decoration: none;
		display: flex;
		gap: 12px;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		/* color: var(--tretiary-basic); */
		font-weight: 700;
		font-size: 0.8rem;
		/* text-transform: uppercase; */
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.1s linear;
  }


  .nav-link:hover {
    color: var(--primary-basic); /* Replace with the desired hover color */
  }

  .nav-link svg:hover {
    fill: currentColor; /* Use the color of the parent element (the link) */
  }
</style>
