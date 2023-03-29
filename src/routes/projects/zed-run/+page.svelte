<script>
	import { onMount } from 'svelte';
	import PersonalQuote from '$lib/components/PersonalQuote.svelte';
	import ProjectDetails from '../../../lib/components/ProjectDetails.svelte';
	import { projects } from '$lib/projectsData.js';

	import { page } from '$app/stores';
	let parts = $page.url.pathname.split('/');
	let projectFolder = parts[parts.length - 1].toString();
	let project = projects.find((p) => p.folder === String(projectFolder));

	async function loadScript(src) {
		return new Promise((resolve, reject) => {
			const script = document.createElement('script');
			script.src = src;
			script.onload = () => resolve(script);
			script.onerror = (error) => reject(error);
			document.head.appendChild(script);
		});
	}

	async function loadStylesheet(href) {
		return new Promise((resolve, reject) => {
			const link = document.createElement('link');
			link.href = href;
			link.rel = 'stylesheet';
			link.onload = () => resolve(link);
			link.onerror = (error) => reject(error);
			document.head.appendChild(link);
		});
	}

	async function loadMyPageScripts() {
		try {
			await loadScript('https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js');
			await loadStylesheet('/src/lib/fotorama.css');
			await loadScript('/src/lib/fotorama.js');
			// All scripts and styles are loaded; you can now execute code that depends on them.
		} catch (error) {
			console.error('Error loading script or stylesheet:', error);
		}
	}

	onMount(async () => {
		await loadMyPageScripts();
		// You can now initialize the fotorama slider or execute any code that depends on the loaded scripts.
	});
</script>

<svelte:head>
	<title>{project.title} - Project</title>
	<meta name="description" content="ZED RUN - Projects page" />
</svelte:head>

<!-- Main content -->
<div class="main-content">
	<div>
		<h1 class="project-title">{project.title}</h1>
		<p class="project-description caption">
			{project.description}
		</p>
		<div class="slider">
			<!-- Add images to <div class="fotorama"></div> -->
			<div
				class="fotorama"
				data-width="100%"
				data-maxwidth="100%"
				data-ratio="16/9"
				data-navposition="bottom"
				data-nav="thumbs"
				data-loop="true"
				data-allowfullscreen="true"
			>
				{#each Array.from({ length: 13 }, (_, i) => i + 1) as number}
					<img
						src={`/images/projects/${project.folder}/project-zed-run-${number
							.toString()
							.padStart(2, '0')}.jpg`}
						alt={`photo${number}`}
					/>
				{/each}
			</div>
		</div>
		<p class="project-highlights">Key features of ZED RUN include:</p>
		<ul class="project-features">
			<li>Digital racehorse ownership and breeding</li>
			<li>Dynamic and engaging horse racing experience</li>
			<li>Community-driven events and competitions</li>
			<li>Transparent and secure blockchain technology</li>
			<li>Open market for trading racehorses and assets</li>
		</ul>
		<p>
            Work on ZED RUN started in November 2019. As a Framer.js prototyper I built an interactive horse
			racing prototype prior to the initial launch. After this, I began working on the website UI to
			prepare it for launch. Alongside the two founders, there were only backend and frontend
			engineers. We released the first iteration of zed.run and began selling the first batch of Z1
			Nakamotos digital racehorses.
		</p>
		<PersonalQuote
			bg="#FFAC8A"
			width="long"
            avatar="1"
			text="I was thrilled to be a part of ZED RUN from the beginning and see how it grew over time. The experience was invaluable and taught me a lot about designing for emerging markets."
		/>
		<p>
			Subsequently, we introduced users to the first utility abilities, which included Breeding and
			Racing functionality, effectively starting the ZED RUN experience. While the engineering team
			focused on scaling and bug fixes, I investigated quality of life updates by reaching out to
			our customers in Discord and surveying them. Based on my findings, I designed and added a
			Racehorse Detailed Page, Racing filtering, a sidebar wallet to make related transactions more
			visible, and eased transferring racehorses between stables.
		</p>
		<p>
			As Product Managers and UX Researchers joined the team, we began working more streamlined and
			conducting A/B testing for new features. I worked solo on the design for almost 2 years while
			the engineering team grew, prompting the need to hire another designer. I interviewed nearly
			10 candidates and hired one, providing mentorship throughout her tenure.
		</p>
		<p>
			Later, it was decided to add a new product team, and I conducted another round of interviews
			to look for a Senior Product Designer. Before I shifted to VHS's next project, Human Park, I
			also participated in interviewing the Head of Design for ZED RUN and helped her transition
			into the role by sharing knowledge about the project.
		</p>
		<PersonalQuote
			bg="#FFAC8A"
			width="long"
			text="I am passionate about mentorship and believe that investing time in new designers is crucial to building a stronger design community."
		/>
		<p>
			Throughout my work on ZED RUN, I had the opportunity to work closely with the founders,
			engineers, and other stakeholders to ensure that the product was meeting the needs of the
			users and the business. I was responsible for creating and maintaining the design system,
			ensuring consistency across all touchpoints, and contributing to the development of new
			features and functionality.
		</p>
		<p>
			One of the most significant challenges I faced during my time on ZED RUN was ensuring that the
			user experience remained engaging and enjoyable as the platform scaled. This involved a deep
			understanding of the user's needs and desires, as well as a willingness to experiment and
			iterate on new designs and features.
		</p>
		<p>
			Overall, I am proud of the work I accomplished on ZED RUN and am excited to see the platform
			continue to grow and evolve. I believe that my contributions to the project have helped to
			create a compelling and engaging user experience that will continue to attract new users and
			drive the success of the platform.
		</p>
	</div>
	<ProjectDetails
		clientName={project.clientName}
		clientUrl={project.clientUrl}
		year={project.year}
		platform={project.platform}
		tags={project.tags}
		projectUrl={project.projectUrl}
		platforms={project.platforms}
	/>
</div>

<style>
	.main-content {
		display: grid;
		grid-template-columns: 1fr 320px;
		grid-gap: 2rem;
		margin: 2rem 0;
		padding-bottom: 128px;
	}
	.slider {
		background-color: transparent;
		max-width: 640px;
	}

	@media (max-width: 1024px) {
		.main-content {
			display: flex;
			flex-direction: column;
			grid-template-columns: 1fr;
			min-width: 288px;
		}
		.slider {
			max-width: 100%;
			min-width: 288px;
		}
	}
</style>
