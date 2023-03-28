<script>
	import Icon from '$lib/components/Icons.svelte';
    import PersonalQuote from '$lib/components/PersonalQuote.svelte';
    import ProjectDetails from '../../../lib/components/ProjectDetails.svelte';
    import { projects } from '$lib/projectsData.js';
    // Fetch the project with id 'zed-run'
    const project = projects.find(p => p.id === 'a6102d9c-612f-417e-b206-c43148964054');
</script>

<svelte:head>
	<title>ZED RUN - Project</title>
	<meta name="description" content="ZED RUN - Projects page" />
</svelte:head>

<!-- Main content -->
<div class="main-content">
    <div>
    <h1 class="project-title">ZED RUN</h1>
    <p class="project-description">
        {project.description}
    </p>
    <div class="slider">

    </div>
    <p class="project-highlights">
        Key features of ZED RUN include:
    </p>
    <ul class="project-features">
        <li>Digital racehorse ownership and breeding</li>
        <li>Dynamic and engaging horse racing experience</li>
        <li>Community-driven events and competitions</li>
        <li>Transparent and secure blockchain technology</li>
        <li>Open market for trading racehorses and assets</li>
    </ul>
    <PersonalQuote 
    bg="#FFAC8A" 
    width="long" 
    text="As a player, I can breed, buy, and race your very own racehorses, each with unique attributes and performance capabilities. The game is powered by smart contracts, ensuring fairness and transparency for all players." 
    />
    <p>
        ZED RUN is a groundbreaking horse racing game built on the blockchain. Race your digital racehorses against other competitors, win exciting prizes, and experience the thrill of horse racing like never before. As a player, you can breed, buy, and race your very own racehorses, each with unique attributes and performance capabilities. The game is powered by smart contracts, ensuring fairness and transparency for all players.
    </p>
    </div>
    <ProjectDetails
	clientName={project.clientName}
	year={project.year}
	platform={project.platform}
	tags={project.tags}
	projectUrl={project.projectUrl}
	/>
</div>


<style>
    .main-content {
        display: grid;
        grid-template-columns: 3fr 320px;
        grid-gap: 2rem;
        margin: 2rem 0;
        padding-bottom: 128px;
    }
    @media (max-width: 768px) {
        .main-content {
            grid-template-columns: 1fr;
        }
    }
    .slider {
        height: 400px;
        background-color: #FFAC8A;
    }
</style>