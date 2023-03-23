<script lang="ts">
  import Tag from '$lib/components/Tag.svelte';

  export let title = '';
  export let description = '';
  export let clientName = '';
  export let tags = ['s','s','2'];
  export let folder = '';
</script>

<div class="project">
  <div class="card slight-transition">
    <a href="{`/projects/${folder}`}">
    <picture class="card-image">
      <source class="contain" srcset={`/images/projects-bg/${folder}.webp`} type="image/webp" />
      <img class="contain" src={`/images/projects-bg/${folder}.jpg`} alt="{title}" />
    </picture>
    <h4 class="project-title text-primary fast-transition">{title}</h4>
    <div class="project-description small-text text-secondary slight-transition">
      {description}
    </div>
  </a>
  </div>
  <div class="subline">
    <div class="client">
      <div class="avatar"></div>
      <p class="client-title caption">{clientName}</p>
    </div>
    <div class="tags">
      {#each tags as tag}
        <Tag tag={tag} />
      {/each}
    </div>
  </div>
</div>

<style>
  .avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #ccc;
}

  .project {
      display: flex;
      flex-direction: column;
      gap: 12px;
  }

  .card {
  position: relative;
  display: flex;
  height: 200px;
  max-width: 344px;
  padding: 12px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  align-self: stretch;
  gap: 8px;
  background: var(--card-bg);
  border-radius: 12px;
  overflow: hidden; /* Add this line to hide image overflow */
}

.card:hover {
  box-shadow: 0px 0px 1px var(--card-bg), 0px 0px 12px var(--tertiary-basic);
}
.card a:link {
  text-decoration: none;
}
.card-image {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.card-image::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(180deg, rgba(57, 60, 63, 0.16) 0%, rgba(57, 60, 63, 0.64) 100%);
}

.card-image img {
  width: 100%;
  height: 100%; /* Add this line to set the height to 100% */
  object-fit: cover;
}
.project-description{
    transform: translateY(10px);
    opacity: 0;
}
.project-title {
    transform: translateY(3rem);
}

.card:hover .project-description {
	transform: translateY(0px);
	opacity: 1;
}

.card:hover .project-title {
	transform: translateY(0px);
}

.client {
    display: flex;
    gap: 8px;
    flex-shrink: 2;
}
.subline {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.tags {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
  }

</style>