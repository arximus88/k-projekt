<script>
	import { page } from '$app/stores';
	import Icon from '$lib/components/Icons.svelte';
</script>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a class="nav-link" href="/"> <Icon name="user-edit" size={16} />Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}>
				<a class="nav-link" href="/projects"><Icon name="stars" size={16} />Projects</a>
			</li>
			<li aria-current={$page.url.pathname === '/cats' ? 'page' : undefined}>
				<a class="nav-link" href="/cats"><Icon name="presentation" size={16} />Cats</a>
			</li>
			<li aria-current={$page.url.pathname === '/misc' ? 'page' : undefined}>
				<a class="nav-link" href="/misc"><Icon name="code-snippet" size={16} />Misc</a>
			</li>
		</ul>
	</nav>

<style>

	nav {
		display: flex;
		justify-content: center;
		border-radius: 12px;
		background: var(--slight-basic);
		backdrop-filter: blur(6px);
		width: fit-content;
		align-self: center;
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
		gap: 8px;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		font-weight: 700;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		text-decoration: none;
		transition: color 0.1s linear;
	}

	.nav-link:hover {
		color: var(--primary-basic);
	}

	@media (max-width: 768px) {
		
	}

	/* .nav-icon {
  width: 24px;
  height: 24px;
} */
</style>
