<script lang="ts">
import Tag from '$lib/components/Tag.svelte';

</script>

<div class="project">
    <div class="card slight-transition">
        <h4 class="project-title fast-transition">ZED Run</h4>
        <div class="project-description small-text text-secondary slight-transition">
            Cool game on Blockchain, race your racehorses against competitors forever
            and win great prizes.
        </div>
    </div>
    <div class="subline">
      <div class="client">
  <div class="avatar">
  </div>
        <p class="client-title caption">Human Studio</p>
      </div>
      <div class="tags">
        <Tag tag='1' />
        <Tag tag='2' />
        <Tag tag='3' />
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