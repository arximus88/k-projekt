<script>
import Tag from '$lib/components/Tag.svelte';

</script>

<div class="project">
    <div class="card"><h4 class="project-title">ZED Run</h4>
        <p class="project-description">
            Cool game on Blockchain, race your racehorses against competitors forever
            and win great prizes.
          </p></div>
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
    gap: 8px;
    background: #1e1e1e;
    border-radius: 12px;
    align-self: stretch;
  }

.project-description{
    display: none;
}
.card:hover .project-description {
    display: block;
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