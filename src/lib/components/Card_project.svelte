<script>
import Tag from '$lib/components/Tag.svelte';
import { onMount } from 'svelte';

let titleHeight;
let descHeight;

const getTitleHeight = () => {
  const title = document.querySelector('.project-title');
  if (title) {
    titleHeight = title.getBoundingClientRect().height;
  }
};

const getDescHeight = () => {
  const desc = document.querySelector('.project-description');
  if (desc) {
    descHeight = desc.getBoundingClientRect().height;
  }
};

onMount(() => {
  getTitleHeight();
  getDescHeight();
});

console.log(descHeight)
</script>

<div class="project">
    <div class="card average-transition">
        <h4 class="project-title fast-transition">ZED Run</h4>
        <div class="project-description average-transition">
            Cool game on Blockchain, race your racehorses against competitors forever
            and win great prizes.
        </div>
    </div>
    <div class="subline">
      <div class="client">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <circle
            cx="12"
            cy="12"
            r="12"
            fill="#434343"
          ></circle>
        </svg>
        <p class="client-title caption">Virtually Human Studio</p>
      </div>
      <div class="tags">
        <Tag tag='1' />
        <Tag tag='2' />
        <Tag tag='3' />
      </div>
    </div>
  </div>
  


<style>
    .project {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    .card {
    display: flex;
    height: 200px;
    max-width: 344px;
    padding: 12px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    align-self: stretch;
    gap: 8px;
    background: #1e1e1e;
    border-radius: 12px;
    transition: all 0.3s ease-out;
  }

.project-description{
    transform: translateY(10px);
    transition: all 0.3s ease-out;
    opacity: 0;
}
.project-title {
    transform: translateY(calc(3rem));
}

.card:hover .project-description {
	transform: translateY(0px);
	opacity: 1;
}

.card:hover .project-title {
	transform: translateY(0px);
	opacity: 1;
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